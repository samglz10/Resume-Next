import React from 'react'
import Image from 'next/image'


const Work = () => {
    const projects = [
        {
            id: 1,
            title: 'Fly JS Game!',
            src: '/icons8-github-512.png',
            url_link: 'https://github.com/samglz10/web-game-starter',
            titleStyle: 'flex-col'
        },
        {
            id: 2,
            title: 'Favorite Movies Watchlist Site!',
            src: '/movies-logo.svg',
            url_link: 'https://github.com/samglz10/t3-starter-mysql',
            titleStyle: 'flex-col'
        },
        {
            id: 4,
            title: 'Comics in Context',
            src: '/comic-logo.svg',
            url_link: 'https://github.com/samglz10/rr-4-comics-in-context-.git',
            titleStyle: 'flex-col'
        }

    ]

    return (
        <div name='work' className=" flex flex-col justify-center items-center h-screen my-10 text-white bg-slate-700 px-5 margin-10 sm:text-sm md:text-base lg:text-lg">
            <div className='w-full mx-auto px-4 flex flex-col justify-center h-full m-auto'>
                <div className=' flex flex-col items-start text-left'>
                <h4 className='font-bold text-white text-2xl mobile:text-2xl desktop:text-3xl wide:text-4xl py-1 inline border-b-4  border-sky-700 text-left w-full'    >
                        Work</h4>
                    <p className='py-5'>Checkout some of my work!</p>
                </div>
                {/*Container for my work */}
                <div className='grid grid-flow-col gap-5 w-full overflow-x-auto h-3/5 p-5 scrollbar-hide scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-700'>
                    {projects.map(({ id, title, src, url_link, titleStyle }) => (
                        <div key={id} className='bg-image-card shadow-sm shadow-slate-900 hover:scale-110 duration-500 rounded-lg hover:bg-slate-600 flex flex-col justify-center items-center p-5 my-10 '>
                            {/* Hover effects */}
                            <span className={`flex ${titleStyle} items-center text-l font-bold text-white tracking-wider text-center`}>
                                {title}
                            </span>
                            <Image src={src} alt={title} width={500} height={500} className=" flex mx-auto justify-center items-center rounded-full object-cover w-20 h-20 m-auto " />
                            <div className='text-center flex justify-center items-center w-full'>
                                {/*upload Demo url_link when uploaded to another host site */}
                                <a className='text-white border-2 w-20 h-10 border-blue-500 p-3 m-2 flex items-center hover:bg-blue-500 rounded-xl font-bold tracking-wider hover:cursor-pointer'> Demo</a>
                                {/*upload Github url_link */}
                                <a href={url_link} className='text-white border-2 w-20 h-10 border-blue-500 px-4 py-3 m-2 flex items-center hover:bg-blue-500 rounded-xl font-bold tracking-wider hover:cursor-pointer'> Code </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work;