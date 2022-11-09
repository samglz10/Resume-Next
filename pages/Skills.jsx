import React from 'react'
import Image from 'next/image'
import {RiMedal2Line} from 'react-icons/ri'


//Don;t forget to Import images for 
const Skills = () => {
    //const[endorsement, setEndorsement] = useState(false);
    //const handleClick = () => setEndorsement()

    return (
        <div name='skills' className=' w-full md:h-screen  bg-slate-700 text-white flex flex-col justify-center  px-4 '> 
        {/*Container */}  
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-white border-sky-700 '>Skills</p>
                    <p className='py-2'> The Languages I have worked with as well as some tools that I am familiar with.</p>
                </div>
                
                {/* Container for all icons*/}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center  rounded-lg'>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-300 bg-slate-700 h-full  '>
                        <Image src="/HTML5-logo.svg" alt="HTML Logo" width={500} height={500} className='w-20 mx-auto my-10 '/>
                        <p className='py-4'>HTML</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-900 rounded-full cursor-pointer bg-sky-100 hover:scale-125' />
                    </div> 
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        <Image src="/csslogo.svg" alt="CSS Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='py-4'>CSS</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-900 rounded-full cursor-pointer bg-sky-100 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        <Image src="/JavaScript_logo.svg" alt="JavaScript Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='py-4'>JavaScript</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-900 rounded-full cursor-pointer bg-sky-100 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        <Image src="/React-icon.svg" alt="React Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='py-4'>React</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-900 rounded-full cursor-pointer bg-sky-100 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        <Image src="/NodeJS-logo.svg" alt="Node JS Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='py-4'>Express/Node JS</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-900 rounded-full cursor-pointer bg-sky-100 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700 '>
                        <Image src="/Typescript-log.svg" alt="TypeScript Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='py-4'>TypeScript</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-900 rounded-full cursor-pointer bg-sky-100 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500'>
                        <Image src="/PostgreSQL-logo.svg" alt="SQL Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='py-4'>SQL</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div> 
                     <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500'>
                        <Image src="/prisma-3.svg" alt="Prisma Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='py-4'>Prisma</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;