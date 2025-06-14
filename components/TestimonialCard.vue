<template>
  <div class="bg-white p-6 rounded-xl shadow-md text-left">
    <div class="flex items-center mb-4">
      <img
        :src="testimonial.imageUrl"
        :alt="testimonial.name"
        class="w-16 h-16 rounded-full object-cover mr-4"
        onerror="this.onerror=null;this.src='https://placehold.co/60x60/cccccc/333333?text=User';"
      />
      <div>
        <!-- Testimonial Name -->
        <p
          class="font-poppins font-medium text-base sm:text-lg md:text-lg leading-none tracking-normal capitalize text-gray-900"
        >
          {{ testimonial.name }}
        </p>
        <!-- Testimonial Role -->
        <p
          class="font-poppins font-normal text-xs sm:text-sm md:text-sm leading-none tracking-normal capitalize text-gray-500"
        >
          {{ testimonial.role }}
        </p>
      </div>
    </div>
    <!-- Testimonial Quote -->
    <p
      class="font-poppins font-normal text-sm sm:text-base md:text-base leading-[31.34px] tracking-normal italic text-gray-700"
    >
      "{{ testimonial.quote }}"
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

defineProps({
  testimonial: {
    type: Object as PropType<Testimonial>,
    required: true,
  },
});
</script>
