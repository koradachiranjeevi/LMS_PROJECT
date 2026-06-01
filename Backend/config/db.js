const mongoose=require('mongoose');

async function ConnectDb(){
  try{
  await mongoose.connect(process.env.MONGO_URI);
  console.log('mongodb connected')
  }
  catch(err){
    console.log(err);
  }
}
module.exports=ConnectDb;