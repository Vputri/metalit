<template>
  <NuxtLink
    :to="`/programs/${program.id}`"
    class="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
  >
    <div class="relative w-full h-48 overflow-hidden">
      <img
        :src="program.imageUrl"
        :alt="program.title"
        class="w-full h-full object-cover"
        onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/333333?text=Image+Missing';"
      />
    </div>
    <div class="p-6">
      <h3
        class="font-poppins text-base sm:text-lg md:text-[18px] leading-none tracking-normal font-semibold text-gray-900 mb-2"
      >
        {{ program.title }}
      </h3>
      <div
        class="flex items-center text-sm mb-2 font-poppins text-base leading-none tracking-normal font-normal text-gray-500"
      >
        <span class="mr-2">🗓️</span> {{ program.startDate || 'N/A' }}
      </div>
      <div
        class="flex items-center text-sm mb-4 font-poppins text-base leading-none tracking-normal font-semibold text-gray-500"
      >
        <span class="mr-2">💰</span> {{ program.price || 'N/A' }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface Program {
  id: string;
  title: string;
  imageUrl: string;
  startDate?: string;
  price?: string;
}

defineProps({
  program: {
    type: Object as PropType<Program>,
    required: true,
  },
});
</script>
