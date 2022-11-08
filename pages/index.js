import Head from 'next/head'
import Home from './Home'
import React from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Contact from './Contact'
export default function Main() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>

    </>
   )
}

