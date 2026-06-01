const express=require('express');
const router=express.Router();
const signupRoute=require('../controllers/authController.js');


router.post('/',signupRoute);





module.exports=router;                     