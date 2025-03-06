import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios"; // Import Axios for API calls
import Nirmalatai from "../../assets/manage/nermalatai.png";

const API_URL =
  "https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/update-news-avatar&video/";

const EditButton = ({ onClick }) => (
  <div className="flex flex-row items-center space-x-2 cursor-pointer" onClick={onClick}>
    <AiFillEdit className="text-gray-500 text-lg" />
    <button className="font-bold">Edit</button>
  </div>
);

export default function ManageVideo() {
  const [newsId, setNewsId] = useState(""); // Store the news ID for the update request
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file input
  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newsId) {
      setMessage("Please enter a valid News ID.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("videoUrl", videoUrl);
      formData.append("description", description);
      if (avatar) formData.append("avatar", avatar);
      if (videoFile) formData.append("video", videoFile);

      const response = await axios.put(`${API_URL}${newsId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Update successful!");
      console.log("Response:", response.data);
    } catch (error) {
      setMessage("Failed to update. Try again!");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 pt-22 bg-gray-100">
      <h1 className="text-2xl font-semibold">Manage Video</h1>

      <form onSubmit={handleSubmit} className="p-2 py-9 space-y-6">
        {/* News ID Input */}
        <div>
          <input
            type="text"
            placeholder="Enter News ID"
            className="border border-gray-200 rounded px-3 py-1 w-full shadow"
            value={newsId}
            onChange={(e) => setNewsId(e.target.value)}
          />
        </div>

        {/* Title Input */}
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder="Enter video title..."
            className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <EditButton />
        </div>

        {/* Video URL Input */}
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder="Paste video URL here..."
            className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <EditButton />
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label className="block font-medium">Upload Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            className="border border-gray-200 rounded px-3 py-1 w-full shadow"
            onChange={(e) => handleFileChange(e, setAvatar)}
          />
          <img src={Nirmalatai} alt="Thumbnail Preview" className="w-[95%] py-5" />
        </div>

        {/* Video File Upload */}
        <div>
          <label className="block font-medium">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            className="border border-gray-200 rounded px-3 py-1 w-full shadow"
            onChange={(e) => handleFileChange(e, setVideoFile)}
          />
        </div>

        {/* Description Input */}
        <div className="flex flex-row justify-between">
          <textarea
            placeholder="Enter video description..."
            className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow min-h-[100px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <EditButton />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Video"}
        </button>

        {/* Message Display */}
        {message && <p className="text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}
