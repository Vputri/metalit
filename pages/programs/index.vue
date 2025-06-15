<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <Header />
    <div class="pt-[72px]"></div>

    <section class="bg-white md:py-20 py:10 px-4 md:px-10">
      <div
        class="container mx-auto max-w-[90%] flex flex-col md:flex-row items-center justify-between md:gap-x-16"
      >
        <div class="md:w-[30%] flex justify-center md:justify-start mb-10 md:mb-0">
          <img
            src="/assets/img/hero-icon-program.png"
            alt="API Illustration"
            class="max-w-sm md:max-w-md lg:max-w-lg h-auto"
            onerror="this.onerror=null;this.src='https://placehold.co/400x300?text=Image';"
          />
        </div>

        <div class="w-full md:w-[70%]">
          <p
            class="font-poppins font-medium text-[1.125rem] leading-none tracking-normal text-[#0F5DA9] inline-block py-2 rounded-md mb-2"
          >
            Programs
          </p>
          <h1
            class="font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[1.875rem] leading-snug tracking-normal text-black mb-4"
          >
            Master In-Demand Tech Skills and Build Your Future Today
          </h1>
          <p
            class="font-poppins font-normal text-base leading-[30px] tracking-normal text-[#262626] mb-8 opacity-90"
          >
            Discover a range of specialized programs designed to help you master in-demand tech
            skills and launch a successful career in the industry. Choose the path that suits your
            passion and career goals:
          </p>

          <div class="flex items-center gap-4 justify-center md:justify-start">
            <button
              class="bg-[#0F5DA9] text-white p-2 rounded-full hover:bg-blue-800"
              @click="scrollLeft"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div
              ref="scrollContainer"
              class="flex overflow-x-auto space-x-4 no-scrollbar scroll-smooth"
            >
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="flex items-center whitespace-nowrap px-5 py-2 rounded-lg bg-gray-100 text-blue-700 font-medium text-sm cursor-pointer hover:bg-blue-100"
              >
                {{ category }}
              </div>
            </div>

            <button
              class="bg-[#0F5DA9] text-white p-2 rounded-full hover:bg-blue-800"
              @click="scrollRight"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 md:px-8 bg-white">
      <div class="container mx-auto">
        <div class="flex justify-between items-center mb-12">
          <div>
            <h2
              class="font-poppins font-semibold text-[1.5625rem] leading-[35px] tracking-normal text-[#262626] mb-2"
              :class="{
                'text-center md:text-left': true,
                'text-2xl md:text-3xl lg:text-4xl': true,
              }"
            >
              Choose the Right Path for You
            </h2>
            <p
              class="font-poppins font-normal text-[1.125rem] leading-[25px] tracking-normal text-[#262626]"
              :class="{
                'text-center md:text-left': true,
                'text-lg md:text-xl': true,
              }"
            >
              Choose Your Program and Start Your Journey Today!
            </p>
          </div>
        </div>

        <div class="mb-8 relative mx-auto">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search programs..."
            class="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <!-- Program Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard v-for="program in filteredPrograms" :key="program.id" :program="program" />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 px-4 md:px-8 bg-gray-50">
      <TestimonialCarousel :testimonials="testimonials" />
    </section>

    <!-- Newsletter -->
    <section class="py-16 px-4 md:px-8">
      <NewsletterCta />
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import ProgramCard from '~/components/ProgramCard.vue';
import TestimonialCarousel from '~/components/TestimonialCarousel.vue';
import NewsletterCta from '~/components/NewsletterCta.vue';
import { featuredPrograms } from '~/data/program';
import { testimonials } from '~/data/testimonial';

// --- Page Metadata ---
useHead({
  title: 'Programs',
  meta: [{ name: 'description', content: 'Explore our wide range of IT bootcamp programs.' }],
});

const scrollContainer: Ref<HTMLElement | null> = ref(null);

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' });
  }
};

const categories = [
  'Web Development',
  'Data Science & Analytics',
  'Mobile App Development',
  'UI/UX Design',
];

const searchTerm = ref('');

const filteredPrograms = computed(() => {
  if (!searchTerm.value) {
    return featuredPrograms;
  }
  const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
  return featuredPrograms.filter((program) => {
    return program.title.toLowerCase().includes(lowerCaseSearchTerm);
  });
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
