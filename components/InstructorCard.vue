<template>
  <div class="bg-gray-50 p-6 rounded-xl shadow-md text-center">
    <img
      :src="instructor.imageUrl"
      :alt="instructor.name"
      class="w-32 h-32 rounded-full object-cover mx-auto mb-4"
      onerror="this.onerror=null;this.src='https://placehold.co/120x120/cccccc/333333?text=Instructor';"
    />
    <h3 class="text-xl font-semibold text-gray-900">{{ instructor.name }}</h3>
    <p class="text-blue-600 text-sm mb-2">{{ instructor.role }}</p>
    <p class="text-gray-700 text-sm">
      {{ instructor.bio }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface Instructor {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

defineProps({
  instructor: {
    type: Object as PropType<Instructor>,
    required: true,
  },
});
</script>
