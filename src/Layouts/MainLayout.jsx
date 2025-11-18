import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return <>
    <Navbar/>
    <div className='min-h-screen bg-[#f3f3f3]'> <Outlet/></div>
    <Footer/>
  </>
}

export default MainLayout
