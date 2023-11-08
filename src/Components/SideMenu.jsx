import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {

    const [toggle, setToggle] = useState('hidden')

    useEffect(() => {


    }, [toggle])

    const toggleMenu = () => {

        console.log('toggle called')
        if (toggle === 'hidden') {
            setToggle(null)
        }
        if (toggle === null) {
            setToggle('hidden')
        }
    }


    return (
        <div class="min-h-screen border-r border-gray-100 sticky top-0 h-full bg-gray-100 z-20">
            {/* Side Menu */}
            <div class="relative top-0 min-h-screen bottom-0 flex items-center flex-col p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2 cursor-pointer mt-4"
                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none"
                    stroke-linecap="round" stroke-linejoin="round"
                    onClick={toggleMenu}
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
                <ul aria-orientation="vertical" class="rounded py-8">
                    <li
                        class="cursor-pointer text-blue-500 text-sm leading-3 tracking-normal py-1 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                            </svg>
                        </Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 focus:text-blue-700 focus:outline-none flex items-center">
                        <Link to="/courses">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                <polyline points="4 12 12 16 20 12" />
                                <polyline points="4 16 12 20 20 16" />
                            </svg>
                        </Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/instructors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                                <polyline points="12 8 7 3 3 7 8 12" />
                                <line x1="7" y1="8" x2="5.5" y2="9.5" />
                                <polyline points="16 12 21 17 17 21 12 16" />
                                <line x1="16" y1="17" x2="14.5" y2="18.5" />
                            </svg>
                        </Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/students">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                            </svg>
                        </Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/seminars">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-presentation" width="20"
                                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="3" y1="4" x2="21" y2="4" />
                                <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                                <line x1="12" y1="16" x2="12" y2="20" />
                                <line x1="9" y1="20" x2="15" y2="20" />
                                <path d="M8 12l3 -3l2 2l3 -3" />
                            </svg>
                        </Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/video-library">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard-hide" width="20"
                                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="2" y="3" width="20" height="12" rx="2" />
                                <line x1="6" y1="7" x2="6" y2="7" />
                                <line x1="10" y1="7" x2="10" y2="7" />
                                <line x1="14" y1="7" x2="14" y2="7" />
                                <line x1="18" y1="7" x2="18" y2="7" />
                                <line x1="6" y1="11" x2="6" y2="11.01" />
                                <line x1="18" y1="11" x2="18" y2="11.01" />
                                <line x1="10" y1="11" x2="14" y2="11" />
                                <path d="M10 21l2 -2l2 2" />
                            </svg>
                        </Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/forum">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                                <line x1="8" y1="8" x2="12" y2="8" />
                                <line x1="8" y1="12" x2="12" y2="12" />
                                <line x1="8" y1="16" x2="12" y2="16" />
                            </svg>
                        </Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/faqs">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-question-mark" width="20"
                                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M8 8 a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                <line x1="12" y1="19" x2="12" y2="19.01" />
                            </svg>
                        </Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/logout">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Mobile Nav */}
            <div
                class={`absolute top-0 min-h-screen ml-10 flex items-start flex-col bg-gray-100 transition duration-150 ease-in-out ${toggle}`}
                id="mobile-nav">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="opacity-0 pointer-events-none icon icon-tabler icon-tabler-menu-2 cursor-pointer mt-8" width="20"
                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
                <ul aria-orientation="vertical" class="rounded py-8 pl-2 pr-32 whitespace-no-wrap">
                    <li
                        class="cursor-pointer text-blue-500 text-sm leading-3 tracking-normal py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                        <Link to="/" class="ml-2">Dashboard</Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none flex items-center">
                        <Link to="/courses" class="ml-2">Courses</Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/instructors" class="ml-2">Instructors</Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/students" class="ml-2">Students</Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/seminars" class="ml-2">Seminars</Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/video-library" class="ml-2">Video Library</Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/forum" class="ml-2">Forum</Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/faqs" class="ml-2">FAQs</Link>
                    </li>
                    <li
                        class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
                        <Link to="/logout" class="ml-2">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu