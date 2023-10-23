import React from 'react'
import { Link } from 'react-router-dom'

const MyInstructors = () => {
  return (
    <div class="w-full md:pl-16">
      <div class="py-10 w-full px-6">
        <h1 class="font-bold text-gray-900 text-3xl mb-6">Instructors</h1>
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
              class="bg-gray-100 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-10 text-sm border-gray-300 border"
              placeholder="Search" />
          </div>
          <div class="relative w-full lg:w-1/5 mb-4 lg:mb-0 lg:mr-3 z-10">
            <div class="absolute z-0 inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a0aec0" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <select aria-label="Selected tab"
              class="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 text-gray-600 appearance-none bg-transparent">
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
          <div class="relative w-full lg:w-1/5 mb-4 lg:mb-0 lg:mr-3 z-10">
            <div class="z-0 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
                width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a0aec0" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <select aria-label="Selected tab"
              class="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 text-gray-600 appearance-none bg-transparent">
              <option class="text-sm text-gray-600">Name</option>
              <option class="text-sm text-gray-600">Size</option>
              <option selected class="text-sm text-gray-600">Duration</option>
            </select>
          </div>
          <div class="relative w-full lg:w-1/5 cursor-pointer z-0 border focus:border-gray-800 border-gray-300 p-2">
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
        <h3 class="font-bold text-gray-900 mt-8 mb-6 flex flex-wrap">Finance Experts</h3>
        <div class="flex flex-wrap">
          <Link to="/view-instructor">
            <div class="border-b-4 border-gray-800 max-w-sm mr-5 mb-6 ">
              <div class="h-32 w-full">
                <img class="w-full h-full object-cover object-center" src="assets/images/instructor-1.png"
                  alt="thumbnail" />
              </div>
              <div class="shadow p-4">
                <div class="flex items-center justify-between mb-1">
                  <h5 class="font-medium text-gray-800">Rhonda Doe</h5>
                  <div class="flex items-center">
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium mb-2">
                  Professor
                </p>
                <p class="text-xs text-gray-600 mb-4">
                  Et quidem faciunt, ut de voluptate ponit, quod summum bonum
                  sit aut rerum et quidem…
                </p>
                <div class="flex justify-between items-center text-xs mb-5">
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Investment
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded mx-2">
                    Marketing
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Budget
                  </p>
                </div>
                <div
                  class="flex flex-col lg:flex-row w-full items-start lg:items-center mb-8 lg:mb-0 lg:justify-between">
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Courses</h3>
                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      23
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Hours</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      2400
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center">
                    <h3 class="text-gray-800 leading-6 text-sm">Students</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      104
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/view-instructor">
            <div class="border-b-4 border-gray-800 max-w-sm mr-5 mb-6">
              <div class="h-32 w-full">
                <img class="w-full h-full object-cover object-center -t" src="assets/images/instructor-2.png"
                  alt="thumbnail" />
              </div>
              <div class="shadow p-4">
                <div class="flex items-center justify-between mb-1">
                  <h5 class="font-medium text-gray-800">Chan Doe</h5>
                  <div class="flex items-center">
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium mb-2">
                  Venture Capitalist
                </p>
                <p class="text-xs text-gray-600 mb-4">
                  Et quidem faciunt, ut de voluptate ponit, quod summum bonum
                  sit aut rerum et quidem…
                </p>
                <div class="flex justify-between items-center text-xs mb-5">
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Investment
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded mx-2">
                    Marketing
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Budget
                  </p>
                </div>
                <div
                  class="flex flex-col lg:flex-row w-full items-start lg:items-center mb-8 lg:mb-0 lg:justify-between">
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Courses</h3>
                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      23
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Hours</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      2400
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center">
                    <h3 class="text-gray-800 leading-6 text-sm">Students</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      104
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/view-instructor">
            <div class="border-b-4 border-gray-800 max-w-sm mr-5 mb-6">
              <div class="h-32 w-full">
                <img class="w-full h-full object-cover object-center -t" src="assets/images/instructor-3.png"
                  alt="thumbnail" />
              </div>
              <div class="shadow p-4">
                <div class="flex items-center justify-between mb-1">
                  <h5 class="font-medium text-gray-800">Jack Nielsen</h5>
                  <div class="flex items-center">
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium mb-2">
                  Creative Director
                </p>
                <p class="text-xs text-gray-600 mb-4">
                  Et quidem faciunt, ut de voluptate ponit, quod summum bonum
                  sit aut rerum et quidem…
                </p>
                <div class="flex justify-between items-center text-xs mb-5">
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Investment
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded mx-2">
                    Marketing
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Budget
                  </p>
                </div>
                <div
                  class="flex flex-col lg:flex-row w-full items-start lg:items-center mb-8 lg:mb-0 lg:justify-between">
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Courses</h3>
                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      23
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Hours</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      2400
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center">
                    <h3 class="text-gray-800 leading-6 text-sm">Students</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      104
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/view-instructor">
            <div class="border-b-4 border-gray-800 max-w-sm mr-5 mb-6">
              <div class="h-32 w-full">
                <img class="w-full h-full object-cover object-center -t" src="assets/images/instructor-4.png"
                  alt="thumbnail" />
              </div>
              <div class="shadow p-4">
                <div class="flex items-center justify-between mb-1">
                  <h5 class="font-medium text-gray-800">Pamela Kirsten</h5>
                  <div class="flex items-center">
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium mb-2">Banker</p>
                <p class="text-xs text-gray-600 mb-4">
                  Et quidem faciunt, ut de voluptate ponit, quod summum bonum
                  sit aut rerum et quidem…
                </p>
                <div class="flex justify-between items-center text-xs mb-5">
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Investment
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded mx-2">
                    Marketing
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Budget
                  </p>
                </div>
                <div
                  class="flex flex-col lg:flex-row w-full items-start lg:items-center mb-8 lg:mb-0 lg:justify-between">
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Courses</h3>
                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      23
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Hours</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      2400
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center">
                    <h3 class="text-gray-800 leading-6 text-sm">Students</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      104
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <h3 class="font-bold text-gray-900 mt-8 mb-6 flex flex-wrap">Design Experts</h3>
        <div class="flex flex-wrap">
          <Link to="/view-instructor">
            <div class="border-b-4 border-red-700 max-w-sm mr-5 mb-6">
              <div class="h-32 w-full">
                <img class="w-full h-full object-cover object-center -t" src="assets/images/instructor-5.png"
                  alt="thumbnail" />
              </div>
              <div class="shadow p-4">
                <div class="flex items-center justify-between mb-1">
                  <h5 class="font-medium text-gray-800">James Doe</h5>
                  <div class="flex items-center">
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium mb-2">
                  Assistant Professor
                </p>
                <p class="text-xs text-gray-600 mb-4">
                  Et quidem faciunt, ut de voluptate ponit, quod summum bonum
                  sit aut rerum et quidem…
                </p>
                <div class="flex justify-between items-center text-xs mb-5">
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Investment
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded mx-2">
                    Marketing
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Budget
                  </p>
                </div>
                <div
                  class="flex flex-col lg:flex-row w-full items-start lg:items-center mb-8 lg:mb-0 lg:justify-between">
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Courses</h3>
                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      23
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Hours</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      2400
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center">
                    <h3 class="text-gray-800 leading-6 text-sm">Students</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      104
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/view-instructor">
            <div class="border-b-4 border-red-700 max-w-sm mr-5 mb-6">
              <div class="h-32 w-full">
                <img class="w-full h-full object-cover object-center -t" src="assets/images/instructor-6.png"
                  alt="thumbnail" />
              </div>
              <div class="shadow p-4">
                <div class="flex items-center justify-between mb-1">
                  <h5 class="font-medium text-gray-800">Julie Doe</h5>
                  <div class="flex items-center">
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium mb-2">
                  Professor
                </p>
                <p class="text-xs text-gray-600 mb-4">
                  Et quidem faciunt, ut de voluptate ponit, quod summum bonum
                  sit aut rerum et quidem…
                </p>
                <div class="flex justify-between items-center text-xs mb-5">
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Investment
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded mx-2">
                    Marketing
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Budget
                  </p>
                </div>
                <div
                  class="flex flex-col lg:flex-row w-full items-start lg:items-center mb-8 lg:mb-0 lg:justify-between">
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Courses</h3>
                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      23
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Hours</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      2400
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center">
                    <h3 class="text-gray-800 leading-6 text-sm">Students</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      104
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/view-instructor">
            <div class="border-b-4 border-red-700 max-w-sm mr-5 mb-6">
              <div class="h-32 w-full">
                <img class="w-full h-full object-cover object-center -t" src="assets/images/instructor-7.png"
                  alt="thumbnail" />
              </div>
              <div class="shadow p-4">
                <div class="flex items-center justify-between mb-1">
                  <h5 class="font-medium text-gray-800">Jacob Doe</h5>
                  <div class="flex items-center">
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium mb-2">
                  Professor
                </p>
                <p class="text-xs text-gray-600 mb-4">
                  Et quidem faciunt, ut de voluptate ponit, quod summum bonum
                  sit aut rerum et quidem…
                </p>
                <div class="flex justify-between items-center text-xs mb-5">
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Investment
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded mx-2">
                    Marketing
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Budget
                  </p>
                </div>
                <div
                  class="flex flex-col lg:flex-row w-full items-start lg:items-center mb-8 lg:mb-0 lg:justify-between">
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Courses</h3>
                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      23
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Hours</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      2400
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center">
                    <h3 class="text-gray-800 leading-6 text-sm">Students</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      104
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/view-instructor">
            <div class="border-b-4 border-red-700 max-w-sm mr-5 mb-6">
              <div class="h-32 w-full">
                <img class="w-full h-full object-cover object-center -t" src="assets/images/instructor-8.png"
                  alt="thumbnail" />
              </div>
              <div class="shadow p-4">
                <div class="flex items-center justify-between mb-1">
                  <h5 class="font-medium text-gray-800">Pamela Kirsten</h5>
                  <div class="flex items-center">
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                    <svg class="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg"
                      width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor"
                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z">
                      </path>
                    </svg>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium mb-2">
                  Professor
                </p>
                <p class="text-xs text-gray-600 mb-4">
                  Et quidem faciunt, ut de voluptate ponit, quod summum bonum
                  sit aut rerum et quidem…
                </p>
                <div class="flex justify-between items-center text-xs mb-5">
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Investment
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded mx-2">
                    Marketing
                  </p>
                  <p class="py-1 px-2 text-gray-600 bg-gray-100 rounded">
                    Budget
                  </p>
                </div>
                <div
                  class="flex flex-col lg:flex-row w-full items-start lg:items-center mb-8 lg:mb-0 lg:justify-between">
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Courses</h3>
                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      23
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 class="text-gray-800 leading-6 text-sm">Hours</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      2400
                    </h2>
                  </div>
                  <div class="flex lg:block flex-row-reverse items-center">
                    <h3 class="text-gray-800 leading-6 text-sm">Students</h3>

                    <h2 class="mr-2 lg:mr-0 text-gray-600 text-xl lg:text-lg font-bold">
                      104
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MyInstructors