import React from 'react'

const Dashboard = () => {
  return (
    <div class="flex flex-no-wrap">
    <div class="min-h-screen border-r border-gray-100 sticky top-0 h-full bg-gray-100 z-20">
        {/* Side Menu */}
      <div class="relative top-0 min-h-screen bottom-0 flex items-center flex-col p-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2 cursor-pointer mt-4"
          width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none"
          stroke-linecap="round" stroke-linejoin="round" onclick="sidebarHandler()">
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        <ul aria-orientation="vertical" class="rounded py-8">
          <li
            class="cursor-pointer text-blue-500 text-sm leading-3 tracking-normal py-1 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
            <a href="index.html">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="20" height="20"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
              </svg>
            </a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 focus:text-blue-700 focus:outline-none flex items-center">
            <a href="./courses.html">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack" width="20" height="20"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                <polyline points="4 12 12 16 20 12" />
                <polyline points="4 16 12 20 20 16" />
              </svg>
            </a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./instructors.html">
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
            </a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./students.html">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="20" height="20"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./seminars.html">
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
            </a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./videos.html">
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
            </a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./forum.html">
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
            </a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-1 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./FAQ.html">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-question-mark" width="20"
                height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M8 8 a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                <line x1="12" y1="19" x2="12" y2="19.01" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Nav */}
      <div
        class="absolute top-0 min-h-screen ml-10 flex items-start flex-col bg-gray-100 transition duration-150 ease-in-out hidden"
        id="mobile-nav">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="opacity-0 pointer-events-none icon icon-tabler icon-tabler-menu-2 cursor-pointer mt-8" width="20"
          height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718096" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        <ul aria-orientation="vertical" class="rounded py-8 pl-2 pr-32 whitespace-no-wrap">
          <li
            class="cursor-pointer text-blue-500 text-sm leading-3 tracking-normal py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
            <a href="index.html" class="ml-2">Dashboard</a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none flex items-center">
            <a href="./courses.html" class="ml-2">Courses</a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./instructors.html" class="ml-2">Instructors</a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./students.html" class="ml-2">Students</a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./seminars.html" class="ml-2">Seminars</a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./videos.html" class="ml-2">Video Library</a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./forum.html" class="ml-2">Forum</a>
          </li>
          <li
            class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-blue-700 flex items-center focus:text-blue-700 focus:outline-none">
            <a href="./FAQ.html" class="ml-2">FAQs</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-full">
      <div class="w-full md:px-6 px-2">
        <div class="md:flex md:flex-wrap">
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard