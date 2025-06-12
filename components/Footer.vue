<template>
  <footer class="bg-white text-gray-700 py-12 px-4 md:px-8 shadow-inner">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div>
        <NuxtLink to="/" class="text-3xl font-bold text-blue-700 mb-4 inline-block">
          metalit
        </NuxtLink>
        <p class="text-sm leading-relaxed mt-2">
          Location: <br />
          MTH Square Ground Floor (GF) A4 A, Jl. Letjen M.T. Haryono Kav. 10, Bidara Cina
          Village/Sub-district, Jatinegara District, East Jakarta Administrative City, DKI Jakarta
          Province, Postal Code: 13330
        </p>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <svg
              class="w-5 h-5 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9.22a1 1 0 00.95 1.252l2.648-.885a1 1 0 011.252.95l-.885 2.648a1 1 0 00.684.948H19a2 2 0 002-2V7a2 2 0 00-2-2h-3.28a1 1 0 01-.948-.684L10.5 3.78a1 1 0 00-.95-1.252l-2.648.885a1 1 0 01-.684.948H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            <span>+6221 395 24531 (Telepon)</span>
          </li>
          <li class="flex items-center">
            <svg
              class="w-5 h-5 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1110.586 10.586z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 17l-3 3-4-4"
              ></path>
            </svg>
            <span>+62877 7739 9049 (Whatsapp)</span>
          </li>
          <li class="flex items-center pt-2">
            <svg
              class="w-5 h-5 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Operational hours:</span>
          </li>
          <li class="ml-7 text-sm">
            <span>Monday-Friday (09.00-17.00)</span>
          </li>
          <li class="ml-7 text-sm">
            <span>Excluding national holidays</span>
          </li>
          <li class="flex items-center pt-2">
            <svg
              class="w-5 h-5 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <a href="mailto:support@metalit.id" class="text-blue-600 hover:underline"
              >support@metalit.id</a
            >
          </li>
        </ul>
      </div>

      <!-- Support Section -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Support</h3>
        <ul class="space-y-2">
          <li>
            <a href="#" class="hover:text-blue-600 transition duration-300">Our Services</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-600 transition duration-300">Help Center</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-600 transition duration-300">About Us</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-600 transition duration-300">Contact Us</a>
          </li>
          <li>
            <a href="#" class="hover:text-blue-600 transition duration-300">FAQ</a>
          </li>
        </ul>
      </div>

      <div class="lg:col-start-4 flex flex-col items-center md:items-start pt-8 md:pt-0">
        <h3 class="text-lg font-semibold text-gray-900 mb-4 md:hidden">Connect With Us</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-700 hover:text-blue-600 transition duration-300">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.46 6c-.84.37-1.7.63-2.6.72.96-.58 1.7-1.42 2-2.47-.9.5-1.9.82-2.9.99-.85-.9-2.06-1.47-3.4-.64-1.34.83-1.8 2.2-1.33 3.5.07.2.14.4.2.6-2.58-.13-4.88-1.37-6.44-3.23-.27.46-.43.95-.43 1.48 0 1.04.53 2.05 1.34 2.62-.77-.02-1.48-.24-2.1-.58v.03c0 1.45 1.03 2.66 2.4 2.94-.25.07-.5.1-.76.1-.18 0-.35-.02-.5-.06.38 1.19 1.4 2.06 2.65 2.09-.98.77-2.2 1.22-3.5 1.22-.22 0-.44-.01-.65-.04 1.3 1.25 2.9 1.97 4.6 1.97 5.57 0 9.7-4.14 9.7-9.7 0-.15 0-.3-.01-.45.67-.47 1.25-1.07 1.7-1.74z"
              />
            </svg>
          </a>
          <a href="#" class="text-gray-700 hover:text-blue-600 transition duration-300">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.123 8.438 9.874V14.89h-2.54V12h2.54V9.799c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.45h-1.265c-1.247 0-1.637.777-1.637 1.562V12h2.773l-.443 2.89h-2.33V21.874C18.343 21.123 22 16.991 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
          <a href="#" class="text-gray-700 hover:text-blue-600 transition duration-300">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 4.5h-17A1.5 1.5 0 002 6v12a1.5 1.5 0 001.5 1.5h17a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5zM8 10.5v5H5v-5h3zm-1.5-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18 15.5c-.32 0-.6-.04-.87-.14l-.17-.06a2.66 2.66 0 01-1.03-.54c-.3-.26-.54-.57-.7-.94a3.3 3.3 0 01-.26-.45c-.09-.2-.14-.4-.14-.6a.54.54 0 00-.06-.3l-.06-.15a.39.39 0 00-.06-.15.42.42 0 00-.14-.14.28.28 0 00-.14-.04c-.06 0-.1-.02-.13-.02a.4.4 0 00-.1.02.2.2 0 00-.14.04.3.3 0 00-.06.14.28.28 0 00-.06.14.33.33 0 00-.06.15.54.54 0 00-.06.3c0 .2.05.4.14.6a3.3 3.3 0 01.26.45c.16.37.4.68.7.94a2.66 2.66 0 011.03.54c.27.1.55.14.87.14h.02c.07 0 .1-.02.13-.02l.1-.04a.2.2 0 00.1-.06c.02-.04.03-.08.03-.13a.17.17 0 00-.06-.1l-.1-.1a.15.15 0 00-.13-.04zm-4-5c.32 0 .6.04.87.14l.17.06a2.66 2.66 0 011.03.54c.3.26.54.57.7.94a3.3 3.3 0 01.26.45c.09.2.14.4.14.6a.54.54 0 00.06.3l.06.15a.39.39 0 00.06.15.42.42 0 00.14.14.28.28 0 00.14.04c.06 0 .1.02.13.02a.4.4 0 00.1-.02.2.2 0 00.14-.04.3.3 0 00.06-.14.28.28 0 00.06-.14.33.33 0 00.06-.15.54.54 0 00.06-.3c0-.2-.05-.4-.14-.6a3.3 3.3 0 01-.26-.45c-.16-.37-.4-.68-.7-.94a2.66 2.66 0 01-1.03-.54c-.27-.1-.55-.14-.87-.14h-.02c-.07 0-.1.02-.13.02l-.1.04a.2.2 0 00-.1.06c-.02.04-.03.08-.03.13a.17.17 0 00.06.1l.1.1a.15.15 0 00.13.04z"
              />
            </svg>
          </a>
          <a href="#" class="text-gray-700 hover:text-blue-600 transition duration-300">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.72 10.29l-6.3-4.21c-.42-.28-.97-.28-1.39 0-.42.28-.68.74-.68 1.21v8.42c0 .47.26.93.68 1.21.21.14.46.21.7.21.25 0 .5-.07.7-.21l6.3-4.21c.42-.28.68-.74.68-1.21s-.26-.93-.68-1.21z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
      <p>
        All Rights Reserved | Copyright © {{ new Date().getFullYear() }} | PT Metamorfosa Teknologi
        Berdikari
      </p>
    </div>
  </footer>
</template>
