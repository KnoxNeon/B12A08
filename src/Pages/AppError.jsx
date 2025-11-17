import Navbar from '../components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router'

const AppError = () => {
  return (
    <div className='flex flex-col justify-center'>
      <Navbar/>
      <img className='w-[500px] h-[480px] mx-auto mt-2 ' src="../App-Error.png" alt="" />
      <h1 className=' mb-2 text-5xl font-bold text-center'>OPPS!! APP NOT FOUND</h1>
      <p className='text-[#627382] text-xl text-center mb-10'>The App you are requesting is not found on our system.  please try another apps</p>
      <div className="flex justify-center"><Link className='btn btn-ghost  text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 mb-10' to='/'>Go Back</Link></div>
      <Footer/>
    </div>
  )
}

export default AppError
