import React from 'react'
import Home from './Home'
import Navbar from '../components/Navbar'
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Contact from './Contact'



export default function Main() {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col justify-between '>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>

    </>
   )
}

