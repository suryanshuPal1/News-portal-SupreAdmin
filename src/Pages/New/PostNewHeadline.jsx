import React from 'react'
import { useState } from "react";

export default function PostNewHeadline() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [postedBy, setPostedBy] = useState("Arun");
    const [schedulePost, setSchedulePost] = useState(true);
    const [scheduleDate, setScheduleDate] = useState("2025-05-07");
    const [scheduleTime, setScheduleTime] = useState("10:00");
  
    return (
        <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-6 max-h-screen">
        <h1 className="text-2xl font-semibold mb-4">Create New Headlines</h1>
  
        {/* Cover Photo Upload */}
        <div className="border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 mb-4">
          <div className="text-gray-500">+ Add Cover Photo</div>
        </div>
  
        {/* Title Input */}
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md mt-1 mb-3"
          placeholder="Enter headline title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
  
        {/* Description Input */}
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-md mt-1 mb-3 h-24"
          placeholder="Enter description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
  
        {/* Posted By */}
        <label className="block text-sm font-medium text-gray-700">Posted By</label>
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md mt-1 mb-3"
          value={postedBy}
          readOnly
        />
  
        {/* Schedule Post */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            checked={schedulePost}
            onChange={() => setSchedulePost(!schedulePost)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm font-medium text-gray-700">Schedule your post</label>
        </div>
  
        {/* Schedule Date & Time */}
        {schedulePost && (
          <div className="flex gap-4 mt-3">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Schedule Posting Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 p-2 rounded-md mt-1"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Schedule Posting Time</label>
              <input
                type="time"
                className="w-full border border-gray-300 p-2 rounded-md mt-1"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
              />
            </div>
          </div>
        )}
  
        {/* Submit Button */}
        <button
          className="w-full mt-6 bg-blue-900 text-white font-bold py-2 rounded-md hover:bg-blue-800 transition"
        >
          Post Headline
        </button>
      </div>
      </div>
  )
}
