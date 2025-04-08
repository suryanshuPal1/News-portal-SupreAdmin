import React from "react";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col items-center bg-gray-100 min-h-screen px-4 py-10">
      {/* Background Image (Behind the Content) */}
      <div className="absolute top-0 w-full max-w-5xl">
        <img
          src="/Rectangle 18.png"
          alt="Background"
          className="w-full object-cover opacity-50"
        />
      </div>

      {/* Content Box */}
      <div className="relative bg-white p-10 md:p-14 rounded-2xl shadow-lg text-center max-w-5xl">
        <h2 className="text-3xl font-bold">About Us</h2>

        {/* About Section */}
        <div className="text-left mt-6 space-y-4 text-gray-600">
          <h3 className="text-xl font-semibold">About The News:</h3>
          <p>
            Your text about the company, mission, and background. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>

          <h3 className="text-xl font-semibold">Our Mission:</h3>
          <p>Your mission statement here...</p>

          <h3 className="text-xl font-semibold">Our Achievements:</h3>
          <p>Your achievements and success stories...</p>
        </div>

        {/* Team Section */}
        <h3 className="mt-8 text-xl font-semibold">The News Team:</h3>
        <p className="text-gray-600">Brief description of the team.</p>

        {/* Team Members */}
        <div className="flex justify-center gap-6 mt-6">
          <div className="text-center">
            <img
              src="/Ellipse 3 (1).png"
              alt="Member 1"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <p className="font-medium mt-2">Name 1</p>
            <p className="text-sm text-gray-500">Role</p>
          </div>

          <div className="text-center">
            <img
              src="/Ellipse 3 (2).png"
              alt="Member 2"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <p className="font-medium mt-2">Name 2</p>
            <p className="text-sm text-gray-500">Role</p>
          </div>

          <div className="text-center">
            <img
              src="/Ellipse 3 (3).png"
              alt="Member 3"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <p className="font-medium mt-2">Name 3</p>
            <p className="text-sm text-gray-500">Role</p>
          </div>

          <div className="text-center">
            <img
              src="/Ellipse 3.png"
              alt="Member 4"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <p className="font-medium mt-2">Name 4</p>
            <p className="text-sm text-gray-500">Role</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
