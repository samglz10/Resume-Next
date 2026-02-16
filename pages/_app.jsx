import React from'react'
import {SessionProvider} from 'next-auth/react'
import Navbar from '../components/Navbar';
import LoginButton from './login';
import 'tailwindcss/tailwind.css'
import '../styles/styles.css'


function App({Component, pageProps, session}) {

  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/> 
    </SessionProvider>
  )
}

export default App;