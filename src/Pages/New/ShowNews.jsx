import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const authToken = localStorage.getItem('authToken') || '';

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/all-news',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          }
        }
      );
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch news');
      }

      const data = await response.json();
      console.log('Fetched news data:', data);

      if (data && Array.isArray(data.news)) {
        setNews(data.news);
      } else if (data && Array.isArray(data.data)) {
        setNews(data.data);
      } else {
        throw new Error('Invalid data format received from server');
      }
      
      setError(null);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }, [authToken]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleDelete = async (newsId) => {
    try {
      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/delete-news/${newsId}`, 
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          }
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete news');
      }

      setNews(prevNews => prevNews.filter(item => item._id !== newsId));
      alert('News deleted successfully');
    } catch (err) {
      console.error('Delete error:', err);
      setError(err.message || 'An error occurred while deleting the news');
    }
  };

  const handleUpdateClick = useCallback((newsId) => {
    if (!newsId) {
      console.error('No news ID provided for update');
      return;
    }

    const newsItem = news.find(item => item._id === newsId);
    if (!newsItem) {
      console.error('News item not found');
      return;
    }

    // Navigate with state containing the news item data
    navigate(`/manage-headline/${newsId}`, {
      state: { newsData: newsItem }
    });
  }, [navigate, news]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
      <strong>Error:</strong> {error}
      <button 
        onClick={() => setError(null)} 
        className="absolute top-0 right-0 px-4 py-3"
      >
        ×
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-8 mt-5">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            {news.length === 0 ? (
              <div className="text-center py-4 text-gray-500">
                No news articles found
              </div>
            ) : (
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left">ID</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Title</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Description</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Category</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Posted By</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Created At</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((newsItem) => (
                    <tr key={newsItem._id || Math.random()} className="hover:bg-gray-50">
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{newsItem._id}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{newsItem.title}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {newsItem.description || 'No description'}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{newsItem.category}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{newsItem.postedBy}</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {newsItem.createdAt 
                            ? new Date(newsItem.createdAt).toLocaleDateString() 
                            : 'N/A'}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex space-x-2">
                        <button 
                          onClick={() => handleUpdateClick(newsItem._id)}
                          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Update
                        </button>
                        <button 
                          onClick={() => handleDelete(newsItem._id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowNews;