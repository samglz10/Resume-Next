import React from 'react'
import Image from 'next/image'
import {RiMedal2Line} from 'react-icons/ri'


//Don;t forget to Import images for 
const Skills = () => {
    //const[endorsement, setEndorsement] = useState(false);
    //const handleClick = () => setEndorsement()

    return (
        <div name='skills' className=' w-full md:h-screen  bg-slate-700 text-white flex flex-col justify-center px-5 '> 
        {/*Container */}  
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-white border-sky-700 '>Skills</p>
                    <p className='py-2 m-5'> The Languages I have worked with as well as some tools that I am familiar with.</p>
                </div>
                
                {/* Container for all icons*/}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center rounded-lg  gap-10 '>
                    <div className='shadow-xl hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700 m-5 flex justify-between flex-col'>
                        <Image src="/HTML5-logo.svg" alt="HTML Logo" width={500} height={500} className='w-20 mx-auto my-auto bottom-0 '/>
                        <p className='py-4'>HTML</p>
                        
                    </div> 
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700 m-5 flex justify-between flex-col'>
                        <Image src="/csslogo.svg" alt="CSS Logo" width={500} height={500} className='w-20 mx-auto my-auto bottom-0'/>
                        <p className='py-4'>CSS</p>
                        
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-300 bg-slate-700 m-5 flex justify-between flex-col'>
                        <Image src="/JavaScript_logo.svg" alt="JavaScript Logo" width={500} height={500} className='w-20 mx-auto my-auto bottom-0'/>
                        <p className='py-4'>JavaScript</p>
                        
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-300 bg-slate-700 m-5 flex justify-between flex-col'>
                        <Image src="/React-icon.svg" alt="React Logo" width={500} height={500} className='w-20 mx-auto my-auto bottom-0'/>
                        <p className='py-4'>React</p>
                        
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-300 bg-slate-700 m-5 flex justify-between flex-col'>
                        <Image src="/NodeJS-logo.svg" alt="Node JS Logo" width={500} height={500} className='w-20 mx-auto my-auto bottom-0'/>
                        <p className='py-4'>Express/Node JS</p>
                        
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-300 bg-slate-700 m-5 flex justify-between flex-col'>
                        <Image src="/Typescript-log.svg" alt="TypeScript Logo" width={500} height={500} className='w-20 mx-auto my-auto bottom-0'/>
                        <p className='py-4 m'>TypeScript</p>
                        
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-300 bg-slate-700 m-5 flex justify-between flex-col'>
                        <Image src="/PostgreSQL-logo.svg" alt="SQL Logo" width={500} height={500} className='w-20 mx-auto my-auto bottom-0'/>
                        <p className='py-4'>SQL</p>
                        
                    </div> 
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-300 bg-slate-700 m-5 flex justify-between flex-col'>
                        <Image src="/prisma-3.svg" alt="Prisma Logo" width={500} height={500} className='w-20 mx-auto my-auto bottom-0'/>
                        <p className='py-4 m-0'>Prisma</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;