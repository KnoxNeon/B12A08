import React, { useEffect, useState } from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Installation = () => {
  const [installed, setInstalled] = useState([])
  const [sortOrder, setSortOrder] = useState('none')
  useEffect(()=>{
    const existingList = JSON.parse(localStorage.getItem('installed'))
    if(existingList){
      setInstalled(existingList)
    }
  },[])

  const sortApps = (() =>{
    if(sortOrder === 'down-asc'){
      return [...installed].sort((a,b) => a.downloads - b.downloads)
    }
    else if(sortOrder === 'down-desc'){
      return [...installed].sort((a,b) => b.downloads - a.downloads)
    }
    else {return installed}
  })()
  return (
    <div className="">
      <h1 className="pt-20 pb-2 text-5xl font-bold text-center">
        Your Installed Apps
      </h1>
      <p className="text-[#627382] text-xl text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between my-4 mx-20">
        <h1 className=" text-2xl font-bold">
          <span>{installed.length}</span> Apps Found
        </h1>
        <select
          value={sortOrder}
          defaultValue="Sort by Downloads"
          onChange={e => setSortOrder(e.target.value)}
          className="select select-neutral"
        >
          <option value='none' disabled={true}>Sort by Downloads</option>
          <option value='down-desc'>High-Low</option>
          <option value='down-asc'>Low-High</option>
        </select>
      </div>

      {sortApps.map((a) => (
        <div className="bg-base-100 card-xs shadow-sm flex justify-between items-center mx-20 p-4 rounded-lg mb-4">
          <div className="flex items-center gap-6">
            <img className="w-20 h-20 rounded-lg" src={a.image} alt="" />
            <div className="">
              <h2 className="text-[#001931] font-medium text-xl">{a.title}</h2>
              <div className="flex gap-6">
                <p className="flex items-center gap-0.5 text-[#00D390] text-base font-medium ">
                  {" "}
                  <IoMdDownload />
                  {a.downloads}M
                </p>
                <p className="flex items-center gap-0.5 text-[#FF8811] text-base font-medium ">
                  <FaStar />
                  {a.ratingAvg}
                </p>
                <p className="flex items-center gap-0.5 text-[#627382] text-base font-medium">
                  {a.size} MB
                </p>
              </div>
            </div>
          </div>
          <button className="btn bg-[#00D390] text-white">Uninstall</button>
        </div>
      ))}
    </div>
  );
}

export default Installation
