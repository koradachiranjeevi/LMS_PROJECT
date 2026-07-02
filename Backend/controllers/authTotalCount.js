const mongoose=require("mongoose");
const studentModel=require("../models/user.js");
const teacherModel=require("../models/teacher.js");

async function totalStudent(req,res){
    try{
        const total=await studentModel.countDocuments();
        return res.status(200).json({success:true,total});
    }catch(error){
        console.error("Error in totalStudent:",error);
        return res.status(500).json({success:false,message:"Server Error"});
    }
}

async function allTeacher(req,res){
    try{
        const total=await teacherModel.countDocuments();
        return res.status(200).json({success:true,total});
    }catch(error){
        console.error("Error in totalTeachers:",error);
        return res.status(500).json({success:false,message:"Server Error"});
    }
}

module.exports = {
    totalStudent,
    allTeacher
};