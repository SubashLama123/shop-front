import React from 'react'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-end justify-between px-4 py-2'>

      <h1 className='text-3xl'>Web Tail</h1>

      <nav className=''>
        <a href="" className='hover:bg-white hover:text-black px-2 py-2'>About</a>
        <a href="" className='hover:bg-white hover:text-black px-2 py-2'>Contact</a>

      </nav>


    </header>
  )
}

export default Header