import React from 'react'
import logo from '../assets/logo.png'
import { format } from 'date-fns'
const Header = () => {
    
  return (
    <div className='flex justify-center flex-col items-center gap-3 py-4 mx-auto'>
        <img src={logo} alt="Dragon News Logo" className='w-[400px]'/>
        <p className='text-accent'>Journalism Without Fear or Favour</p>
        <p className='text-semibold text-accent'>{format(new Date(),"EEEE,MMMM MM, yyyy")}</p>
    </div>
  )
}

export default Header