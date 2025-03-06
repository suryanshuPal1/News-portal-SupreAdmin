import React, { useState } from "react";
import thumbnail from "../../assets/manage/articleImage.png";
import editIcon from "../../assets/manage/editIcon.png";

const ManageArticle = () => {
  const [newsId, setNewsId] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!newsId || !selectedFile) {
      alert("Please enter a News ID and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(
        `https://newsportalbackend-crdw.onrender.com/api/v1/admin/news/update-news-avatar&video/${newsId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Photo updated successfully!");
      } else {
        alert("Failed to update photo.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="p-6 pt-22 bg-gray-100">
      <h1 className="text-2xl font-semibold ">Manage Article/Post</h1>

      {/* News ID Input */}
      <div className="p-2 py-4">
        <input
          type="text"
          placeholder="Enter News ID"
          className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
          value={newsId}
          onChange={(e) => setNewsId(e.target.value)}
        />
      </div>

      <div className="p-2 py-9">
        <div>
          <div className="flex flex-row justify-between">
            <input
              type="text"
              placeholder="Title"
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
            />
            <div className="flex flex-row items-center px-3">
              <span className="w-5">
                <img src={editIcon} alt="" />
              </span>
              <button className="font-bold">Edit</button>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-row justify-between">
            <input
              type="file"
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
              onChange={handleFileChange}
            />
            <div className="flex flex-row items-center px-3">
              <button onClick={handleUpload} className="font-bold bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
            </div>
          </div>

          <img src={thumbnail} alt="thumbnail" className="w-[90%] py-5 " />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <input
          type="text"
          placeholder="Description"
          className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"
        />
        <div className="flex flex-row items-center px-3">
          <span className="w-5">
            <img src={editIcon} alt="" />
          </span>
          <button className="font-bold">Edit</button>
        </div>
      </div>
      <p className="py-5 w-[90%] text-sm text-[#282828]">
        The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST. The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST. The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST. The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.The ICC Women's U-19 T20 World Cup final between India and South Africa is scheduled for Sunday, February 2, 2025, at the Bayamos Oval in Kuala Lumpur, starting at 12:00 PM IST.
      </p>
    </div>
  );
};

export default ManageArticle;
