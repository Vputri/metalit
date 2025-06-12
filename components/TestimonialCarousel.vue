<template>
  <div class="container mx-auto text-center relative">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 rounded-md">
      What Our Graduates Say
    </h2>
    <div class="relative flex items-center justify-center px-4 sm:px-8 md:px-12">
      <!-- Left Arrow -->
      <button
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-3 shadow-md hover:bg-gray-300 transition duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        @click="prevTestimonial"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden w-full">
        <transition-group name="slide" tag="div" class="flex w-full">
          <TestimonialCard
            v-for="testimonial in visibleTestimonials"
            :key="testimonial.name + testimonial.quote"
            :testimonial="testimonial"
            class="flex-shrink-0 w-full md:w-1/2"
            :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }"
          />
        </transition-group>
      </div>

      <!-- Right Arrow -->
      <button
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full p-3 shadow-md hover:bg-gray-300 transition duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        @click="nextTestimonial"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { PropType } from 'vue';
import TestimonialCard from '~/components/TestimonialCard.vue';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

const props = defineProps({
  testimonials: {
    type: Array as PropType<Testimonial[]>,
    required: true,
  },
});

const currentIndex = ref(0);
const itemsPerPage = ref(2);

const updateItemsPerPage = () => {
  if (window.innerWidth < 768) {
    itemsPerPage.value = 1;
  } else {
    itemsPerPage.value = 2;
  }
};

onMounted(() => {
  updateItemsPerPage();
  window.addEventListener('resize', updateItemsPerPage);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage);
});

const visibleTestimonials = computed(() => {
  const start = currentIndex.value;
  const end = start + itemsPerPage.value;

  if (end <= props.testimonials.length) {
    return props.testimonials.slice(start, end);
  } else {
    return [
      ...props.testimonials.slice(start),
      ...props.testimonials.slice(0, end - props.testimonials.length),
    ];
  }
});

const nextTestimonial = () => {
  if (currentIndex.value + itemsPerPage.value < props.testimonials.length) {
    currentIndex.value = Math.min(
      currentIndex.value + itemsPerPage.value,
      props.testimonials.length - itemsPerPage.value,
    );
  } else {
    // Wrap around to the beginning
    currentIndex.value = 0;
  }
};

const prevTestimonial = () => {
  if (currentIndex.value > 0) {
    currentIndex.value = Math.max(0, currentIndex.value - itemsPerPage.value);
  } else {
    // Wrap around to the end
    currentIndex.value = props.testimonials.length - itemsPerPage.value;
  }
};
</script>

<style scoped>
/* Transition for sliding effect */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  position: absolute; /* Needed for transition-group to work correctly with transforms */
  opacity: 0;
}

/* Ensure testimonials are always laid out in a row within the transition-group */
.transition-group {
  display: flex;
}
</style>
