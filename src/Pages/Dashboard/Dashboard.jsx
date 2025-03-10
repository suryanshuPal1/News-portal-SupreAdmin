import React from "react";
import { MdSchedule } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { SiLibreofficewriter } from "react-icons/si";
import { PiUserCheckFill } from "react-icons/pi";
import { FaThumbsUp } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { IoTrendingUpSharp } from "react-icons/io5";
import { IoTrendingDownSharp } from "react-icons/io5";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

export default function Dashboard() {

     // Sample data to match the image - adjust the values to reflect your data
  const data = [
    { name: 'Jan', sports: 1200000, politics: 1000000, business: 500000, world: 2000000, travel: 300000, others: 100000, indianNews: 6000000 },
    { name: 'Feb', sports: 1500000, politics: 900000, business: 600000, world: 2200000, travel: 400000, others: 200000, indianNews: 7000000 },
    { name: 'Mar', sports: 1800000, politics: 800000, business: 700000, world: 2400000, travel: 500000, others: 300000, indianNews: 8000000 },
    { name: 'Apr', sports: 2100000, politics: 700000, business: 800000, world: 2600000, travel: 600000, others: 400000, indianNews: 9000000 },
    { name: 'May', sports: 2400000, politics: 600000, business: 900000, world: 2800000, travel: 700000, others: 500000, indianNews: 8000000 },
    { name: 'Jun', sports: 2700000, politics: 500000, business: 1000000, world: 3000000, travel: 800000, others: 600000, indianNews: 7000000 },
    { name: 'Jul', sports: 3000000, politics: 400000, business: 1100000, world: 3200000, travel: 900000, others: 700000, indianNews: 6000000 },
    { name: 'Aug', sports: 4000000, politics: 700000, business: 1500000, world: 5200000, travel: 900000, others: 700000, indianNews: 9000000 },
    { name: 'Sep', sports: 4000000, politics: 6000000, business: 2100000, world: 4400000, travel: 400000, others: 800000, indianNews: 1000000 },
    { name: 'Oct', sports: 5000000, politics: 4300000, business: 2100000, world: 5400000, travel: 3400000, others: 700000, indianNews: 11000000 },
    { name: 'Nov', sports: 6000000, politics: 4300000, business: 3100000, world: 6400000, travel: 5400000, others: 1700000, indianNews: 12000000 },
    { name: 'Dec', sports: 7000000, politics: 4300000, business: 1100000, world: 3400000, travel: 2400000, others: 2700000, indianNews: 6000000 }
  ];

  const recentActivities = [
    {
      icon: "👤",
      title: "New user registration",
      description: "John Doe joined the platform",
      time: "5 minutes ago",
    },
    {
      icon: "📄",
      title: "Article published",
      description: '"Top 10 Tech Trends in 2024" is now live',
      time: "15 minutes ago",
    },
    {
      icon: "💬",
      title: "New comment",
      description: 'Sarah commented on "The Future of AI"',
      time: "45 minutes ago",
    },
  ];

  // Function to format the Y-axis labels to millions
  const formatYAxis = (tick) => {
    try {
      return (tick / 1000000).toFixed(0) + 'M+';
    } catch (error) {
      console.error("Error formatting Y-axis tick:", tick, error);
      return ''; // Return a default value in case of error
    }
  };

    const handleGraphError = (error) => {
        console.error("Error rendering the Recharts graph:", error);
        return <div className="text-red-500">Error rendering graph.  Check console for details.</div>;
    };

  return (
    <div className="p-4 bg-gray-100 mt-14 ">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 px-4 lg:px-8 ">
        <div className="flex justify-start items-center gap-4 mb-2 sm:mb-0">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-gray-500">Hello! Newspaper</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2 rounded-md bg-gray-200 px-3 py-1">
            <button className="text-sm text-gray-700 hover:text-blue-500">
              Daily
            </button>
            <button className="text-sm text-gray-700 hover:text-blue-500">
              Weekly
            </button>
            <button className="text-sm text-blue-500">Monthly</button>
            <button className="text-sm text-gray-700 hover:text-blue-500">
              Yearly
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined"><SlCalender /></span>
            <span>Mar 23, 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined"><MdSchedule /></span>
            <span>12:15 PM</span>
          </div>
        </div>
      </div>
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 px-4 lg:px-8 ">
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="text-gray-500 text-sm font-medium mb-2 flex items-center space-x-2 justify-between">
            Article Engagement <span className="material-symbols-outlined text-2xl"><SiLibreofficewriter /></span>
          </h2>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">2,000</span>
            <span className="text-green-500 flex items-center space-x-2 gap-2"><span className="material-symbols-outlined text-xl text-green-500"><IoTrendingUpSharp /></span>+8.5%</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="text-gray-500 text-sm font-medium mb-2 flex items-center space-x-2 justify-between">
            Video Engagement <span className="material-symbols-outlined text-2xl"><FaPhotoVideo /></span>
          </h2>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">55,000</span>
            <span className="text-green-500 flex items-center space-x-2 gap-2"><span className="material-symbols-outlined text-xl text-green-500"><IoTrendingUpSharp /></span>+1.3%</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="text-gray-500 text-sm font-medium mb-2 flex items-center space-x-2 justify-between">
            Author Contributions <span className="material-symbols-outlined text-2xl"> <PiUserCheckFill /></span>
          </h2>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">10,000</span>
            <span className="text-red-500 flex items-center space-x-2 gap-2"><span className="material-symbols-outlined text-xl text-red-500"><IoTrendingDownSharp /></span>-4.3%</span>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h2 className="text-gray-500 text-sm font-medium mb-2 flex items-center space-x-2 justify-between">
            Likes & Share <span className='material-symbols-outlined text-2xl'><FaThumbsUp /></span>
          </h2>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">3.42M</span>
            <span className="text-green-500 flex items-center space-x-2 gap-2"><span className="material-symbols-outlined text-xl text-green-500"><IoTrendingUpSharp /></span>+1.8%</span>
          </div>
        </div>
      </div>

      {/* Analytics Graph */}
      <div className="bg-white rounded-md p-4 shadow-sm mb-6 px-4 lg:px-8 ">
        <div className="flex flex-col items-start mb-4">
          <h2 className="text-xl py-2 font-semibold">Analytics</h2>
          <select className="px-1 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>

        {/* Placeholder for Graph */}
        <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center mb-4">
          {/* Recharts Line Chart */}
          <ResponsiveContainer width="100%" height={300}>
             {(() => {
              try {
                return (
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={formatYAxis} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sports" stroke="#ff0000" name="Sports" />
                        <Line type="monotone" dataKey="politics" stroke="#0000ff" name="Politics" />
                        <Line type="monotone" dataKey="business" stroke="#00ff00" name="Business & Economy" />
                        <Line type="monotone" dataKey="world" stroke="#8884d8" name="World" />
                        <Line type="monotone" dataKey="travel" stroke="#ffc658" name="Travel" />
                        <Line type="monotone" dataKey="others" stroke="#82ca9d" name="Others" />
                        <Line type="monotone" dataKey="indianNews" stroke="#000000" name="Indian News" />
                    </LineChart>
                );
              } catch (error) {
                return handleGraphError(error);
              }
            })()}
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-8 mt-4">
          <button className=" border-gray-400 border-solid border px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-sm">
            Weekly
          </button>
          <button className="border-gray-400 border-solid border px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-sm">
            Monthly
          </button>
          <button className="border-gray-400 border-solid border px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-sm">
            Yearly
          </button>
          <button className="border-gray-400 border-solid border px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 text-sm">
            Revenue
          </button>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-xl">
                    {activity.icon}
                  </span>
                  <div>
                    <p className="font-semibold">{activity.title}</p>
                    <p className="text-gray-500 text-sm">{activity.description}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
