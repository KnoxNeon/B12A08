import React from 'react'
import { useParams } from 'react-router'
import useApps from '../Hooks/useApps'

const AppDetails = () => {
    const { id } = useParams()
    const { apps } = useApps()
    const app = apps.find(a => String(a.id) === id) 
    console.log(app)
    
  return (
    <div>
      THis iis app details
    </div>
  )
}

export default AppDetails
