import { useParams } from 'react-router' 
import useApps from '../Hooks/useApps'
import { Star, Download } from 'lucide-react'
import Ratings from '../Components/Ratings'

const AppDetails = () => {
  const { id } = useParams()
  const { apps, loading, error } = useApps()

  const app = apps.find(a => String(a.id) === id)

  if (loading) return <p>Loading......</p>

  const {companyName, description, downloads, image, ratingAvg, reviews, size, title} = app || {}

  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem('installed') || '[]')
    let updatedList = []

    if(existingList){
      const isDuplicate = existingList.some(a => a.id === app.id)
      if(isDuplicate) return alert('the app is already installed')
      updatedList = [...existingList, app]
    }else{
      updatedList.push(app)
    }
    localStorage.setItem('installed', JSON.stringify(updatedList))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-full mx-auto overflow-hidden">
        
        <div className="p-6 lg:px-20">
          <div className="flex flex-col sm:flex-row gap-6 pb-8 border-b-2 border-[#00193120]">
            
            <div className="shrink-0">
              <img src={image}  alt={title} className="w-[350px] h-[350px] rounded-3xl object-cover shadow-lg"/>
            </div>
            <div className="flex-1 ">
              <div className='pb-10 border-b-2 border-[#00193120]'>
              <h1 className="text-2xl md:text-4xl font-bold text-[#001931]"> {title} </h1>
              <p className="text-xl text-[#627382] mt-1"> Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span>  </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-10 mt-4 text-sm text-[#001931]">
                <div className="flex flex-col  gap-1"> 
                  <Download className="w-10 h-10 text-green-500" />
                   <span className='text-lg'> Downloads</span>
                   <span className='font-extrabold text-4xl '>{downloads}M</span>
                </div>
                <div className="flex flex-col  gap-1"> 
                  <Star className="w-10 h-10 text-yellow-500 fill-yellow-500 " />
                   <span className='text-lg'>Average Ratings</span>
                   <span className='font-extrabold text-4xl '>{ratingAvg}</span>
                </div>
                <div className="flex flex-col  gap-1"> 
                  <img src='../Vector.png' className='w-10 h-10' />
                   <span className='text-lg'> Reviews</span>
                   <span className='font-extrabold text-4xl '>{reviews}</span>
                </div>
              </div>

              
              <button onClick={handleInstall} className="mt-6 px-10 py-3 bg-[#00D390] hover:bg-green-400 text-white text-xl font-semibold rounded-lg transition-all shadow-md hover:shadow-lg">
                Install Now ({app.size} MB)
              </button>
            </div>
          </div>
          <div className='reviews py-10'>
            <Ratings  ratings = {app.ratings}/>
          </div>

          <div className='space-y-4'>
            <h2 className='font-semibold text-2xl'>Description</h2>
            <p className='text-lg text-[#627382]'>{description}</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AppDetails