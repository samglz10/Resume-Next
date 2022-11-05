import React from "react";
const Contact = () => {

    return (
      <div name='contact'className="w-full h-screen bg-slate-700 flex justify-center items-center p-4 ">
        <form method="POST" action="https://getform.io/f/fb384145-d194-4702-9fab-7de5bc9ce9c3" className="flex flex-col max-w-full w-full px-16">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-sky-500 border-b-4 text-white">Contact</p>
                <p className="text-white py-4"> Submit the form to or you can email me @</p>
            </div>
            <input className="p-2 bg-slate-500" type="text" placeholder="Name" name="name"/>
            <input className="my-4 p-2 bg-slate-500" type="text" placeholder="Email" name="email"/>
            <textarea className="bg-slate-500" name="message" row="10" placeholder="Message"></textarea>
            <button className="text-white border-2  border-sky-500 px-4 py-3 my-8 flex items-center hover:bg-gradient-to-r from-sky-500 to-blue-800  ">Let's Collaborate</button>
        </form>
      </div>
    )
  }
  
  export default Contact;