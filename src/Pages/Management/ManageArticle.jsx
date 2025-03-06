import  { useState } from 'react'
import thumbnail from '../../assets/manage/articleImage.png'
import editIcon from '../../assets/manage/editIcon.png'

const ManageArticle = () => {
  // Existing state 
  const [newsData, setNewsData] = useState({
    title: '',
    content: '',
    category: '',
    author: ''
  });

  // State for file uploads
  const [avatarFile, setAvatarFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  // State for loading and error handling
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Required missing props 
  const newsId = ''; // You need to provide the actual news ID
  const authToken = ''; // You need to provide the actual auth token

  // Handle input changes for news content
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file input changes
  const handleAvatarChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  // Update news content
  const updateNewsContent = async () => {
    if (!newsId) {
      setError('News ID is required');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/admin/news/update-news/${newsId}`, 
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...(authToken && { 'Authorization': `Bearer ${authToken}` })
          },
          body: JSON.stringify(newsData)
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update news content');
      }

      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Update news media (avatar and video)
  const updateNewsMedia = async () => {
    if (!newsId) {
      setError('News ID is required');
      return;
    }

    // Check if files are selected
    if (!avatarFile && !videoFile) {
      setError('Please select at least one file to upload');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    if (avatarFile) formData.append('avatar', avatarFile);
    if (videoFile) formData.append('video', videoFile);

    try {
      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/admin/news/update-news-avatar&video/${newsId}`,
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
        throw new Error(errorData.message || 'Failed to update news media');
      }

      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First, update the news content
      await updateNewsContent();

      // Then, update the media files
      await updateNewsMedia();

      // Display success message upon completion
      alert('News updated successfully!');
    } catch (err) {
      // Log the error
      console.error('Update failed:', err);
      alert(error || 'Update failed');
    }
  };

  return (
    <>
      <div className="p-6 pt-22 bg-gray-100">
        <h1 className="text-2xl font-semibold ">Manage Article/Post</h1>

        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-center items-center mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-2 py-9">
          <div>
            <div className="flex flex-row justify-between">
              <input
                type="text"
                name="title"
                value={newsData.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
              />
              <div className="flex flex-row items-center px-3">
                <span className="w-5">
                  <img src={editIcon} alt="" />
                </span>
                <button type="button" className="font-bold">Edit</button>
              </div>
            </div>
            <p className="md:w-[60%] text-[#282828] text-sm my-2">
              IND-W vs SA-W U-19 T20 World Cup Final: India Women vs South
              Africa Women U-19 Match Date, Time, Live Cricket Score Streaming,
              Telecast Channels, other details
            </p>
          </div>

          <div className="py-8">
            <div className="flex flex-row justify-between">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                placeholder="Cover photo"
                className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
              />
              <div className="flex flex-row items-center px-3">
                <span className="w-5">
                  <img src={editIcon} alt="" />
                </span>
                <button type="button" className="font-bold">Edit</button>
              </div>
            </div>
            {avatarFile && <img src={thumbnail} alt="Article thumbnail" className="w-[90%] py-5" />}

            <div className="flex flex-row justify-between mt-4">
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                placeholder="Video file"
                className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
              />
              <div className="flex flex-row items-center px-3">
                <span className="w-5">
                  <img src={editIcon} alt="" />
                </span>
                <button type="button" className="font-bold">Edit</button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-between">
              <textarea
                name="content"
                value={newsData.content}
                onChange={handleInputChange}
                placeholder="Description"
                className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
                rows="4"
              />
              <div className="flex flex-row items-center px-3">
                <span className="w-5">
                  <img src={editIcon} alt="" />
                </span>
                <button type="button" className="font-bold">Edit</button>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? 'Updating...' : 'Update News'}
          </button>
        </form>
      </div>
    </>
  );
}

export default ManageArticle;