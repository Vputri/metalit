<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <Header />

    <div class="pt-[72px]"></div>

    <section class="relative bg-white text-gray-800 md:py-20 py-10 px-4 md:px-8 overflow-hidden">
      <div
        class="container mx-auto max-w-[90%] flex flex-col md:flex-row items-center justify-between z-10 relative"
      >
        <div class="md:w-1/4 flex justify-center md:justify-start order-2 md:order-1">
          <img
            src="/assets/img/hero-icon-career.png"
            alt="Job Search Illustration"
            class="max-w-full h-auto rounded-lg transition duration-500 hover:scale-105"
            onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/333333?text=Image+Missing';"
          />
        </div>
        <div class="md:w-3/4 text-center md:text-left mb-10 md:mb-0 order-1 md:order-2 md:pl-16">
          <p
            class="font-poppins font-medium text-[18px]leading-normal tracking-normal text-[#0F5DA9] inline-block py-2 rounded-md mb-4"
          >
            Career Support
          </p>
          <h1
            class="font-poppins font-semibold text-[30px]leading-normal tracking-normal text-black mb-4 rounded-md"
          >
            Job Vacancies
          </h1>
          <p
            class="font-poppins font-normal text-[16px] leading-[30px] tracking-normal text-[#262626] mb-8 opacity-90"
          >
            Positions available for you to choose and apply for
          </p>
        </div>
      </div>
    </section>

    <section class="py-10md:py-16 px-4 md:px-8 bg-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="job in jobVacancies"
            :key="job.id"
            class="bg-[#FAFAFA] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3
              class="font-poppins font-semibold text-[18px]leading-normal tracking-normal text-[#262626] mb-4"
            >
              {{ job.title }}
            </h3>
            <p
              class="font-poppins font-normal text-[16px]leading-normal tracking-normal text-[#262626] mb-4"
            >
              {{ job.salary }}
            </p>
            <p
              class="font-poppins font-normal text-[16px]leading-normal tracking-normal text-[#262626] mb-4"
            >
              {{ job.employmentType }}
            </p>
            <ul class="list-disc list-outside text-gray-700 space-y-1 mb-6 pl-4">
              <li
                v-for="(responsibility, index) in job.responsibilities"
                :key="index"
                class="font-poppins font-normal text-[16px] leading-[20px] tracking-normal text-[#262626]"
              >
                {{ responsibility }}
              </li>
            </ul>
            <NuxtLink
              :to="`/career-support/${job.id}`"
              class="block w-[118px] h-[44px] bg-[#0F5DA9] text-white text-center font-poppins font-semibold text-[16px]leading-normal tracking-normal flex items-center justify-center rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Apply
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-4 md:px-8">
      <ContactUsCta />
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import ContactUsCta from '~/components/ContactUsCta.vue';
import { jobVacancies } from '~/data/job';

// Set page metadata
useHead({
  title: 'Career Support',
  meta: [{ name: 'description', content: 'Explore job vacancies and career support resources.' }],
});
</script>
