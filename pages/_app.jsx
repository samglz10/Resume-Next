import React from'react'
import {SessionProvider} from 'next-auth/react'
import Navbar from '../components/Navbar';
import LoginButton from './login';


function App({Component, pageProps, session}) {

  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/> 
      <Navbar/>
    </SessionProvider>
  )
}

export default App;