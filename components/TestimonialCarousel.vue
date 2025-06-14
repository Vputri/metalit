<template>
  <div class="container mx-auto max-w-[90%] text-center relative">
    <h2
      class="font-poppins text-3xl sm:text-4xl md:text-[25px] leading-none tracking-[-1px] capitalize font-semibold text-gray-900 mb-12 rounded-md text-center"
    >
      What Our Graduates Say
    </h2>
    <div class="relative flex items-center justify-center px-4 sm:px-8 md:px-[5rem]">
      <!-- Left Arrow -->
      <button
        class="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-md transition duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 text-white hover:bg-blue-700"
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

      <!-- Carousel Content: Using transition-group as the grid container -->
      <transition-group
        name="slide"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden w-full"
      >
        <TestimonialCard
          v-for="testimonial in visibleTestimonials"
          :key="testimonial.name + testimonial.quote"
          :testimonial="testimonial"
          class="flex-shrink-0 w-full"
          :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }"
        />
      </transition-group>

      <!-- Right Arrow -->
      <button
        class="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-md hover:bg-gray-300 transition duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 text-white hover:bg-blue-700"
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
const itemsPerPage = ref(2); // Default for desktop

const updateItemsPerPage = () => {
  if (window.innerWidth < 768) {
    // md breakpoint is 768px
    itemsPerPage.value = 1;
  } else {
    itemsPerPage.value = 2;
  }
  // Ensure currentIndex doesn't go out of bounds after resize
  currentIndex.value = Math.min(currentIndex.value, props.testimonials.length - itemsPerPage.value);
  if (currentIndex.value < 0) currentIndex.value = 0; // Handle cases where testimonials count is less than itemsPerPage
};

onMounted(() => {
  updateItemsPerPage();
  window.addEventListener('resize', updateItemsPerPage);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage);
});

const visibleTestimonials = computed(() => {
  // If there are fewer testimonials than itemsPerPage, just show all of them
  if (props.testimonials.length <= itemsPerPage.value) {
    return props.testimonials;
  }

  const items = [];
  for (let i = 0; i < itemsPerPage.value; i++) {
    items.push(props.testimonials[(currentIndex.value + i) % props.testimonials.length]);
  }
  return items;
});

const nextTestimonial = () => {
  if (props.testimonials.length === 0) return; // Prevent errors with empty array
  currentIndex.value = (currentIndex.value + 1) % props.testimonials.length;
};

const prevTestimonial = () => {
  if (props.testimonials.length === 0) return; // Prevent errors with empty array
  currentIndex.value =
    (currentIndex.value - 1 + props.testimonials.length) % props.testimonials.length;
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

/* Important for slide transitions with grid:
   Ensure items don't affect layout during transition leave/enter,
   and maintain their grid column span. */
.slide-leave-active {
  position: absolute;
  width: calc(100% / var(--items-per-page, 2)); /* Dynamically adjust width for transition */
}

/* Ensure testimonials are always laid out in a row within the transition-group */
.transition-group {
  display: grid; /* Use grid directly here */
  grid-auto-flow: column; /* Keep items in a row */
}
</style>
