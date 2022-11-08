import React from 'react'
import Image from 'next/image'
import {RiMedal2Line} from 'react-icons/ri'


//Don;t forget to Import images for 
const Skills = () => {
    //const[endorsement, setEndorsement] = useState(false);
    //const handleClick = () => setEndorsement(true)

    return (
        <div name='skills' className=' h-full w-full bg-slate-700 text-white flex flex-col justify-center px-4 '> 
        {/*Container */}  
            <div className='px-16'>
                <div>
                    <p className='text-4xl text-white py-1 font-bold inline border-b-4 '>Skills</p>
                    <p className='py-6'> The Languages I have worked with</p>
                </div>
                {/* Container for all icons*/}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8 rounded-lg'>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-300 bg-slate-700 h-full py-2 '>
                        <Image src="/Javascriptlogo.png" alt="HTML Logo" width={500} height={500} className='w-20 mx-auto my-10  '/>
                        <p className='my-4'>HTML</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div> 
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        <Image src="/Javascriptlogo.png" alt="CSS Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>CSS</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        <Image src="/Javascriptlogo.png" alt="JavaScript Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>JavaScript</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        <Image src="/Javascriptlogo.png" alt="React Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>React</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700'>
                        <Image src="/Javascriptlogo.png" alt="Node JS Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>Express/Node JS</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500 bg-slate-700 '>
                        <Image src="/Javascriptlogo.png" alt="Express JS Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>TypeScript</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                    <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500'>
                        <Image src="/Javascriptlogo.png" alt="React Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>SQL</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div> 
                     <div className='shadow-lg hover:shadow-sky-500 hover:scale-110 duration-500'>
                        <Image src="/Javascriptlogo.png" alt="TypeScript Logo" width={500} height={500} className='w-20 mx-auto my-10'/>
                        <p className='my-4'>Prisma</p>
                        <RiMedal2Line className='h-10 w-10 border-b-4 text-stone-500 rounded-full cursor-pointer bg-gradient-to-r from-stone-100 to-stone-500 hover:scale-125' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills;