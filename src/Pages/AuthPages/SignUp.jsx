import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


import  EyeIcon from '../../assets/images/eye-open.png'
import  EyeOffIcon from '../../assets/images/eye.png'
import Img from '../../assets/sign in and sign up cover img/signupCover.png'


import { Link } from "react-router-dom";

export default function SignUp() {
 const [showPassword, setShowPassword] = useState(false);
 const [loading, setLoading] = useState(false);

 const navigate = useNavigate()


 const [successMessage, setSuccessMessage] = useState("");
 const [error, setError] = useState(null);

 const [formData, setFormData] = useState({
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: ""
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError(null);
  setSuccessMessage("");

  try {
    const response = await axios.post(
      "https://newsportalbackend-crdw.onrender.com/api/users/signup",
      formData
    );

    if (response.status >= 200 && response.status < 300) {
      setSuccessMessage(response.data.message || "Signup successful!");
      setFormData({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/sign-in");
    } else {
      throw new Error("Unexpected response from the server.");
    }
  } catch (err) {
    alert(err.response.data.message)
    // console.error(err.response.data.message);
    setError(
      err.response?.data?.message ||
      err.message ||
      "Something went wrong! Please try again."
    );
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-col w-screen h-screen">
        
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-10">
          <h1 className="text-3xl font-bold mb-6">Sign Up to your Super Admin </h1>
  
              <form className="flex flex-col" onSubmit={ handleSubmit } >
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg w-full p-2.5"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg w-full p-2.5"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg w-full p-2.5"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg w-full p-2.5 pr-10"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? <img src={EyeOffIcon} className="w-6" /> : <img src={EyeIcon} className="w-6" />}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg w-full p-2.5 pr-10"
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                >
                                    {showPassword ? <img src={EyeOffIcon} className="w-6" /> : <img src={EyeIcon} className="w-6" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="my-4 w-full text-white bg-[#101450] font-medium rounded-lg text-sm px-5 py-2.5"
                            disabled={loading}
                        >
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>

                        <p className="text-sm font-light text-black flex justify-center ">
                            Already have an account?<Link to='/log-in' className="font-medium hover:underline text-[#101450] ">login</Link>
                        </p>
                    </form>        
        </div>
  
        <div className='h-screen lg:w-[50%] bg-[#1C2059] border flex justify-center items-center'>
            <img src={Img} alt="Teamwork Illustration" className='h-screen'/>
        </div>
      </div>
  )
}
