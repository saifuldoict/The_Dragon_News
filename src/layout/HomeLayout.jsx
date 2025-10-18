import React from 'react'
import { Outlet } from 'react-router'
// import Navbar from '../components/Navbar'
import Header from '../components/Header'

const HomeLayout = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
    {/* <Navbar/> */}
    <main>
     
      <section className='left_nav'></section>
      <section className='main_content'>
        <Outlet/>
      </section>
      <section className='right_nav'></section>
    </main>
    </>
  )
}

export default HomeLayout