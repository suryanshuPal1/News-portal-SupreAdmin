import React from 'react';
import Gicon from "../assets/sign/google.png"
import Ficon from  "../assets/sign/Facebook.png"
import Icon from "../assets/sign/icon.png"
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex h-screen w-full">
        {/* Right Side - Signup Form */}
        <div className="w-1/2 flex flex-col justify-center items-center p-10">
          <h1 className="text-3xl font-bold mb-6">Sign Up to your <span className="text-black">Super Admin</span></h1>
  
          {/* Signup Form */}
          <form className="w-3/4">
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Arun"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              />
            </div>
  
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium">Email</label>
              <input
                type="email"
                placeholder="arun14@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              />
            </div>
  
            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-gray-600 font-medium">Phone Number</label>
              <div className="flex border border-gray-300 rounded-lg p-3">
                <span className="mr-2">🇮🇳</span>
                <input
                  type="text"
                  placeholder="(+91) 12345 67890"
                  className="w-full outline-none"
                />
              </div>
            </div>
  
            {/* Password */}
            <div className="mb-4 relative">
              <label className="block text-gray-600 font-medium">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              />
              <span className="absolute right-3 top-11 cursor-pointer text-gray-400">👁️</span>
            </div>
  
            {/* Confirm Password */}
            <div className="mb-6 relative">
              <label className="block text-gray-600 font-medium">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-lg mt-1"
              />
              <span className="absolute right-3 top-11 cursor-pointer text-gray-400">👁️</span>
            </div>
  
            {/* Register Button */}
            <button className="w-full bg-[#1C2059] text-white py-3 rounded-lg font-medium hover:bg-[#161b4d] transition">
              Register
            </button>
          </form>
  
          {/* Login Redirect */}
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link to='/login' className="text-blue-600 hover:underline">Login</Link >
          </p>
  
          {/* Social Signup */}
          <div className="w-3/4 mt-6 space-y-3">
            <button className="flex items-center justify-center w-full bg-white text-black py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <img src={Gicon} alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center w-full bg-white text-black py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <img src={Ficon} alt="Facebook" className="w-5 h-5 mr-2" />
              Sign up with Facebook
            </button>
          </div>
        </div>
  
        {/* Left Side - Illustration & Welcome Message */}
        <div className="w-1/2 bg-[#1C2059] flex flex-col justify-center items-center text-white p-10">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-yellow-400">Super Admin!</span>
          </h1>
          <p className="text-lg mt-4 text-gray-300">
            Let&apos;s build something extraordinary together.
          </p>
          <img src={Icon} alt="Teamwork Illustration" className="w-3/4 mt-10" />
        </div>
      </div>
  )
}
