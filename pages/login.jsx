import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

const login = () =>{
    const {data: session} = useSession()
    if (session){
        return (
            <>
                <p>Welcome, {session.user.name} </p>
                <img src={session.user.image} alt="google profile img" className="rounded-full"/>
                <button className="rounded-md h-20 w-20" onClick={()=> signOut()}></button>
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