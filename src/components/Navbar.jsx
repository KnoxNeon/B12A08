import React from 'react'
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
      <li><Link to='/apps'>Apps</Link></li>
      <li><Link to='/installation'>Installation</Link></li>
      </ul>
    </div>
    <NavLink className='flex items-center pl-2 hover:scale-105'>
      <img className='h-10 w-10' src="../logo.png" alt="" />
    <div className=" text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</div>
    </NavLink>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/apps'>Apps</Link></li>
      <li><Link to='/installation'>Installation</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    
    <Link to='https://github.com/KnoxNeon' className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><FaGithub /> Contribute</Link>
  </div>
</div>
    </div>
  )
}

export default Navbar
