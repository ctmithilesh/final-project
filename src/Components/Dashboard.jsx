import React from 'react'
import CourseProgress from './CourseProgress'
import MyProgress from './MyProgress'
import SideMenu from './SideMenu'

const Dashboard = () => {

    


  return (
    <div class="flex flex-no-wrap">
       <SideMenu />
    <div class="w-full">
      <div class="w-full md:px-6 px-2">
        <div class="md:flex md:flex-wrap">
          <CourseProgress />
          <MyProgress />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard