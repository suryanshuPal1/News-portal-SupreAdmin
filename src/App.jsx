import { Routes,Route } from 'react-router-dom'
import './App.css'
import AccountVerification from './Pages/AuthPages/AccountVerification'
import EmailVerification from './Pages/AuthPages/EmailVerification'
import ResetPassword from './Pages/AuthPages/ResetPassword'
import ResetPasswordSuccess from './Pages/AuthPages/ResetPasswordSuccess'
import Sidebar from './components/Sidebar/Sidebar'
import SearchNavbar from './components/Header/SearchNavbar'
import Setting from './Pages/Setting'

import ManageHeadline from './Pages/Management/ManageHeadline'
import ManageArticle from './Pages/Management/ManageArticle'
import Footer from './components/footer/Footer'

import { useState } from 'react'

import PostNewArticle from './Pages/New/PostNewArticle'
import PostVideo from './Pages/New/PostVideo'
import ManageVideo from './Pages/Management/ManageVideo'
import PostNewHeadline from './Pages/New/PostNewHeadline'
import Profile from './Pages/Profile'
import Notification from './Pages/Notification'
import Dashboard from './Pages/Dashboard/Dashboard'
import SignIn from './Pages/AuthPages/SignIn'
import SignUp from './Pages/AuthPages/SignUp'



function App() {
  const[showNav ,setShowNav] = useState(false);
  
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
      <div className='lg:w-[17%]'>
        <Sidebar view={showNav} viewNav={navHandler}/>
      </div>
      <div className='lg:w-[83%]'>
        <SearchNavbar viewNav={navHandler} />
        <div onClick={closeNav}>
        <Routes>
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
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>


        </Routes>
        </div>
        <Footer/>
      </div>
      {/* <ResetPassword />
      <ResetPasswordSuccess />
      <AccountVerification/>  
      <EmailVerification/> */}
    </section>
    
  )
}

export default App
