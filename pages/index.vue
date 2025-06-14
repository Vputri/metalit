<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <Header />

    <div class="pt-[72px]"></div>

    <section
      class="relative bg-white text-gray-800 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10"
      >
        <div class="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-16">
          <h1
            class="font-poppins text-3xl sm:text-4xl md:text-4xl lg:text-[40px] xl:text-[48px] leading-tight sm:leading-tight md:leading-tight lg:leading-[70px] xl:leading-[80px] font-bold tracking-normal mb-4 text-gray-900"
          >
            Level Up Your Tech Skills and Launch a New Career with Our IT Bootcamp!
          </h1>
          <p
            class="font-poppins text-base sm:text-lg md:text-lg lg:text-[18px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[35px] font-normal tracking-normal mb-8 text-gray-700"
          >
            Transform Your Future – Learn Essential Skills, Build a Portfolio, and Gain the
            Confidence to Thrive in Any Tech Role!
          </p>
          <p
            class="font-poppins text-sm sm:text-base md:text-base lg:text-[16px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[35px] font-medium tracking-normal mb-6 text-gray-800"
          >
            Start Your Journey Today!
          </p>
          <a
            href="#registration-form"
            class="inline-block bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-xl transform hover:scale-105 font-poppins font-semibold text-base sm:text-lg md:text-lg leading-none tracking-normal"
          >
            Register Now
          </a>
        </div>
        <div class="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="/assets/img/hero-icon.png"
            alt="User Flow Illustration"
            class="max-w-full h-auto rounded-lg transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>

    <!-- About Metalit Section: Introduces the organization and its mission -->
    <section
      class="relative bg-blue-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${bgAboutImage})` }"
    >
      <div class="absolute inset-0 z-0 opacity-20 bg-blue-100"></div>
      <div class="container mx-auto text-center relative z-10">
        <h2
          class="font-poppins text-2xl sm:text-3xl md:text-[25px] leading-normal sm:leading-normal md:leading-[35px] font-semibold tracking-normal text-gray-900 mb-6 rounded-md text-center"
        >
          About Metalit
        </h2>
        <p
          class="font-poppins text-base sm:text-lg md:text-[18px] leading-relaxed sm:leading-relaxed md:leading-[35px] font-normal tracking-normal mb-8 max-w-3xl mx-auto text-gray-700 text-center"
        >
          Metalit is more than just a bootcamp—it's a transformative journey designed to prepare you
          for success in the fast-paced tech industry.
        </p>
        <NuxtLink
          to="/about"
          class="inline-block bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg shadow-xl transform hover:scale-105"
        >
          Learn More &rarr;
        </NuxtLink>
      </div>
    </section>

    <!-- Features Section: Highlights key benefits of the bootcamp -->
    <section class="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 rounded-md">
          Why Our Bootcamp Stands Out
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
            :icon-src="feature.icon"
          />
        </div>
      </div>
    </section>

    <!-- Choose Your Program Section: Showcases featured programs -->
    <section class="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="container mx-auto">
        <div
          class="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 text-center md:text-left"
        >
          <div class="mb-6 md:mb-0">
            <h2
              class="font-poppins text-2xl sm:text-3xl md:text-[25px] leading-normal sm:leading-normal md:leading-[35px] font-semibold tracking-normal text-gray-900 rounded-md mb-2"
            >
              Choose the Right Path for You
            </h2>
            <p
              class="font-poppins text-base sm:text-lg md:text-[18px] leading-none tracking-normal font-normal text-gray-700"
            >
              Choose Your Program and Start Your Journey Today!
            </p>
          </div>
          <NuxtLink
            to="/programs"
            class="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-md font-poppins font-semibold text-base sm:text-lg md:text-[18px] leading-none tracking-normal"
          >
            Explore &rarr;
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProgramCard v-for="program in featuredPrograms" :key="program.id" :program="program" />
        </div>
      </div>
    </section>

    <!-- Testimonials Section: Displays feedback from graduates -->
    <section class="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <TestimonialCarousel :testimonials="testimonials" />
    </section>

    <!-- Registration Form Section: Primary call to action for users to sign up -->
    <section id="registration-form" class="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="container mx-auto max-w-4xl">
        <h2
          class="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center rounded-md"
        >
          Registration Form
        </h2>
        <RegistrationForm />
      </div>
    </section>

    <!-- Newsletter Signup Section: Encourages users to subscribe for updates -->
    <section class="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <NewsletterCta />
    </section>

    <!-- Footer Component: Contains copyright, links, and contact info -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// --- Imports ---
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import FeatureCard from '~/components/FeatureCard.vue';
import ProgramCard from '~/components/ProgramCard.vue';
import TestimonialCarousel from '~/components/TestimonialCarousel.vue';
import RegistrationForm from '~/components/RegistrationForm.vue';
import NewsletterCta from '~/components/NewsletterCta.vue';

import bgAboutImage from '~/assets/img/bg-about.png';
import { features } from '~/data/features';
import { featuredPrograms } from '~/data/program';
import { testimonials } from '~/data/testimonial';

// --- Page Metadata ---
// Configures head properties like title and meta description for SEO and browser tabs.
useHead({
  title: 'Home Page - Metalit IT Bootcamp',
  meta: [
    {
      name: 'description',
      content:
        "Transform your future with Metalit's IT Bootcamps. Learn essential tech skills, build a portfolio, and launch your career.",
    },
  ],
});
</script>
