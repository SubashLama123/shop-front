import React from 'react'
import Header from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header />
      <h1>This is Home Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cupiditate blanditiis aut sit? Qui velit ea nulla dolorem saepe a laboriosam, odit dignissimos beatae neque aliquid iusto culpa deserunt esse.</p>
      <p>-------------------------------------------------------------------------------</p>
      <div className="navs divide-x-4 divide-slate-950 ">
        <NavLink to='/' >Page1</NavLink>
        <NavLink to='page2' >Page2</NavLink>
      </div>

      <Outlet />


    </div>
  )
}

export default Home