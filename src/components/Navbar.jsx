import React from 'react'
import LogoImg from '../images/Logo.jpeg'

const Navbar = () => {
  return (
    <div className='flex h-[5rem] justify-between bg-white'>
      <div className='flex p-2'>
        <img src={LogoImg} alt='logo'></img>
      </div>
      <div className='flex p-4 text-lg font-semibold mr-[4rem]'>
        <button className='mx-3 flex justify-center items-center hover:text-blue-500'>Home</button>
        <button className='mx-3 flex justify-center items-center hover:text-blue-500'>About Us</button>
        <button className='mx-3 flex justify-center items-center hover:text-blue-500'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar
