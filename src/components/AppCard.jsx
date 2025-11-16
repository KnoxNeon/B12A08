import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const AppCard = ({app}) => {

  return (
      <div>
          <div className="card bg-base-100 w-full shadow-sm hover:scale-105">
              <figure>
                  <img className='w-full h-80 bg-white object-cover'
                      src={app.image}
                      alt="{app.title}" />
              </figure>
              <div className="card-body">
                  <h2 className="card-title text-center mx-auto">{app.title}</h2>
                  
                  <div className="card-actions justify-between">
                      <button className="btn bg-[#F1F5E8] text-[#00D390] text-base font-medium "> <IoMdDownload />{app.downloads}</button>
                      <button className="btn bg-[#FFF0E1] text-[#FF8811] text-base font-medium "><FaStar />{app.ratingAvg}</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default AppCard
