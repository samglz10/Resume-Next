import React from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"


export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>        
        <div className='flex flex-col justify-center items-center lg:h-screen lg:w-full text-white '>
            <div className="flex flex-col justify-center items-center w-full h-full ">
                Signed in as {session.user.name}
                <button className='' onClick={() => signOut()}>Sign Out</button> 
            </div>
        </div>
      </>
    )
  }
  return (
    <>
      <button id='signin' className=' flex flex-row justify-between text-center items-center hover:cursor-pointer text-spacing' onClick={() => signIn()}>Sign in</button>
    </>
  )
}