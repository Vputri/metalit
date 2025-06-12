<template>
  <div class="bg-gray-100 p-6 rounded-xl shadow-md text-left">
    <div class="flex items-center mb-4">
      <img
        :src="testimonial.imageUrl"
        :alt="testimonial.name"
        class="w-16 h-16 rounded-full object-cover mr-4"
        onerror="this.onerror=null;this.src='https://placehold.co/60x60/cccccc/333333?text=User';"
      />
      <div>
        <p class="font-semibold text-lg text-gray-900">{{ testimonial.name }}</p>
        <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
      </div>
    </div>
    <p class="text-gray-700 italic">"{{ testimonial.quote }}"</p>
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
