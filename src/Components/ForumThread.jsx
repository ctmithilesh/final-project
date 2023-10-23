import React from 'react'
import { Link } from 'react-router-dom'
const ForumThread = () => {
    return (
        <div class="w-full">
            <div class="w-full px-6">
                <div class="lg:flex flex-wrap">
                    <div class="py-10 lg:w-2/3 w-full md:pr-6 sm:border-r border-gray-300">
                        <Link to="/forum">
                            <div class="flex items-center">
                                <div
                                    class="mr-3 w-6 h-6 rounded-full text-gray-500 border border-gray-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="18"
                                        height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                </div>
                                <h4 class="text-xl text-gray-900">Forum Thread</h4>
                            </div>
                        </Link>
                        <h1 class="my-6 text-4xl font-medium text-gray-900">
                            How do I train my dragon if it’s being picky about it?
                        </h1>
                        <div class="md:flex items-center">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                    alt="" />
                            </div>
                            <div class="ml-2 md:mt-0 mt-4 flex items-center text-gray-600">
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
                        <p class="mt-4 text-gray-600 text-sm">
                            Maecenas orci sapien, euismod vel enim in, vulputate ullamcorper
                            orci. Sed ullamcorper pretium magna, commodo finibus urna mollis
                            non. Nam id odio luctus, congue tellus in, ultricies turpis.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Nulla suscipit augue viverra, tincidunt metus ornare, volutpat
                            lorem. Pellentesque dignissim sem id ligula iaculis mollis. Nam
                            a arcu hendrerit, condimentum turpis eget, ultrices libero.
                        </p>
                        <p class="mt-4 text-gray-600 text-sm">
                            Fusce placerat vel quam vel hendrerit. Suspendisse consequat
                            fringilla dolor sed congue. Morbi mi ante
                        </p>
                        <div class="mt-8 flex items-start">
                            <div class="w-10 h-10 rounded-full flex-shrink-0">
                                <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                    alt="" />
                            </div>
                            <textarea placeholder="Reply to Rachel’s post"
                                class="ml-2 pl-6 pt-2 bg-gray-100 w-full h-24 resize-none focus:outline-none focus:border-blue-400 border border-transparent text-gray-800"></textarea>
                        </div>
                        <div class="my-8 text-gray-900 text-xl">Comments</div>
                        <div>
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full flex-shrink-0">
                                    <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                        alt="" />
                                </div>
                                <div class="ml-2 w-full">
                                    <div class="flex items-center justify-between w-full">
                                        <h5 class="text-gray-800 text-sm">John Doe</h5>
                                        <p class="text-xs text-gray-600">3 hours ago</p>
                                    </div>
                                    <p class="text-xs text-gray-600">Manager</p>
                                </div>
                            </div>
                            <p class="mt-3 text-gray-600 text-sm">
                                Maecenas orci sapien, euismod vel enim in, vulputate
                                ullamcorper orci. Sed ullamcorper pretium magna, commodo
                                finibus urna mollis non. Nam id odio luctus, congue tellus in,
                                ultricies turpis. Interdum et malesuada
                            </p>
                            <div class="mt-3 flex items-center text-gray-600">
                                <Link class="text-gray-600 text-xs cursor-pointer">Like</Link>
                                <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                <Link class="text-gray-600 text-xs cursor-pointer">Reply</Link>
                                <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                <p class="ml-2 text-indigo-500 text-xs cursor-pointer">
                                    View replies
                                </p>
                            </div>
                        </div>
                        <hr class="mt-6 mb-8 border-t border-gray-300" />
                        <div>
                            <div class="flex items-center">
                                <div class="w-10 h-10 rounded-full flex-shrink-0">
                                    <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                        alt="" />
                                </div>
                                <div class="ml-2 w-full">
                                    <div class="flex items-center justify-between w-full">
                                        <h5 class="text-gray-800 text-sm">John Doe</h5>
                                        <p class="text-xs text-gray-600">3 hours ago</p>
                                    </div>
                                    <p class="text-xs text-gray-600">Manager</p>
                                </div>
                            </div>
                            <p class="mt-3 text-gray-600 text-sm">
                                Maecenas orci sapien, euismod vel enim in, vulputate
                                ullamcorper orci. Sed ullamcorper pretium magna, commodo
                                finibus urna mollis non. Nam id odio luctus, congue tellus in,
                                ultricies turpis. Interdum et malesuada
                            </p>
                            <div class="mt-3 flex items-center text-gray-600">
                                <Link class="text-gray-600 text-xs cursor-pointer">Like</Link>
                                <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                <Link class="text-gray-600 text-xs cursor-pointer">Reply</Link>
                                <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                                <p class="ml-2 text-indigo-500 text-xs cursor-pointer">
                                    View replies
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="py-10 lg:w-1/3 w-full md:pl-6">
                        <h3 class="mb-10 text-gray-900 font-medium text-xl">
                            Top Contributors
                        </h3>
                        <div class="flex items-center mb-6">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                    alt="" />
                            </div>
                            <p class="text-gray-900 text-sm ml-4">John Doe</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">58 solutions</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">220 appreciations</p>
                        </div>
                        <div class="flex items-center mb-6">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                    alt="" />
                            </div>
                            <p class="text-gray-900 text-sm ml-4">John Doe</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">58 solutions</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">220 appreciations</p>
                        </div>
                        <div class="flex items-center mb-6">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                    alt="" />
                            </div>
                            <p class="text-gray-900 text-sm ml-4">John Doe</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">58 solutions</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">220 appreciations</p>
                        </div>
                        <div class="flex items-center mb-6">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                    alt="" />
                            </div>
                            <p class="text-gray-900 text-sm ml-4">John Doe</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">58 solutions</p>
                            <div class="w-1 h-1 bg-gray-500 rounded-full mx-3"></div>

                            <p class="text-gray-600 text-xs">220 appreciations</p>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full">
                                <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                    alt="" />
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
                                    <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                        alt="" />
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
                                    <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                        alt="" />
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
                                    <img class="w-full h-full object-cover object-center" src="./assets/images/enrolled-student-8.png"
                                        alt="" />
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

export default ForumThread
