import React from "react";
import img from "../../assets/amico@2x.png";
import edit from "../../assets/edit-text.png";
import call from "../../assets/call.png";
import email from "../../assets/email.png";

const AccountVerification = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="h-[50vh] md:h-screen w-full md:w-1/2 bg-[#1C2059] flex flex-col items-center justify-center p-6">
        <h1 className="font-bold text-2xl text-center text-white">
          Welcome to <span className="text-yellow-500">super admin!</span>
        </h1>

        <p className="text-zinc-300 text-center mt-2 text-sm md:text-base">
          Empower decisions, simplifying control
        </p>

        <div className="flex justify-center mt-3 w-full">
          <img src={img} alt="Super Admin" className="w-60 md:w-80 mt-5" />
        </div>
      </div>

      <div className="h-auto md:h-screen flex flex-col items-center justify-center bg-gray-100 p-6 w-full md:w-1/2">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Verify Your Account</h3>
          <p className="text-gray-600">Where should we send the verification code?</p>
        </div>

        <div className="w-full max-w-xs p-4 rounded-lg mt-4 text-center border border-[#7900BA]">
          <div className="flex items-center justify-center p-2 mb-2">
            <span><img src={call} alt="Phone Icon" className="w-5" /></span>
            <p className="text-gray-700 mx-6 text-sm md:text-base">+91 9876543210</p>
            <span><img src={edit} alt="Edit Icon" className="w-5" /></span>
          </div>
          <button className="mt-2 w-40 bg-[#1C2059] text-white py-1 rounded-lg">
            Select Phone
          </button>
        </div>

        <div className="w-full max-w-xs p-4 mt-4 rounded-lg text-center border border-[#7900BA]">
          <div className="flex items-center justify-center p-2 mb-2">
            <span><img src={email} alt="Email Icon" className="w-5" /></span>
            <p className="text-gray-700 mx-6 text-sm md:text-base">techno@gmail.com</p>
            <span><img src={edit} alt="Edit Icon" className="w-5" /></span>
          </div>

          <button className="mt-2 w-40 bg-[#1C2059] text-white py-2 rounded-lg">
            Select Mail
          </button>
        </div>

        <p className="text-gray-500 text-sm text-center mt-4 px-4">
          Make sure you have access to your selected option to receive the code.
        </p>

        <button className="mt-12 w-full max-w-sm bg-[#1C2059] text-white py-2 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default AccountVerification;

