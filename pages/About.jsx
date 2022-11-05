import React from 'react'
import 'tailwindcss/tailwind.css'

const About = () => {
    return (
        <div name="about" className='h-screen w-full text-white bg-slate-700 '>
            <div className="flex flex-col justify-center items-center w-full h-full ">
                <div className="m-w-full w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm: text-right pb-8 pl-4">
                        <p className="text-3xl font-bold inline border-b-4 border-sky-500">About</p>
                    </div>
                </div>
                <div className="m-w-full w-full px-4 sm:grid grid-cols-2 gap-8 ">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-3xl font-bold inline border-b-4 border-sky-500 "> HI I am Sam about Page Info
                        </p>
                    </div>
                    <div>
                        <p>
                            Info about me
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About