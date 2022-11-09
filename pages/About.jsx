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
                        <p className="text-3xl font-bold inline border-b-4 border-sky-500 "> Hi I am Samuel but I mostly go by Sam.
                        </p>
                    </div>
                    <div>
                        <p className='text-lg px-4'>
                        I have a Bachelors Degree in Criminal Justice and with a minor in Spanish. Through my career I have provided excellent support to various government agencies such as the Federal Bureau of Investigation (FBI), 
                        Department of State (DOS), Department of Justice (DOJ),and other government contractors. I have conducted in-depth of Background Investigations for those who seek employment with the U.S government. 
                        I have administered National Security and Public Trust Interviews and produced in depth Report of Investigations (ROI) to their respective agencies. I have advance in my career by providing analytical case reviews 
                        and data entries at FBI databases.I am now is currently aiding DOS Counter Terrorism Division with Visa Adjudication. He has provided excellent service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About