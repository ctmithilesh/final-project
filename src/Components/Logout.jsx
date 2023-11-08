import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()
    useEffect(()=>{

        localStorage.clear()
        setTimeout(()=>{
            navigate('/login')
        },1000)
       

    },[navigate])

    
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h3> Logging out...</h3>
        <Skeleton count={5} />
    </div> 
  )
}

export default Logout