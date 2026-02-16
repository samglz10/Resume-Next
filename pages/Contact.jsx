import React from "react";
const Contact = () => {

  return (
    <div name='contact' className="flex flex-col justify-around items-center h-screen w-full text-white bg-slate-700 px-5">
      <div className='w-full mx-auto flex flex-col justify-center  h-full px-4'>
        <form method="POST" action="https://getform.io/f/fb384145-d194-4702-9fab-7de5bc9ce9c3" className="flex flex-col h-full w-full px-8 justify-center items-center sm:grow">
          <div className="pb-8 flex flex-col items-start justify-around text-left w-full">
            <h4 className="text-4xl font-bold inline border-b-sky-500 border-b-4 text-white text-left ">Contact</h4>
            <p className="text-white py-4"> Submit the form to or you can email me at the bottom</p>
          </div>
          <div className="flex flex-col justify-center text-center content-center w-full rounded-md bg-slate-800 p-4">
            <div className="flex flex-col desktop:flex-row gap-5 w-full">
              <div className="flex flex-col w-full">
                <label className="text-left text-sm font-bold text-white" htmlFor="name">Name</label>
                <input className="p-2 flex flex-wrap bg-slate-500 rounded-lg my-2 focus:ring-2 focus:ring-sky-500 focus:outline-none" type="text" placeholder="Your Name here" name="name" required />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-left text-sm font-bold text-white" htmlFor="email">Email</label>
                <input className="p-2 flex flex-wrap bg-slate-500 rounded-lg my-2 focus:ring-2 focus:ring-sky-500 focus:outline-none" type="email" placeholder="Your Email here" name="email" required />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-left text-sm font-bold text-white" htmlFor="message">Message</label>
              <textarea className="p-2 bg-slate-500 text-justify rounded-lg my-2 focus:ring-2 focus:ring-sky-500 focus:outline-none" name="message" rows="10" placeholder="Your Message here" required></textarea>
            </div>
          </div>
          <button className=" flex-col justify-center content-center items-center w-full text-white border-2  border-blue-500 px-4 py-3 my-8 flex  hover:bg-blue-500 rounded-xl font-bold tracking-wider">Hit Me Up!</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;