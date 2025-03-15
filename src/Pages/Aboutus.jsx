import React from "react";

const teamMembers = [
    { name: "Garv Jadhav", role: "Founder & CEO", img: "/Ellipse3-3.png" },
    { name: "Sunil Data", role: "VP Head of Growth", img: "/Ellipse3-2.png" },
    { name: "Chetan Kadu", role: "Co-Founder and Head of Foundation", img: "/Ellipse3-1.png" },
    { name: "Saiman Sheikh", role: "Head of Engineering", img: "/Ellipse3.png" },
  ];
  

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        
        <section className="mb-6">
          <img src="/mnt/data/Rectangle 18.png" alt="News Cover" className="w-full rounded-lg" />
          <p className="mt-4 text-gray-700">
            The News is a formidable global news network, operating across both traditional and digital platforms...
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            In order to track and analyze human emotions, The News uses open data collection...
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Our Achievements</h2>
          <p className="text-gray-700 mt-2">
            We have successfully delivered world-class journalism, covering global affairs...
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-center">The News Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg shadow-md">
                <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
