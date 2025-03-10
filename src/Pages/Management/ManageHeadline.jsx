import { useState, useEffect } from "react";
import { useParams, useNavigate, } from "react-router-dom";

import thumbnail from "../../assets/manage/thumbnail.png";
import editIcon from "../../assets/manage/editIcon.png";

const ManageHeadline = () => {
  
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  const { newsId } = useParams();

  useEffect(() => {
    if (newsId) {
      fetchHeadline();
    } else {
      navigate('/show-news');
    }
  }, [newsId]);

  const authToken = localStorage.getItem("authToken") || "";

  const handleEditClick = () => {
    setEditing(true);
    setError(null);
  };

  const handleInputChange = (setter) => (e) => {
    if (editing) {
      setter(e.target.value);
    }
  };

  const fetchHeadline = async () => {
    setLoading(true);
    try {
      



      if (!newsId) {
        throw new Error("Failed to fetch news item");
      }

      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/news/${newsId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
          }
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch headline data");
      }

      const data = await response.json();
      if (!data || !data.data) {
        throw new Error("Invalid response data");
      }

      const newsItem = data.data;
      setTitle(newsItem.title || "");
      setVideo(newsItem.video || "");
      setDescription(newsItem.description || "");
      setInitialDataLoaded(true);
    } catch (err) {
      setError(err.message || "Failed to load news item");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editing) return;

    // Input validation
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    if (!description.trim()) {
      setError("Description is required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/update-news/${newsId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
          },
          body: JSON.stringify({
            title: title.trim(),
            video: video.trim(),
            description: description.trim(),
          }),
          signal: controller.signal
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update headline");
      }

      const responseData = await response.json();
      alert("Headline updated successfully!");
      navigate('/show-news', {
        state: { updatedNews: responseData.data }
      });
    } catch (err) {
      let errorMessage = "An error occurred while updating.";
      if (err.name === 'AbortError') {
        errorMessage = "Request timed out. Please try again.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (editing) {
      setEditing(false);
      fetchHeadline();
    } else {
      navigate('/show-news');
    }
  };

  useEffect(() => {
    if (!initialDataLoaded) {
      fetchHeadline();
    }
  }, [initialDataLoaded]);

  if (loading && !initialDataLoaded) {
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
              onChange={handleInputChange(setTitle)}
              className={`border ${editing ? 'border-blue-300' : 'border-gray-200'} rounded px-3 py-1 w-[90%] shadow`}
              disabled={!editing}
              required
            />
            <button
              type="button"
              onClick={handleEditClick}
              className="flex items-center px-3 font-bold"
            >
              <img src={editIcon} alt="Edit Icon" className="w-5 mr-2" />
              {editing ? 'Editing' : 'Edit'}
            </button>
          </div>
        </div>

        {/* Video Input */}
        <div className="py-8">
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Video URL"
              value={video}
              onChange={handleInputChange(setVideo)}
              className={`border ${editing ? 'border-blue-300' : 'border-gray-200'} rounded px-3 py-1 w-[90%] shadow`}
              disabled={!editing}
            />
            <button
              type="button"
              onClick={handleEditClick}
              className="flex items-center px-3 font-bold"
            >
              <img src={editIcon} alt="Edit Icon" className="w-5 mr-2" />
              {editing ? 'Editing' : 'Edit'}
            </button>
          </div>
          {video && <img src={thumbnail} alt="thumbnail" className="w-[90%] py-5" />}
        </div>

        {/* Description Input */}
        <div>
          <div className="flex flex-row justify-between">
            <textarea
              placeholder="Description"
              value={description}
              onChange={handleInputChange(setDescription)}
              className={`border ${editing ? 'border-blue-300' : 'border-gray-200'} rounded px-3 py-1 w-[90%] shadow resize-none h-24`}
              disabled={!editing}
              required
            />
            <button
              type="button"
              onClick={handleEditClick}
              className="flex items-center px-3 font-bold"
            >
              <img src={editIcon} alt="Edit Icon" className="w-5 mr-2" />
              {editing ? 'Editing' : 'Edit'}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${!editing ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!editing}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageHeadline;
