const mongoose = require("mongoose");
const studentModel = require("../models/user.js"); // References your mongoose model
const bcrypt = require("bcryptjs");
const XLSX = require("xlsx");
const fs = require("fs");

// 1. Create a single student manually
async function Student(req, res) {
  try {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // Check if user already exists
    const existingUser = await studentModel.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already registered." });
    }

    // Hash the password safely
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const student = new studentModel({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      mobile: mobile ? String(mobile).trim() : "",
      password: hashedPassword,
      role: "student" 
    });

    await student.save();
    return res.status(201).json({ success: true, student });
  } catch (error) {
    console.error("Error in Student controller:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
}

// 2. Fetch all available students
async function getAllStudents(req, res) {
  try {
    // Only fetch users where role is 'student'
    const students = await studentModel.find({ role: "student" }).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, students });
  } catch (error) {
    console.error("Error in getAllStudents controller:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
}

// 3. Complete spreadsheet bulk upload processing (High-Speed & Error-Proof)
const bulkUploadStudents = async (req, res) => {
  let filePath = null;
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded. Please send a valid spreadsheet file.",
      });
    }

    filePath = req.file.path;

    // Read workbook and parse sheets
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    
    // Convert sheet records to JSON objects
    const students = XLSX.utils.sheet_to_json(sheet);

    if (!students || students.length === 0) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      return res.status(400).json({
        success: false,
        message: "The uploaded spreadsheet contains no data rows.",
      });
    }

    const rawFormattedList = [];
    const emailsInSheet = [];

    // Parse records and map case-insensitive keys cleanly
    for (const student of students) {
      if (!student || typeof student !== "object") continue;

      // 🔥 FIXED: Added strict .trim() cleanups to all key lookup targets
      const nameKey = Object.keys(student).find(k => k.toLowerCase().trim() === "name");
      const emailKey = Object.keys(student).find(k => k.toLowerCase().trim() === "email");
      const passwordKey = Object.keys(student).find(k => k.toLowerCase().trim() === "password");
      const mobileKey = Object.keys(student).find(k => k.toLowerCase().trim() === "mobile");

      const nameVal = student[nameKey];
      const emailVal = student[emailKey];
      const passwordVal = student[passwordKey];
      const mobileVal = student[mobileKey];

      // Safe validation skips completely empty or highly corrupted rows
      if (nameVal === undefined || emailVal === undefined || passwordVal === undefined) {
        continue;
      }

      const targetEmail = String(emailVal).trim().toLowerCase();
      if (!targetEmail) continue;

      emailsInSheet.push(targetEmail);

      rawFormattedList.push({
        name: String(nameVal).trim(),
        email: targetEmail,
        plainPassword: String(passwordVal).trim(), // Force internal string casting conversions
        mobile: mobileVal !== undefined && mobileVal !== null ? String(mobileVal).trim() : "",
        role: "student",
      });
    }

    if (rawFormattedList.length === 0) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      return res.status(400).json({
        success: false,
        message: "Failed to parse records. Verify column headers contain: name, email, password.",
      });
    }

    // Deduplicate against the live database collection to prevent unique index constraint errors
    const existingUsers = await studentModel.find({ email: { $in: emailsInSheet } }).select("email");
    const existingEmailsSet = new Set(existingUsers.map(u => u.email.toLowerCase()));

    const filteredNewStudents = rawFormattedList.filter(s => !existingEmailsSet.has(s.email));

    if (filteredNewStudents.length === 0) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      return res.status(400).json({
        success: false,
        message: "All records inside this file are already registered in the system.",
      });
    }

    // High-performance concurrent password hashing execution map loop
    const finalStudentsToInsert = await Promise.all(
      filteredNewStudents.map(async (student) => {
        const hashedPassword = await bcrypt.hash(student.plainPassword, 10);
        return {
          name: student.name,
          email: student.email,
          password: hashedPassword,
          mobile: student.mobile,
          role: student.role
        };
      })
    );

    // Batch insertion execution pipeline
    await studentModel.insertMany(finalStudentsToInsert);

    // Clean up temporary uploads directory file resource references
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return res.status(200).json({
      success: true,
      message: `${finalStudentsToInsert.length} new students uploaded successfully! (${existingEmailsSet.size} duplicates skipped)`,
    });

  } catch (error) {
    console.error("CRITICAL BULK UPLOAD CONTROLLER ERROR:", error);

    // Cleanup assurance fallback hook
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return res.status(500).json({
      success: false,
      message: error.message || "An internal processing exception occurred.",
    });
  }
};

module.exports = {
  Student,
  getAllStudents,
  bulkUploadStudents
};