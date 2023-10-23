import React from 'react'

const VideoLibrary = () => {
    return (
        <div class="w-full">
            <div class="py-10 w-full px-6">
                <h1 class="font-bold text-gray-900 text-3xl mb-6">Video Library</h1>
                <div class="flex flex-col lg:flex-row w-full lg:items-center lg:w-2/3">
                    <div class="w-full relative mb-4 lg:mb-0 lg:mr-4 lg:w-1/3">
                        <div class="absolute text-gray-600 flex items-center pl-3 h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="18" height="18"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </div>
                        <label for="search" class="hidden"></label>
                        <input id="search"
                            class="bg-gray-100 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-10 text-sm border-gray-300 rounded border"
                            placeholder="Search" />
                    </div>
                    <div class="relative w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-3 z-10">
                        <div class="absolute z-0 inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                                width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a0aec0" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                        <select aria-label="Selected tab"
                            class="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent">
                            <option class="text-sm text-gray-600">
                                Headers and Titles
                            </option>
                            <option class="text-sm text-gray-600">
                                Authors and Tutors
                            </option>
                            <option selected class="text-sm text-gray-600">
                                Topics & Skills
                            </option>
                        </select>
                    </div>
                    <div class="relative w-full lg:w-1/4 mb-4 lg:mb-0 lg:mr-3 z-10">
                        <div class="z-0 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                                width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a0aec0" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                        <select aria-label="Selected tab"
                            class="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent">
                            <option class="text-sm text-gray-600">Name</option>
                            <option class="text-sm text-gray-600">Size</option>
                            <option selected class="text-sm text-gray-600">Duration</option>
                        </select>
                    </div>
                    <div
                        class="relative w-full lg:w-1/4 cursor-pointer z-0 border focus:border-gray-800 border-gray-300 rounded p-2">
                        <div class="z-0 w-10 pl-2 absolute inset-0 m-auto z-0 mr-0 flex items-center text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-calendar-event"
                                width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x="4" y="5" width="16" height="16" rx="2" />
                                <line x1="16" y1="3" x2="16" y2="7" />
                                <line x1="8" y1="3" x2="8" y2="7" />
                                <line x1="4" y1="11" x2="20" y2="11" />
                                <rect x="8" y="15" width="2" height="2" />
                            </svg>
                            <input type="date" class="absolute right-0 z-10 opacity-0 cursor-pointer" />
                        </div>
                        <p class="text-sm text-gray-600">By Dates</p>
                    </div>
                </div>
                <h3 class="font-bold text-gray-900 mt-8">Finance</h3>
                <div class="flex items-center mx-auto mt-6 flex flex-wrap">
                    <div class="border-b-4 border-gray-800 max-w-sm mr-5">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                    <div class="border-b-4 border-gray-800 max-w-sm mr-5">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                    <div class="border-b-4 border-gray-800 max-w-sm mr-5">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                    <div class="border-b-4 border-gray-800 max-w-sm mr-5">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                </div>
                <h3 class="font-bold text-gray-900 mt-8">Finance</h3>
                <div class="flex items-center mx-auto mt-6 flex flex-wrap">
                    <div class="border-b-4 border-gray-800 max-w-sm mr-5">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                    <div class="border-b-4 border-gray-800 max-w-sm mr-5">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                    <div class="border-b-4 border-gray-800 max-w-sm mr-5">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                    <div class="border-b-4 border-gray-800 max-w-sm mr-5">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                </div>
                <h3 class="font-bold text-gray-900 mt-8">Finance</h3>
                <div class="flex items-center mx-auto mt-6 flex flex-wrap">
                    <div class="border-b-4 border-gray-800 mr-5 max-w-sm">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                    <div class="border-b-4 border-gray-800 mr-5 max-w-sm">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                    <div class="border-b-4 border-gray-800 mr-5 max-w-sm">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>
                    <div class="border-b-4 border-gray-800 mr-5 max-w-sm">
                        <div class="h-48 w-full bg-black bg-opacity-25 relative">
                            <img src="./assets/images/videos-1.png" class="w-full h-full object-cover object-center"
                                alt="analytics" />
                            <div class="flex items-center justify-between px-3 pb-5 w-full absolute left-0 right-0 bottom-0">
                                <div>
                                    <p class="text-gray-100 text-xs mb-1">
                                        01/09 video lectures
                                    </p>
                                    <p class="text-white text-sm">
                                        Buying stocks post-pandemic
                                    </p>
                                </div>
                                <div class="w-8 h-8 text-white rounded-md bg-white bg-opacity-50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-right" width="32"
                                        height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h5 class="text-gray-800 my-4 font-medium">
                            Fundamentals of Investment Banking
                        </h5>
                        <div class="flex items-center mb-6 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20" height="20"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                            </svg>
                            <span class="mx-2">|</span>

                            <p class="ml-4 text-xs">3 hours, 30 minutes</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoLibrary
