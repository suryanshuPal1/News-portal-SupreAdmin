import React, { useState, useEffect } from 'react';
import editIcon from '../../assets/manage/editIcon.png';

const ManageVideo = ({ newsId, authToken }) => {
  const [newsData, setNewsData] = useState({
    title: '',
    content: '',
    video: ''
  });

  const [videoFile, setVideoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Fetch news data on mount
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `https://newsportalbackend-crdw.onrender.com/api/v1/adminnews/all-news`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              ...(authToken && { 'Authorization': `Bearer ${authToken}` })
            }
          }
        );

        if (!response.ok) throw new Error('Failed to fetch news');

        const data = await response.json();
        const currentNews = data.data.find((item) => item._id === newsId);

        if (currentNews) {
          setNewsData({
            title: currentNews.title || '',
            content: currentNews.description || '',  
            video: currentNews.video || ''
          });
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching news:', err);
      }
    };

    if (newsId) {
      fetchNewsData();
    }
  }, [newsId, authToken]);

  // ✅ Handle video file selection
  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  // ✅ Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Update Title & Description
  const updateNewsContent = async () => {
    if (!newsId) {
      setError('News ID is required');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/adminnews/update-news/${newsId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...(authToken && { 'Authorization': `Bearer ${authToken}` })
          },
          body: JSON.stringify({
            title: newsData.title,
            description: newsData.content
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update news content');
      }

      alert('Title & Description updated successfully!');
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Update Video
  const updateVideo = async () => {
    if (!newsId) {
      setError('News ID is required');
      return;
    }

    if (!videoFile) {
      alert('Please select a video to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('video', videoFile);

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/adminnews/update-news-avatar-video/${newsId}`,
        {
          method: 'PUT',
          headers: {
            ...(authToken && { 'Authorization': `Bearer ${authToken}` })
          },
          body: formData
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update video');
      }

      alert('Video updated successfully!');
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await updateNewsContent();

      if (videoFile) {
        await updateVideo();
        alert('Content & Video updated successfully!');
      } else {
        alert('Content updated successfully!');
      }
    } catch (err) {
      console.error('Update failed:', err);
      alert(`Update failed: ${err.message || 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 pt-22 bg-gray-100">
      <h1 className="text-2xl font-semibold">Manage Video</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center items-center mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-2 py-9">

        {/* Title */}
        <div>
          <input
            type="text"
            name="title"
            value={newsData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
          />
        </div>

        {/* Video Upload */}
        <div className="py-8">
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
          />

          {newsData.video && (
            <video controls className="w-[90%] py-5">
              <source src={newsData.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Description */}
        <div>
          <textarea
            name="content"
            value={newsData.content}
            onChange={handleInputChange}
            placeholder="Description"
            className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            rows="4"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Updating...' : 'Update Video'}
        </button>
      </form>
    </div>
  );
};

export default ManageVideo;
