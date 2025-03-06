import React from 'react';
import Img from "../assets/sign/amico.png"
import Gicon from "../assets/sign/google.png"
import Ficon from  "../assets/sign/Facebook.png"
import {Link} from 'react-router-dom'

export default function SignIn() {
  return (
    <div className="flex h-screen w-full">
            {/* Left Side */}
            <div className="w-1/2 bg-[#1C2059] flex flex-col justify-center items-center text-white p-10">
              <h1 className="text-5xl font-bold">
                Welcome to <span className="text-yellow-400">Super Admin!</span>
              </h1>
              <p className="text-lg mt-4 text-gray-300">Manage with power, lead with precision.</p>
              <img src={Img} alt="Teamwork Illustration" className="w-3/4 mt-10" />
            </div>
      
            {/* Right Side */}
            <div className="w-1/2 flex flex-col justify-center items-center p-10">
              <h1 className="text-3xl font-bold mb-6">Sign in to your Super Admin</h1>
      
              {/* Login Form */}
              <form className="w-3/4">
                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="arun14@gmail.com"
                    className="w-full p-3 border border-gray-300 rounded-lg mt-1"
                  />
                </div>
      
                {/* Password Input */}
                <div className="mb-4 relative">
                  <label className="block text-gray-600 font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full p-3 border border-gray-300 rounded-lg mt-1"
                  />
                  <span className="absolute right-3 top-11 cursor-pointer text-gray-400">👁️</span>
                </div>
      
                {/* Forgot Password */}
                <div className="text-right mb-6">
                  <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                </div>
      
                {/* Login Button */}
                <button className="w-full bg-[#1C2059] text-white py-3 rounded-lg font-medium hover:bg-[#161b4d] transition">
                  Log In
                </button>
              </form>
      
              {/* Social Login */}
              <div className="w-3/4 mt-6 space-y-3">
                <button className="flex items-center justify-center w-full bg-white text-black py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                  <img src={Gicon} alt="Google" className="w-5 h-5 mr-2" />
                  Continue with Google
                </button>
                <button className="flex items-center justify-center w-full bg-white text-black py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                  <img src={Ficon} alt="Facebook" className="w-5 h-5 mr-2" />
                  Continue with Facebook
                </button>
              </div>
      
              {/* Signup Link */}
              <p className="mt-6 text-sm">
                Don&apos;t have an account?{" "}
                <Link  to='/signup' className="text-blue-600 ">Sign Up</Link >
              </p>
            </div>
          </div>
  )
}
