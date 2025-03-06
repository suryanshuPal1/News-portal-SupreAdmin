import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";

export default function ManageVideo() {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/update-news-avatar&video/67c6957ef1cefd5a11385bc3"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        const result = await response.json();
        setNews(result.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!news) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 pt-22 bg-gray-100">
      <h1 className="text-2xl font-semibold">Manage Video</h1>

      <div className="p-2 py-9">
        <div>
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Title"
              value={news.title}
              readOnly
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex flex-row items-center space-x-2">
              <AiFillEdit className="text-gray-500 text-lg cursor-pointer" />
              <button className="font-bold">Edit</button>
            </div>
          </div>
          <p className="w-[39%] text-[#282828] text-sm my-2">{news.description}</p>
        </div>

        <div className="py-8">
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Video"
              value={news.video}
              readOnly
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex flex-row items-center space-x-2">
              <AiFillEdit className="text-gray-500 text-lg cursor-pointer" />
              <button className="font-bold">Edit</button>
            </div>
          </div>
          <video className="w-[95%] py-5" controls>
            <source src={news.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Description"
              value={news.description}
              readOnly
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex flex-row items-center space-x-2">
              <AiFillEdit className="text-gray-500 text-lg cursor-pointer" />
              <button className="font-bold">Edit</button>
            </div>
          </div>
          <p className="bg-gray-100 text-gray-800 p-4 md:p-6 rounded-lg shadow-md border-l-4 border-blue-500 leading-relaxed">
            {news.description}
          </p>
        </div>
      </div>
    </div>
  );
}
