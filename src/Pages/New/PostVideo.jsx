import React from "react";

const PostVideo = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <h2 className="text-2xl font-bold mb-4">Create New Headlines</h2>
    
    {/* Upload Section */}
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="border border-dashed border-gray-400 p-6 text-center flex flex-col items-center justify-center cursor-pointer">
        <span className="text-gray-500">📷 Add Thumbnail</span>
      </div>
      <div className="border border-dashed border-gray-400 p-6 text-center flex flex-col items-center justify-center cursor-pointer">
        <span className="text-gray-500">📤 Upload Video</span>
      </div>
    </div>

    {/* Title Input */}
    <label className="block mb-2 font-semibold">Title</label>
    <input 
      type="text" 
      className="w-full border p-2 rounded-lg mb-4" 
      placeholder="Enter headline title" 
    />
    
    {/* Description */}
    <label className="block mb-2 font-semibold">Description</label>
    <textarea 
      className="w-full border p-2 rounded-lg mb-4 h-24" 
      placeholder="Enter details"
    ></textarea>
    
    {/* Posted By */}
    <label className="block mb-2 font-semibold">Posted By</label>
    <input 
      type="text" 
      className="w-full border p-2 rounded-lg mb-4" 
      placeholder="Enter name" 
    />
    
    {/* Options */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <input type="checkbox" id="schedule" className="w-4 h-4" />
        <label htmlFor="schedule" className="font-semibold">Schedule your post</label>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="comments" className="w-4 h-4" />
        <label htmlFor="comments" className="font-semibold">Enable Comments</label>
      </div>
    </div>
    
    {/* Schedule Inputs */}
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block mb-2 font-semibold">Schedule Posting Date</label>
        <input 
          type="date" 
          className="w-full border p-2 rounded-lg" 
        />
      </div>
      <div>
        <label className="block mb-2 font-semibold">Schedule Posting Time</label>
        <input 
          type="time" 
          className="w-full border p-2 rounded-lg" 
        />
      </div>
    </div>
    
    {/* Submit Button */}
    <button className="w-full bg-[#1C2059] text-white p-3 rounded-lg">Post Headline</button>
  </div>
  );
};

export default PostVideo;
