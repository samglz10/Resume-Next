import {useState} from 'react';
import Image from 'next/image'
import{AiOutlineHome} from 'react-icons/ai'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import 'tailwindcss/tailwind.css'
import LoginButton from '../pages/login';


const Navbar = () => {
    const[nav, setNav] = useState(false)
    //setNav will set nav to it's opposite value
    const handleClick = () => setNav(!nav)
return (
    <nav className ="fixed w-full h-[100px] flex justify-between items-center px-4  text-white bg-gradient-to-r from-sky-500 to-blue-800 text-spacing z-30"> 
        <a  href="/"  smooth={true} duration={500} className="p"> 
            <Image src="/profile.jpg" alt="My Profile" width={500} height={500} className="rounded-full object-cover w-20 h-20 m-5 hover:cursor-pointer"/>
        </a>
         {/* WebMenu*/}
            <ul className="hidden md:flex flex-row justify-between items-center hover:cursor-pointer text-spacing" >
                <li className="px-5">
                    <Link to="home"  smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className="px-5">
                    <Link  to="about"  smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="px-5">
                    <Link  to="skills"  smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="px-5">
                    <Link  to="work"  smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="px-5">
                    <Link  to="contact"  smooth={true} duration={500}>
                         Contact
                    </Link>
                </li>
                <li className="px-5">
                    <LoginButton/>
                </li>
            </ul>

        {/* Hamburger*/}
        <div onClick={handleClick} className= "md:hidden z-10">
            {/*ternary function */}
            {!nav ? <FaBars/> : <FaTimes/>}
            {}
        </div>
        {/* mobile menu*/}
        <div className={!nav ? "hidden":"absolute top-0 left-0 w-full h-screen text-white bg-gradient-to-r  from-sky-500 to-blue-800 flex flex-col justify-center items-center z-30"}>
        <ul>
            <li className="py-6 text-4xl flex flex-col" >
                <Link onClick={handleClick} to="home"  smooth={true} duration={500}>
                        Home
                </Link>
            </li>
            <li className="py-6 text-4xl" >
                <Link onClick={handleClick} to="about"  smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className="py-6 text-4xl" >
                <Link onClick={handleClick} to="skills"  smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className="py-6 text-4xl" >
                <Link onClick={handleClick} to="work"  smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className="py-6 text-4xl" >
                <Link onClick={handleClick} to="contact"  smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            <li className="py-6 text-4xl" >
                <LoginButton>Sign in </LoginButton>
            </li>
        </ul>
        </div>
        {/*Icons*/}
        <div className="hidden lg:flex fixed flex-row left-0 top-1/2 ">
            <ul>
                <li className=" w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="https://www.linkedin.com/in/samuelegonzalez/"> LinkedIn <FaLinkedin size={40}/></a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="https://github.com/samglz10"> Github <FaGithub size={40}/></a>
                </li>                
                <li className="w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="mailto:samglz10@gmail.com?&subject=Checked out your site from Vercel!"> Email <HiOutlineMail size={40}/></a>
                </li>                
                <li className="w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-500 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="/Samuel_Gonzalez-Renteria_Resume_08-11-2022-19-51-53.pdf" alt="Resume PDF download"> Resume <BsFillPersonLinesFill size={40}/></a>
                </li>
            </ul>
        </div>

        {/* Icons web menu */}
        <div className="sm:hidden flex fixed flex-row place-content-center bottom-0 mx-4  ">
            <ul className='flex flex-row w-auto justify-center items-center text-center'>
                <li className=" w-[80px] h-[60px] object-cover flex flex-row justify-between text-black items-center bg-blue-500 ">
                    <a className= "flex justify-between items-center w-full text-gray-300 mx-5"
                    href="https://www.linkedin.com/in/samuelegonzalez/"> <FaLinkedin  size={40}/></a>
                </li>
                <li className="w-[80px] h-[60px] flex justify-between text-black items-center bg-gray-900 ">
                    <a className= "flex justify-between items-center w-full text-gray-300 mx-5"
                    href="https://github.com/samglz10"><FaGithub size={40}/></a>
                </li>                
                <li className="w-[80px] h-[60px] flex justify-between text-black items-center bg-red-600 ">
                    <a className= "flex justify-between items-center w-full text-gray-300 mx-5"
                    href="mailto:samglz10@gmail.com?&subject=Checked out your site from Vercel!">  <HiOutlineMail size={40}/></a>
                </li>                
                <li className="w-[80px] h-[60px] flex justify-between text-black items-center  bg-teal-500 ">
                    <a className= "flex justify-between items-center w-full text-gray-300 mx-5"
                    href="/Samuel_Gonzalez-Renteria_Resume_08-11-2022-19-51-53.pdf" alt="Resume PDF download"> <BsFillPersonLinesFill size={40}/></a>
                </li>
            </ul>
        </div>


    </nav>
)
}

export default Navbar