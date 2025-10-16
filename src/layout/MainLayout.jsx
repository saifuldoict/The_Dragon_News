import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>

    <Navbar/>
    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default MainLayout