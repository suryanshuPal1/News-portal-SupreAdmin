import { Routes,Route } from 'react-router-dom'
import './App.css'
import { useState,useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth"; 


import SignUp from './Pages/AuthPages/SignUp';
import SignIn from './Pages/AuthPages/SignIn';
import AccountVerification from './Pages/AuthPages/AccountVerification'
import EmailVerification from './Pages/AuthPages/EmailVerification'
import ResetPassword from './Pages/AuthPages/ResetPassword'
import ResetPasswordSuccess from './Pages/AuthPages/ResetPasswordSuccess'


import ManageHeadline from './Pages/Management/ManageHeadline'
import ManageArticle from './Pages/Management/ManageArticle'
import Footer from './components/footer/Footer'

import PostNewArticle from './Pages/New/PostNewArticle'
import PostVideo from './Pages/New/PostVideo'
import ManageVideo from './Pages/Management/ManageVideo'
import PostNewHeadline from './Pages/New/PostNewHeadline'
import Profile from './Pages/Profile'
import Notification from './Pages/Notification'
import Dashboard from './Pages/Dashboard/Dashboard'
import Sidebar from './components/Sidebar/Sidebar'
import SearchNavbar from './components/Header/SearchNavbar'
import Setting from './Pages/Setting'
import ForgetPass from './Pages/AuthPages/ForgetPass';



function App() {
  const[showNav ,setShowNav] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (userId && storedRole) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(storedRole));
    }
  }, [dispatch]); 
  
  const navHandler=()=>{
    setShowNav((prev) => !prev);
    // console.log(`clicked button ${showNav}`)
  }
  const closeNav = () => {
    setShowNav(false);
    // console.log(`clicked div ${showNav}`)

  };
  

  return (
    <section className='lg:flex'>
      {isLoggedIn && 
      <div className={ `${isLoggedIn ? 'lg:w-[17%] ':'hidden'}`}>
        <Sidebar view={showNav} viewNav={navHandler}/>
      </div>}
      
      <div className={`${isLoggedIn ? 'lg:w-[83%]': 'lg:w-[100%]'}`}>
        {isLoggedIn && <SearchNavbar viewNav={navHandler} />}
        <div onClick={closeNav}>
        <Routes>
        { isLoggedIn ? (
          <>
          <Route path='/notification'element={<Notification/>}/>

          <Route path='/'element={<Dashboard/>}/>

          <Route path='/Manage-New-Headline'element={<ManageHeadline/>}/>
          <Route path='/Manage-New-Article' element={<ManageArticle/>}/>
          <Route path='/Manage-Video' element={<ManageVideo/>}/>

          <Route path='/profile' element={<Profile/>}/>
          <Route path='/setting' element={<Setting/>}/>

          <Route path='/Post-New-Headline' element={<PostNewHeadline/>}/>
          <Route path='/Post-New-Article' element={<PostNewArticle/>}/>
          <Route path='/Post-Video' element={<PostVideo/>}/>
        </>) :(<>
          <Route path='/reset-pass' element={<ResetPassword/>}/>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/forget-pass' element={<ForgetPass/>}/>
          <Route path='/acc-verify' element={<AccountVerification/>}/>
          <Route path='/email-verify' element={<EmailVerification/>}/>
        </>)}


        </Routes>
        </div>
        {isLoggedIn && <Footer/>}
      </div>
      {/* <ResetPassword />
      <ResetPasswordSuccess />
      <AccountVerification/>  
      <EmailVerification/> */}
    </section>
    
    
  )
}

export default App
