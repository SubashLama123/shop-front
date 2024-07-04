import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-end justify-between px-4 py-2'>

      <h1 className='text-3xl'>Web Tail</h1>

      <nav className=''>
        <NavLink to='/about-page' className='hover:bg-white hover:text-black px-2 py-2'>About</NavLink>

        <NavLink className='hover:bg-white hover:text-black px-2 py-2'>Contact</NavLink>

      </nav>


    </header>
  )
}

export default Header