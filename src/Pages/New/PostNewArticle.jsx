import React, { useState } from 'react';
import axios from 'axios';

const PostNewArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postedBy, setPostedBy] = useState('Arun');
  const [schedulePost, setSchedulePost] = useState(false);
  const [enableComments, setEnableComments] = useState(false);
  const [scheduleDate, setScheduleDate] = useState('2025-07-05');
  const [scheduleTime, setScheduleTime] = useState('10:00');
  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle avatar (cover photo) change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    setAvatarUrl(URL.createObjectURL(file));
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

    try {
      const response = await axios.post(
        'https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/new-headline-create',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      console.log('Success:', response.data);  // ✅ Log success response
      setMessage('Article posted successfully!');
    } catch (error) {
      if (error.response) {
        console.error('Server Response:', error.response.data);  // ❌ Log server error response
      } else {
        console.error('Error:', error.message);
      }
      setMessage('Error posting article. Please check the console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-6">Create New Article</h2>

      {/* Avatar Upload */}
      <div className="border border-dashed border-gray-400 p-6 text-center mb-4 rounded-lg cursor-pointer">
        <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" id="avatarInput" />
        <label htmlFor="avatarInput" className="cursor-pointer">
          {avatarUrl ? (
            <img src={avatarUrl} alt="Cover Preview" className="w-32 h-32 mx-auto rounded-md" />
          ) : (
            <div className="w-10 h-10 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-gray-700 text-xl font-bold">+</div>
          )}
          <span className="text-gray-500 block mt-2">Add Cover Photo</span>
        </label>
      </div>
      {avatar && <p className="text-sm text-green-600 mt-2">Cover photo selected: {avatar.name}</p>}

      <label className="block mb-2 font-semibold">Title</label>
      <input type="text" className="w-full border p-2 rounded-lg mb-4" placeholder="Enter headline title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label className="block mb-2 font-semibold">Description</label>
      <textarea className="w-full border p-2 rounded-lg mb-4 h-24" placeholder="Enter details" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

      <button type="submit" className="w-full bg-[#1C2059] text-white p-3 rounded-lg mt-6 hover:bg-blue-700" disabled={loading}>
        {loading ? 'Posting...' : 'Post Headline'}
      </button>

      {message && <p className="text-center mt-4 text-sm text-gray-700">{message}</p>}
    </form>
  );
};

export default PostNewArticle;
