import { useState } from 'react';
import Image from 'next/image'
import { AiOutlineHome } from 'react-icons/ai'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';
import 'tailwindcss/tailwind.css';
//import LoginButton from '../pages/login';


const Sidebar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            label: 'LinkedIn',
            icon: <FaLinkedin size={25} />,
            href: 'https://www.linkedin.com/in/samuelegonzalez/',
            style: 'bg-blue-500 font-bold text-white',
        },
        {
            id: 2,
            label: 'Github',
            icon: <FaGithub size={25} />,
            href: 'https://github.com/samglz10',
            style: 'bg-gray-900 outline-white border-1 border-white font-bold text-white',
        },
        {
            id: 3,
            label: 'Email',
            icon: <HiOutlineMail size={25} />,
            href: 'mailto:samglz10@gmail.com?&subject=Checked out your site from Vercel!',
            style: 'bg-red-600 font-bold text-white',
        },
        {
            id: 4,
            label: 'Resume',
            icon: <BsFillPersonLinesFill size={25} />,
            href: '/GonzalezResume.pdf',
            style: 'bg-teal-500 font-bold text-white',
            download: true,
        },
    ];

    return (
        <div>
            {/*desktop Icons*/}
            <div className="hidden desktop:flex fixed flex-row left-0 top-1/2 m-auto -translate-y-1/2 pl-2 z-30">
                <ul>
                    {links.map(({ id, label, icon, href, style, download }) => (
                        <li key={id} className={`w-[150px] h-[60px] flex justify-between text-black items-center ml-[-100px] hover:ml-[-10px] duration-300 px-[10px] rounded-r-xl font-bold ${style}`}>
                            <a className="flex justify-between items-center w-full text-gray-300"
                                href={href} download={download}>
                                {label} {icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Icons web menu bottom */}
            <div className="flex tablet:hidden fixed  flex-row place-content-center bottom-0 left-0 w-full bg-gray-800 pt-1 z-30 ">
                <ul className='flex flex-row  justify-center items-center text-center w-screen'>
                    {links.map(({ id, icon, href, style, download }) => (
                        <li key={id} className={`w-[60px] h-[45px] object-cover mx-0.5 flex flex-row justify-between pt-0.5 text-black items-center rounded-t-xl font-bold ${style} hover:cursor-pointer transform hover:scale-110 duration-300`}>
                            <a className="flex justify-between items-center w-full text-gray-300 mx-5"
                                href={href} download={download}>
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar