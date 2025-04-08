import { useState, useEffect } from 'react'; 
import thumbnail from '../../assets/manage/articleImage.png';
import editIcon from '../../assets/manage/editIcon.png';

const ManageArticle = ({ newsId, authToken }) => {
  const [newsData, setNewsData] = useState({
    title: '',
    content: '',
    category: '',
    author: ''
  });

  const [avatarFile, setAvatarFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
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

        // Find the specific news by ID
        const currentNews = data.data.find(item => item._id === newsId);
        if (currentNews) {
          setNewsData({
            title: currentNews.title || '',
            content: currentNews.description || '',
            category: '',
            author: currentNews.postedBy || ''
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

  // Handle input changes for news content
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle avatar upload
  const handleAvatarChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  // Update title & description
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

  // Update news avatar
  const updateNewsAvatar = async () => {
    if (!newsId) {
      setError('News ID is required');
      return;
    }

    if (!avatarFile) {
      alert('Please select an avatar image.');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', avatarFile);

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/adminnews/update-news-avatar&video/${newsId}`,
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
        throw new Error(errorData.message || 'Failed to update avatar');
      }

      alert('Avatar updated successfully!');
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateNewsContent();
      if (avatarFile) {
        await updateNewsAvatar();
      }
    } catch (err) {
      console.error('Update failed:', err);
      alert(error || 'Update failed');
    }
  };

  return (
    <div className="p-6 pt-22 bg-gray-100">
      <h1 className="text-2xl font-semibold">Manage Article/Post</h1>

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
        
        {/* Title Section */}
        <div>
          <div className="flex justify-between">
            <input
              type="text"
              name="title"
              value={newsData.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex items-center px-3">
              <span className="w-5">
                <img src={editIcon} alt="Edit" />
              </span>
              <button type="button" className="font-bold">Edit</button>
            </div>
          </div>
        </div>

        {/* Avatar Upload */}
        <div className="py-8">
          <div className="flex justify-between">
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              placeholder="Cover photo"
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex items-center px-3">
              <span className="w-5">
                <img src={editIcon} alt="Edit" />
              </span>
              <button type="button" className="font-bold">Edit</button>
            </div>
          </div>
          {avatarFile && <img src={thumbnail} alt="Article thumbnail" className="w-[90%] py-5" />}
        </div>

        {/* Description Section */}
        <div>
          <div className="flex justify-between">
            <textarea
              name="content"
              value={newsData.content}
              onChange={handleInputChange}
              placeholder="Description"
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
              rows="4"
            />
            <div className="flex items-center px-3">
              <span className="w-5">
                <img src={editIcon} alt="Edit" />
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
  );
};

export default ManageArticle;
