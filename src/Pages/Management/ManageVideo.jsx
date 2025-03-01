import React from "react";
import { AiFillEdit } from "react-icons/ai"; // Importing React Icon
import Nirmalatai from "../../assets/manage/nermalatai.png";

export default function ManageVideo() {
  return (
    <div className="p-6 pt-22 bg-gray-100">
      <h1 className="text-2xl font-semibold">Manage Video</h1>

      <div className="p-2 py-9">
        {/* Title Input */}
        <div>
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex flex-row items-center space-x-2">
              <AiFillEdit className="text-gray-500 text-lg cursor-pointer" />
              <button className="font-bold">Edit</button>
            </div>
          </div>
          <p className="w-[39%] text-[#282828] text-sm my-2">
            Budget 2025 Live: FM Nirmala Sitharaman Announces Huge Tax Relief | New
            Tax Slab Explained
          </p>
        </div>

        {/* Video Input */}
        <div className="py-8">
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Video"
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex flex-row items-center space-x-2">
              <AiFillEdit className="text-gray-500 text-lg cursor-pointer" />
              <button className="font-bold">Edit</button>
            </div>
          </div>
          <img src={Nirmalatai} alt="Video Thumbnail" className="w-[95%] py-5" />
        </div>

        {/* Description Input */}
        <div>
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Description"
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex flex-row items-center space-x-2">
              <AiFillEdit className="text-gray-500 text-lg cursor-pointer" />
              <button className="font-bold">Edit</button>
            </div>
          </div>
          <p className="bg-gray-100 text-gray-800 p-4 md:p-6 rounded-lg shadow-md border-l-4 border-blue-500 leading-relaxed">
            Finance Minister Nirmala Sitharaman, in the Union Budget 2025, announced
            significant tax reforms aimed at providing relief to the middle class and
            stimulating economic growth. Under the new tax regime, income up to ₹12
            lakh is now exempt from taxation, a substantial increase from the previous
            threshold of ₹7 lakh.
            <br />
            <br />
            <span className="font-semibold text-gray-900">Income up to ₹4 lakh:</span>{" "}
            No tax
            <br />
            <span className="font-semibold text-gray-900">Above ₹24 lakh:</span> 30%
            <br />
            <br />
            A court in West Bengal has directed the production of individuals linked to a
            Bangladesh-based terror outfit who are currently lodged in an Assam jail.
            Authorities are expected to transport the suspects for further legal
            proceedings, shedding light on the regional security concerns and coordinated
            efforts between Indian states to tackle extremist networks.
          </p>
        </div>
      </div>
    </div>
  );
}