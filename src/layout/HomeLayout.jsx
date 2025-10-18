import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import LeftAside from '../components/homelayout/LeftAside'
import RightAside from '../components/homelayout/RightAside'

const HomeLayout = () => {
  return (
    <>
      <header>
        <Header/>
        <section className='bg-base-200 py-3 w-11/12 mx-auto rounded-md mb-6'>
          <LatestNews/>
        </section>
      
        <nav className='w-11/12 mx-auto mb-6'>
          <Navbar/>
        </nav>
          
      
      </header>

    
    <main className='home_layout w-11/12 mx-auto mb-10 flex gap-6 '>
     
      <aside className='left_nav'>
        <LeftAside/>
      </aside>
      <section className='main_content'>
        <Outlet/>
      </section>
      <aside className='right_nav'>
        <RightAside/>
      </aside>
    </main>
    </>
  )
}

export default HomeLayout