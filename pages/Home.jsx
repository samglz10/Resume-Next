import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight, HiOutlineCheck } from 'react-icons/hi'
import 'tailwindcss/tailwind.css'
/*
      'mobile': '640px',  // @media (min-width: 640px)
      'tablet': '768px',  // @media (min-width: 768px)
      'desktop': '1024px', // @media (min-width: 1024px)
      'wide': 1280px,   // @media (min-width: 1280px)
*/
const Home = () => {
    return (
        <div name="home" className=' flex flex-col justify-center items-center w-full h-screen text-white bg-slate-700 px-5 '>
            {/*Container*/}
            <div className=" w-full mx-auto px-4 flex flex-col justify-center h-full overflow-x-hidden">
                <h4 className="font-bold text-white text-2xl mobile:text-2xl desktop:text-3xl wide:text-4xl py-1 inline border-b-4  border-sky-700 text-left w-full" > Hi, I'm Samuel Gonzalez </h4>
                <h2 className=" py-1  text-white mobile:text-lg desktop:text-xl wide:text-2xl"> I am a Full Stack Developer</h2>
                <div className='flex flex-col justify-start items-center overflow-x-hidden scroll h-2/5 m-5'>
                    <p className="py-4 text-white  w-full mobile:text-sm desktop:text-base wide:text-lg  m-5">
                        I built this website in the hope of being able to show my knowledge of web development. I used <strong className='text-sky-500'>Next.js, Tailwind CSS, Vercel and Vite</strong>. I created this site to practive creating more complex and responsive websites.
                        This is a single page application that uses smooth scrolling to navigate between sections. I also implemented a mobile-first design to ensure that the site looks good on all devices.
                        <br></br>
           
                    </p>

                    <p className="py-4 text-white  w-full mobile:text-sm desktop:text-base wide:text-lg   m-5"> Please feel free to provide any feedback or any issues that you encounter at this site.You can find my github repo located on the left or bottom of the screen.</p>

                </div>
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