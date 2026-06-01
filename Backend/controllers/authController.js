const mongoose=require('mongoose');
const user=require('../models/user.js');

async function signupRoute(req,res){
  try{
  const data=new user(req.body)
  await data.save();
  res.status(201).json({message:"user created"})
  }
  catch(err){
    console.log(err);
    res.status(500).json({message:"error found"});

  }
}
module.exports=signupRoute;