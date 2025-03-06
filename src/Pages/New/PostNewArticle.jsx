import React, { useState } from 'react';

const PostNewArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postedBy, setPostedBy] = useState('Arun');
  const [schedulePost, setSchedulePost] = useState(false);
  const [enableComments, setEnableComments] = useState(false);
  const [scheduleDate, setScheduleDate] = useState('2025-07-05');
  const [scheduleTime, setScheduleTime] = useState('10:00');
  const [avatar, setAvatar] = useState(null); // Avatar is now the cover photo
  const [avatarUrl, setAvatarUrl] = useState('');

  // Handle avatar (cover photo) change
  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload avatar (cover photo) to Cloudinary
    const uploadToCloudinary = async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/your_cloud_name/upload`, // Replace with your Cloudinary URL
        { method: 'POST', body: formData }
      );
      const data = await response.json();
      return data.secure_url;
    };

    let avatarUrl = '';
    if (avatar) {
      avatarUrl = await uploadToCloudinary(avatar);
    }

    // Prepare payload
    const payload = {
      title: title,
      description: description,
      avatar: avatarUrl, // Use avatarUrl for the cover photo
      postedBy: postedBy,
      schedulePost: schedulePost,
      scheduleDate: scheduleDate,
      scheduleTime: scheduleTime,
    };

    // Submit to API
    try {
      const response = await fetch('https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/new-headline-create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        alert('News created successfully!');
        // Optionally reset form fields here
        setTitle('');
        setDescription('');
        setAvatar(null);
        setAvatarUrl('');
      } else {
        alert('Error creating news:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the news.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-6 rounded-lg shadow-md md:w-[100%] sm:w-[150%] ">
        <h2 className="text-2xl font-bold mb-6">Create New Headlines</h2>

        {/* Avatar Upload */}
        <div className="border border-dashed border-gray-400 p-6 text-center mb-4 rounded-lg cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
            id="avatarInput"
          />
          <label htmlFor="avatarInput" className="cursor-pointer">
            <div className="w-10 h-10 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-gray-700 text-xl font-bold">
              +
            </div>
            <span className="text-gray-500 block mt-2">Add Cover Photo</span>
          </label>
          {avatar && (
            <p className="text-sm text-green-600 mt-2">Cover photo selected: {avatar.name}</p>
          )}
        </div>

        {/* Title Input */}
        <label className="block mb-2 font-semibold">Title</label>
        <input
          type="text"
          className="w-full border p-2 rounded-lg mb-4"
          placeholder="Enter headline title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description Input */}
        <label className="block mb-2 font-semibold">Description</label>
        <textarea
          className="w-full border p-2 rounded-lg mb-4 h-24"
          placeholder="Enter details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Posted By */}
        <label className="block mb-2 font-semibold">Posted By</label>
        <input
          type="text"
          className="w-full border p-2 rounded-lg mb-4"
          value={postedBy}
          onChange={(e) => setPostedBy(e.target.value)}
        />

        {/* Schedule Post & Enable Comments */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={schedulePost}
              onChange={() => setSchedulePost(!schedulePost)}
              className="mr-2"
            />
            <span className="font-semibold">Schedule your post</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={enableComments}
              onChange={() => setEnableComments(!enableComments)}
              className="mr-2"
            />
            <span className="font-semibold">Enable Comments</span>
          </div>
        </div>

        {/* Schedule Date & Time */}
        {schedulePost && (
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block mb-2 font-semibold">Schedule Posting Date</label>
              <input
                type="date"
                className="w-full border p-2 rounded-lg"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
              />
            </div>
            <div className="relative">
              <label className="block mb-2 font-semibold">Schedule Posting Time</label>
              <input
                type="time"
                className="w-full border p-2 rounded-lg"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1C2059] text-white p-3 rounded-lg mt-6 hover:bg-blue-700"
        >
          Post Headline
        </button>
      </div>
    </form>
  );
};

export default PostNewArticle;
