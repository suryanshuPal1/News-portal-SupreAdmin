import { Routes, Route } from 'react-router-dom'
import './App.css'
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
import ShowNews from "./Pages/New/ShowNews"
import PostNewHeadline from './Pages/New/PostNewHeadline'
import Profile from './Pages/Profile'
import Notification from './Pages/Notification'
import Dashboard from './Pages/Dashboard/Dashboard'


function App() {
  const[showNav, setShowNav] = useState(false);
  
  const navHandler = () => {
    setShowNav((prev) => !prev);
  }

  const closeNav = () => {
    setShowNav(false);
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
            <Route path='/' element={<Dashboard/>}/>
            
            <Route path='/notification' element={<Notification/>}/>
            
            <Route path='/manage-headline/:newsId' element={<ManageHeadline/>}/>
            <Route path='/manage-new-article' element={<ManageArticle/>}/>
            <Route path='/manage-video' element={<ManageVideo/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/show-news' element={<ShowNews/>}/>
            <Route path='/post-new-headline' element={<PostNewHeadline/>}/>
            <Route path='/post-new-article' element={<PostNewArticle/>}/>
            <Route path='/post-video' element={<PostVideo/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </section>
  )
}

export default App
