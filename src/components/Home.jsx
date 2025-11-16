import React from 'react'
import useApps from '../Hooks/useApps'
import AppCard from './AppCard'
import { Link } from 'react-router'

const Home = () => {
     const {apps, loading, error} = useApps()
     console.log(apps)
     const featuredApps = apps.slice(0,8)
  return (
    <div>
      <h1 className='mt-20 mb-2 text-5xl font-bold text-center'>Trending Apps</h1>
      <p className='text-[#627382] text-xl text-center mb-10'>Explore All Trending Apps on the Market developed by us</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 mx-20 '>
        {
          featuredApps.map(app =>(
            <AppCard key={app.id} app={app} />
          ))
        }
      </div>
      <div className="flex justify-center"><Link className='btn btn-ghost  text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 ' to='/apps'>See All</Link></div>
      
    </div>
  )
}

export default Home
