import React from 'react'
import DrawerAppBar from './Components/header'
import Profile from './Components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import WhatIDo from './Components/WhatIDo';
import Resume from './Components/Resume';
import MySkills from './Components/MySkills';
import RecentProjects from './Components/RecentProjects';
import HireMe from './Components/HireMe';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (
    <div className='d-flex flex-column '>
      <DrawerAppBar/>
      <Profile/>
      <About/>
      <WhatIDo/>
      <Resume/>
      <MySkills/>
      {/* <RecentProjects/> */}
      <HireMe/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App