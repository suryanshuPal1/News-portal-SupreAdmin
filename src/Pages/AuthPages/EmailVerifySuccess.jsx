import React from 'react'
import Image from "../../assets/images/verify-success.png";
import { Link } from "react-router-dom";

const EmailVerifySuccess = () => {
  return (
      <div className="lg:flex lg:flex-row md:flex md:flex-col h-screen">
        <div className='lg:w-[60%] flex flex-col justify-center items-center'>
          <h2 className='text-[#1C2059] text-2xl font-bold pb-2'>Verification Successful</h2>
          <p className='pb-15'>You can now log in with your new password</p>
            <Link to='/sign-in'>
            <button className="rounded bg-[#1C2059] w-[60vh] p-2 text-white">Continue</button>
            </Link>
        </div>
          <div className='bg-[#1C2059] w-[40%] flex justify-center items-center'>
            <img src={Image} alt="image-right" className=' h-[70%]'/>
          </div>
      </div>
  )
}

export default EmailVerifySuccess



