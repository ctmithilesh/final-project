import React from 'react'

const MyProgress = () => {
  return (
    <div class="py-10 lg:w-1/3 w-full md:pl-6 md:px-0 px-4">
    <h3 class="mb-10 text-gray-900 font-medium text-xl">
      My Progress
    </h3>

    <div class="sm:hidden relative w-11/12 mx-auto rounded">
      <div class="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-selector" width="24"
          height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="8 9 12 5 16 9" />
          <polyline points="16 15 12 19 8 15" />
        </svg>
      </div>
      <select aria-label="Selected tab"
        class="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
        <option selected class="text-sm text-gray-600">
          Metrics
        </option>
        <option class="text-sm text-gray-600">Notifications</option>
        <option class="text-sm text-gray-600">Announcements</option>
      </select>
    </div>
    <div class="justify-between flex-wrap hidden sm:block">
      <div class="xl:w-full xl:mx-0 border-b border-gray-300 rounded h-12">
        <ul class="flex items-center xl:justify-between">
          <li onclick="activeTab(this)"
            class="text-sm text-blue-500 bg-gray-100 py-2 px-4 rounded text-sm cursor-pointer">
            Metrics
          </li>
          <li onclick="activeTab(this)" class="text-sm text-gray-600 py-2 px-4 rounded text-sm cursor-pointer">
            Norifications
          </li>
          <li onclick="activeTab(this)" class="text-sm text-gray-600 py-2 px-4 rounded text-sm cursor-pointer">
            Announcements
          </li>
        </ul>
      </div>
      <div class="mt-8 mb-2">
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full mb-3">
            <img class="w-full h-full overflow-hidden object-cover rounded-full"
              src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
              alt="" />
          </div>
          <h5 class="mb-2 text-gray-800">Timothy Jon Oliphant</h5>
          <p class="text-gray-600 text-xs">Marketing Professional</p>
        </div>
        <div class="mt-8 flex items-center">
          <div class="w-full md:w-1/2 bg-gray-100 py-8 px-4 mr-2">
            <h3 class="mb-1 text-gray-800 text-center text-3xl font-medium">
              16
            </h3>
            <p class="text-sm text-center text-gray-600">
              Courses Completed
            </p>
          </div>
          <div class="w-full md:w-1/2 bg-gray-100 py-8 px-4 ml-2">
            <h3 class="mb-1 text-gray-800 text-center text-3xl font-medium">
              14
            </h3>
            <p class="text-sm text-center text-gray-600">
              Certificates Earned
            </p>
          </div>
        </div>
        <div class="mt-4 flex items-center">
          <div class="w-full md:w-1/2 bg-gray-100 py-8 px-4 mr-2">
            <h3 class="mb-1 text-gray-800 text-center text-3xl font-medium">
              08
            </h3>
            <p class="text-sm text-center text-gray-600">
              Courses in Progress
            </p>
          </div>
          <div class="w-full md:w-1/2 bg-gray-100 py-8 px-4 ml-2">
            <h3 class="mb-1 text-gray-800 text-center text-3xl font-medium">
              22
            </h3>
            <p class="text-sm text-center text-gray-600">
              Forum Discussions
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr class="border-t border-gray-300 my-8 " />
    <div class="mb-6 ">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full flex-shrink-0">
          <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
            alt="" />
        </div>
        <div class="ml-2 w-full">
          <h5 class="text-gray-800 text-sm">John Doe</h5>
          <div class="md:flex items-center justify-between w-full">
            <p class="text-xs text-gray-600">Manager</p>
            <p class="text-xs text-blue-500">
              Introduction to Consumer Behavior
            </p>
          </div>
        </div>
      </div>
      <p class="mt-3 text-gray-600 text-sm">
        The psychological factors that determine consumer behavior are
        pivotal in understanding the course
      </p>
    </div>
    <div class="mb-6">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full flex-shrink-0">
          <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
            alt="" />
        </div>
        <div class="ml-2 w-full">
          <h5 class="text-gray-800 text-sm">John Doe</h5>
          <div class="md:flex items-center justify-between w-full">
            <p class="text-xs text-gray-600">Manager</p>
            <p class="text-xs text-blue-500">
              Introduction to Consumer Behavior
            </p>
          </div>
        </div>
      </div>
      <p class="mt-3 text-gray-600 text-sm">
        Do the certifications enhance career options and growth?
      </p>
    </div>
    <div class="mb-6">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full flex-shrink-0">
          <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
            alt="" />
        </div>
        <div class="ml-2 w-full">
          <h5 class="text-gray-800 text-sm">John Doe</h5>
          <div class="md:flex items-center justify-between w-full">
            <p class="text-xs text-gray-600">Manager</p>
            <p class="text-xs text-blue-500">
              Introduction to Consumer Behavior
            </p>
          </div>
        </div>
      </div>
      <p class="mt-3 text-gray-600 text-sm">
        Do the certifications enhance career options and growth?
      </p>
    </div>
    <div>
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full flex-shrink-0">
          <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
            alt="" />
        </div>
        <div class="ml-2 w-full">
          <h5 class="text-gray-800 text-sm">John Doe</h5>
          <div class="md:flex items-center justify-between w-full">
            <p class="text-xs text-gray-600">Manager</p>
            <p class="text-xs text-blue-500">
              Introduction to Consumer Behavior
            </p>
          </div>
        </div>
      </div>
      <p class="mt-3 text-gray-600 text-sm">
        The psychological factors that determine consumer behavior are
        pivotal in understanding the course
      </p>
    </div>
  </div>
  )
}

export default MyProgress