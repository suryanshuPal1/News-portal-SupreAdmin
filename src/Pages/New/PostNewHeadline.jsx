import React from 'react'
import { useState } from "react";

export default function PostNewHeadline() {
    const [title, setTitle] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [postedBy, setPostedBy] = useState("Arun");
    const [schedulePost, setSchedulePost] = useState(true);
    const [scheduleDate, setScheduleDate] = useState("2025-05-07");
    const [scheduleTime, setScheduleTime] = useState("10:00");
    const [enableComments, setEnableComments] = useState(true);
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Handle cover photo file selection
    const handleCoverPhotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setCoverPhoto(e.target.files[0]);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Create form data object for submitting with file
            const formData = new FormData();
            formData.append("title", title);
            formData.append("category", category);
            formData.append("subcategory", subcategory);
            formData.append("description", description);
            formData.append("postedBy", postedBy);
            formData.append("enableComments", enableComments);

            // Add scheduling information if enabled
            if (schedulePost) {
                // Combine date and time for the scheduled datetime
                const scheduledDateTime = `${scheduleDate}T${scheduleTime}:00`;
                formData.append("scheduledDateTime", scheduledDateTime);
                formData.append("isScheduled", true);
            } else {
                formData.append("isScheduled", false);
            }

            // Add cover photo if selected
            if (coverPhoto) {
                formData.append("coverPhoto", coverPhoto);
            }

            // Send POST request to the API
            const response = await fetch(
                "https://newsportalbackend-crdw.onrender.com/api/v1/admin-news/new-headline-create",
                {
                    method: "POST",
                    body: formData,
                    // If your API requires authentication, add authorization headers:
                    // headers: {
                    //   "Authorization": "Bearer YOUR_TOKEN"
                    // }
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to create headline");
            }

            // Handle success
            setSuccess(true);
            // Clear form fields if needed
            resetForm();
        } catch (err) {
            setError(err.message || "An error occurred while creating the headline");
            console.error("Error creating headline:", err);
        } finally {
            setIsLoading(false);
        }
    };

    // Reset form fields
    const resetForm = () => {
        setTitle("");
        setCategory("");
        setSubcategory("");
        setDescription("");
        setCoverPhoto(null);
        setPostedBy("");
        setSchedulePost(true);
        setScheduleDate("2025-05-07");
        setScheduleTime("10:00");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 p-6 max-h-screen">
                <h1 className="text-2xl font-semibold mb-4">Create New Headlines</h1>

                {/* Success and Error Messages */}
                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        Headline created successfully!
                    </div>
                )}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Cover Photo Upload */}
                    <div
                        className="border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 mb-4 cursor-pointer"
                        onClick={() => document.getElementById("coverPhotoInput").click()}
                    >
                        {coverPhoto ? (
                            <div className="text-gray-800">Photo selected: {coverPhoto.name}</div>
                        ) : (
                            <div className="text-gray-500">+ Add Cover Photo</div>
                        )}
                        <input
                            id="coverPhotoInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleCoverPhotoChange}
                        />
                    </div>

                    {/* Category and Subcategory */}
                    <div className="flex flex-row w-full space-x-4 p-4 ">
                        <div className="flex flex-col w-1/2 ">
                            <label>Category</label>
                            <input
                                type="text"
                                className="bg-white text-gray-500 px-6 py-3 border border-gray-400 p-2 rounded-md "
                                placeholder="News"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </div>

                        <div className="flex flex-col space-y-2 w-1/2">
                            <label>Subcategory</label>
                            <input
                                type="text"
                                className="bg-white text-gray-500 px-6 py-3 border border-gray-400 p-2 rounded-md"
                                placeholder="News"
                                value={subcategory}
                                onChange={(e) => setSubcategory(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Title Input */}
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-md mt-1 mb-3"
                        placeholder="Enter headline title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    {/* Description Input */}
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        className="w-full border border-gray-300 p-2 rounded-md mt-1 mb-3 h-24"
                        placeholder="Enter description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>

                    {/* Posted By */}
                    <label className="block text-sm font-medium text-gray-700">Posted By</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-md mt-1 mb-3"
                        value={postedBy}
                        onChange={(e) => setPostedBy(e.target.value)}
                        required
                    />

                    {/* Schedule Post and Enable Comments */}
                    <div className="flex flex-row items-center mt-4">
                        <input
                            type="checkbox"
                            id="schedulePost"
                            checked={schedulePost}
                            onChange={() => setSchedulePost(!schedulePost)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="schedulePost" className="ml-2 text-sm font-medium text-gray-700">
                            Schedule your post
                        </label>
                        <input
                            type="checkbox"
                            id="enableComments"
                            checked={enableComments}
                            onChange={() => setEnableComments(!enableComments)}
                            className="h-4 w-4 ml-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="enableComments" className="ml-2 text-sm font-medium text-gray-700">
                            Enable comments
                        </label>
                    </div>

                    {/* Schedule Date & Time */}
                    {schedulePost && (
                        <div className="flex gap-4 mt-3">
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700">Schedule Posting Date</label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 p-2 rounded-md mt-1"
                                    value={scheduleDate}
                                    onChange={(e) => setScheduleDate(e.target.value)}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700">Schedule Posting Time</label>
                                <input
                                    type="time"
                                    className="w-full border border-gray-300 p-2 rounded-md mt-1"
                                    value={scheduleTime}
                                    onChange={(e) => setScheduleTime(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-6 bg-blue-900 text-white font-bold py-2 rounded-md hover:bg-blue-800 transition"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating..." : "Post Headline"}
                    </button>
                </form>
            </div>
        </div>
    );
}