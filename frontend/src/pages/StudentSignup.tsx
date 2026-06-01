import { useState } from "react";
import { Link } from "react-router-dom";



function StudentSignup() {
  const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[confirmPassword,setConfirmPassword]=useState('');
async function SignupData(){
  const data=await fetch('http://localhost:5000/signup',{
    method:'post',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,
      email,
      password,
      role:"student"
    })
  })
}
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-96">

        <h1 className="text-3xl font-bold mb-6">
          Student Signup
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
        onChange={(e)=>{
          setName(e.target.value);
        }} />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
           onChange={(e)=>{
          setEmail(e.target.value);
        }}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
          onChange={(e)=>{
          setPassword(e.target.value);
        }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 rounded-lg bg-black/20 border border-white/10"
          onChange={(e)=>{
          setConfirmPassword(e.target.value);
        }}
        />

        <button className="w-full bg-blue-600 py-3 rounded-lg"
        onClick={()=>{
          SignupData();
          alert('signup successfully');
        }}
        >
          Create Account
        </button>

        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/student/login"
            className="text-blue-500"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default StudentSignup;