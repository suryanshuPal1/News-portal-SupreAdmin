import React from "react";

const PostNewArticle = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md md:w-[100%] sm:w-[150%] ">
      <h2 className="text-2xl font-bold mb-6">Create New Headlines</h2>

     
      <div className="border border-dashed border-gray-400 p-6 text-center mb-4 rounded-lg cursor-pointer">
        <div className="w-10 h-10 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-gray-700 text-xl font-bold">
          +
        </div>
        <span className="text-gray-500 block mt-2">Add Cover Photo</span>
      </div>

     
      <label className="block mb-2 font-semibold">Title</label>
      <input
        type="text"
        className="w-full border p-2 rounded-lg mb-4"
        placeholder="Enter headline title"
      />

      
      <label className="block mb-2 font-semibold">Description</label>
      <textarea
        className="w-full border p-2 rounded-lg mb-4 h-24"
        placeholder="Enter details"
      ></textarea>

      
      <label className="block mb-2 font-semibold">Posted By</label>
      <input
        type="text"
        className="w-full border p-2 rounded-lg mb-4"
       placeholder="arun"
        // readOnly
      />


      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="font-semibold">Schedule your post</span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="font-semibold">Enable Comments</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <label className="block mb-2 font-semibold">Schedule Posting Date</label>
          <input type="date" className="w-full border p-2 rounded-lg" defaultValue="2025-07-05" />
        </div>
        <div className="relative">
          <label className="block mb-2 font-semibold">Schedule Posting Time</label>
          <input type="time" className="w-full border p-2 rounded-lg" defaultValue="10:00" />
        </div>
      </div>

      
      <button className="w-full bg-[#1C2059] text-white p-3 rounded-lg mt-6 hover:bg-blue-700">
        Post Headline
      </button>
    </div>
  );
};

export default PostNewArticle;
