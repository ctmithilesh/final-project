import React from 'react'

const Students = () => {
    return (
        <div class="w-full md:mx-16 ">
            <div class="py-10 w-full px-4 md:px-6">
                <h1 class="font-bold text-gray-900 md:text-3xl text-2xl mb-6">
                    Students Enrolled in ‘Consumer Behavior’
                </h1>
                <div class="w-full md:w-2/3">
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
                </div>

                <div class="md:flex items-center  mt-6  flex-wrap">
                    <div
                        class="w-full rounded shadow bg-white md:px-6 px-2 py-8 flex flex-col items-center md:max-w-sm md:mr-5 mb-6">
                        <div class="rounded-full w-20 h-20 border-4 border-gray-100">
                            <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-1.png"
                                alt="student" />
                        </div>
                        <h5 class="mt-4 mb-2 text-gray-800">Timothy Jon Oliphant</h5>
                        <p class="text-xs text-gray-600">Marketing Manager</p>
                        <div class="flex items-start my-8">
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    08
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Quizzes</p>
                            </div>
                            <div class="mx-6 lg:mx-3 xl:mx-4 px-8 lg:px-4 xl:px-4 border-l border-r">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    12
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Assignments</p>
                            </div>
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    03
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Projects</p>
                            </div>
                        </div>
                        <div class="text-xs text-gray-600 mb-3 px-6">33% Completion</div>
                        <div class="w-full h-1 bg-gray-200 rounded relative ">
                            <div class="w-1/3 bg-indigo-500 h-1 rounded absolute"></div>
                        </div>
                        <button
                            class="w-full sm:w-auto color-blue mt-6 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-6 transition duration-150 ease-in-out rounded">
                            Send Message
                        </button>
                    </div>
                    <div
                        class="w-full rounded shadow bg-white md:px-6 px-2 py-8 flex flex-col items-center md:max-w-sm md:mr-5 mb-6">
                        <div class="rounded-full w-20 h-20 border-4 border-gray-100">
                            <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-2.png"
                                alt="student" />
                        </div>
                        <h5 class="mt-4 mb-2 text-gray-800">Carrie Mathison</h5>
                        <p class="text-xs text-gray-600">Advertising Manager</p>
                        <div class="flex items-start my-8">
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    08
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Quizzes</p>
                            </div>
                            <div class="mx-6 lg:mx-3 xl:mx-4 px-8 lg:px-4 xl:px-4 border-l border-r">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    12
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Assignments</p>
                            </div>
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    03
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Projects</p>
                            </div>
                        </div>
                        <div class="text-xs text-gray-600 mb-3">33% Completion</div>
                        <div class="w-full h-1 bg-gray-200 rounded relative">
                            <div class="w-1/3 bg-indigo-500 h-1 rounded absolute"></div>
                        </div>
                        <button
                            class="w-full sm:w-auto color-blue mt-6 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-6 transition duration-150 ease-in-out rounded">
                            Send Message
                        </button>
                    </div>
                    <div
                        class="w-full rounded shadow bg-white md:px-6 px-2 py-8 flex flex-col items-center md:max-w-sm md:mr-5 mb-6">
                        <div class="rounded-full w-20 h-20 border-4 border-gray-100">
                            <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-3.png"
                                alt="student" />
                        </div>
                        <h5 class="mt-4 mb-2 text-gray-800">Jasmine Doe</h5>
                        <p class="text-xs text-gray-600">Psychologist</p>
                        <div class="flex items-start my-8">
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    08
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Quizzes</p>
                            </div>
                            <div class="mx-6 lg:mx-3 xl:mx-4 px-8 lg:px-4 xl:px-4 border-l border-r">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    12
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Assignments</p>
                            </div>
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    03
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Projects</p>
                            </div>
                        </div>
                        <div class="text-xs text-gray-600 mb-3">33% Completion</div>
                        <div class="w-full h-1 bg-gray-200 rounded relative">
                            <div class="w-1/3 bg-indigo-500 h-1 rounded absolute"></div>
                        </div>
                        <button
                            class="w-full sm:w-auto color-blue mt-6 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-6 transition duration-150 ease-in-out rounded">
                            Send Message
                        </button>
                    </div>
                    <div
                        class="w-full rounded shadow bg-white md:px-6 px-2 py-8 flex flex-col items-center md:max-w-sm md:mr-5 mb-6">
                        <div class="rounded-full w-20 h-20 border-4 border-gray-100">
                            <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-4.png"
                                alt="student" />
                        </div>
                        <h5 class="mt-4 mb-2 text-gray-800">Saul Berenson</h5>
                        <p class="text-xs text-gray-600">Assistant Manager</p>
                        <div class="flex items-start my-8">
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    08
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Quizzes</p>
                            </div>
                            <div class="mx-6 lg:mx-3 xl:mx-4 px-8 lg:px-4 xl:px-4 border-l border-r">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    12
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Assignments</p>
                            </div>
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    03
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Projects</p>
                            </div>
                        </div>
                        <div class="text-xs text-gray-600 mb-3">33% Completion</div>
                        <div class="w-full h-1 bg-gray-200 rounded relative">
                            <div class="w-1/3 bg-indigo-500 h-1 rounded absolute"></div>
                        </div>
                        <button
                            class="w-full sm:w-auto color-blue mt-6 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-6 transition duration-150 ease-in-out rounded">
                            Send Message
                        </button>
                    </div>
                    <div
                        class="w-full rounded shadow bg-white md:px-6 px-2 py-8 flex flex-col items-center md:max-w-sm md:mr-5 mb-6">
                        <div class="rounded-full w-20 h-20 border-4 border-gray-100">
                            <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-5.png"
                                alt="student" />
                        </div>
                        <h5 class="mt-4 mb-2 text-gray-800">Donna Paulsen</h5>
                        <p class="text-xs text-gray-600">Head of Product Design</p>
                        <div class="flex items-start my-8">
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    08
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Quizzes</p>
                            </div>
                            <div class="mx-6 lg:mx-3 xl:mx-4 px-8 lg:px-4 xl:px-4 border-l border-r">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    12
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Assignments</p>
                            </div>
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    03
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Projects</p>
                            </div>
                        </div>
                        <div class="text-xs text-gray-600 mb-3">33% Completion</div>
                        <div class="w-full h-1 bg-gray-200 rounded relative">
                            <div class="w-1/3 bg-indigo-500 h-1 rounded absolute"></div>
                        </div>
                        <button
                            class="w-full sm:w-auto color-blue mt-6 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-6 transition duration-150 ease-in-out rounded">
                            Send Message
                        </button>
                    </div>
                    <div
                        class="w-full rounded shadow bg-white md:px-6 px-2 py-8 flex flex-col items-center md:max-w-sm md:mr-5 mb-6">
                        <div class="rounded-full w-20 h-20 border-4 border-gray-100">
                            <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-6.png"
                                alt="student" />
                        </div>
                        <h5 class="mt-4 mb-2 text-gray-800">Ronald Doe</h5>
                        <p class="text-xs text-gray-600">Brand Manager</p>
                        <div class="flex items-start my-8">
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    08
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Quizzes</p>
                            </div>
                            <div class="mx-6 lg:mx-3 xl:mx-4 px-8 lg:px-4 xl:px-4 border-l border-r">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    12
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Assignments</p>
                            </div>
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    03
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Projects</p>
                            </div>
                        </div>
                        <div class="text-xs text-gray-600 mb-3">33% Completion</div>
                        <div class="w-full h-1 bg-gray-200 rounded relative">
                            <div class="w-1/3 bg-indigo-500 h-1 rounded absolute"></div>
                        </div>
                        <button
                            class="w-full sm:w-auto color-blue mt-6 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-6 transition duration-150 ease-in-out rounded">
                            Send Message
                        </button>
                    </div>
                    <div
                        class="w-full rounded shadow bg-white md:px-6 px-2 py-8 flex flex-col items-center md:max-w-sm md:mr-5 mb-6">
                        <div class="rounded-full w-20 h-20 border-4 border-gray-100">
                            <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-7.png"
                                alt="student" />
                        </div>
                        <h5 class="mt-4 mb-2 text-gray-800">John Clark</h5>
                        <p class="text-xs text-gray-600">
                            Business Development Executive
                        </p>
                        <div class="flex items-start my-8">
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    08
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Quizzes</p>
                            </div>
                            <div class="mx-6 lg:mx-3 xl:mx-4 px-8 lg:px-4 xl:px-4 border-l border-r">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    12
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Assignments</p>
                            </div>
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    03
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Projects</p>
                            </div>
                        </div>
                        <div class="text-xs text-gray-600 mb-3">33% Completion</div>
                        <div class="w-full h-1 bg-gray-200 rounded relative">
                            <div class="w-1/3 bg-indigo-500 h-1 rounded absolute"></div>
                        </div>
                        <button
                            class="w-full sm:w-auto color-blue mt-6 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-6 transition duration-150 ease-in-out rounded">
                            Send Message
                        </button>
                    </div>
                    <div
                        class="w-full rounded shadow bg-white md:px-6 px-2 py-8 flex flex-col items-center md:max-w-sm md:mr-5 mb-6">
                        <div class="rounded-full w-20 h-20 border-4 border-gray-100">
                            <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-7.png"
                                alt="student" />
                        </div>
                        <h5 class="mt-4 mb-2 text-gray-800">John Clark</h5>
                        <p class="text-xs text-gray-600">
                            Business Development Executive
                        </p>
                        <div class="flex items-start my-8">
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    08
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Quizzes</p>
                            </div>
                            <div class="mx-6 lg:mx-3 xl:mx-4 px-8 lg:px-4 xl:px-4 border-l border-r">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    12
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Assignments</p>
                            </div>
                            <div class="">
                                <h2 class="text-gray-600 text-xl leading-6 mb-2 text-center">
                                    03
                                </h2>
                                <p class="text-gray-800 text-xs leading-5">Projects</p>
                            </div>
                        </div>
                        <div class="text-xs text-gray-600 mb-3">33% Completion</div>
                        <div class="w-full h-1 bg-gray-200 rounded relative">
                            <div class="w-1/3 bg-indigo-500 h-1 rounded absolute"></div>
                        </div>
                        <button
                            class="w-full sm:w-auto color-blue mt-6 bg-gray-200 hover:bg-gray-300 text-sm py-2 px-6 transition duration-150 ease-in-out rounded">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students
