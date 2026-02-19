import React from 'react';
import Home from './Home';
import Navbar from '../components/Navbar';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Sidebar from '../components/Sidebar';



export default function Main() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className=" grid grid-cols-1 container mx-auto p-5 desktop:p-10 laptop:p-10 tablet:p-8 mobile:p-2 bg-slate-700 text-white gap-10 ">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>

    </>
  )
}
