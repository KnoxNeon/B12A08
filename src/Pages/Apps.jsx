import { Link } from "react-router"
import useApps from "../Hooks/useApps"
import AppCard from "../Components/AppCard"

const Apps = () => {

  const { apps, loading, error } = useApps()
 
  return (
    <div>
      <h1 className='mt-20 mb-2 text-5xl font-bold text-center'>Our All Applications</h1>
      <p className='text-[#627382] text-xl text-center mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 mx-20 '>
        {
          apps.map(app => (
            <AppCard key={app.id} app={app} />
          ))
        }
      </div>
    </div>
  )
}



export default Apps
