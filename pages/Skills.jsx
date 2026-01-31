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
        { id: 8, src: '/prisma-3.svg', title: 'Prisma' },
    ]

    return (
        <div name='skills' className=' w-full md:h-screen  bg-slate-700 text-white flex flex-col justify-center px-5 '> 
        {/*Container */}  
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-white border-sky-700 '>Skills</p>
                    <p className='py-2 m-5'> The Languages I have worked with as well as some tools that I am familiar with.</p>
                </div>
                
                {/* Container for all icons*/}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
                    {skills.map(({id, src, title}) => (
                        <div key={id} className='shadow-sm shadow-slate-900 hover:scale-110 duration-700 rounded-lg  hover:shadow-sky-600 flex flex-col justify-between p-8'>
                            <Image src={src} alt={`${title} Logo`} width={500} height={500} className='w-20 mx-auto my-auto'/>
                            <p className='py-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Skills;