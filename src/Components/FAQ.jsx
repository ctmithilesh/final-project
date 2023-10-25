import React from 'react'

const FAQ = () => {
  return (
    <div class="w-full">
      <div class="py-10 w-full px-6">
        <div class="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
          <h1 class="font-bold text-gray-900 text-3xl">
            Frequently Asked Questions
          </h1>
          <div class="flex items-center">
            <div class="flex items-stretch border rounded border-gray-300 cursor-pointer">
              <a class="px-4 py-2 text-gray-600 text-xs border-r border-gray-300">Categorial</a>
              <a class="px-4 py-2 text-gray-600 text-xs border-r border-gray-300">Alphabetical</a>
            </div>
            <div class="ml-5 text-gray-600 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="28" height="28"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <ul>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  What does lorem ipsum actually mean?
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-plus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  How do we know what kind of sounds dinosaurs made?
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-minus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="hidden pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  Why work from home is not as fun as we thought it would be?
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-minus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="hidden pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  In what way did human beings started using words?
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-minus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="hidden pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  Which is the least developed area in the world
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-minus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="hidden pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  What does lorem ipsum actually mean?
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-plus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  How do we know what kind of sounds dinosaurs made?
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-minus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="hidden pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  Why work from home is not as fun as we thought it would be?
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-minus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="hidden pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  In what way did human beings started using words?
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-minus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="hidden pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
            <li class="py-6 border-gray-200 border-solid border-b">
              <div class="flex justify-between items-center">
                <h3 class="text-gray-800 text-2xl w-10/12">
                  Which is the least developed area in the world
                </h3>
                <div data-menu class="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="36"
                    height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Open">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="hidden icon icon-tabler icon-tabler-circle-minus"
                    width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none"
                    stroke-linecap="round" stroke-linejoin="round" aria-label="Close">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
              </div>
              <p class="hidden pt-5 text-gray-800 bg-gray-100 text-lg rounded-b-lg p-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus doloremque non eligendi unde ipsam?
                Voluptatibus, suscipit deserunt quidem delectus perferendis
                velit molestias, Voluptatibus, suscipit deserunt quidem
                delectus perferendis velit molestias, Voluptatibus, suscipit
                deserunt quidem delectus perferendis velit molestias,
                veritatis officia fugiat cumque quaerat earum adipisci?
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FAQ