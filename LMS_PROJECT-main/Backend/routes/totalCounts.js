const express=require('express');
const studentRouter=express.Router();
const allteacherRouter=express.Router();
const {totalStudent,allTeacher}=require('../controllers/authTotalCount');

studentRouter.get('/total-students', totalStudent);
allteacherRouter.get('/total-teachers', allTeacher);

module.exports = {
  studentRouter,
  allteacherRouter
};