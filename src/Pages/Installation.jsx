import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Installation = () => {
  return (
    <div>
      <h1 className='mt-20 mb-2 text-5xl font-bold text-center'>Your Installed Apps</h1>
      <p className='text-[#627382] text-xl text-center mb-10'>Explore All Trending Apps on the Market developed by us</p>
      <div className='flex justify-between mt-2 mx-20'>
        <h1 className=' text-2xl font-bold'><span>10</span> Apps Found</h1>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">Click</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>

      <div className="card w-full bg-base-100 card-xs shadow-sm flex">
        <img className='w-10 h-10' src="../demo-app(1).webp" alt="" />
        <div className="card-body">
          <h2 className="card-title">Xsmall Card</h2>
          <div className="card-actions justify-between">
            <button className="btn bg-[#F1F5E8] text-[#00D390] text-base font-medium "> <IoMdDownload />10M</button>
            <button className="btn bg-[#FFF0E1] text-[#FF8811] text-base font-medium "><FaStar />4.8</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

        
      
    </div>
  )
}

export default Installation
