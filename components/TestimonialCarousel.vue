<template>
  <div class="container mx-auto max-w-[90%] text-center relative">
    <h2
      class="font-poppins text-3xl sm:text-4xl md:text-[25px] leading-none tracking-[-1px] capitalize font-semibold text-gray-900 mb-12 rounded-md text-center"
    >
      What Our Graduates Say
    </h2>
    <div
      class="relative flex items-center justify-center px-4 sm:px-8 md:px-[5rem]"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <button
        v-show="itemsPerPage > 1"
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

      <transition-group
        name="slide"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        :style="{ '--items-per-page': itemsPerPage }"
      >
        <TestimonialCard
          v-for="testimonial in visibleTestimonials"
          :key="testimonial.name + testimonial.quote"
          :testimonial="testimonial"
          class="flex-shrink-0 w-full"
        />
      </transition-group>

      <button
        v-show="itemsPerPage > 1"
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

    <div
      v-if="itemsPerPage === 1 && props.testimonials.length > 1"
      class="flex justify-center mt-8 space-x-2"
    >
      <button
        v-for="(testimonial, index) in props.testimonials"
        :key="'indicator-' + index"
        @click="goToTestimonial(index)"
        :class="[
          'w-3 h-3 rounded-full transition-colors duration-300',
          index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400',
        ]"
        :aria-label="`Go to testimonial ${index + 1}`"
      ></button>
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

// Touch swipe variables
const touchStartX = ref(0);
const touchEndX = ref(0);
const minSwipeDistance = 50; // Minimum pixels to register a swipe

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
  if (props.testimonials.length === 0) return [];

  // When itemsPerPage is 1 (mobile), we only show the current testimonial
  if (itemsPerPage.value === 1) {
    return [props.testimonials[currentIndex.value]];
  }

  // For desktop (itemsPerPage = 2), we show a slice
  const items = [];
  for (let i = 0; i < itemsPerPage.value; i++) {
    items.push(props.testimonials[(currentIndex.value + i) % props.testimonials.length]);
  }
  return items;
});

const nextTestimonial = () => {
  if (props.testimonials.length === 0) return;
  currentIndex.value = (currentIndex.value + 1) % props.testimonials.length;
};

const prevTestimonial = () => {
  if (props.testimonials.length === 0) return;
  currentIndex.value =
    (currentIndex.value - 1 + props.testimonials.length) % props.testimonials.length;
};

const goToTestimonial = (index: number) => {
  currentIndex.value = index;
};

// Touch event handlers
const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e: TouchEvent) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (touchStartX.value === 0 && touchEndX.value === 0) return; // No touch recorded

  const distance = touchStartX.value - touchEndX.value;

  if (distance > minSwipeDistance) {
    // Swiped left (next testimonial)
    nextTestimonial();
  } else if (distance < -minSwipeDistance) {
    // Swiped right (previous testimonial)
    prevTestimonial();
  }

  // Reset touch values
  touchStartX.value = 0;
  touchEndX.value = 0;
};
</script>

<style scoped>
/* Transition for sliding effect */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  /* For next testimonial (entering from right) */
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  /* For current testimonial (leaving to left) */
  transform: translateX(-100%);
  opacity: 0;
}

/* Specific styling for when a testimonial leaves to ensure smooth transition */
.slide-leave-active {
  position: absolute;
  top: 0;
  /* Dynamically adjust width based on itemsPerPage for correct positioning */
  width: calc((100% - var(--gap, 2rem)) / var(--items-per-page, 2));
}

.slide-enter-active {
  position: absolute; /* Ensures the entering element doesn't affect layout immediately */
  top: 0;
  /* Dynamically adjust width for correct positioning */
  width: calc((100% - var(--gap, 2rem)) / var(--items-per-page, 2));
}

/* Ensure testimonials are always laid out in a row within the transition-group */
.grid {
  display: grid;
  /* When itemsPerPage is 1, ensure only one column for testimonial card */
  grid-template-columns: repeat(var(--items-per-page, 2), minmax(0, 1fr));
  grid-auto-flow: unset; /* Reset auto-flow to allow controlled grid-template-columns */
  position: relative; /* Essential for absolute positioning of entering/leaving elements */
}

/* Adjust TestimonialCard width inside the grid to ensure proper sliding */
.TestimonialCard {
  width: 100%; /* Make sure each card takes full width of its grid column */
}
</style>
