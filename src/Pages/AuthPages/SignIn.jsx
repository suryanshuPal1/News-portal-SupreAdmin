import React from 'react';
import { useState } from 'react';
import axios from "axios";
import  EyeIcon from '../../assets/images/eye-open.png'
import  EyeOffIcon from '../../assets/images/eye.png'
import Img from "../../assets/sign in and sign up cover img/signinCover.png"
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { useNavigate } from 'react-router-dom';



export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    username:"", 
    password:"",
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }
  // console.log({values})

  const submit = async () => {
    try{
      if(
        values.username === ""||
        values.password === ""
      ){
        setError ("All field are required");
        alert('error')
      }else{   
        const response = await axios.post("https://newsportalbackend-crdw.onrender.com/api/v1/users/signin", values)
        console.log(response.data)
        console.log(response?.data?.user?._id)
        if(response.data.user.role === "USER"){
          dispatch(authActions.login())
          alert(response.data.message)
        }else{
          alert('you dont have permission of Super Admin')
        }
        localStorage.setItem("id", response.data.user._id)
        localStorage.setItem("role", response.data.user.role)

        navigate("/")
      }
      }catch (error) {
        console.log(error)
        alert(error.response?.data?.message || "Something went wrong!");
      }
  }


  return (
    <div className="h-screen lg:flex lg:flex-row md:flex md:flex-col">
     
            <div className='h-screen lg:w-[50%] bg-[#1C2059] border flex justify-center items-center'>
              <img src={Img} alt="Teamwork Illustration" className='h-screen'/>
            </div>
      
           
            <div className="lg:w-[50%] flex flex-col justify-center items-center ">
              <h1 className="text-3xl font-bold lg:mb-6 m-5">Sign in to your Super Admin</h1>

              <form className="flex justify-center flex-col w-[80%]" onSubmit={(e) => { e.preventDefault(); submit(); }}>
                          <div className='lg:mb-6 mb-[6%]'>
                              <label htmlFor="username" className="block mb-2 text-zinc-800 text-sm font-medium">Username</label>
                              <input type="username" name="username" id="username" 
                              value={values.username} onChange={change}
                              className="border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600  placeholder-gray-400 focus:ring-blue-500  focus:border-blue-500" placeholder="Enter your username" required="">
                              </input>
                          </div>
                          <div className='mb-2'>
                             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">
                                    Password
                              </label>
                                <div className="relative">
                                  <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    required value={values.password} onChange={change} 
                                     className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your password"
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
                              <div className="text-right mb-6">
                  <Link to='/forget-pass' className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
                </div>
      
                {/* Login Button */}
                <button type='submit' className="w-full bg-[#1C2059] text-white py-3 rounded-lg font-medium hover:bg-[#161b4d] transition">
                  Log In
                </button>
              </form>
      
              {/* Social Login */}
              {/* <div className="w-3/4 mt-6 space-y-3">
                <button className="flex items-center justify-center w-full bg-white text-black py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                  <img src={Gicon} alt="Google" className="w-5 h-5 mr-2" />
                  Continue with Google
                </button>
                <button className="flex items-center justify-center w-full bg-white text-black py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                  <img src={Ficon} alt="Facebook" className="w-5 h-5 mr-2" />
                  Continue with Facebook
                </button>
              </div> */}
      
              {/* Signup Link */}
              <p className="mt-6 text-sm">
                Don&apos;t have an account?{" "}
                <Link  to='/sign-up' className="text-blue-600 ">Sign Up</Link >
              </p>
            </div>
    </div>
  )
}
