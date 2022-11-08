import React from 'react'
import {Link} from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'
import 'tailwindcss/tailwind.css'

const Home = () =>{
    return (
        <div name="home"  className='h-screen w-full text-white bg-slate-700'>
            {/*Container*/}
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full ">
                <h1 className="font-bold text-white text-5xl py-1"> Hi name is Samuel Gonzalez</h1>
                    <h2 className=" py-1 font-bold text-white text-5xl"> I am a Full Stack Developer</h2>
                    <p className="py-4 text-white max-w-l">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Harum ratione deserunt repellendus nihil, dignissimos at molestiae nostrum aliquid fugit minus maiores 
                        minima provident natus dolor asperiores sit enim, eos doloribus?
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