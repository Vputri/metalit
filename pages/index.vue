<template>
  <div class="min-h-screen text-gray-800 font-sans">
    <!-- Header Component -->
    <Header />

    <div class="pt-[72px]"></div>

    <!-- Hero Section -->
    <section class="relative bg-white text-gray-800 py-20 px-4 overflow-hidden">
      <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10"
      >
        <div class="md:w-1/2 text-center md:text-left mb-10 md:mb-0 pr-0 md:pr-16">
          <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
            Level Up Your Tech Skills and Launch a New Career with Our IT Bootcamp!
          </h1>
          <p class="text-lg md:text-xl font-light mb-8 text-gray-700">
            Transform Your Future - Learn Essential Skills, Build a Portfolio, and Gain the
            Confidence to Thrive in Any Tech Role!
          </p>
          <p class="text-md md:text-lg font-semibold text-gray-800 mb-6">
            Start Your Journey Today!
          </p>
          <a
            href="#registration-form"
            class="inline-block bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
        <div class="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://placehold.co/600x400/D1D5DB/1F2937?text=User+Flow+Illustration"
            alt="User Flow Illustration"
            class="max-w-full h-auto rounded-lg transition duration-500 hover:scale-105"
            onerror="this.onerror=null; this.src='https://placehold.co/600x400/D1D5DB/1F2937?text=Image+Unavailable';"
          />
        </div>
      </div>
    </section>

    <!-- About Metalit Section -->
    <section class="relative bg-blue-100 py-16 px-4 md:px-8 overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20">
        <!-- Abstract circles/shapes for background, mimicking the image -->
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <circle
            cx="10"
            cy="50"
            r="40"
            fill="currentColor"
            class="text-blue-200 opacity-50"
          ></circle>
          <circle
            cx="90"
            cy="50"
            r="40"
            fill="currentColor"
            class="text-blue-200 opacity-50"
          ></circle>
          <rect
            x="0"
            y="0"
            width="20"
            height="100"
            fill="currentColor"
            class="text-blue-300 opacity-50 transform rotate-45"
          ></rect>
          <rect
            x="80"
            y="0"
            width="20"
            height="100"
            fill="currentColor"
            class="text-blue-300 opacity-50 transform -rotate-45"
          ></rect>
        </svg>
      </div>
      <div class="container mx-auto text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 rounded-md">About Metalit</h2>
        <p class="text-lg md:text-xl font-light text-gray-700 mb-8 max-w-3xl mx-auto">
          Metalit is more than just a bootcamp—it's a transformative journey designed to prepare you
          for success in the fast-paced tech industry.
        </p>
        <NuxtLink
          to="/about"
          class="inline-block bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transform hover:scale-105"
        >
          Learn More &rarr;
        </NuxtLink>
      </div>
    </section>

    <!-- Features Section (Updated) -->
    <section class="py-16 px-4 md:px-8 bg-gray-50">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 rounded-md">
          Why Our Bootcamp Stands Out
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Iterate over features and use the FeatureCard component -->
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
      </div>
    </section>

    <!-- Choose Your Program Section -->
    <section class="py-16 px-4 md:px-8 bg-white">
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
            to="/program"
            class="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-full font-bold text-lg shadow-md"
          >
            Explore &rarr;
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Reusing ProgramCard component for featured programs on index page -->
          <ProgramCard v-for="program in featuredPrograms" :key="program.id" :program="program" />
        </div>
      </div>
    </section>

    <!-- What Our Graduates Say Section - Replaced with TestimonialCarousel -->
    <section class="py-16 px-4 md:px-8 bg-gray-100">
      <TestimonialCarousel :testimonials="testimonials" />
    </section>

    <!-- Registration Form Section -->
    <section id="registration-form" class="py-16 px-4 md:px-8 bg-white">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center rounded-md">
          Registration Form
        </h2>
        <RegistrationForm />
      </div>
    </section>

    <!-- Newsletter Signup Section (Now using the reusable component) -->
    <section class="py-16 px-4 md:px-8">
      <NewsletterCta />
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import FeatureCard from '~/components/FeatureCard.vue';
import ProgramCard from '~/components/ProgramCard.vue';
import TestimonialCarousel from '~/components/TestimonialCarousel.vue';
import RegistrationForm from '~/components/RegistrationForm.vue';
import NewsletterCta from '~/components/NewsletterCta.vue';

