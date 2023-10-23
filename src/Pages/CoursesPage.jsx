import React from 'react'
import MyCourses from '../Components/MyCourses'
import SideMenu from '../Components/SideMenu'

const CoursesPage = () => {
    return (
        <div class="flex flex-no-wrap">
            <div class="min-h-screen border-r border-gray-100 sticky top-0 h-full bg-gray-100 z-20">
                <SideMenu />
            </div>
            <MyCourses />
        </div>
    )
}

export default CoursesPage