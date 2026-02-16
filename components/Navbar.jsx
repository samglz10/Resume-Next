import { useState } from 'react';
import Image from 'next/image'
import { AiOutlineHome } from 'react-icons/ai'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';
import 'tailwindcss/tailwind.css';
//import LoginButton from '../pages/login';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    //setNav will set nav to it's opposite value
    const handleClick = () => setNav(!nav)
    return (
        <nav className="fixed h-[75px] flex justify-between items-center px-4 text-white bg-gradient-to-r from-sky-500 to-blue-800 text-spacing z-30 shadow-md shadow-slate-900 w-full">
            <a href="/" smooth="true" duration={500} className="p">
                <Image src="/profile.jpg" alt="My Profile" width={500} height={500} className="rounded-full object-cover w-10 h-10 m-auto hover:cursor-pointer" />
            </a>
            {/* WebMenu*/}
            <ul className="hidden desktop:flex flex-row justify-between items-center hover:cursor-pointer text-spacing text-2xl font-bold" >
                <li className="px-5 flex flex-col hover:drop-shadow-[0_5px_5px_rgba(0,0,0,2)] transition duration-200" >
                    <Link to="home" smooth="true" duration={500} >
                        Home
                    </Link>
                </li>
                <li className="px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200">
                    <Link to="about" smooth="true" duration={500}>
                        About
                    </Link>
                </li>
                <li className="px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200">
                    <Link to="skills" smooth="true" duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200">
                    <Link to="work" smooth="true" duration={500}>
                        Work
                    </Link>
                </li>
                <li className="px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200">
                    <Link to="contact" smooth="true" duration={500}>
                        Contact
                    </Link>
                </li>
                {/**
                 *                 <li className="px-5">
                    <LoginButton />
                </li>
                */}

            </ul>

            {/* Hamburger*/}
            <div onClick={handleClick} className="z-10 hover:cursor-pointer w-8 h-8 flex justify-center items-center ">
                {/*ternary function */}
                {!nav ? < FaBars  className="desktop:hidden  w-12 h-12 z-100 text-white hover:cursor-pointer" /> : <FaTimes  className="text-white w-12 h-12 z-100" />}
            </div>

          
            {/* mobile menu*/}
            <div className={!nav ? "hidden" : "absolute text-center top-0 left-0 w-full h-screen text-white bg-gradient-to-r from-sky-500 to-blue-800 flex flex-col justify-center items-center z-30  md:hidden"}>
                <ul className="text-xl font-bold hover:cursor-pointer text-spacing flex flex-col justify-center items-center">
                    <li className="py-6 text-4xl px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200 flex flex-col" >
                        <Link onClick={handleClick} to="home" smooth="true" duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className="py-6 text-4xl px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200" >
                        <Link onClick={handleClick} to="about" smooth="true" duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="py-6 text-4xl px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200" >
                        <Link onClick={handleClick} to="skills" smooth="true" duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className="py-6 text-4xl px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200" >
                        <Link onClick={handleClick} to="work" smooth="true" duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className="py-6 text-4xl px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200" >
                        <Link onClick={handleClick} to="contact" smooth="true" duration={500}>
                            Contact
                        </Link>
                    </li>
                    {/** 
                    <li className="py-6 text-4xl px-5 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,1)] transition duration-200" >
                        <LoginButton>Sign in </LoginButton>
                    </li>
                    */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar