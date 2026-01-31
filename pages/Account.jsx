import React from 'react'
import Image from 'next/image'

import {useSession, signOut, getSession} from 'next-auth/react'

const account = () => {
    const {data: session, status} = useSession({required: true})
    if (status === 'authenticated') {
        return (
            <div>
                <p> Welcome {session.user.name}</p>
                <button onClick={()=> signOut()} className="rounded-md h-20 w-20">Sign out</button>
            </div>
        )
    } else {
        return (
            <div>
                <p className='flex justify-center items-center text-center'> You're not signed in.</p>
            </div>
        )
    }

}

export default account;

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/home'
            }
        }
    }
    return {
        props:{session},
    }
}