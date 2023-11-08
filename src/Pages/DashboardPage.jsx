import React, { useEffect } from 'react'
import Dashboard from '../Components/Dashboard'
import Cookies from 'universal-cookie'

const DashboardPage = () => {

  const cookies = new Cookies()
  useEffect(()=>{

      let user = cookies.get('user')
      //user = JSON.parse(user)
      console.log(user.jwtToken)
      //console.log(user.jwtToken)    

  })
  return (
    <>
      <Dashboard />
    </>
  )
}

export default DashboardPage