import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="Logo" className='mx-2 w-10' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
        </div>

    </nav>
  )
}

export default Navbar
