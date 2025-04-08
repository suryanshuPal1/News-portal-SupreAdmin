import React from "react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const UserDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      {/* Container */}
      <div className="bg-white w-[80%] p-6 rounded-xl shadow-md">
        {/* Header with Date & Time */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black font-semibold text-lg">View Full Details</h2>
          <div className="flex items-center space-x-4 text-gray-700">
            <div className="flex items-center space-x-2">
              <FaRegCalendarAlt />
              <span>Mar 23, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegClock />
              <span>12:15 PM</span>
            </div>
          </div>
        </div>

        {/* User Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            ["Name", "Abc Xyz"],
            ["Email", "abcxyz@gmail.com"],
            ["City", "Nagpur"],
            ["Registration Date", "12354"],
            ["Phone", "123456789"],
            ["Address", "VIP Road, Nagpur"],
            ["Selected City", "Pune News"],
            ["Email", "abcxyz@gmail.com"],
            ["Like", "Frequently"],
            ["Login Activity", "2hr 5min"],
            ["News Share", ""],
          ].map(([label, value], index) => (
            <div key={index} className="flex items-center">
              <span className="w-36 text-gray-700">{label}</span>
              <input
                type="text"
                placeholder={value}
                className="bg-gray-300 w-full p-3 rounded-lg min-h-[40px] outline-none"
              />
            </div>
          ))}
        </div>

        {/* Block User Button */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-blue-900 text-white rounded-lg">
            Block User
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          <button className="px-3 py-2 bg-gray-200 rounded-full">&lt;</button>
          {[1, 2, "...", 9, 10].map((num, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-full ${
                num === 1 ? "bg-blue-900 text-white" : "bg-gray-200"
              }`}
            >
              {num}
            </button>
          ))}
          <button className="px-3 py-2 bg-gray-200 rounded-full">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
