import React from 'react'
import {RiMedal2Line} from 'react-icons/ri'
import Javascriptlogo from '../public/javascriptlogo.png' 

//Don;t forget to Import images for 
const Skills = () => {
    return (
        <div name='skills' className=' max-w-full h-screen w-full bg-slate-700 text-white flex flex-col justify-center  px-4 '> 
        {/*Container */}  
            <div className='px-16 '>
                <div>
                    <p className='text-4xl text-white py-1 font-bold inline border-b-4 '>Skills</p>
                    <p className='py-6'> The Languages I have worked with</p>
                </div>
                {/* Container for all icons*/}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 pag-4 text-center py-8'>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700 h-full'>
                            <img src={Javascriptlogo} className='w-20 mx-auto my-10'/>
                            <p className='my-4'>HTML</p>
                            <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div> 
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                            <img src={Javascriptlogo} className='w-20 mx-auto my-10'/>
                            <p className='my-4'>CSS</p>
                            <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        < img src={Javascriptlogo} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>JavaScript</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        < img src={Javascriptlogo} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>React</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        < img src={Javascriptlogo} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>Node JS</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700 '>
                        < img src={Javascriptlogo} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>Express JS</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>React</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div> 
                     <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500'>
                        < img src={Javascriptlogo} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>TypeScript</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;