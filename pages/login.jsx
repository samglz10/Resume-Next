import React from 'react'
import Image from 'next/image'
import {useSession, signIn, signOut} from 'next-auth/react'


const login = () =>{
    const {data: session} = useSession();
    if (session){
        return (
            <>
                <p>Welcome, {session.user.name} </p>
                <img src={session.user.image} alt="google profile img" height={500} width={500}className="rounded-full"/>
                <button className="rounded-md h-5 w-5" onClick={()=> signOut()}></button>
            
            </>
        )
    } else {
        return (
            <> 
                <p> You are not signed in.</p> 
                <button onClick={()=> signIn()}></button>
            </>
        )
    }
};

export default login