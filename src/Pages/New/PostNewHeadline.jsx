import React, { useState } from 'react';
import axios from 'axios';

const PostVideo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postedBy, setPostedBy] = useState('Arun');
  const [schedulePost, setSchedulePost] = useState(false);
  const [enableComments, setEnableComments] = useState(false);
  const [scheduleDate, setScheduleDate] = useState('2025-07-05');
  const [scheduleTime, setScheduleTime] = useState('10:00');
  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle avatar upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    setAvatarUrl(URL.createObjectURL(file));
  };

  // Handle video upload
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    setVideoUrl(URL.createObjectURL(file));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('postedBy', postedBy);
    formData.append('schedulePost', schedulePost);
    formData.append('enableComments', enableComments);
    formData.append('scheduleDate', scheduleDate);
    formData.append('scheduleTime', scheduleTime);
    if (avatar) formData.append('avatar', avatar);
    if (video) formData.append('video', video);

    try {
      const response = await axios.post(
        'https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/new-headline-create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // 'Authorization': `Bearer YOUR_ACCESS_TOKEN_HERE`, // Uncomment if authentication is required
          },
        }
      );
      console.log('Success:', response.data);
      setMessage('Article posted successfully!');
      setTitle('');
      setDescription('');
      setAvatar(null);
      setAvatarUrl('');
      setVideo(null);
      setVideoUrl('');
    } catch (error) {
      if (error.response) {
        console.error('Server Response:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
      setMessage('Error posting article. Please check the console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Create New Headlines</h2>

      {/* Upload Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Avatar Upload */}
        <div className="border border-dashed border-gray-400 p-6 text-center flex flex-col items-center justify-center cursor-pointer">
          <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" id="avatarInput" />
          <label htmlFor="avatarInput" className="cursor-pointer">
            <span className="text-gray-500">📷 Add Avatar (Thumbnail)</span>
          </label>
          {avatar && <p className="text-sm text-green-600 mt-2">Avatar selected: {avatar.name}</p>}
        </div>

        {/* Video Upload */}
        <div className="border border-dashed border-gray-400 p-6 text-center flex flex-col items-center justify-center cursor-pointer">
          <input type="file" accept="video/*" onChange={handleVideoChange} className="hidden" id="videoInput" />
          <label htmlFor="videoInput" className="cursor-pointer">
            <span className="text-gray-500">📤 Upload Video</span>
          </label>
          {video && <p className="text-sm text-green-600 mt-2">Video selected: {video.name}</p>}
        </div>
      </div>

      {/* Title Input */}
      <label className="block mb-2 font-semibold">Title</label>
      <input type="text" className="w-full border p-2 rounded-lg mb-4" placeholder="Enter headline title" value={title} onChange={(e) => setTitle(e.target.value)} />

      {/* Description */}
      <label className="block mb-2 font-semibold">Description</label>
      <textarea className="w-full border p-2 rounded-lg mb-4 h-24" placeholder="Enter details" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

      {/* Posted By */}
      <label className="block mb-2 font-semibold">Posted By</label>
      <input type="text" className="w-full border p-2 rounded-lg mb-4" placeholder="Enter name" value={postedBy} onChange={(e) => setPostedBy(e.target.value)} />

      {/* Options */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={schedulePost} onChange={() => setSchedulePost(!schedulePost)} className="w-4 h-4" />
          <label className="font-semibold">Schedule your post</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={enableComments} onChange={() => setEnableComments(!enableComments)} className="w-4 h-4" />
          <label className="font-semibold">Enable Comments</label>
        </div>
      </div>

      {/* Schedule Inputs */}
      {schedulePost && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 font-semibold">Schedule Posting Date</label>
            <input type="date" className="w-full border p-2 rounded-lg" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Schedule Posting Time</label>
            <input type="time" className="w-full border p-2 rounded-lg" value={scheduleTime} onChange={(e) => setScheduleTime(e.target.value)} />
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button onClick={handleSubmit} className="w-full bg-[#1C2059] text-white p-3 rounded-lg" disabled={loading}>
        {loading ? 'Posting...' : 'Post Headline'}
      </button>

      {message && <p className="text-center mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default PostVideo;