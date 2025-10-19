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

    
    <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5 '>
     
      <aside className='col-span-3 sticky top-0 h-fit'>
        <LeftAside/>
      </aside>
      <section className='main col-span-6'>
        <Outlet/>
      </section>
      <aside className='col-span-3 sticky top-0 h-fit'>
        <RightAside/>
      </aside>
    </main>
    </>
  )
}

export default HomeLayout