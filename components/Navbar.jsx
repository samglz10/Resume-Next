import {useState} from 'react';
import profile from '../public/profile.jpg';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import 'tailwindcss/tailwind.css'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    //setNav will set nav to it's opposite value
    const handleClick = () => setNav(!nav)
return (
    <nav className ="fixed w-full h-[100px] flex justify-between items-center px-4  text-white bg-gradient-to-r from-sky-500 to-blue-800 z-30"> 
        <Link  to="home"  smooth={true} duration={500}> 
            <img src={profile} alt="My Profile" className="rounded-full object-cover w-20 h-20 m-5 hover:cursor-pointer"/>
        </Link>
         {/* WebMenu*/}
            <ul className="hidden md:flex flex-row justify-between items-center " >
                <li className="text-spacing">
                    <Link  to="home"  smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="text-spacing">
                    <Link  to="about"  smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="text-spacing">
                    <Link  to="skills"  smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="text-spacing">
                    <Link  to="work"  smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="text-spacing">
                    <Link  to="contact"  smooth={true} duration={500}>
                         Contact
                    </Link>
                </li>
            </ul>

        {/* Hamburger*/}
        <div onClick={handleClick} className= "md:hidden z-10">
            {/*ternary function */}
            {!nav ? <FaBars/> : <FaTimes/>}
            {}
        </div>
        {/* mobile menu*/}
        <div className={!nav ? "hidden":"absolute top-0 left-0 w-full h-screen text-white bg-gradient-to-r  from-sky-500 to-blue-800 flex flex-col justify-center items-center"}>
        <ul>
            <li className="py-6 text-4xl" >
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
                </li>                <li className="w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="/"> Email <HiOutlineMail size={40}/></a>
                </li>                <li className="w-[160px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-500 px-[10px]">
                    <a className= "flex justify-between items-center w-full text-gray-300"
                    href="/"> Resume <BsFillPersonLinesFill size={40}/></a>
                </li>
            </ul>
        </div>
    </nav>
)
}

export default Navbar