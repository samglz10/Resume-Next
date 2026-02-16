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
    <Navbar/>
    <Sidebar/>
    <div className=" grid grid-cols-1 container mx-auto p-4 desktop:p-12 laptop:p-12 tablet:p-8 mobile:p-4 bg-slate-700 text-white ">
      <Home />
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>

    </>
   )
}
