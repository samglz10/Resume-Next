import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight,HiOutlineCheck } from 'react-icons/hi'
import 'tailwindcss/tailwind.css'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full text-white bg-slate-700 px-5 m-auto sm:text-sm md:text-base lg:text-lg'>
            {/*Container*/}
            <div className="w-full mx-auto px-4 flex flex-col justify-center h-full ">
                <h1 className="font-bold text-white sm:text-sm md:text-xl lg:text-3xl py-1"> Hi my name is Samuel Gonzalez</h1>
                <h2 className=" py-1 font-bold text-white sm:text-sm md:text-xl 3xl:text-lg"> I am a Full Stack Developer</h2>
                <p className="py-4 text-white max-w-l">
                    I built this website in the hope of being able to share my knowledge of some of the tools I learned. Please feel free to provide any feedback or any issues that you encounter at this site.
                    my github repo is located on the left of the screen. Or you can just scroll or click my Contact page on top!
                </p>
                <div className='flex flex-row justify-start items-center gap-5 w-full'>
                    <Link to="skills" smooth={true} duration={500} >
                        <button className="text-white border-2 text-center border-blue-500 px-6 py-3 my-2 flex justify-around items-center hover:bg-blue-500 rounded-xl font-bold tracking-wider w-full ">
                            Check out my skills!
                            <HiArrowNarrowRight className="ml-4" />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Home