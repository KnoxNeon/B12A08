import Footer from '../Components/Footer'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'

const AppError = () => {
  return (
    <div className='flex flex-col justify-center w-auto  md:h-screen'>
      <title>App Not Found</title>
      <img className='md:w-[500px] md:h-[480px] mx-auto mt-2 ' src="../App-Error.png" alt="" />
      <h1 className=' mb-2 text-3xl md:text-5xl font-bold text-center'>OPPS!! APP NOT FOUND</h1>
      <p className='text-[#627382] text-md md:text-xl text-center mb-4 md:mb-10'>The App you are requesting is not found on our system.  please try another apps</p>
      <div className="flex justify-center"><Link className='btn btn-ghost  text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 mb-10' to='/apps'>Go Back</Link></div>
    </div>
  )
}

export default AppError
