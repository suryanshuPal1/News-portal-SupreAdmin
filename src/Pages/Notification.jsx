Notification

import React from "react";
import { CheckCircle, Send, LineChart } from "lucide-react";
import { Clock, Mail} from "lucide-react";
import { Search,  Eye } from "lucide-react";

export default function Notification() {

  const stats = [
    {
      icon: <Send className="text-pink-500" size={24} />, 
      title: "Total Sent Today", 
      value: "1234",
      textColor: "text-black", 
    },
    {
      icon: <CheckCircle className="text-green-500" size={24} />, 
      title: "Delivery Rate", 
      value: "1234",
      textColor: "text-green-600", 
    },
    {
      icon: <LineChart className="text-blue-500" size={24} />, 
      title: "Engagement Rate", 
      value: "1234",
      textColor: "text-blue-600", 
    },
  ];

  const notifications = [
    {
      iconColor: "bg-blue-200 text-blue-600",
      title: "New Article Published",
      message: "Breaking news: Tech giant announces revolutionary AI breakthrough",
      time: "15 minutes ago",
      delivered: "98%",
      read: "45%",
    },
    {
      iconColor: "bg-yellow-200 text-yellow-600",
      title: "Breaking News Alert",
      message: "New article 'Tech Industry Trends 2024' has been published.",
      time: "45 minutes ago",
      delivered: "100%",
      read: "85%",
    },
    {
      iconColor: "bg-yellow-200 text-yellow-600",
      title: "Breaking News: Tech Innovation Summit 2024",
      message: "Breaking News: Tech Innovation Summit 2024",
      time: "1 hour ago",
      delivered: "100%",
      read: "95%",
    },
  ];

 return (

  <>
  
  <div className="p-6 pt-22 bg-gray-100">
    <div className="text-2xl font-semibold mb-4">
     Notification Management
     </div>
     
   <div className="flex gap-50 m-5  justify-center items-center">
       {stats.map((stat, index) => (
         <div
           key={index}
           className="flex items-center p-4 bg-white shadow-md rounded-lg w-64 "
         >
           <div className="mr-3 bg-gray-100 p-2 rounded-full">{stat.icon}</div>
           <div>
             <p className="text-gray-600 text-sm font-semibold">{stat.title}</p>
             <p className={`text-lg font-bold ${stat.textColor}`}>{stat.value}</p>
           </div>
         </div>
       ))}
     </div>

     <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Create New Notification</h2>
      
      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Title</label>
        <input
          type="text"
          placeholder="Enter Notification Title"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {/* Message Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Message</label>
        <textarea
          placeholder="Enter notification message"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>
      </div>
      
      {/* Dropdowns */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 mb-1">Notification Type</label>
          <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>News Update</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Target Audience</label>
          <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Users</option>
          </select>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex gap-4 justify-end">
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
          <Clock size={18} /> Schedule
        </button>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100">
          <Mail size={18} /> Save Draft
        </button>
        <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
          <Send size={18} /> Send Notification
        </button>
      </div>
    </div>

    <div className="w-full mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Notifications</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Notification"
            className="px-4 py-2 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>
      </div>

      {notifications.map((notif, index) => (
        <div key={index} className="flex items-start gap-4 py-3 border-b last:border-none">
          <div className={`p-2 rounded-full ${notif.iconColor}`}>
            <Eye size={20} />
          </div>
          <div>
            <p className="font-semibold">{notif.title}</p>
            <p className="text-gray-600 text-sm">{notif.message}</p>
            <p className="text-gray-500 text-xs mt-1">Sent to All Users • {notif.time}</p>
            <div className="flex items-center gap-4 mt-1 text-sm">
              <div className="flex items-center text-green-600">
                <CheckCircle size={16} className="mr-1" /> Delivered {notif.delivered}
              </div>
              <div className="flex items-center text-blue-600">
                <Eye size={16} className="mr-1" /> Read {notif.read}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
     
     </div></>

  );
}
