<template>
  <div
    class="relative bg-blue-700 text-white py-16 px-4 md:px-8 mx-auto rounded-3xl max-w-6xl shadow-xl overflow-hidden"
  >
    <div class="absolute inset-0 z-0 opacity-10">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <circle
          cx="10"
          cy="50"
          r="40"
          fill="currentColor"
          class="text-blue-500 opacity-50"
        ></circle>
        <circle
          cx="90"
          cy="50"
          r="40"
          fill="currentColor"
          class="text-blue-500 opacity-50"
        ></circle>
        <path
          d="M0 0 C 20 0, 0 100, 20 100 L 0 100 Z"
          fill="currentColor"
          class="text-blue-600 opacity-50"
        ></path>
        <path
          d="M100 0 C 80 0, 100 100, 80 100 L 100 100 Z"
          fill="currentColor"
          class="text-blue-600 opacity-50"
        ></path>
      </svg>
    </div>
    <div class="container mx-auto text-center relative z-10">
      <h2
        class="font-poppins text-2xl sm:text-3xl md:text-[30px] leading-none tracking-[-1px] capitalize font-bold mb-6 rounded-md text-center"
      >
        Stay Connected And Never Miss An Update
      </h2>
      <p
        class="font-poppins font-normal text-base sm:text-lg md:text-[18px] leading-none tracking-normal mb-8 opacity-90 rounded-md max-w-3xl mx-auto text-center"
      >
        Be the first to know about our latest programs, exclusive discounts, and free resources.
        Sign up today and start your journey toward a brighter tech future!
      </p>
      <button
        class="bg-[#00305E] text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 font-poppins font-normal text-base leading-[20px] tracking-normal capitalize"
      >
        SUBSCRIBE
      </button>
    </div>
  </div>
</template>
