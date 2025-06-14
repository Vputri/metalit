<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <!-- Header Component -->
    <Header />

    <div class="pt-[72px]"></div>

    <!-- Hero Section for Programs Page -->
    <section class="relative bg-white text-gray-800 py-20 px-4 md:px-8 overflow-hidden">
      <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative"
      >
        <div class="md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
          <img
            src="https://placehold.co/500x400/D1D5DB/1F2937?text=Programming+Illustration"
            alt="Programming Illustration"
            class="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg transition duration-500 hover:scale-105"
            onerror="this.onerror=null;this.src='https://placehold.co/500x400/cccccc/333333?text=Image+Missing';"
          />
        </div>
        <div class="md:w-1/2 text-center md:text-left mb-10 md:mb-0 order-1 md:order-2 md:pl-16">
          <p class="text-blue-700 font-bold text-lg mb-2">Programs</p>
          <h1
            class="text-4xl md:text-5xl font-extrabold leading-tight mb-4 rounded-md text-gray-900"
          >
            Master In-Demand Tech Skills and Build Your Future Today
          </h1>
          <p class="text-lg md:text-xl font-light mb-8 opacity-90 text-gray-700">
            Discover a range of specialized programs designed to help you master in-demand tech
            skills and launch a successful career in the industry. Choose the path that suits your
            passion and career goals:
          </p>
          <div class="flex items-center justify-center md:justify-start gap-4">
            <button
              class="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 transition duration-300"
            >
              <svg
                class="w-5 h-5"
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
            <div class="flex space-x-2 overflow-x-auto no-scrollbar">
              <span
                class="bg-blue-100 text-blue-700 font-medium py-2 px-6 rounded-full whitespace-nowrap"
                >Web Development</span
              >
              <span
                class="bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-full whitespace-nowrap"
                >Data Science & Analytics</span
              >
              <span
                class="bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-full whitespace-nowrap"
                >Mobile App Development</span
              >
            </div>
            <button
              class="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 transition duration-300"
            >
              <svg
                class="w-5 h-5"
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
      </div>
    </section>

    <!-- Programs Grid Section -->
    <section class="py-16 px-4 md:px-8 bg-gray-50">
      <div class="container mx-auto">
        <div class="flex justify-between items-center mb-12">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 rounded-md mb-2">
              Choose the Right Path for You
            </h2>
            <p class="text-lg md:text-xl text-gray-700">
              Choose Your Program and Start Your Journey Today!
            </p>
          </div>
          <NuxtLink
            to="/programs"
            class="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-full font-bold text-lg shadow-md"
          >
            Explore &rarr;
          </NuxtLink>
        </div>

        <!-- Search Bar -->
        <div class="mb-8 relative mx-auto">
          <input
            type="text"
            placeholder="Search"
            class="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <ProgramCard v-for="program in programs" :key="program.id" :program="program" />
        </div>
      </div>
    </section>

    <!-- What Our Graduates Say (Testimonials) -->
    <section class="py-16 px-4 md:px-8 bg-white">
      <TestimonialCarousel :testimonials="testimonials" />
    </section>

    <!-- Newsletter Signup Section -->
    <section class="py-16 px-4 md:px-8">
      <NewsletterCta />
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import ProgramCard from '~/components/ProgramCard.vue';
import TestimonialCarousel from '~/components/TestimonialCarousel.vue';
import NewsletterCta from '~/components/NewsletterCta.vue';

interface Program {
  id: string;
  title: string;
  imageUrl: string;
  startDate?: string;
  price?: string;
}

const programs: Program[] = [
  {
    id: 'full-stack-web-dev',
    title: 'Full-Stack Development',
    imageUrl: '/dummy-program/program-1.svg',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & Machine Learning',
    imageUrl: '/dummy-program/program-2.svg',
    startDate: 'November 24, 2024',
    price: 'Rp 1,500,000',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    imageUrl: '/dummy-program/program-3.svg',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
  {
    id: 'it-project-management',
    title: 'IT Project Management',
    imageUrl: '/dummy-program/program-4.svg',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
  {
    id: 'software-testing-qa',
    title: 'Software Testing & Quality Assurance',
    imageUrl: '/dummy-program/program-5.svg',
    startDate: 'November 24, 2024',
    price: 'Rp 1,500,000',
  },
  {
    id: 'cloud-computing-devops',
    title: 'Cloud Computing & DevOps',
    imageUrl: '/dummy-program/program-6.svg',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    role: 'Full-Stack Developer',
    quote:
      'The bootcamp transformed my career. The instructors were excellent, and the hands-on projects prepared me perfectly for the industry.',
    imageUrl: 'https://placehold.co/60x60/d1d5db/4b5563?text=JD',
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    quote:
      'I highly recommend this program. The curriculum is comprehensive, and the career support helped me land my first design role.',
    imageUrl: 'https://placehold.co/60x60/d1d5db/4b5563?text=JS',
  },
];

useHead({
  title: 'Programs',
  meta: [{ name: 'description', content: 'Explore our wide range of IT bootcamp programs.' }],
});
</script>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
