import React from 'react'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center text-center w-full mx-auto bg-[#f3f3f3] ">
      <h1 className='text-[#001931] text-3xl md:text-7xl font-bold text-shadow-2xl pt-10 md:pt-14'>We Build <br /> <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
      <p className='text-[#627382] text-md md:text-xl line-clamp-2 mt-4 lg:mt-6'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='space-x-4 my-6 lg:my-10'>
        <Link to="https://play.google.com/store/games?hl=en" className=' btn'> <IoLogoGooglePlaystore />Google Play</Link>
        <Link to="https://www.apple.com/app-store/" className=' btn'> <FaAppStoreIos />App Store</Link>
      </div>
      <img className='w-[300px] h-[150px] md:h-[300px] md:w-[600px] lg:h-[500px] lg:w-[1000px] mx-auto' src="../hero.png" alt="" />
    </div>
  )
}

export default Hero
