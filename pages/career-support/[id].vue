<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <!-- Header Component -->
    <Header />

    <div class="pt-[72px]"></div>

    <template v-if="job">
      <section class="bg-white py-16 px-4 md:px-8">
        <div class="container mx-auto max-w-4xl">
          <NuxtLink to="/career-support" class="text-blue-600 hover:underline mb-8 inline-block">
            &larr; Back to Job Vacancies
          </NuxtLink>

          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1
                class="text-4xl md:text-5xl font-extrabold leading-tight mb-2 text-gray-900 rounded-md"
              >
                {{ job.title }}
              </h1>
              <p class="text-blue-600 font-semibold text-2xl mb-4">{{ job.salary }}</p>
            </div>
            <button
              class="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg md:text-xl"
              @click="openUploadCvPopup"
            >
              Send CV
            </button>
          </div>

          <!-- Description Section -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <div class="flex items-center text-gray-700 mb-2">
              <svg
                class="w-5 h-5 mr-2 text-gray-500"
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
              <span>{{ job.location }}</span>
            </div>
            <div class="flex items-center text-gray-700 mb-4">
              <svg
                class="w-5 h-5 mr-2 text-gray-500"
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
              <span>{{ job.employmentType }}</span>
            </div>
            <p class="text-gray-700 leading-relaxed">
              {{ job.descriptionDetail }}
            </p>
          </div>

          <!-- Responsibilities Section -->
          <div class="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li v-for="(responsibility, index) in job.responsibilities" :key="index">
                {{ responsibility }}
              </li>
            </ul>
          </div>

          <!-- Qualifications Section -->
          <div class="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Qualifications</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li v-for="(qualification, index) in job.qualifications" :key="index">
                {{ qualification }}
              </li>
            </ul>
          </div>

          <!-- Additional Skills Section -->
          <div
            v-if="job.additionalSkills && job.additionalSkills.length > 0"
            class="bg-gray-100 p-6 rounded-lg mb-8"
          >
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              Additional skills and qualifications that would be beneficial
            </h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li v-for="(skill, index) in job.additionalSkills" :key="index">
                {{ skill }}
              </li>
            </ul>
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

    <!-- Upload CV Popup Component -->
    <UploadCvPopup
      :is-open="isUploadCvPopupOpen"
      :job-title="job ? job.title : ''"
      @close="closeUploadCvPopup"
      @submit="handleCvSubmission"
    />

    <!-- Contact Us CTA Section -->
    <section class="py-16 px-4 md:px-8">
      <ContactUsCta />
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import ContactUsCta from '~/components/ContactUsCta.vue';
import UploadCvPopup from '~/components/UploadCvPopup.vue';

interface JobVacancy {
  id: string;
  title: string;
  salary: string;
  employmentType: string;
  responsibilities: string[];
  location: string;
  descriptionDetail: string;
  qualifications: string[];
  additionalSkills?: string[];
}

