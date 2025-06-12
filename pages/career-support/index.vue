<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <!-- Header Component -->
    <Header />

    <div class="pt-[72px]"></div>

    <!-- Hero Section -->
    <section class="relative bg-white text-gray-800 py-20 px-4 md:px-8 overflow-hidden">
      <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative"
      >
        <div class="md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
          <!-- Illustration for career support page -->
          <img
            src="https://placehold.co/600x400/D1D5DB/1F2937?text=Job+Search+Illustration"
            alt="Job Search Illustration"
            class="max-w-full h-auto rounded-lg transition duration-500 hover:scale-105"
            onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/333333?text=Image+Missing';"
          />
        </div>
        <div class="md:w-1/2 text-center md:text-left mb-10 md:mb-0 order-1 md:order-2 md:pl-16">
          <p class="text-blue-700 font-bold text-lg mb-2">Career Support</p>
          <h1
            class="text-4xl md:text-5xl font-extrabold leading-tight mb-4 rounded-md text-gray-900"
          >
            Job Vacancies
          </h1>
          <p class="text-lg md:text-xl font-light mb-8 opacity-90 text-gray-700">
            Positions available for you to choose and apply for
          </p>
          <!-- You can add buttons or other elements here if needed -->
        </div>
      </div>
    </section>

    <!-- Job Vacancies Section (Updated) -->
    <section class="py-16 px-4 md:px-8 bg-gray-100">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="job in jobVacancies"
            :key="job.id"
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ job.title }}</h3>
            <p class="text-blue-600 font-semibold text-lg mb-2">{{ job.salary }}</p>
            <p class="text-gray-600 text-sm mb-4">{{ job.employmentType }}</p>
            <ul class="list-disc list-inside text-gray-700 space-y-1 mb-6 pl-4">
              <li v-for="(responsibility, index) in job.responsibilities" :key="index">
                {{ responsibility }}
              </li>
            </ul>
            <NuxtLink
              :to="`/career-support/${job.id}`"
              class="block w-full bg-blue-600 text-white text-center font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Apply
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us CTA Section (New Component) -->
    <section class="py-16 px-4 md:px-8">
      <ContactUsCta />
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import ContactUsCta from '~/components/ContactUsCta.vue';

// Define the Job Vacancy interface
interface JobVacancy {
  id: string;
  title: string;
  salary: string;
  employmentType: string;
  responsibilities: string[];
}

// Dummy data for job vacancies
const jobVacancies = ref<JobVacancy[]>([
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Developing data pipeline with python.',
      'Querying with sql.',
      'Presenting data according to business needs.',
    ],
  },
  {
    id: 'react-developer',
    title: 'React Developer',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Developing front end with next.js framework.',
      'Slicing design Figma.',
      'Logic implementation on front end side.',
    ],
  },
  {
    id: 'golang-developer',
    title: 'Golang Developer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Develop backend applications with golang.',
      'Create Rest API.',
      'Integration with cloud features (AWS, GCP, etc.).',
    ],
  },
  {
    id: 'python-developer',
    title: 'Python Developer',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Developing fullstack applications.',
      'Using Django Framework.',
      'Implementing business logic.',
    ],
  },
  {
    id: 'flutter-developer',
    title: 'Flutter Developer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Develop mobile applications.',
      'Integration with backend.',
      'Export iOS and Android applications.',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    responsibilities: [
      'Running scripts in Production.',
      'Creating Documentation.',
      'Cross Department Communication for IT needs.',
    ],
  },
]);

// Set page metadata
useHead({
  title: 'Career Support - Nuxt Boilerplate',
  meta: [{ name: 'description', content: 'Explore job vacancies and career support resources.' }],
});
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
