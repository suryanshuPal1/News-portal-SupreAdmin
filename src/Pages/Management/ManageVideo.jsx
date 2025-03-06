import React, { useState } from "react";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai"; // Importing React Icon
import Nirmalatai from "../../assets/manage/nermalatai.png";

export default function ManageVideo() {
  const [videoFile, setVideoFile] = useState(null);
  const [newsId, setNewsId] = useState("");
  const [authToken, setAuthToken] = useState("");

  const handleVideoUpload = async () => {
    if (!videoFile || !newsId || !authToken) {
      alert("Please provide all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/admin/news/update-news-avatar&video/${newsId}`,
        {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${authToken}`
          },
          body: formData
        }
      );
      const result = await response.json();
      console.log("Video uploaded successfully:", result);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <div className="p-6 pt-22 bg-gray-100">
      <h1 className="text-2xl font-semibold">Manage Video</h1>

      <div className="p-2 py-9">
        {/* News ID Input */}
        <div>
          <input
            type="text"
            placeholder="News ID"
            value={newsId}
            onChange={(e) => setNewsId(e.target.value)}
            className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow mb-3"
          />
        </div>

        {/* Auth Token Input */}
        <div>
          <input
            type="text"
            placeholder="Auth Token"
            value={authToken}
            onChange={(e) => setAuthToken(e.target.value)}
            className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow mb-3"
          />
        </div>

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
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex flex-row items-center space-x-2">
              <AiFillEdit className="text-gray-500 text-lg cursor-pointer" />
              <button className="font-bold" onClick={handleVideoUpload}>Upload</button>
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
