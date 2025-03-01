import React from 'react'
import Ellipse from '../assets/home/Ellipse.png'

export default function Profile() {
  return (
    <div className="mt-10 flex justify-center items-start bg-gray-100 min-h-screen py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        {/* Left Side */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              {/* Profile Heading */}
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Profile</h4>

              <div className="flex flex-col items-center">
                <img
                  className="h-24 w-24 rounded-full object-cover mb-2"
                  src={Ellipse}
                  alt="Arun Sharma"
                />
                <h3 className="text-md font-semibold text-gray-900">Arun Sharma</h3>
                <p className="text-gray-600 text-sm">arun1416@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h4 className="text-md font-semibold text-gray-900 mb-2">BIOGRAPHY</h4>
              <p className="text-gray-700 text-sm">
                Arun is an avid newspaper reader who starts his day with a fresh cup of coffee and the latest headlines.
                Born and raised in a small town, John developed a deep appreciation for staying informed about global
                affairs, local news, and cultural trends. His interest in journalism was sparked at an early age when he
                would read the morning paper alongside his parents, engaging in discussions about politics, sports, and
                society. For Arun, reading the newspaper is not just a habit—it's a ritual that keeps him connected to the
                world, fosters critical thinking, and fuels his curiosity about the ever-evolving landscape of news and
                information.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Form */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            {/* Profile Heading */}
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Profile</h4>

            <div className="space-y-4 mb-6">
              <div>
                <h5 className="block text-sm font-medium text-gray-700">User Information</h5>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                  defaultValue="Arun Sharma"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                  defaultValue="arun14@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                  defaultValue="(+91) 12345 67890"
                />
              </div>
              <div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Save Now
                </button>
              </div>
            </div>

            {/* Password Change Section */}
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-gray-900 mb-2">Password</h4>
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                  defaultValue="********"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                />
              </div>
              <div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
