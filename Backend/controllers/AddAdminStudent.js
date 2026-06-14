const mongoose = require("mongoose");
const studentModel = require("../models/user.js");
const bcrypt = require("bcryptjs");

async function Student(req, res) {
    try {
        const { name, email, mobile, password } = req.body;

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new student instance with the hashed password
        const student = new studentModel({
            name,
            email,
            mobile,
            password: hashedPassword
        });

        await student.save();
        return res.status(201).json({ success: true, student });
    } catch (error) {
        console.error("Error in Student controller:", error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}
async function getAllStudents(req, res) {
    try {
        const students = await studentModel.find();
        return res.status(200).json({ success: true, students });
    } catch (error) {
        console.error("Error in getAllStudents controller:", error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}
module.exports={
    Student,
    getAllStudents
};
