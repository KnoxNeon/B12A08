import React from 'react'
import useApps from '../Hooks/useApps'
import AppCard from '../Components/AppCard'
import { Link } from 'react-router'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'

const Home = () => {
     const {apps, loading, error} = useApps()
     const featuredApps = apps.slice(0,8)
  return (

    <div>
      <title>Home</title>
      <div><Hero/><Banner/></div>
      <div ><h1 className='pt-4 lg:mt-20 mb-2 text-3xl lg:text-5xl font-bold text-center'>Trending Apps</h1>
      <p className='text-[#627382] text-md lg:text-xl text-center pb-10'>Explore All Trending Apps on the Market developed by us</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 lg:my-10 m-6 lg:mx-20'>
        {
          featuredApps.map(app =>(
            <AppCard key={app.id} app={app} />
          ))
        }
      </div>
      <div className="flex justify-center pb-10"><Link className='btn btn-ghost  text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 ' to='/apps'>See All</Link></div></div>
      
      
    </div>
  )
}

export default Home
