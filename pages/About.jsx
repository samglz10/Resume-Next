import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image'

const About = () => {
    return (

        <div name="about" className='flex flex-col justify-center items-center h-screen w-full text-white bg-slate-700 px-5 my-5 '>
            <div className='w-full px-4 flex flex-col justify-center h-screen mx-auto'>
                <div className='flex flex-col gap-5 justify-center items-center w-full '>
                    <h4 className='font-bold text-white text-2xl mobile:text-2xl desktop:text-3xl wide:text-4xl py-1 inline border-b-4  border-sky-700 text-left w-full'>About Me</h4>
                    <div className='flex justify-start items-center'>
                        <Image src="/about-me.jpg" alt="about me" width={500} height={500} className="rounded-sm m-auto w-auto h-3/4" />
                    </div>
                    <div className='flex flex-col justify-start items-center overflow-x-hidden scroll h-1/3 m-5'>
                        <p className='text-md px-4 w-full sm:overflow-auto md:overflow-auto lg:overflow-auto  overflow-x-hidden  scroll m-auto text-wrap'>
                            As an <strong className='text-sky-400'>Automation and Data Solutions Specialist</strong>, I specialize in designing
                            tools that optimize internal processes and support agency-wide goals; supporting mission-critical operations across federal agencies including the <strong className='text-sky-400'> Federal
                            Bureau of Investigation (FBI), Department of State (DOS), and Department of Justice (DOJ) </strong>.My career has
                            evolved from conducting security interviews, conducting investigative reporting to high-level analytical case reviews to <strong className='text-sky-400'> technical innovation</strong>.
                            <br></br>
                            <br></br>
                            I bridge the gap between engineering teams and non-technical stakeholders by translating operational gaps into technical requirements 
                            and high-priority backlogs using <strong className='text-sky-400'> Power Automate, SharePoint, Power BI, Office Scripts, and JavaScript/TypeScript. </strong> 
                             My unique background in federal work ensures that not only every automation is grounded in data integrity but also in operational security.
                            <br></br>
                            <br></br>
                            I am passionate about leveraging technology to drive efficiency and innovation in government operations, and I am always eager to connect with like-minded professionals in the field.
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default About