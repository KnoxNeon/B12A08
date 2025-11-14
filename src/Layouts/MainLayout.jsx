import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
}

export default MainLayout
