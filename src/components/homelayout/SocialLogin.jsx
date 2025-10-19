import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
        <h2 className='font-bold mb-5'>Login With</h2>
        <div className='flex flex-col space-y-5'>
            <button className='btn btn-outline btn-secondary w-full'><FaGoogle size={24} /> Login with Google</button>
            <button className='btn btn-outline btn-primary w-full'><FaGithub size={24}/> Login with Github</button>
        </div>
    </div>
  )
}

export default SocialLogin