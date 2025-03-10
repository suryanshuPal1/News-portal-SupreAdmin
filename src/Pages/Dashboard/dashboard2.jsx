import { useState } from "react";
import { Home, BarChart, FileText, Menu, Users, ThumbsUp, Activity } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Line, Pie } from "recharts";


const visitorData = [
  { month: "Jan", visitors: 2 },
  { month: "Feb", visitors: 3 },
  { month: "Mar", visitors: 5 },
  { month: "Apr", visitors: 7 },
  { month: "May", visitors: 6 },
  { month: "Jun", visitors: 8 },
  { month: "Jul", visitors: 10 },
  { month: "Aug", visitors: 9 },
  { month: "Sep", visitors: 11 },
  { month: "Oct", visitors: 13 },
  { month: "Nov", visitors: 15 },
  { month: "Dec", visitors: 14 },
];

const articleData = [
  { name: "Sports", value: 20 },
  { name: "Politics", value: 15 },
  { name: "Business & Economy", value: 25 },
  { name: "World News", value: 18 },
  { name: "Others", value: 22 },
];

export default function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-900 text-white p-4 w-64 transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <h2 className="text-xl font-bold mb-4">SuperAdmin</h2>
        <nav>
          <ul>
            <li className="mb-2 flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
              <Home size={20} /> Dashboard
            </li>
            <li className="mb-2 flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
              <BarChart size={20} /> Visitor Stats
            </li>
            <li className="mb-2 flex items-center gap-2 p-2 rounded hover:bg-gray-700 cursor-pointer">
              <FileText size={20} /> Popular Articles
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="md:hidden">
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Activity size={24} className="mb-2" />
              <h3 className="text-lg font-semibold">Article Engagement</h3>
              <p className="text-2xl font-bold">2,000</p>
              <p className="text-green-500">⬆ 8.5%</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <BarChart size={24} className="mb-2" />
              <h3 className="text-lg font-semibold">Video Engagement</h3>
              <p className="text-2xl font-bold">55,000</p>
              <p className="text-green-500">⬆ 1.3%</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Users size={24} className="mb-2" />
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl font-bold">10,000</p>
              <p className="text-red-500">⬇ 4.3%</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <ThumbsUp size={24} className="mb-2" />
              <h3 className="text-lg font-semibold">Likes & Share</h3>
              <p className="text-2xl font-bold">3.42M</p>
              <p className="text-green-500">⬆ 1.8%</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Visitor Statistics</h3>
              <Line data={visitorData} dataKey="visitors" stroke="#3b82f6" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">Popular Article</h3>
              <Pie data={articleData} dataKey="value" nameKey="name" />
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ul>
            <li className="flex justify-between border-b py-2">
              <span>🟣 New user registration - John Doe joined</span>
              <span className="text-gray-500">5 mins ago</span>
            </li>
            <li className="flex justify-between border-b py-2">
              <span>🔵 Article published - &quot;Top 10 Tech Trends in 2024&quot;</span>
              <span className="text-gray-500">15 mins ago</span>
            </li>
            <li className="flex justify-between py-2">
              <span>🟡 New comment - &quot;The Future of AI&quot;</span>
              <span className="text-gray-500">45 mins ago</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}