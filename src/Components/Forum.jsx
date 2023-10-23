import React from 'react'
import { Link } from 'react-router-dom'
const Forum = () => {
    return (
        <div class="w-full">
            <div class="w-full px-6">
                <div class="lg:flex flex-wrap">
                    <div class="py-10 lg:w-2/3 w-full md:pr-6 md:border-r border-gray-300">
                        <div>
                            <h1 class="text-3xl text-gray-900 font-bold mb-10">Forum</h1>
                            <div class="flex flex-col md:flex-row md:items-center">
                                <div class="w-full md:w-1/2 pb-3 md:pb-0 md:pr-3 md:border-r border-gray-300">
                                    <h3 class="text-xl text-gray-900 mb-2">
                                        Search for questions & answers
                                    </h3>
                                    <div class="flex flex-col">
                                        <label for="search"
                                            class="hidden text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"></label>
                                        <div class="relative w-full mb-2">
                                            <div class="absolute text-gray-600 flex items-center pl-4 h-full cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="18"
                                                    height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx="10" cy="10" r="7" />
                                                    <line x1="21" y1="21" x2="15" y2="15" />
                                                </svg>
                                            </div>
                                            <input id="search"
                                                class="text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 rounded border bg-gray-100"
                                                placeholder="Search" />
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:flex-row md:items-center">
                                        <div class="w-full md:w-1/2">
                                            <div class="relative w-full z-10">
                                                <div class="absolute z-0 inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="icon cursor-pointer icon-tabler icon-tabler-chevron-down" width="20" height="20"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="#a0aec0" fill="none" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                                <select aria-label="Selected tab"
                                                    class="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent">
                                                    <option class="text-sm text-gray-600">
                                                        Option 1
                                                    </option>
                                                    <option class="text-sm text-gray-600">
                                                        Option 2
                                                    </option>
                                                    <option selected="" class="text-sm text-gray-600">
                                                        Select category
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="w-full md:w-1/2 md:flex justify-end">
                                            <button
                                                class="bg-gray-800 text-sm  text-white rounded hover:bg-gray-600 transition duration-150 ease-in-out py-2 px-6 sm:mt-0 mt-4">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 pt-3 md:pt-0 md:pl-3">
                                    <h3 class="text-xl text-gray-900 mb-2">Ask a question</h3>
                                    <div class="flex flex-col">
                                        <label for="q_search"
                                            class="hidden text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"></label>
                                        <div class="relative w-full mb-2">
                                            <input id="q_search"
                                                class="text-gray-600 focus:outline-none focus:border focus:border-blue-700 bg-gray-100 font-normal w-full h-10 flex items-center pl-4 text-sm border-gray-300 rounded border"
                                                placeholder="Type a question" />
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:flex-row md:items-center">
                                        <div class="w-full md:w-1/2"></div>
                                        <div class="w-full md:w-1/2 md:flex md:mb-0 mb-4 justify-end">
                                            <button
                                                class="bg-blue-700 text-sm text-white rounded hover:bg-blue-600 transition duration-150 ease-in-out py-2 px-6 sm:mt-0 mt-4">
                                                Ask
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-16 sm:flex items-center">
                                <button
                                    class="md:mr-16 bg-blue-100 text-sm text-blue-500 rounded hover:bg-blue-200 transition duration-150 ease-in-out py-2 px-6">
                                    Recent Threads
                                </button>
                                <p class="text-sm text-gray-600 sm:mt-0 mt-8 sm:px-0 px-2">
                                    Unanswered Threads
                                </p>
                            </div>
                            <hr class="mt-6 mb-8 border-t border-gray-300" />
                            <Link to="/forum-thread">
                                <div class="md:flex items-center">
                                    <div class="w-10 h-10 rounded-full flex-shrink-0">
                                        <img class="w-full h-full object-cover object-center flex-shrink-0"
                                            src="./assets/images/enrolled-student-8.png" alt="" />
                                    </div>
                                    <div class="md:ml-2 w-full">
                                        <div class="md:flex items-center justify-between mt-4 md:mt-0 w-full">
                                            <h5 class="text-gray-800 text-base">
                                                How do I train my dragon if it’s being stubborn about
                                                it?
                                            </h5>
                                            <div class=" text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="20"
                                                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="md:mt-1 mt-3 flex  items-center text-gray-600">
                                            <p class="text-gray-600 text-xs">
                                                by <span class="text-blue-500">John Doe</span>
                                            </p>
                                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                            <p class="text-gray-600 text-xs">04 hours ago</p>
                                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                            <p class="ml-2 text-gray-600 text-xs">
                                                In: <span class="text-blue-500">Marketing</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-3 text-gray-600 text-sm">
                                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                                    nesciunt, neque porro quisquam est, quid malum, sensu
                                    iudicari, sed ut alterum aspernandum sentiamus alii autem,
                                    quibus ego assentior, cum a natura ipsa natura incorrupte
                                    atque corrupti….<span class="color-blue text-sm">more</span>
                                </p>
                                <div class="mt-3 md:flex items-center text-gray-600">
                                    <div class="flex items-center md:my-0 my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                            <line x1="8" y1="9" x2="16" y2="9" />
                                            <line x1="8" y1="13" x2="14" y2="13" />
                                        </svg>
                                        <p class="ml-2 text-gray-600 text-xs ">20 comments</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-1 h-1 bg-gray-500 rounded-full mx-2 md:mb-0 mb-2"></div>
                                        <p class="ml-2 text-gray-600 text-xs md:mb-0 mb-4">
                                            Last comment by
                                            <span class="text-blue-500">Oliver Jackson</span>
                                        </p>
                                    </div>
                                    <div class="flex items-center">

                                        <div class="w-1 h-1 bg-gray-500 rounded-full mx-2 md:mb-0 mb-2"></div>
                                        <p class="ml-2 text-gray-600 text-xs">
                                            Status: <span class="text-red-500">Unresolved</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <hr class="mt-6 mb-8 border-t border-gray-300" />
                            <Link to="/forum-thread">
                                <div class="md:flex items-center">
                                    <div class="w-10 h-10 rounded-full flex-shrink-0">
                                        <img class="w-full h-full object-cover object-center flex-shrink-0"
                                            src="./assets/images/enrolled-student-8.png" alt="" />
                                    </div>
                                    <div class="md:ml-2 w-full">
                                        <div class="md:flex items-center justify-between mt-4 md:mt-0 w-full">
                                            <h5 class="text-gray-800 text-base">
                                                How do I train my dragon if it’s being stubborn about
                                                it?
                                            </h5>
                                            <div class=" text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="20"
                                                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="md:mt-1 mt-3 flex  items-center text-gray-600">
                                            <p class="text-gray-600 text-xs">
                                                by <span class="text-blue-500">John Doe</span>
                                            </p>
                                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                            <p class="text-gray-600 text-xs">04 hours ago</p>
                                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                            <p class="ml-2 text-gray-600 text-xs">
                                                In: <span class="text-blue-500">Marketing</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-3 text-gray-600 text-sm">
                                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                                    nesciunt, neque porro quisquam est, quid malum, sensu
                                    iudicari, sed ut alterum aspernandum sentiamus alii autem,
                                    quibus ego assentior, cum a natura ipsa natura incorrupte
                                    atque corrupti….<span class="color-blue text-sm">more</span>
                                </p>
                                <div class="mt-3 md:flex items-center text-gray-600">
                                    <div class="flex items-center md:my-0 my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                            <line x1="8" y1="9" x2="16" y2="9" />
                                            <line x1="8" y1="13" x2="14" y2="13" />
                                        </svg>
                                        <p class="ml-2 text-gray-600 text-xs ">20 comments</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-1 h-1 bg-gray-500 rounded-full mx-2 md:mb-0 mb-2"></div>
                                        <p class="ml-2 text-gray-600 text-xs md:mb-0 mb-4">
                                            Last comment by
                                            <span class="text-blue-500">Oliver Jackson</span>
                                        </p>
                                    </div>
                                    <div class="flex items-center">

                                        <div class="w-1 h-1 bg-gray-500 rounded-full mx-2 md:mb-0 mb-2"></div>
                                        <p class="ml-2 text-gray-600 text-xs">
                                            Status: <span class="text-red-500">Unresolved</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <hr class="mt-6 mb-8 border-t border-gray-300" />
                            <Link to="/forum-thread">
                                <div class="md:flex items-center">
                                    <div class="w-10 h-10 rounded-full flex-shrink-0">
                                        <img class="w-full h-full object-cover object-center flex-shrink-0"
                                            src="./assets/images/enrolled-student-8.png" alt="" />
                                    </div>
                                    <div class="md:ml-2 w-full">
                                        <div class="md:flex items-center justify-between mt-4 md:mt-0 w-full">
                                            <h5 class="text-gray-800 text-base">
                                                How do I train my dragon if it’s being stubborn about
                                                it?
                                            </h5>
                                            <div class=" text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="20"
                                                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="md:mt-1 mt-3 flex  items-center text-gray-600">
                                            <p class="text-gray-600 text-xs">
                                                by <span class="text-blue-500">John Doe</span>
                                            </p>
                                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                            <p class="text-gray-600 text-xs">04 hours ago</p>
                                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                            <p class="ml-2 text-gray-600 text-xs">
                                                In: <span class="text-blue-500">Marketing</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="mt-3 text-gray-600 text-sm">
                                    Probabo, inquit, sic agam, ut labore et voluptatem sequi
                                    nesciunt, neque porro quisquam est, quid malum, sensu
                                    iudicari, sed ut alterum aspernandum sentiamus alii autem,
                                    quibus ego assentior, cum a natura ipsa natura incorrupte
                                    atque corrupti….<span class="color-blue text-sm">more</span>
                                </p>
                                <div class="mt-3 md:flex items-center text-gray-600">
                                    <div class="flex items-center md:my-0 my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24"
                                            height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                            <line x1="8" y1="9" x2="16" y2="9" />
                                            <line x1="8" y1="13" x2="14" y2="13" />
                                        </svg>
                                        <p class="ml-2 text-gray-600 text-xs ">20 comments</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-1 h-1 bg-gray-500 rounded-full mx-2 md:mb-0 mb-2"></div>
                                        <p class="ml-2 text-gray-600 text-xs md:mb-0 mb-4">
                                            Last comment by
                                            <span class="text-blue-500">Oliver Jackson</span>
                                        </p>
                                    </div>
                                    <div class="flex items-center">

                                        <div class="w-1 h-1 bg-gray-500 rounded-full mx-2 md:mb-0 mb-2"></div>
                                        <p class="ml-2 text-gray-600 text-xs">
                                            Status: <span class="text-red-500">Unresolved</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>




                        </div>
                    </div>
                    <div class="py-10 lg:w-1/3 w-full md:pl-6">
                        <h3 class="mb-10 text-gray-900 font-medium text-xl">
                            Top Contributors
                        </h3>
                        <div class="flex items-center mb-6">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center flex-shrink-0 flex"
                                    src="./assets/images/enrolled-student-8.png" alt="" />
                            </div>
                            <p class="text-gray-900 text-sm ml-4">John Doe</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">58 solutions</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">220 appreciations</p>
                        </div>
                        <div class="flex items-center mb-6">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center flex-shrink-0 flex"
                                    src="./assets/images/enrolled-student-8.png" alt="" />
                            </div>
                            <p class="text-gray-900 text-sm ml-4">John Doe</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">58 solutions</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">220 appreciations</p>
                        </div>
                        <div class="flex items-center mb-6">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center flex-shrink-0 flex"
                                    src="./assets/images/enrolled-student-8.png" alt="" />
                            </div>
                            <p class="text-gray-900 text-sm ml-4">John Doe</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">58 solutions</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">220 appreciations</p>
                        </div>
                        <div class="flex items-center mb-6">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center flex-shrink-0 flex"
                                    src="./assets/images/enrolled-student-8.png" alt="" />
                            </div>
                            <p class="text-gray-900 text-sm ml-4">John Doe</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">58 solutions</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">220 appreciations</p>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center flex-shrink-0 flex"
                                    src="./assets/images/enrolled-student-8.png" alt="" />
                            </div>
                            <p class="text-gray-900 text-sm ml-4">John Doe</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">58 solutions</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">220 appreciations</p>
                        </div>
                        <hr class="border-t border-gray-300 my-8" />
                        <h3 class="mb-6 text-gray-900 font-medium text-xl">
                            Unsolved queries
                        </h3>
                        <div class="mb-6">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full flex-shrink-0">
                                    <img class="w-full h-full object-cover object-center flex-shrink-0"
                                        src="./assets/images/enrolled-student-8.png" alt="" />
                                </div>
                                <div class="ml-2 w-full">
                                    <h5 class="text-gray-800 text-sm">John Doe</h5>
                                    <div class="md:flex items-center justify-between w-full">
                                        <p class="text-xs text-gray-600">Manager</p>
                                        <p class="text-xs text-blue-500">
                                            In: Introduction to Consumer Behavior
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-3 text-gray-600 text-sm">
                                The psychological factors that determine consumer behavior are
                                pivotal in understanding the course
                            </p>
                            <div class="mt-3 flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                    <line x1="8" y1="9" x2="16" y2="9" />
                                    <line x1="8" y1="13" x2="14" y2="13" />
                                </svg>
                                <p class="ml-2 text-gray-600 text-xs">20 comments</p>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full flex-shrink-0">
                                    <img class="w-full h-full object-cover object-center flex-shrink-0"
                                        src="./assets/images/enrolled-student-8.png" alt="" />
                                </div>
                                <div class="ml-2 w-full">
                                    <h5 class="text-gray-800 text-sm">John Doe</h5>
                                    <div class="md:flex items-center justify-between w-full">
                                        <p class="text-xs text-gray-600">Manager</p>
                                        <p class="text-xs text-blue-500">
                                            In: Introduction to Consumer Behavior
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-3 text-gray-600 text-sm">
                                The psychological factors that determine consumer behavior are
                                pivotal in understanding the course
                            </p>
                            <div class="mt-3 flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                    <line x1="8" y1="9" x2="16" y2="9" />
                                    <line x1="8" y1="13" x2="14" y2="13" />
                                </svg>
                                <p class="ml-2 text-gray-600 text-xs">20 comments</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full flex-shrink-0">
                                    <img class="w-full h-full object-cover object-center flex-shrink-0"
                                        src="./assets/images/enrolled-student-8.png" alt="" />
                                </div>
                                <div class="ml-2 w-full">
                                    <h5 class="text-gray-800 text-sm">John Doe</h5>
                                    <div class="md:flex items-center justify-between w-full">
                                        <p class="text-xs text-gray-600">Manager</p>
                                        <p class="text-xs text-blue-500">
                                            In: Introduction to Consumer Behavior
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p class="mt-3 text-gray-600 text-sm">
                                The psychological factors that determine consumer behavior are
                                pivotal in understanding the course
                            </p>
                            <div class="mt-3 flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                    <line x1="8" y1="9" x2="16" y2="9" />
                                    <line x1="8" y1="13" x2="14" y2="13" />
                                </svg>
                                <p class="ml-2 text-gray-600 text-xs">20 comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum
