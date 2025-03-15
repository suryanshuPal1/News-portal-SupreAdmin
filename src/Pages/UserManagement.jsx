import { useState } from "react";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { FiCalendar, FiClock } from "react-icons/fi";

const UserManagement = () => {
  const usersData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: "Gaspur Antunes",
    email: "gaspar.antunes@example.com",
    joiningDate: "June 10, 2020",
  }));

  const usersPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(usersData.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-8">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 px-3 py-1 rounded-full text-sm">Daily</div>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-sm">Weekly</div>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-sm text-purple-600">Monthly</div>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-sm">Yearly</div>
          <FiCalendar className="text-gray-500 text-xl" />
          <span className="text-gray-500 text-sm">Mar 23, 2024</span>
          <FiClock className="text-gray-500 text-xl" />
          <span className="text-gray-500 text-sm">12:15 PM</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md">
 
  <div className="flex justify-between items-center mb-4">
    <button className="  px-4 py-2 rounded-lg flex items-center">
      <span className="mr-2">+ Add User</span>
    </button>
  </div>

  
  <div className="bg-white p-4 rounded-lg shadow">
    <table className="w-full border-separate border-spacing-y-5">
      <thead>
        <tr className="text-left text-gray-600 font-semibold">
          <th className="px -3">Serial No.</th>
          <th className="px-3">User Name</th>
          <th className="px-3">Email</th>
          <th className="px-3">Joining Date</th>
          <th className="px-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentUsers.map((user, index) => (
          <tr
            key={user.id}
            className={`bg-gray-100 text-gray-800  ${
              index === 0 ? "rounded-t-lg" : ""  
            } ${
              index === currentUsers.length - 1 ? "rounded-b-lg" : "" 
            }`}
          >
            <td className="px-3 py-2 rounded-l-lg">{String(user.id).padStart(2, "0")}</td>
            <td className="px-3 py-2">{user.name}</td>
            <td className="px-3 py-2">{user.email}</td>
            <td className="px-3 py-2">{user.joiningDate}</td>
            <td className="px-3 text-center flex justify-center space-x-3 rounded-r-lg">
              <button className="p-2 bg-gray-200 rounded-full">
                <FaRegEye className="text-gray-600" />
              </button>
              <button className="p-2 bg-gray-200 rounded-full">
                <FaRegTrashAlt className="text-gray-600" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2 ml-[70%]">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="p-2 bg-gray-800 text-white rounded-full"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`p-2 w-8 h-8 text-center rounded-full ${
              currentPage === i + 1 ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="p-2 bg-gray-800 text-white rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default UserManagement;