import React from 'react';
import { FiBookmark } from 'react-icons/fi'; // You might need to install react-icons if you haven't already

export default function SettingsHistory() {
  const searchHistoryData = [
    { query: 'Todays Live Politicle News', time: 'Today' },
    { query: 'Budget 2025', time: 'Today' },
    { query: 'Todays Live Cricket T20 Match', time: 'Yesterday' },
    { query: 'Trendy Business & Economics ideas', time: 'Yesterday' },
    { query: 'Todays Indian News', time: 'Yesterday' },
    { query: 'World News', time: '1 days ago' },
    { query: 'Sports News', time: '1 days ago' },
    { query: 'Political News', time: '2 days ago' },
    { query: 'Todays Live Football Match', time: '3 days ago' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className=" mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Search History</h2>

        {searchHistoryData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4 mb-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-800">{item.query}</div>
                <div className="text-gray-500 text-xs">{item.time}</div>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <FiBookmark /> {/* Bookmark Icon */}
              </button>
            </div>
          </div>
        ))}

        
      </div>
    </div>
  );
}
