<template>
  <div
    class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex flex-col"
  >
    <div class="grid grid-flow-col grid-rows-3 gap-4 justify-items-start">
      <div class="row-span-3">
        <img :src="iconSrc" alt="Ikon Fitur" class="w-12 h-12 mr-3" />
      </div>
      <div class="col-span-2">
        <h3
          class="font-poppins text-lg sm:text-lg md:text-lg leading-[25px] tracking-normal font-semibold text-blue-700 text-left"
        >
          {{ title }}
        </h3>
      </div>
      <div class="col-span-2 row-span-2">
        <p
          class="font-poppins text-sm sm:text-base md:text-base leading-[20px] tracking-normal font-normal text-gray-600 text-left"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  iconSrc: {
    type: String,
    required: true,
  },
});
</script>
