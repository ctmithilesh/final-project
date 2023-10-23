import React, { useEffect } from 'react'
import SideMenu from '../Components/SideMenu'
import ViewInstructor from '../Components/ViewInstructor'
import VideoLibrary from '../Components/VideoLibrary'

const VideoLibraryPage = () => {

    useEffect(() => {

        window.scrollTo(0, 0)

    })


    return (
        <div class="flex flex-no-wrap">
            <div class="min-h-screen border-r border-gray-100 sticky top-0 h-full bg-gray-100 z-20">
                <SideMenu />
            </div>
            <VideoLibrary />
        </div>
    )
}

export default VideoLibraryPage