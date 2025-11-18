import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Installation = () => {
  return (
    <div className=''>
      <h1 className='pt-20 pb-2 text-5xl font-bold text-center'>Your Installed Apps</h1>
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


      <div className="bg-base-100 card-xs shadow-sm flex justify-between items-center mx-20 p-2 rounded-lg">
        <div className='flex items-center gap-6'>
          <img className='w-20 h-20 rounded-lg' src="../demo-app(1).webp" alt="" />
          <div className="">
            <h2 className="text-[#001931] font-medium text-xl">Xsmall Card</h2>
            <div className="flex gap-6">
              <p className="flex items-center gap-0.5 text-[#00D390] text-base font-medium "> <IoMdDownload />10M</p>
              <p className="flex items-center gap-0.5 text-[#FF8811] text-base font-medium "><FaStar />4.8</p>
              <p className="flex items-center gap-0.5 text-[#627382] text-base font-medium">228 MB</p>
            </div>
          </div>
        </div>


        <button className='btn bg-[#00D390] text-white'>Uninstall</button>

      </div>
    </div>
  )
}

export default Installation
