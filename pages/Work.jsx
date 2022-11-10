import React from 'react' 
import Image from 'next/image'
import placeholder from '../public/placeholder.svg'
import Javascriptlogo from '../public/javascriptlogo.png' 


const Work = () => {

    return (
      <div name= 'work' className="  md:w-full  md:h-screen bg-slate-700 text-white flex flex-col justify-center px-4 ">
        <div className='max-w-full p-4 flex flex-col justify-center w-full h-full px-16 '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-white border-sky-700'>
                    Work</p>
                <p className='py-6'>Checkout some of my work!</p>
            </div>
            {/*Container for my work */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <div>
                <div className='shadow-lg shadow-sky-500 group container rounded-md flex justify-center items-center mx-auto bg-image-card h-72'>
                    {/* Hover effects */}
                    <div className=''>
                        <span className='flex flex-col items-center text-2xl font-bold text-white tracking-wider bg-image-card text-center'>
                            Fly JS Game!
                        </span>
                        <Image src="/icons8-github-512.png" alt="My Profile" width={500} height={500} className=" flex mx-auto justify-center items-center rounded-full object-cover w-20 h-20 m-5 "/>
                        <div className='opacity:0 text-center hover:opacity-110 bg-imagecard'>
                            {/*upload Demo code when uploaded to another host site */}
                            <a  className='hover:opacity:0 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</a>
                            {/*upload Github code */}
                            <a href="https://github.com/samglz10/web-game-starter" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code </a>
                        </div>
                    </div>
                </div>
            </div> 
            {/* Second Grid image */}
                <div className='shadow-lg shadow-sky-500 group container rounde-md flex justify-center items-center mx-auto bg-image-card h-72'>
                    {/* Hover effects */}
                    <div className=''>
                        <span className='flex flex-col items-center text-2xl font-bold text-white tracking-wider bg-image-card text-center'>
                            Favorite Movies Watchlist Site!
                        </span>
                        <Image src="/movies-logo.svg" alt="My Profile" width={500} height={500} className=" flex mx-auto justify-center items-center rounded-full object-cover w-20 h-20 m-5 "/>
                        <div className='pt-8 text-center'>
                            {/*upload Demo code when uploaded to another host site */}
                            <a  className='hover:opacity:0 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</a>
                            {/*upload Github code */}
                            <a href="https://github.com/samglz10/t3-starter-mysql" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code </a>
                        </div>
                    </div>
                </div>
            {/* Third Grid image */}
                <div className='shadow-lg shadow-sky-500 group container rounde-md flex justify-center items-center mx-auto bg-image-card h-72'>
                    {/* Hover effects */}
                    <div className=''>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Comics in Context
                        </span>
                        <Image src="/comic-logo.svg" alt="My Profile" width={500} height={500} className=" flex mx-auto justify-center items-center rounded-full object-cover w-20 h-20 m-5 "/>
                        <div className='pt-8 text-center'>
                            {/*upload Demo code when uploaded to another host site */}
                            <a  className='hover:opacity:0 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</a>
                            {/*upload Github code */}
                            <a href="https://github.com/samglz10/rr-4-comics-in-context-.git" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code </a>
                        </div>
                    </div>
                </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default Work;