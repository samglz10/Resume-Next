import React from 'react'
import {Link} from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'
import 'tailwindcss/tailwind.css'

const Home = () =>{
    return (
        <div name="home"  className='h-screen w-full text-white bg-slate-700'>
            {/*Container*/}
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full px-4 ">
                <h1 className="font-bold text-white text-4xl py-1"> Hi name is Samuel Gonzalez</h1> 
                    <h2 className=" py-1 font-bold text-white text-4xl"> I am an Entry-Level Full Stack Developer</h2>
                    <p className="py-4 text-white max-w-l"> 
                    I built this website in the hope of being able to share my knowledge of some of the tools I learned while taking a Full Software Program at American University. Please feel free to provide any feedback or any issues that you encounter at this site. 
                    my github repo is located on the right of the screen. Or you can just scroll or click my Contact page. 
                    </p>
                    <div>
                        <button className="text-white border-2  border-sky-500 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r from-sky-500 to-blue-800">
                        <Link  to="work"  smooth={true} duration={500}>
                            Check out my work!
                        </Link>
                            <HiArrowNarrowRight className= "ml-4"/>  
                        </button>
                    </div>

            </div>
        </div>
    )
}

export default Home