// Dummy data for job vacancies
const allJobVacancies: JobVacancy[] = [
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    location: 'Jakarta, Indonesia',
    descriptionDetail:
      'The ideal candidate will have strong technical skills in developing data pipelines and have experience in processing and presenting data according to business needs.',
    responsibilities: [
      'Develop and maintain data pipelines using Python.',
      'Write and optimize SQL queries to access and process data.',
      'Present relevant and useful data according to business needs.',
      'Collaborate with data and business teams to understand data needs and implement appropriate solutions.',
      'Perform debugging and troubleshooting to identify and fix issues in data pipelines.',
      'Ensure the quality and integrity of data presented.',
      'Collaborate with other development teams to design and develop new features.',
    ],
    qualifications: [
      '1 to 2 years of experience as a Data Engineer.',
      'Deep understanding of Python and SQL programming languages.',
      'Experience in developing and maintaining data pipelines.',
      'Knowledge of relational and non-relational databases.',
      'Ability to work in a team and communicate well.',
      'Experience with version control systems such as Git.',
      'Ability to troubleshoot and debug.',
    ],
    additionalSkills: [
      'Experience with big data technologies such as Hadoop, Spark, or equivalent.',
      'Knowledge of cloud platforms such as AWS, GCP, or Azure.',
      'Experience with ETL tools and data warehousing.',
      'Ability to learn and adapt to new technologies quickly.',
    ],
  },
  {
    id: 'react-developer',
    title: 'React Developer',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    location: 'Bandung, Indonesia',
    descriptionDetail:
      'We are seeking a talented React Developer to join our front-end team. You will be responsible for developing and implementing user interface components using React.js and Next.js framework.',
    responsibilities: [
      'Developing front end with next.js framework.',
      'Slicing design Figma.',
      'Logic implementation on front end side.',
      'Optimizing components for maximum performance across a vast array of web-capable devices and browsers.',
      'Building reusable components and front-end libraries for future use.',
    ],
    qualifications: [
      '1 to 3 years of experience as a React Developer.',
      'Proficiency in JavaScript, HTML5, and CSS3.',
      'Strong understanding of React.js and its core principles.',
      'Experience with Next.js is a plus.',
      'Familiarity with RESTful APIs.',
      'Knowledge of modern front-end build pipelines and tools.',
    ],
  },
  {
    id: 'golang-developer',
    title: 'Golang Developer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    location: 'Yogyakarta, Indonesia',
    descriptionDetail:
      'We are looking for an experienced Golang Developer to join our backend team. You will be responsible for developing and maintaining robust and scalable backend services.',
    responsibilities: [
      'Develop backend applications with golang.',
      'Create Rest API.',
      'Integration with cloud features (AWS, GCP, etc.).',
      'Implementing scalable and high-performance microservices.',
      'Writing clean, maintainable, and efficient Go code.',
    ],
    qualifications: [
      '2+ years of experience in Golang development.',
      'Strong understanding of Go programming language, paradigms, and idioms.',
      'Experience with RESTful API design and development.',
      'Familiarity with cloud platforms (AWS, GCP, Azure).',
      'Knowledge of database systems (SQL and NoSQL).',
    ],
  },
  {
    id: 'python-developer',
    title: 'Python Developer',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    location: 'Surabaya, Indonesia',
    descriptionDetail:
      'We are seeking a versatile Python Developer to work on our full-stack applications, with a focus on Django Framework.',
    responsibilities: [
      'Developing fullstack applications.',
      'Using Django Framework.',
      'Implementing business logic.',
      'Designing and implementing robust APIs.',
      'Managing database interactions.',
    ],
    qualifications: [
      '1-3 years of experience as a Python Developer.',
      'Strong proficiency in Python.',
      'Hands-on experience with Django Framework.',
      'Knowledge of front-end technologies (HTML, CSS, JavaScript) is a plus.',
      'Familiarity with database systems (e.g., PostgreSQL, MySQL).',
    ],
  },
  {
    id: 'flutter-developer',
    title: 'Flutter Developer',
    salary: 'Rp 6,000,000 - Rp 9,000,000',
    employmentType: 'Full Time',
    location: 'Remote',
    descriptionDetail:
      'We are looking for a skilled Flutter Developer to build high-performance mobile applications for both iOS and Android platforms.',
    responsibilities: [
      'Develop mobile applications.',
      'Integration with backend.',
      'Export iOS and Android applications.',
      'Collaborating with cross-functional teams to define, design, and ship new features.',
      'Ensuring the performance, quality, and responsiveness of applications.',
    ],
    qualifications: [
      '1-2 years of experience in Flutter development.',
      'Proficiency in Dart programming language.',
      'Experience with mobile app development lifecycle.',
      'Familiarity with RESTful APIs and integration.',
      'Ability to write clean and maintainable code.',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    salary: 'Rp 5,000,000 - Rp 10,000,000',
    employmentType: 'Full Time',
    location: 'Jakarta, Indonesia',
    descriptionDetail:
      'We are seeking an IT Support Specialist to provide technical assistance and support to our internal teams and ensure smooth operation of our IT infrastructure.',
    responsibilities: [
      'Running scripts in Production.',
      'Creating Documentation.',
      'Cross Department Communication for IT needs.',
      'Providing technical assistance and support for incoming queries and issues related to computer systems, software, and hardware.',
      'Maintaining daily performance of computer systems.',
    ],
    qualifications: [
      '1+ years of experience in IT support or a similar role.',
      'Basic knowledge of operating systems (Windows, macOS, Linux).',
      'Familiarity with network troubleshooting and hardware components.',
      'Excellent communication and problem-solving skills.',
      'Ability to create clear and concise technical documentation.',
    ],
  },
];

const route = useRoute();
const jobId = route.params.id as string;

const job = ref<JobVacancy | undefined>(allJobVacancies.find((j) => j.id === jobId));

// State for controlling the visibility of the Upload CV popup
const isUploadCvPopupOpen = ref(false);

// Function to open the popup
const openUploadCvPopup = () => {
  isUploadCvPopupOpen.value = true;
};

// Function to close the popup
const closeUploadCvPopup = () => {
  isUploadCvPopupOpen.value = false;
};

// Function to handle CV submission (you would integrate actual submission logic here)
const handleCvSubmission = (formData: any) => {
  console.log('CV Submission Data:', formData);
  // Here you would typically send data to a backend API
  // For demonstration, we'll just close the popup
  closeUploadCvPopup();
  alert('CV submitted successfully!'); // Use a custom modal in a real app, not alert()
};

// Set page metadata dynamically
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

<style scoped>
/* Add any specific styles for this page here */
</style>
