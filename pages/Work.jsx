import React from 'react' 
import placeholder from '../public/placeholder.svg'
import Javascriptlogo from '../public/javascriptlogo.png' 

const Work = () => {

    return (
      <div name= 'work' className="  w-full md:h-screen bg-slate-700 text-white flex flex-col justify-center px-4">
        <div className='max-w-full  p-4 flex flex-col justify-center w-full h-full px-16 '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-white border-sky-700'>
                    Work</p>
                <p className='py-6'>Checkout some of my work!</p>
            </div>
            {/*Container for my work */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div>
                <div style={{backgroundImage:`url(${placeholder})`}}
                    className='shadow-lg shadow-sky-500 group container rounde-md flex justify-center items-center mx-auto bg-image-card'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JS application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/"/>{/*upload Demo code */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                            <a href="/"/> {/*upload Github code */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                        </div>
                    </div>
                </div>
            </div> 
            {/* Second Grid image */}
                <div style={{backgroundImage:`url(${Javascriptlogo})`}}        
                    className='shadow-lg shadow-sky-500 group container rounde-md flex justify-center items-center mx-auto bg-image-card'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JS application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/"/>{/*upload Demo code */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                            <a href="/"/> {/*upload Github code */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                        </div>
                    </div>
                </div>
            {/* Third Grid image */}
                <div style={{backgroundImage:`url(${placeholder})`}}
                    className='shadow-lg shadow-sky-500 group container rounde-md flex justify-center items-center mx-auto bg-image-card'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JS application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/"/> {/*upload Demo code */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                            <a href="/"/>{/*upload Github code */}
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Code</button>
                        </div>
                    </div>
                </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default Work;