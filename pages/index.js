import Head from 'next/head'
import Home from './Home'
import React from 'react'
import Navbar from '../components/Navbar'

export default function Main() {
  return (
    <>
      <Navbar/>
      <Home />
    </>
   )
}

