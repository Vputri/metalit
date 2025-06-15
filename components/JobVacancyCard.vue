<template>
  <div
    class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
  >
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ job.title }}</h3>
      <p class="text-blue-600 font-medium mb-2">{{ job.salaryRange }}</p>
      <p class="text-gray-500 text-sm mb-4">{{ job.employmentType }}</p>

      <ul class="list-disc list-outside text-gray-700 text-sm space-y-1 mb-4">
        <li v-for="(responsibility, index) in job.responsibilities.slice(0, 3)" :key="index">
          {{ responsibility }}
        </li>
        <li v-if="job.responsibilities.length > 3">...</li>
      </ul>

      <NuxtLink
        :to="`/career-support/${job.id}`"
        class="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
      >
        Apply
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface JobVacancy {
  id: string;
  title: string;
  salaryRange: string;
  employmentType: string;
  responsibilities: string[];
  location: string;
  workType: string;
}

defineProps({
  job: {
    type: Object as PropType<JobVacancy>,
    required: true,
  },
});
</script>
