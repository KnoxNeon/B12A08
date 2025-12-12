import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const AppCard = ({app}) => {

  return (
      <div>
          <Link to={`/app/${app.id}`} className="card bg-base-100 w-full h-[200px] md:h-[300px] lg:h-[430px] shadow-sm hover:scale-105 p-2 lg:p-6">
              <figure>
                  <img className='md:w-full md:h-[250px] lg:h-[300px] rounded-3xl object-cover md:object-contain lg:p-6'
                      src={app.image}
                      alt="{app.title}" />
              </figure>
              <div className="">
                  <h2 className="text-center mx-auto font-medium text-xl lg:pb-4">{app.title}</h2>
            
                  <div className="flex justify-between md:gap-2 flex-nowrap">
                      <button className="flex items-center py-1 px-2 md:px-4 md:py-2 gap-2 rounded-lg bg-[#F1F5E8] text-[#00D390] text-sm lg:text-base lg:font-medium"> <IoMdDownload />{app.downloads}M</button>
                      <button className="flex items-center py-1 px-2 md:px-4 md:py-2 gap-2 rounded-lg bg-[#FFF0E1] text-[#FF8811] text-sm lg:text-base lg:font-medium"><FaStar />{app.ratingAvg}</button>
                  </div>
              </div>
          </Link>
      </div>
  )
}

export default AppCard
