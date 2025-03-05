import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../assets/sign in and sign up cover img/forgetPassCover.png'

const ForgetPass = () => {
  return (
    <div className="h-screen lg:flex lg:flex-row md:flex md:flex-col">
     
            <div className='h-screen lg:w-[50%] bg-[#1C2059] border flex justify-center items-center'>
              <img src={Img} alt="Teamwork Illustration" className='h-screen'/>
            </div>
      
           
            <div className="lg:w-[50%] flex flex-col justify-center items-center ">
              <h1 className="text-3xl font-bold lg:mb-6 m-5">Forget Password</h1>
                <p className='text-center w-[70%]'>Enter your registered email or Phone number
                to receive password reset link</p>
              <form className="flex justify-center flex-col w-[80%]">
                          <div className='lg:mb-6 mb-[6%]'>
                              <label htmlFor="username" className="block mb-2 text-zinc-800 text-sm font-medium">Email/Number</label>
                              <input type="username" name="username" id="username" 
                            //   value={values.username} onChange={change}
                              className="border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600  placeholder-gray-400 focus:ring-blue-500  focus:border-blue-500" placeholder="Enter your username" required="">
                              </input>
                          </div>
                        <div className="text-right mb-6">
                  <span>Go back to </span><Link to='/sign-in' className="text-sm text-blue-600 hover:underline">LOG IN</Link>
                </div>
      
                {/* Login Button */}
                <button type='submit' className="w-full bg-[#1C2059] text-white py-3 rounded-lg font-medium hover:bg-[#161b4d] transition">
                  Log In
                </button>
              </form>
      
              <p className="mt-6 text-sm">
                Don&apos;t have an account?{" "}
                <Link  to='/sign-up' className="text-blue-600 ">Sign Up</Link >
              </p>
            </div>
    </div>
  )
}

export default ForgetPass