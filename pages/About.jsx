import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image'

const About = () => {
    return (
        <div name="about" className='flex flex-col justify-center items-center  h-full w-full my-10 text-white bg-slate-700 px-5 margin-10 sm:text-sm md:text-base lg:text-lg'>
            <div className='w-full mx-auto px-4 flex flex-col justify-center h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-sky-700'>About Me</p>
                </div>
                <div className='grid sm:grid-row-2 md:grid-row-2 lg:grid-row-2 gap-8'>
                    <div className='flex justify-center items-center'>
                        <Image src="/about-pic.jpg" alt="about me" width={250} height={250} className="rounded-sm m-auto w-1/2 h-auto" />
                </div>
                    <p className='text-md px-4 w-full sm:overflow-auto md:overflow-auto lg:overflow-auto h-full overflow-x-hidden  scroll m-auto text-wrap'>
                        I have a Bachelors Degree in Criminal Justice and with a minor in Spanish. Through my career I have provided excellent support to various government agencies such as the Federal Bureau of Investigation (FBI),
                        Department of State (DOS), Department of Justice (DOJ),and other government contractors. I have conducted in-depth of Background Investigations for those who seek employment with the U.S government.
                        I have administered National Security and Public Trust Interviews and produced in depth Report of Investigations (ROI) to their respective agencies. I have advance in my career by providing analytical case reviews
                        and data entries at FBI databases.I am now is currently aiding DOS Counter Terrorism Division with Visa Adjudication. He has provided excellent service.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default About