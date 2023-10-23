import React from 'react'
import SideMenu from '../Components/SideMenu'
import MyInstructors from '../Components/MyInstructors'
import Forum from '../Components/Forum'

const ForumPage = () => {
    return (
        <div class="flex flex-no-wrap">
            <div class="min-h-screen border-r border-gray-100 sticky top-0 h-full bg-gray-100 z-20">
                <SideMenu />
            </div>
            <Forum />
        </div>
    )
}

export default ForumPage