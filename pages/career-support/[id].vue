<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <Header />

    <div class="pt-[72px]"></div>

    <template v-if="job">
      <section class="bg-white py-16 px-4 md:px-8">
        <div class="container mx-auto max-w-[90%]">
          <!-- <NuxtLink to="/career-support" class="text-blue-600 hover:underline mb-8 inline-block">
            &larr; Back to Job Vacancies
          </NuxtLink> -->

          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1
                class="font-poppins font-bold text-[30px] leading-none tracking-normal text-[#262626] mb-2"
              >
                {{ job.title }}
              </h1>
              <p
                class="font-poppins font-normal text-[20px] leading-none tracking-normal text-[#262626] mb-4"
              >
                {{ job.salary }}
              </p>
            </div>
            <button
              class="bg-[#0F5DA9] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg md:text-xl"
              @click="openUploadCvPopup"
            >
              Send CV
            </button>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg mb-8">
            <div class="mb-7">
              <h2
                class="font-poppins font-medium text-base leading-none tracking-normal inline-block py-2 rounded-md text-[#0F5DA9] mb-2"
              >
                Description
              </h2>
              <div class="flex items-center text-gray-700 mb-3">
                <svg
                  class="w-5 h-5 mr-2 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="font-poppins font-normal text-base leading-none tracking-normal text-[#262626]"
                  >{{ job.location }}</span
                >
              </div>
              <div class="flex items-center text-gray-700 mb-3">
                <svg
                  class="w-5 h-5 mr-2 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="font-poppins font-normal text-base leading-none tracking-normal text-[#262626]"
                  >{{ job.employmentType }}</span
                >
              </div>
              <p
                class="font-poppins font-normal text-base leading-[2opx] tracking-normal text-[#262626]"
              >
                {{ job.descriptionDetail }}
              </p>
            </div>

            <div class="mb-8">
              <h2
                class="font-poppins font-medium text-base leading-none tracking-normal inline-block py-2 rounded-md text-[#0F5DA9] mb-2"
              >
                Responsibilities
              </h2>
              <ul
                class="list-disc list-outside font-poppins font-normal text-base leading-[20px] tracking-normal text-[#262626 space-y-2 pl-4"
              >
                <li v-for="(responsibility, index) in job.responsibilities" :key="index">
                  {{ responsibility }}
                </li>
              </ul>
            </div>

            <div class="mb-8">
              <h2
                class="font-poppins font-medium text-base leading-none tracking-normal inline-block py-2 rounded-md text-[#0F5DA9] mb-2"
              >
                Qualifications
              </h2>
              <ul
                class="list-disc list-outside font-poppins font-normal text-base leading-[20px] tracking-normal text-[#262626 space-y-2 pl-4"
              >
                <li v-for="(qualification, index) in job.qualifications" :key="index">
                  {{ qualification }}
                </li>
              </ul>
            </div>

            <div v-if="job.additionalSkills && job.additionalSkills.length > 0">
              <h2
                class="font-poppins font-medium text-base leading-none tracking-normal inline-block py-2 rounded-md text-[#0F5DA9] mb-2"
              >
                Additional skills and qualifications that would be beneficial
              </h2>
              <ul
                class="list-disc list-outside font-poppins font-normal text-base leading-[20px] tracking-normal text-[#262626 space-y-2 pl-4"
              >
                <li v-for="(skill, index) in job.additionalSkills" :key="index">
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </template>
    <template v-else>
      <div class="container mx-auto text-center py-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h2>
        <p class="text-gray-700">The job you are looking for does not exist.</p>
        <NuxtLink to="/career-support" class="text-blue-600 hover:underline mt-4 inline-block">
          Go back to Job Vacancies
        </NuxtLink>
      </div>
    </template>

    <UploadCvPopup
      :is-open="isUploadCvPopupOpen"
      :job-title="job ? job.title : ''"
      @close="closeUploadCvPopup"
      @submit="handleCvSubmission"
    />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import UploadCvPopup from '~/components/UploadCvPopup.vue';
import { allJobVacancies, type JobVacancy } from '~/data/job-detail';

const route = useRoute();
const jobId = route.params.id as string;

const job = ref<JobVacancy | undefined>(allJobVacancies.find((j) => j.id === jobId));

const isUploadCvPopupOpen = ref(false);

const openUploadCvPopup = () => {
  isUploadCvPopupOpen.value = true;
};

const closeUploadCvPopup = () => {
  isUploadCvPopupOpen.value = false;
};

const handleCvSubmission = (formData: any) => {
  console.log('CV Submission Data:', formData);
  closeUploadCvPopup();
  alert('CV submitted successfully!');
};

useHead({
  title: job.value ? `${job.value.title} - Career Support` : 'Job Details - Career Support',
  meta: [
    {
      name: 'description',
      content: job.value
        ? `Details for the ${job.value.title} job vacancy.`
        : 'Details for a job vacancy.',
    },
  ],
});
</script>
