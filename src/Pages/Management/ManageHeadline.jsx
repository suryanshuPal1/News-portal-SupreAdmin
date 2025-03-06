import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import thumbnail from "../../assets/manage/thumbnail.png";
import editIcon from "../../assets/manage/editIcon.png";

const ManageHeadline = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authToken = localStorage.getItem("authToken") || "";

  useEffect(() => {
    if (!newsId) {
      setError("No news ID provided");
      return;
    }

    // If we have state data, use it immediately
    if (location.state?.newsData) {
      const { title, video, description } = location.state.newsData;
      setTitle(title || "");
      setVideo(video || "");
      setDescription(description || "");
      return;
    }
    
    // Otherwise fetch from API
    const fetchHeadline = async () => {
      setLoading(true);
      try {
        console.log('Fetching news with ID:', newsId);
        const response = await fetch(
          `https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/all-news`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch headline data");
        }

        const data = await response.json();
        console.log('Received data:', data);

        let newsItem;
        if (data && Array.isArray(data.news)) {
          newsItem = data.news.find(item => item._id === newsId);
        } else if (data && Array.isArray(data.data)) {
          newsItem = data.data.find(item => item._id === newsId);
        }

        if (newsItem) {
          setTitle(newsItem.title || "");
          setVideo(newsItem.video || "");
          setDescription(newsItem.description || "");
        } else {
          throw new Error("News item not found");
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message || "Failed to load news item");
      } finally {
        setLoading(false);
      }
    };

    fetchHeadline();
  }, [newsId, authToken, location.state]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!newsId) {
      setError("Invalid news ID");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('Updating news with ID:', newsId);
      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/update-news/${newsId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
          },
          body: JSON.stringify({
            title,
            video,
            description,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update headline");
      }

      alert("Headline updated successfully!");
      navigate('/show-news');
      
    } catch (err) {
      console.error('Update error:', err);
      setError(err.message || "An error occurred while updating.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/show-news');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 pt-22 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Manage Headlines</h1>

      {error && (
        <div className="text-red-500 bg-red-100 p-3 rounded-md mb-3">
          {error}
        </div>
      )}

      <form onSubmit={handleUpdate} className="p-2 py-9">
        {/* Title Input */}
        <div>
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
              required
            />
            <div className="flex flex-row items-center md:px-3">
              <span className="w-5">
                <img src={editIcon} alt="Edit Icon" />
              </span>
              <button type="button" className="font-bold">Edit</button>
            </div>
          </div>
        </div>

        {/* Video Input */}
        <div className="py-8">
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Video URL"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex flex-row items-center md:px-3">
              <span className="w-5">
                <img src={editIcon} alt="Edit Icon" />
              </span>
              <button type="button" className="font-bold">Edit</button>
            </div>
          </div>
          {video && <img src={thumbnail} alt="thumbnail" className="w-[90%] py-5" />}
        </div>

        {/* Description Input */}
        <div>
          <div className="flex flex-row justify-between">
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow resize-none h-24"
              required
            />
            <div className="flex flex-row items-center md:px-3">
              <span className="w-5">
                <img src={editIcon} alt="Edit Icon" />
              </span>
              <button type="button" className="font-bold">Edit</button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-5">
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2 text-gray-700 font-bold rounded border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-5 py-2 text-white font-bold rounded ${
              loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            {loading ? "Updating..." : "Update Headline"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageHeadline;
