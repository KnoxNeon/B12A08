import useApps from "../Hooks/useApps"
import AppCard from "../Components/AppCard"
import { useState } from "react"

const Apps = () => {
  const [search, setSearch] = useState('')
  const { apps } = useApps()
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)):apps
 
  return (
    <div>
      <h1 className='mt-20 mb-2 text-5xl font-bold text-center'>Our All Applications</h1>
      <p className='text-[#627382] text-xl text-center mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='flex justify-between mt-2'>
        <h1 className=' text-2xl font-bold'>All Applications <span>({searchedApps.length})</span></h1>
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search Product" />
        </label>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 mx-20 '>
        {
          searchedApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))
        }
      </div>
    </div>
  )
}

export default Apps
