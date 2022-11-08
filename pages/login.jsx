import React from 'react'
import Image from 'next/image'
import {useSession, signIn, signOut} from 'next-auth/react'


const login = () =>{
    const {data: session} = useSession();
    if (session){
        return (
            <>
            <div className='flex flex-col h-full w-full bg-slate-bg-slate-700'>
                <p className='bg-black text-7xl'>Welcome, {session.user.name} </p>
                <img src={session.user.image} alt="google profile img" height={500} width={500} className="rounded-full"/>
                <button className="rounded-md h-5 w-5" onClick={()=> signOut()}></button>
            </div>
            </>
        )
    } else {
        return (
            <> 
                <div className='flex flex-col h-full w-full bg-slate-bg-slate-700'>
                    <p className=' text-black'> You are not signed in.</p> 
                    <button className='h-full w-full bg-black text-white' onClick={()=> signIn()}> Sign in</button>
                </div>
            </>
        )
    }
};

export default login