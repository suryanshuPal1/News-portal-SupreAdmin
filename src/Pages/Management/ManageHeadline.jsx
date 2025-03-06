import React, { useState } from "react";  
import thumbnail from "../../assets/manage/thumbnail.png";  
import editIcon from "../../assets/manage/editIcon.png";  

const ManageHeadline = () => {  
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
        alert("File uploaded successfully!");  
      } else {  
        alert("Failed to upload file.");  
      }  
    } catch (error) {  
      console.error("Error uploading file:", error);  
    }  
  };  

  return (  
    <div className="p-6 pt-22 bg-gray-100">  
      <h1 className="text-2xl font-semibold">Manage Headlines</h1>  

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
        <p className="py-5 w-[90%] text-sm text-[#282828]">  
            Budget 2025 Live: FM Nirmala Sitharaman Announces Huge Tax Relief |  
            New Tax Slab Explained  
          </p>

        <div className="py-8">  
          <div className="flex flex-row justify-between">  
            <input  
              type="file"  
              accept="video/*"  
              className="border border-gray-200 rounded px-3 py-1 w-[90%] shadow"  
              onChange={handleFileChange}  
            />  
            <div className="flex flex-row items-center px-3">  
              <button  
                onClick={handleUpload}  
                className="font-bold bg-blue-500 text-white px-4 py-2 rounded"  
              >  
                Upload  
              </button>  
            </div>  
          </div>  
          <img src={thumbnail} alt="thumbnail" className="w-[90%] py-5" />  
        </div>  

        <div>  
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
           
        </div>  

       
           
          

        <div>  
      
          <p className="py-5 w-[95%] text-sm text-[#282828]">  
            A court in West Bengal has directed the production of individuals  
            linked to a Bangladesh-based terror outfit who are currently lodged in  
            an Assam jail. The order comes as part of an ongoing investigation  
            into cross-border terrorism and illegal activities. Authorities are  
            expected to transport the suspects for further legal proceedings,  
            shedding light on the regional security concerns and coordinated  
            efforts between Indian states to tackle extremist networks. A court in  
            West Bengal has directed the production of individuals linked to a  
            Bangladesh-based terror outfit who are currently lodged in an Assam  
            jail. The order comes as part of an ongoing investigation into  
            cross-border terrorism and illegal activities. Authorities are  
            expected to transport the suspects for further legal proceedings,  
            shedding light on the regional security concerns and coordinated  
            efforts between Indian states to tackle extremist networks. A court in  
            West Bengal has directed the production of individuals linked to a  
            Bangladesh-based terror outfit who are currently lodged in an Assam  
            jail. The order comes as part of an ongoing investigation into  
            cross-border terrorism and illegal activities. Authorities are  
            expected to transport the suspects for further legal proceedings,  
            shedding light on the regional security concerns and coordinated  
            efforts between Indian states to tackle extremist networks. A court in  
            West Bengal has directed the production of individuals linked to a  
            Bangladesh-based terror outfit who are currently lodged in an Assam  
            jail...  
          </p>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ManageHeadline;  