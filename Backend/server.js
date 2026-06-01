
require('dotenv').config();
const express=require('express');
const ConnectDb=require('./config/db.js')
const signup=require('./routes/authRoute.js');



const app=express();
app.use(express.json());
app.use('/signup',signup);


ConnectDb().then(()=>{
app.listen(process.env.PORT,()=>{
  console.log('server connected on port 5000')
  
})
})