// Updated static feature data for the "Why Our Bootcamp Stands Out" section
const features = [
  {
    title: 'Expert Mentorship',
    description:
      'Learn from seasoned professionals with extensive industry experience who guide you every step of the way.',
  },
  {
    title: 'Job-Ready Skills',
    description:
      "Gain in-demand skills in programming, data analysis, and more, tailored to today's tech job market.",
  },
  {
    title: 'Affordable and Accessible Education',
    description:
      'Our bootcamp offers competitive pricing and financing options to make quality tech education accessible to everyone.',
  },
  {
    title: 'Career-Focused Projects',
    description:
      'Work on real-world projects that showcase your skills in a practical relatable way.',
  },
];

// Define a type for a program (copy from program.vue or define globally if preferred)
interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  imageUrl: string;
  startDate: string; // Added for the new section
  price: string; // Added for the new section
}

const featuredPrograms: Program[] = [
  {
    id: 'full-stack-development',
    title: 'Full-Stack Development',
    description: 'Build robust web applications with front-end and back-end expertise.',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    category: 'Computing & Dev',
    imageUrl: 'https://placehold.co/600x400/f0f9ff/0f766e?text=Web+Dev',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & Machine Learning',
    description: 'Master data analysis, machine learning, and AI concepts.',
    duration: '8 Months',
    level: 'Intermediate',
    category: 'Data Science',
    imageUrl: 'https://placehold.co/600x400/f0f9ff/065f46?text=Data+Science',
    startDate: 'November 24, 2024',
    price: 'Rp 1,500,000',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    description: 'Create intuitive and visually appealing user interfaces.',
    duration: '5 Months',
    level: 'Beginner',
    category: 'Design',
    imageUrl: 'https://placehold.co/600x400/f0f9ff/1d4ed8?text=UI/UX',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
  {
    id: 'it-project-management',
    title: 'IT Project Management',
    description: 'Lead and manage IT projects from conception to completion.',
    duration: '6 Months',
    level: 'Intermediate',
    category: 'Management',
    imageUrl: 'https://placehold.co/600x400/f0f9ff/8b5cf6?text=Project+Mgmt',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
  {
    id: 'software-testing-qa',
    title: 'Software Testing & Quality Assurance',
    description: 'Ensure software quality through comprehensive testing methodologies.',
    duration: '5 Months',
    level: 'Beginner',
    category: 'QA',
    imageUrl: 'https://placehold.co/600x400/f0f9ff/10b981?text=Testing+QA',
    startDate: 'November 24, 2024',
    price: 'Rp 1,500,000',
  },
  {
    id: 'cloud-computing-devops',
    title: 'Cloud Computing & DevOps',
    description: 'Master cloud platforms and DevOps practices for scalable solutions.',
    duration: '7 Months',
    level: 'Intermediate',
    category: 'DevOps',
    imageUrl: 'https://placehold.co/600x400/f0f9ff/fbbf24?text=Cloud+DevOps',
    startDate: 'November 15, 2024',
    price: 'Rp 2,000,000',
  },
];

const testimonials = [
  {
    name: 'Jacqueline Wright',
    role: 'Quality Assurance At Tokopedia',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci.',
    imageUrl: 'https://placehold.co/60x60/d1d5db/4b5563?text=JW',
  },
  {
    name: 'Jacqueline Wright',
    role: 'UI/UX Di Eureka Bookhouse',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci.',
    imageUrl: 'https://placehold.co/60x60/d1d5db/4b5563?text=JW',
  },
];

useHead({
  title: 'Home Page - Nuxt Boilerplate',
  meta: [{ name: 'description', content: 'A basic home page for the Nuxt.js boilerplate.' }],
});
</script>
