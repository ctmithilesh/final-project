import React from 'react'
import { Link } from 'react-router-dom'

const MyCourses = () => {
  return (
    <div class="w-full md:pl-16">
    <div class="py-10 w-full px-6">
      <h1 class="font-medium text-gray-900 text-3xl mb-6">Courses</h1>
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
            class="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent">
            <option class="text-sm text-gray-600">Name</option>
            <option class="text-sm text-gray-600">Size</option>
            <option selected class="text-sm text-gray-600">Duration</option>
          </select>
        </div>
        <div
          class="relative w-full lg:w-1/5 cursor-pointer z-0 border focus:border-gray-800 border-gray-300 rounded p-2">
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
      <h3 class="font-medium text-gray-900 mt-8 mb-6">
        Investment Banking
      </h3>
      <div class="md:flex items-center  mt-6  flex-wrap">
        <Link to="/courses-inner">
          <div class="shadow px-4 py-5 border-b-4 border-gray-800 md:max-w-sm md:mr-5 mb-6  ">
            <h5 class="mb-2 text-sm text-gray-600">Finance</h5>
            <h3 class="font-medium text-gray-900 mb-3">
              Fundamentals of Investment Banking
            </h3>
            <p class="text-gray-600 text-sm">
              Explores the introductory areas of investment banking in the
              modern day and age
            </p>
            <ul class="mt-5">
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 hours, 30 minutes</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"
                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 modules</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <span class="mx-2">|</span>
                <p>17 Aug - 19 Sept</p>
              </li>
            </ul>
            <div class="mt-10 flex items-center">
              <div class="h-8 w-8">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_4.png" alt=""
                  class="h-full w-full rounded-full overflow-hidden shadow" />
              </div>
              <div class="ml-2">
                <h5 class="text-xs text-gray-800">Jason Borne</h5>
                <p class="text-xs text-gray-600">Investment Banker</p>
              </div>
            </div>
          </div>
        </ Link>
        <Link to="/courses-inner">
          <div class="shadow px-4 py-5 border-b-4 border-gray-800 md:max-w-sm md:mr-5 mb-6">
            <h5 class="mb-2 text-sm text-gray-600">Finance</h5>
            <h3 class="font-medium text-gray-900 mb-3">
              Fundamentals of Investment Banking
            </h3>
            <p class="text-gray-600 text-sm">
              Explores the introductory areas of investment banking in the
              modern day and age
            </p>
            <ul class="mt-5">
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 hours, 30 minutes</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"
                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 modules</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <span class="mx-2">|</span>
                <p>17 Aug - 19 Sept</p>
              </li>
            </ul>
            <div class="mt-10 flex items-center">
              <div class="h-8 w-8">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png" alt=""
                  class="h-full w-full rounded-full overflow-hidden shadow" />
              </div>
              <div class="ml-2">
                <h5 class="text-xs text-gray-800">Pamela Kirsten</h5>
                <p class="text-xs text-gray-600">Professor</p>
              </div>
            </div>
          </div>
        </ Link>
        <Link to="/courses-inner">
          <div class="shadow px-4 py-5 border-b-4 border-gray-800 md:max-w-sm md:mr-5 mb-6">
            <h5 class="mb-2 text-sm text-gray-600">Finance</h5>
            <h3 class="font-medium text-gray-900 mb-3">
              Fundamentals of Investment Banking
            </h3>
            <p class="text-gray-600 text-sm">
              Explores the introductory areas of investment banking in the
              modern day and age
            </p>
            <ul class="mt-5">
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 hours, 30 minutes</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"
                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 modules</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <span class="mx-2">|</span>
                <p>17 Aug - 19 Sept</p>
              </li>
            </ul>
            <div class="mt-10 flex items-center">
              <div class="h-8 w-8">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_3.png" alt=""
                  class="h-full w-full rounded-full overflow-hidden shadow" />
              </div>
              <div class="ml-2">
                <h5 class="text-xs text-gray-800">Jasmine Doe</h5>
                <p class="text-xs text-gray-600">Assistant Professor</p>
              </div>
            </div>
          </div>
        </ Link>
        <Link to="/courses-inner">
          <div class="shadow px-4 py-5 border-b-4 border-gray-800 md:max-w-sm md:mr-5 mb-6">
            <h5 class="mb-2 text-sm text-gray-600">Finance</h5>
            <h3 class="font-medium text-gray-900 mb-3">
              Fundamentals of Investment Banking
            </h3>
            <p class="text-gray-600 text-sm">
              Explores the introductory areas of investment banking in the
              modern day and age
            </p>
            <ul class="mt-5">
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 hours, 30 minutes</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"
                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 modules</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <span class="mx-2">|</span>
                <p>17 Aug - 19 Sept</p>
              </li>
            </ul>
            <div class="mt-10 flex items-center">
              <div class="h-8 w-8">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_4.png" alt=""
                  class="h-full w-full rounded-full overflow-hidden shadow" />
              </div>
              <div class="ml-2">
                <h5 class="text-xs text-gray-800">Chan Doe</h5>
                <p class="text-xs text-gray-600">Venture Capitalist</p>
              </div>
            </div>
          </div>
        </ Link>
      </div>
      <h3 class="text-gray-900 mt-8 mb-6">Design</h3>
      <div class="md:flex items-center  mt-6  flex-wrap">
        <Link to="/courses-inner">
          <div class="shadow px-4 py-5 border-b-4 border-red-700 md:max-w-sm md:mr-5 mb-6">
            <h5 class="mb-2 text-sm text-gray-600">UX Design</h5>
            <h3 class="text-gray-900 mb-3">
              Introduction to Design Thinking
            </h3>
            <p class="text-gray-600 text-sm">
              Explores the introductory areas of design and its application
              in various domains
            </p>
            <ul class="mt-5">
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 hours, 30 minutes</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"
                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 modules</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <span class="mx-2">|</span>
                <p>17 Aug - 19 Sept</p>
              </li>
            </ul>
            <div class="mt-10 flex items-center">
              <div class="h-8 w-8">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_2.png" alt=""
                  class="h-full w-full rounded-full overflow-hidden shadow" />
              </div>
              <div class="ml-2">
                <h5 class="text-xs text-gray-800">Rachel Doe</h5>
                <p class="text-xs text-gray-600">UX Designer</p>
              </div>
            </div>
          </div>
        </ Link>
        <Link to="/courses-inner">
          <div class="shadow px-4 py-5 border-b-4 border-red-700 md:max-w-sm md:mr-5 mb-6">
            <h5 class="mb-2 text-sm text-gray-600">UX Design</h5>
            <h3 class="text-gray-900 mb-3">
              Introduction to Design Thinking
            </h3>
            <p class="text-gray-600 text-sm">
              Explores the introductory areas of design and its application
              in various domains
            </p>
            <ul class="mt-5">
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 hours, 30 minutes</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"
                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 modules</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <span class="mx-2">|</span>
                <p>17 Aug - 19 Sept</p>
              </li>
            </ul>
            <div class="mt-10 flex items-center">
              <div class="h-8 w-8">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" alt=""
                  class="h-full w-full rounded-full overflow-hidden shadow" />
              </div>
              <div class="ml-2">
                <h5 class="text-xs text-gray-800">Carl Larson</h5>
                <p class="text-xs text-gray-600">Creative Director</p>
              </div>
            </div>
          </div>
        </ Link>
        <Link to="/courses-inner">
          <div class="shadow px-4 py-5 border-b-4 border-red-700 md:max-w-sm md:mr-5 mb-6">
            <h5 class="mb-2 text-sm text-gray-600">UX Design</h5>
            <h3 class="text-gray-900 mb-3">
              Introduction to Design Thinking
            </h3>
            <p class="text-gray-600 text-sm">
              Explores the introductory areas of design and its application
              in various domains
            </p>
            <ul class="mt-5">
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 hours, 30 minutes</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"
                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 modules</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <span class="mx-2">|</span>
                <p>17 Aug - 19 Sept</p>
              </li>
            </ul>
            <div class="mt-10 flex items-center">
              <div class="h-8 w-8">
                <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" alt=""
                  class="h-full w-full rounded-full overflow-hidden shadow" />
              </div>
              <div class="ml-2">
                <h5 class="text-xs text-gray-800">Harvey Specter</h5>
                <p class="text-xs text-gray-600">Product Manager</p>
              </div>
            </div>
          </div>
        </ Link>
        <Link to="/courses-inner">
          <div class="shadow px-4 py-5 border-b-4 border-red-700 md:max-w-sm md:mr-5 mb-6">
            <h5 class="mb-2 text-sm text-gray-600">UX Design</h5>
            <h3 class="text-gray-900 mb-3">
              Introduction to Design Thinking
            </h3>
            <p class="text-gray-600 text-sm">
              Explores the introductory areas of design and its application
              in various domains
            </p>
            <ul class="mt-5">
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 hours, 30 minutes</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-horizontal"
                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
                </svg>
                <span class="mx-2">|</span>
                <p>3 modules</p>
              </li>
              <li class="text-gray-600 flex items-center text-xs mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="20"
                  height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="5" width="16" height="16" rx="2" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="4" y1="11" x2="20" y2="11" />
                  <rect x="8" y="15" width="2" height="2" />
                </svg>
                <span class="mx-2">|</span>
                <p>17 Aug - 19 Sept</p>
              </li>
            </ul>
            <div class="mt-10 flex items-center">
              <div class="h-8 w-8">
                <img src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg" alt=""
                  class="h-full w-full rounded-full overflow-hidden shadow" />
              </div>
              <div class="ml-2">
                <h5 class="text-xs text-gray-800">Julie Doe</h5>
                <p class="text-xs text-gray-600">Professor</p>
              </div>
            </div>
          </div>
        </ Link>
      </div>
    </div>
  </div>
  )
}

export default MyCourses