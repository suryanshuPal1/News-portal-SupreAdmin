import React from "react";
import emailposter from '../Assets/emailPoster.png';

const AccountVerification = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">

      <div className="h-auto md:h-screen flex flex-col items-center justify-center bg-gray-100 p-6 w-70% md:w-5/8">
        <div className="text-center w-[43%]">
          <h3 className="text-2xl font-semibold">Email Verification</h3>
          <p className="text-gray-600 text-sm pt-3">We've sent an verification to <span className="text-black">arun14@gmail.com</span> to verify your email address and activate your account</p>
        </div>

        <div className="w-full max-w-[80%] p-2 mt-8 border border-zinc-300 rounded-lg text-center">
          <label htmlFor="Enter Verification Code...">
            <input type="text" placeholder="Enter Verification Code..."/>
          </label>
        </div>

        <p className="text-gray-500 font-bold text-sm text-center mt-4 px-4">
          Didn't recieve any code! <span className="text-[#1C2059]">Resend Code</span>
        </p>

        <button className="mt-12 w-[80%] bg-[#1C2059] text-white py-2 rounded-lg">
          Verify My Email
        </button>
      </div>

      <div className="h-[50vh] md:h-screen w-full md:w-3/8 bg-[#1C2059] flex flex-col items-center justify-center p-6">
        <h1 className="font-bold text-2xl text-center text-white">
          Welcome to <span className="text-yellow-500">super admin!</span>
        </h1>

        <p className="text-zinc-300 text-center mt-2 text-sm md:text-base">
          Empower decisions, simplifying control
        </p>

        <div className="flex justify-center mt-3 w-90">
          <img src={emailposter} alt="Super Admin" className="w-60 md:w-60 mt-5" />
        </div>
      </div>

    </div>
  );
};

export default AccountVerification;

