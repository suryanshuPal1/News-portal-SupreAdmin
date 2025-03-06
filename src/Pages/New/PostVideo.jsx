import React, { useState } from 'react';

const PostVideo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [schedulePost, setSchedulePost] = useState(false);
  const [enableComments, setEnableComments] = useState(false);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [avatar, setAvatar] = useState(null); // Avatar (Thumbnail)
  const [avatarUrl, setAvatarUrl] = useState('');
  const [video, setVideo] = useState(null); // Video file
  const [videoUrl, setVideoUrl] = useState('');

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload avatar (thumbnail) and video to Cloudinary
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
    let videoUrl = '';
    if (avatar) {
      avatarUrl = await uploadToCloudinary(avatar);
    }
    if (video) {
      videoUrl = await uploadToCloudinary(video);
    }

    // Prepare payload
    const payload = {
      title: title,
      description: description,
      avatar: avatarUrl, // Use avatarUrl as the avatar
      video: videoUrl,
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
        setVideo(null);
        setVideoUrl('');
      } else {
        alert('Error creating news:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the news.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Create New Headlines</h2>

      {/* Upload Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border border-dashed border-gray-400 p-6 text-center flex flex-col items-center justify-center cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
            id="avatarInput"
          />
          <label htmlFor="avatarInput" className="cursor-pointer">
            <span className="text-gray-500">📷 Add Avatar (Thumbnail)</span>
          </label>
          {avatar && (
            <p className="text-sm text-green-600 mt-2">Avatar selected: {avatar.name}</p>
          )}
        </div>
        <div className="border border-dashed border-gray-400 p-6 text-center flex flex-col items-center justify-center cursor-pointer">
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="hidden"
            id="videoInput"
          />
          <label htmlFor="videoInput" className="cursor-pointer">
            <span className="text-gray-500">📤 Upload Video</span>
          </label>
          {video && (
            <p className="text-sm text-green-600 mt-2">Video selected: {video.name}</p>
          )}
        </div>
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

      {/* Description */}
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
        placeholder="Enter name"
        value={postedBy}
        onChange={(e) => setPostedBy(e.target.value)}
      />

      {/* Options */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={schedulePost}
            onChange={() => setSchedulePost(!schedulePost)}
            className="w-4 h-4"
          />
          <label className="font-semibold">Schedule your post</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={enableComments}
            onChange={() => setEnableComments(!enableComments)}
            className="w-4 h-4"
          />
          <label className="font-semibold">Enable Comments</label>
        </div>
      </div>

      {/* Schedule Inputs */}
      {schedulePost && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-semibold">Schedule Posting Date</label>
            <input
              type="date"
              className="w-full border p-2 rounded-lg"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
            />
          </div>
          <div>
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
        onClick={handleSubmit}
        className="w-full bg-[#1C2059] text-white p-3 rounded-lg"
      >
        Post Headline
      </button>
    </div>
  );
};

export default PostVideo;
