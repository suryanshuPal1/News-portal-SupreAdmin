import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import emailposter from '../../assets/emailPoster.png';


const EmailVerification = () => {
  const navigate = useNavigate()
  const userEmail = localStorage.getItem("email")
  
  
  const [values,setValues] = useState({otp:""});
  const [isOtpSent, setIsOtpSent]= useState(false)

  const change=(e)=>{
    const {name ,value} = e.target
    setValues({...values ,[name]:value})
  }
  console.log(userEmail)


  const submit = async () => {
    try {
      if(userEmail === ""){
        alert('Invalid email')
      }else{

        const payload = {
          email:userEmail,
          otp : values.otp
        }
        console.log(payload);
        
        const response = await axios.post('https://newsportalbackend-crdw.onrender.com/api/superadmin/verify-email',payload)
        // console.log(response)
        console.log(response)
        localStorage.setItem("email", values.email)
        alert(response.data.message)
        // alert(response?.data.message)
        navigate("/email-verify-success")
      }
    } catch (error) {
      console.log(error)
      alert(error.response?.data?.message);
    }
  }

  async function resendOtp(){
    try {
      const payload={
        email:userEmail,
      }
      const response = await axios.post('https://newsportalbackend-crdw.onrender.com/api/superadmin/resend-otp',payload)
      alert(response.data.message)
    } catch (error) {
      
      console.log(error)
      alert(error.response?.data?.message);
    }
  }

  async function handleResend(){
    await resendOtp();
  }


  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-col-reverse w-screen h-screen">

      <div className="h-auto md:h-screen flex flex-col items-center justify-center bg-gray-100 p-6 lg:w-[60%]">
        <div className="text-center w-[43%]">
          <h3 className="text-2xl font-semibold">Email Verification</h3>
          <p className="text-gray-600 text-sm pt-3">We've sent an verification to <span className="text-black">{userEmail}</span> to verify your email address and activate your account</p>
        </div>
        <form className="flex justify-center flex-col w-[80%]" onSubmit={(e)=>{e.preventDefault();}}>
        <div className='lg:mb-6 w-[60%] m-[4%]'>
             <label htmlFor="otp" className="block mb-2 text-zinc-800 text-sm font-medium">Email/Number</label>
             <input type="number" name="otp" id="otp" onChange={change}
              value={values.otp}
             className="border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600  placeholder-gray-400 focus:ring-blue-500  focus:border-blue-500" placeholder="Enter your registered email/number" required="">
            </input>
        </div>
        
        <p className="text-gray-500 font-bold text-sm text-center mt-4 px-4">
          Didn't recieve any code! <button className="text-[#1C2059]" onClick={handleResend}>Resend Code</button>
        </p>

        <button onClick={submit} className="mt-12 w-[60%] bg-[#1C2059] text-white py-2 rounded-lg">
          Verify My Email
        </button>
        </form>
      </div>

      <div className="md:h-screen lg:w-[40%]  bg-[#1C2059] flex flex-col items-center justify-center p-6">
          <img src={emailposter} alt="Super Admin" className="w-60 md:w-60 mt-5" />       
      </div>

    </div>
  );
};

export default EmailVerification;

