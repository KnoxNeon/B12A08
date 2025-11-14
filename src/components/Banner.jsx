import React from 'react'

const Banner = () => {
  return (
    <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-center pb-16'>
      <h2 class="font-bold text-2xl md:text-3xl lg:text-5xl text-white pt-12">Trusted By Millions, Built For You</h2>
        <div class="grid grid-cols-3 justify-between gap-5 mx-5 lg:mx-50 lg:gap-20 pt-10">
          <div class="card1 ">
            <p class="font-normal text-sm md:text-base text-[#ffffffcc]">Total Downloads</p>
            <h2 class="font-extrabold text-2xl md:text-4xl lg:text-6xl text-white py-4">29.6M</h2>
            <p class="font-normal text-sm md:text-base text-[#ffffffcc]">21% More Than Last Month</p>
          </div>
          <div class="card1 ">
            <p class="font-normal text-sm md:text-base text-[#ffffffcc]">Total Reviews</p>
            <h2 class="font-extrabold text-2xl md:text-4xl lg:text-6xl text-white py-4">906K</h2>
            <p class="font-normal text-sm md:text-base text-[#ffffffcc]">46% More Than Last Month</p>
          </div>
          <div class="card1 ">
            <p class="font-normal text-sm md:text-base text-[#ffffffcc]">Active Apps</p>
            <h2 class="font-extrabold text-2xl md:text-4xl lg:text-6xl text-white py-4">132+</h2>
            <p class="font-normal text-sm md:text-base text-[#ffffffcc]">31 More Will Launch</p>
          </div>
        </div>
    </div> 
  )
}

export default Banner
