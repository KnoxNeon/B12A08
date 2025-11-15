import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const AppCard = () => {
  return (
      <div>
          <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                  <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-center mx-auto">Card Title</h2>
                  
                  <div className="card-actions justify-between">
                      <button className="btn bg-[#F1F5E8] text-[#00D390] text-base font-medium "> <IoMdDownload />999</button>
                      <button className="btn bg-[#FFF0E1] text-[#FF8811] text-base font-medium "><FaStar />5</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default AppCard
