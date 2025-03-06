import React, { useEffect, useState } from "react";
import Ellipse from "../assets/home/Ellipse.png";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    profilePic: null,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const token = localStorage.getItem("authToken"); // Get token dynamically

  useEffect(() => {
    if (!token) {
      alert("No token provided. Redirecting to login...");
      window.location.href = "/login"; // Redirect to login page
      return;
    }

    fetch("https://newsportalbackend-crdw.onrender.com/api/superadmin/profilen", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          alert("Session expired. Please login again.");
          localStorage.removeItem("authToken");
          window.location.href = "/login";
          return;
        }
        return res.json();
      })
      .then((data) => {
        setProfile({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          bio: data.bio || "",
        });
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, [token]);

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleProfilePicChange = (e) => {
    setProfile({ ...profile, profilePic: e.target.files[0] });
  };

  const handleProfileUpdate = () => {
    fetch("https://newsportalbackend-crdw.onrender.com/api/superadmin/update-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((error) => console.error("Error updating profile:", error));
  };

  const handleBioPicUpdate = () => {
    const formData = new FormData();
    formData.append("bio", profile.bio);
    if (profile.profilePic) {
      formData.append("profilePic", profile.profilePic);
    }

    fetch("https://newsportalbackend-crdw.onrender.com/api/superadmin/update-bio-profilepic", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((error) => console.error("Error updating bio/profile pic:", error));
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    fetch("https://newsportalbackend-crdw.onrender.com/api/superadmin/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        oldPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((error) => console.error("Error changing password:", error));
  };

  return (
    <div className="mt-10 flex justify-center items-start bg-gray-100 min-h-screen py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Profile</h4>
            <div className="flex flex-col items-center">
              <img className="h-24 w-24 rounded-full object-cover mb-2" src={Ellipse} alt={profile.name} />
              <input type="file" onChange={handleProfilePicChange} className="mt-2" />
              <h3 className="text-md font-semibold text-gray-900">{profile.name}</h3>
              <p className="text-gray-600 text-sm">{profile.email}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <h4 className="text-md font-semibold text-gray-900 mb-2">BIOGRAPHY</h4>
            <textarea name="bio" value={profile.bio} onChange={handleInputChange} className="w-full p-2 border rounded-md"></textarea>
            <button onClick={handleBioPicUpdate} className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">
              Update Bio & Picture
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Profile</h4>
          <label>Name</label>
          <input type="text" name="name" value={profile.name} onChange={handleInputChange} className="block w-full border p-2" />
          <label>Email</label>
          <input type="email" name="email" value={profile.email} onChange={handleInputChange} className="block w-full border p-2" />
          <label>Phone</label>
          <input type="tel" name="phone" value={profile.phone} onChange={handleInputChange} className="block w-full border p-2" />
          <button onClick={handleProfileUpdate} className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">
            Save Now
          </button>

          <h4 className="text-md font-semibold text-gray-900 mt-6">Password</h4>
          <input type="password" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} className="block w-full border p-2" placeholder="Current Password" />
          <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} className="block w-full border p-2" placeholder="New Password" />
          <input type="password" name="confirmNewPassword" value={passwordData.confirmNewPassword} onChange={handlePasswordChange} className="block w-full border p-2" placeholder="Confirm New Password" />
          <button onClick={handleChangePassword} className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
