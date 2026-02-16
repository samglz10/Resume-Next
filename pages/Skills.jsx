import React from 'react'
import Image from 'next/image'
import {RiMedal2Line} from 'react-icons/ri'


//Don;t forget to Import images for 
const Skills = () => {
    //const[endorsement, setEndorsement] = useState(false);
    //const handleClick = () => setEndorsement()

    const skills = [
        { id: 1, src: '/HTML5-logo.svg', title: 'HTML' },
        { id: 2, src: '/csslogo.svg', title: 'CSS' },
        { id: 3, src: '/JavaScript_logo.svg', title: 'JavaScript' },
        { id: 4, src: '/React-icon.svg', title: 'React' },
        { id: 5, src: '/NodeJS-logo.svg', title: 'Express/Node JS' },
        { id: 6, src: '/Typescript-log.svg', title: 'TypeScript' },
        { id: 7, src: '/PostgreSQL-logo.svg', title: 'SQL' },
        { id: 8, src: '/prisma-3.svg', title: 'Prisma' }
    ]

    return (
        <div name='skills' className='flex flex-col justify-center items-center  h-screen w-full my-10 text-white bg-slate-700 px-5 sm:text-sm md:text-base lg:text-lg'> 
        {/*Container */}  
            <div className=' flex flex-col justify-center items-start max-w-[1200px] h-full mx-auto px-4 w-full'>
           
                    <h4 className='text-4xl font-bold inline border-b-4 text-white border-sky-700 text-left  '>Skills</h4>
                    <p className='py-2 m-5'> The Languages I have worked with as well as some tools that I am familiar with.</p>
             
                {/* Container for all icons*/}
                <div className='w-full grid grid-cols-2 desktop:grid-cols-4 gap-8 text-center p-4  md:max-h-1/2 overflow-y-auto scrollbar-hide scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-700h-3/5'>
                    {skills.map(({id, src, title}) => (
                        <div key={id} className='bg-image-card  shadow-sm shadow-slate-900 hover:scale-110 duration-500 rounded-lg  hover:bg-slate-600 flex flex-col justify-between p-8 max-w-xs  '>
                            <Image src={src} alt={`${title} Logo`} width={250} height={250} className='w-10 mx-auto my-auto'/>
                            <p className='py-1 overflow-hidden'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Skills;