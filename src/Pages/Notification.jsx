Notification

import React from "react";
import { MdDashboard } from "react-icons/md";
import { LuFolderSearch } from "react-icons/lu";
import { FiAlertTriangle } from "react-icons/fi";
import { RxCountdownTimer } from "react-icons/rx";
import { LiaUserTimesSolid } from "react-icons/lia";
import { LuMessageSquareText } from "react-icons/lu";

export default function Notification() {
  const notificationsData = [
    {
      icon: (
        <span>
          <LuFolderSearch />
        </span>
      ),
      title: "Breaking News Alert",
      message:
        "Breaking News: Stay updated with the latest developments as the story unfolds - live updates coming in real time!",
      time: "25 minutes ago",
      action: "Delete",
    },
    {
      icon: (
        <span>
          <FiAlertTriangle />
        </span>
      ),
      title: "User Activity Alerts",
      message:
        "We noticed recent activity on your account. If this wasn't you, please review your settings and secure your account immediately.",
      action: "See",
    },
    {
      icon: (
        <span>
          <RxCountdownTimer />
        </span>
      ),
      title: "Editorial Update",
      message:
        "Our editorial team has made updates to the latest article. Stay informed with the revised content and fresh insights!",
      action: "Update",
    },
    {
      icon: (
        <span>
          <LuFolderSearch />
        </span>
      ),
      title: "User Complaints & Reports",
      message: "Report issues or share your concerns - we're here to help!",
      action: "See All",
    },
    {
      icon: (
        <span>
          <LiaUserTimesSolid />
        </span>
      ),
      title: "System updates & errors",
      message: "System update in progress. Stay tuned for improvements!",
      action: "See All",
    },
    {
      icon: (
        <span>
          <LuMessageSquareText />
        </span>
      ),
      title: "New Message",
      message: "Manish Verma : Hi, How are you doing today?",
      action: "View Message",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Notifications
          </h2>
          <button className="text-gray-800 hover:underline">
            Mark all as read
          </button>
        </div>

        {notificationsData.map((notification, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 text-2xl rounded-full bg-gray-100 flex items-center justify-center">
                {notification.icon}
              </div>
              <div className="md:text-xl text-l">
                <div className="font-semibold text-gray-800">
                  {notification.title}
                </div>
                <div className="text-gray-600 text-sm">
                  {notification.message}
                </div>
                <div className="flex items-center justify-start gap-2 mt-2">
                  <div className="text-gray-500 text-xs">
                    {notification.time}
                  </div>
                  {notification.action === "Delete" ? (
                    <button className="text-red-500 text-xs hover:underline">
                      {notification.action}
                    </button>
                  ) : (
                    notification.action && (
                      <button className="bg-midnight border border-midnight text-sm py-1 px-4 rounded-lg">
                        {notification.action}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center mt-4">
          <button className="bg-blue-900 text-white font-bold py-2 md:px-40 px-20 m-5 md:m-10 rounded">
            See More
          </button>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}
