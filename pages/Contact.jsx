import React from "react";
const Contact = () => {

    return (
      <div name='contact'className="max-w-full h-full h-screen bg-slate-700 flex justify-center items-center p-4 flex flex-col sm:h-screen ">
 
        <form method="POST" action="https://getform.io/f/fb384145-d194-4702-9fab-7de5bc9ce9c3" className="flex flex-col h-full w-full px-8 justify-center items-center sm:grow">
        <div className="pb-8 flex flex-col items-center">
                <p className="text-4xl font-bold inline border-b-sky-500 border-b-4 text-white ">Contact</p>
                <p className="text-white py-4"> Submit the form to or you can email me at the bottom 📧 icon!</p>
            </div>
            <div className="flex flex-col justify-center text-center content-center w-1/2 place-content-center rounded-md bg-slate-800 p-4">
              <input className="p-2 flex flex-wrap bg-slate-500 rounded-lg my-2" type="text" placeholder="Name" name="name" required/>
              <input className="my-4 p-2 bg-slate-500 rounded-lg my-2" type="text" placeholder="Email" name="email" required/>
              <textarea className="p-2 bg-slate-500 text-justify rounded-lg my-2" name="message" row="10" placeholder="Message" required></textarea>
            </div>
            <button className=" flex-col justify-center content-center items-center w-1/2 text-white border-2  border-sky-500 px-4 py-3 my-8 flex  hover:bg-gradient-to-r from-sky-500 to-blue-800 rounded-xl ">Hit Me Up!</button>
        </form>
      </div>
    )
  }
  
  export default Contact;