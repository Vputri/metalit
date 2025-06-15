<template>
  <footer class="bg-gray-50 text-gray-700 py-12 px-4 md:px-8 shadow-inner">
    <div class="container mx-auto max-w-[90%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-8">
      <!-- Company Info Section - Sekarang mengambil 3 dari 9 kolom di layar besar (30%) -->
      <div class="lg:col-span-3">
        <NuxtLink to="/">
          <img src="/assets/img/logo.png" alt="metalit logo" class="h-12" />
        </NuxtLink>
        <p
          class="font-poppins font-semibold text-base leading-[25px] tracking-normal text-gray-700 mt-4"
        >
          Location:
        </p>
        <p
          class="font-poppins font-normal text-base leading-[25px] tracking-normal text-gray-700 mt-1"
        >
          MTH Square Ground Floor (GF) A4 A, Jl. Letjen M.T. Haryono Kav. 10, Bidara Cina
          Village/Sub-district, Jatinegara District, East Jakarta Administrative City, DKI Jakarta
          Province, Postal Code: 13330
        </p>
      </div>

      <!-- Contact Us Section - Sekarang mengambil 3 dari 9 kolom di layar besar (30%) -->
      <div class="lg:col-span-2">
        <!-- Tidak perlu col-start lagi, akan secara otomatis menjadi kolom kedua -->
        <h3
          class="font-poppins font-semibold text-base leading-[20px] tracking-normal text-gray-900 mb-4"
        >
          Contact Us
        </h3>
        <ul class="space-y-2">
          <li
            class="flex items-center font-poppins font-normal text-base leading-[20px] tracking-normal"
          >
            <img src="/assets/icon/phone.svg" alt="Phone icon" class="h-5 mr-3" />
            <span>+6221 395 24531 (Telepon)</span>
          </li>
          <li class="ml-8 font-poppins font-normal text-base leading-[20px] tracking-normal">
            <span>+62877 7739 9049 (Whatsapp)</span>
          </li>
          <li
            class="flex items-center pt-2 font-poppins font-normal text-base leading-[20px] tracking-normal"
          >
            <img src="/assets/icon/clock.svg" alt="Clock icon" class="h-5 mr-3" />
            <span>Operational hours:</span>
          </li>
          <li class="ml-8 font-poppins font-normal text-base leading-[20px] tracking-normal">
            <span>Monday-Friday (09.00-17.00)</span>
          </li>
          <li class="ml-8 font-poppins font-normal text-base leading-[20px] tracking-normal">
            <span>Excluding national holidays</span>
          </li>
          <li
            class="flex items-center pt-2 font-poppins font-normal text-base leading-[20px] tracking-normal"
          >
            <img src="/assets/icon/mail.svg" alt="Mail icon" class="h-5 mr-3" />
            <span>support@metalit.id</span>
          </li>
        </ul>
      </div>

      <!-- Support Section - Sekarang mengambil 1 dari 9 kolom di layar besar (10%) -->
      <div class="lg:col-span-2">
        <h3
          class="font-poppins font-semibold text-base leading-[20px] tracking-normal text-gray-900 mb-4"
        >
          Support
        </h3>
        <ul class="space-y-3">
          <li>
            <a
              href="#"
              class="hover:text-blue-600 transition duration-300 font-poppins font-normal text-base leading-[20px] tracking-normal"
              >Our Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-blue-600 transition duration-300 font-poppins font-normal text-base leading-[20px] tracking-normal"
              >Help Center</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-blue-600 transition duration-300 font-poppins font-normal text-base leading-[20px] tracking-normal"
              >About Us</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-blue-600 transition duration-300 font-poppins font-normal text-base leading-[20px] tracking-normal"
              >Contact Us</a
            >
          </li>
          <li>
            <a
              href="#"
              class="hover:text-blue-600 transition duration-300 font-poppins font-normal text-base leading-[20px] tracking-normal"
              >FAQ</a
            >
          </li>
        </ul>
      </div>

      <!-- Social Media Icons Section - Sekarang menjadi kolom ke-4 di grid (20%) -->
      <div class="lg:col-span-2 flex flex-col items-start pt-8 md:pt-0 justify-end">
        <!-- Disesuaikan untuk menjadi item grid -->
        <div class="flex space-x-4">
          <a href="#" class="text-gray-700 hover:text-blue-600 transition duration-300">
            <img src="/assets/icon/twitter.svg" alt="Twitter icon" class="h-7" />
          </a>
          <a href="#" class="text-gray-700 hover:text-blue-600 transition duration-300">
            <img src="/assets/icon/facebook.svg" alt="Facebook icon" class="h-7" />
          </a>
          <a href="#" class="text-gray-700 hover:text-blue-600 transition duration-300">
            <img src="/assets/icon/linkedin.svg" alt="LinkedIn icon" class="h-7" />
          </a>
          <a href="#" class="text-gray-700 hover:text-blue-600 transition duration-300">
            <img src="/assets/icon/youtube.svg" alt="YouTube icon" class="h-7" />
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-500">
      <p class="font-poppins font-normal text-sm leading-[20px] tracking-normal text-[#909090]">
        All Rights Reserved | Copyright © {{ new Date().getFullYear() }} | PT Metamorfosa Teknologi
        Berdikari
      </p>
    </div>
    <!-- Tidak ada lagi bagian social media terpisah di sini -->
  </footer>
</template>
