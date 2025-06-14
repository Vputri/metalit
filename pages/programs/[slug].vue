<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <Header />

    <div class="pt-[72px]"></div>
    <template v-if="program">
      <!-- Hero Section -->
      <section class="relative bg-white text-gray-800 py-20 px-4 md:px-8 overflow-hidden">
        <div
          class="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative"
        >
          <div class="md:w-1/2 text-center md:text-left mb-10 md:mb-0 pr-0 md:pr-16">
            <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 rounded-md">
              {{ program.title }}
            </h1>
            <p class="text-lg md:text-xl font-light mb-8 text-gray-700">
              {{ program.description }}
            </p>
            <p class="text-3xl md:text-4xl font-semibold text-blue-600 mb-6 rounded-md">
              {{ program.price }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                class="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Register Now
              </button>
              <button
                class="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300"
              >
                View Schedule
              </button>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://placehold.co/600x400/D1D5DB/1F2937?text=UI/UX+Design+Illustration"
              alt="Program Illustration"
              class="max-w-full h-auto rounded-lg shadow-md transition duration-500 hover:scale-105"
              onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/333333?text=Image+Missing';"
            />
          </div>
        </div>
      </section>

      <div class="container mx-auto flex flex-col lg:flex-row gap-8 py-8 px-4 md:px-8">
        <aside class="lg:w-1/4 bg-white p-6 rounded-lg shadow-md sticky top-[92px] h-fit">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 rounded-md">{{ program.title }}</h3>
          <nav>
            <ul class="space-y-2">
              <li>
                <a
                  href="#overview"
                  :class="{ 'bg-blue-600 text-white': activeSection === 'overview' }"
                  class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-300"
                  @click="setActiveSection('overview')"
                >
                  Detail Programs
                </a>
              </li>
              <li>
                <a
                  href="#material"
                  :class="{ 'bg-blue-600 text-white': activeSection === 'material' }"
                  class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-300"
                  @click="setActiveSection('material')"
                >
                  Material & Syllabus
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  :class="{ 'bg-blue-600 text-white': activeSection === 'facilities' }"
                  class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-300"
                  @click="setActiveSection('facilities')"
                >
                  Bootcamp Facilities
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  :class="{ 'bg-blue-600 text-white': activeSection === 'timeline' }"
                  class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-300"
                  @click="setActiveSection('timeline')"
                >
                  Learning Timeline
                </a>
              </li>
              <li>
                <a
                  href="#career-support"
                  :class="{ 'bg-blue-600 text-white': activeSection === 'career-support' }"
                  class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-300"
                  @click="setActiveSection('career-support')"
                >
                  Career Support
                </a>
              </li>
              <li>
                <a
                  href="#instructors"
                  :class="{ 'bg-blue-600 text-white': activeSection === 'instructors' }"
                  class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-300"
                  @click="setActiveSection('instructors')"
                >
                  Instructor & Mentor
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  :class="{ 'bg-blue-600 text-white': activeSection === 'testimonials' }"
                  class="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-300"
                  @click="setActiveSection('testimonials')"
                >
                  Testimonial
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content Area -->
        <main class="lg:w-3/4 bg-white p-8 rounded-lg shadow-md">
          <!-- Detail Program Section (Updated from Program Overview) -->
          <section id="overview" class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 rounded-md">Detail Program</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{ program.description }}
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Duration: {{ program.duration }}</li>
              <li>Level: {{ program.level }}</li>
              <li>Category: {{ program.category }}</li>
              <!-- Add more overview details here as needed -->
              <li>Comprehensive curriculum covering the latest industry standards.</li>
              <li>Hands-on projects and real-world case studies for practical experience.</li>
              <li>Personalized mentorship from industry experts.</li>
            </ul>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 rounded-md">
              Material & Syllabus
            </h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li v-for="(skill, index) in program.skills" :key="index">{{ skill }}</li>
            </ul>
          </section>

          <!-- Material & Syllabus Section (Updated from Curriculum) -->
          <section id="material" class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 rounded-md">
              Materials You Will Learn in Bootcamp
            </h2>
            <div class="space-y-4">
              <div
                v-for="(module, index) in program.curriculum"
                :key="index"
                class="bg-blue-50 p-4 rounded-lg shadow-sm"
              >
                <button
                  class="w-full text-left font-semibold text-blue-800 flex justify-between items-center"
                  @click="toggleModule(index)"
                >
                  {{ module.title }}
                  <svg
                    :class="{ 'rotate-180': module.isOpen }"
                    class="w-5 h-5 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div v-if="module.isOpen" class="mt-3 text-gray-700">
                  <p class="mb-2">{{ module.description }}</p>
                  <ul class="list-disc list-inside text-gray-600 space-y-1 pl-4">
                    <li v-for="(topic, topicIndex) in module.topics" :key="topicIndex">
                      {{ topic }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 rounded-md">
              Tools to be learned
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(tool, index) in program.tools"
                :key="index"
                class="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
              >
                {{ tool }}
              </span>
            </div>
          </section>

          <!-- Bootcamp Facilities Section (Updated) -->
          <section id="facilities" class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 rounded-md">Bootcamp Facilities</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              More Than Just Lessons - Dive into Real-World Practice
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
              At our bootcamp, learning goes beyond theory. Every concept you master is reinforced
              through hands-on projects and real-world scenarios that simulate industry challenges.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >Practical Case Study</span
              >
              <span class="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >Video, Audio/Podcast</span
              >
              <span class="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >Quiz</span
              >
              <span class="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >Discussion with Facilitator</span
              >
              <span class="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >Reading Materials</span
              >
              <span class="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >Project Based Learning</span
              >
              <span class="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >Career Mentoring</span
              >
              <span class="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full"
                >Portfolio Making</span
              >
            </div>
          </section>

          <!-- Learning Timeline Section (Updated) -->
          <section id="timeline" class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 rounded-md">Learning Timeline</h2>
            <p class="text-gray-700 leading-relaxed mb-4">Bootcamp Schedule You Can Follow</p>
            <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 class="text-xl font-semibold text-blue-800 mb-4">Batch 4</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <p>
                  Registration:
                  <span class="text-blue-600 font-semibold">29 Oct 2024 - 21 Jan 2025</span>
                </p>
                <p>Learning: <span class="text-blue-600 font-semibold">5 Feb - 5 May 2025</span></p>
              </div>
              <div class="flex items-center text-gray-700 mt-4 space-x-6">
                <p class="flex items-center">
                  <svg
                    class="w-5 h-5 mr-2 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  >3x Meetings / Week
                </p>
                <p class="flex items-center">
                  <svg
                    class="w-5 h-5 mr-2 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  >Online
                </p>
                <p class="flex items-center">
                  <svg
                    class="w-5 h-5 mr-2 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  >19.00 - 22.00 WIB
                </p>
              </div>
            </div>
          </section>

          <!-- Career Support Section (Updated) -->
          <section id="career-support" class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 rounded-md">Career Support</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Get Expert Guidance and Land Your Dream Job Right After Graduation
            </p>
            <div class="space-y-6">
              <div class="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <!-- Resume & Portfolio Enhancement Icon -->
                <svg
                  class="w-8 h-8 text-blue-600 flex-shrink-0 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-1">
                    Resume & Portfolio Enhancement
                  </h3>
                  <p class="text-gray-700">
                    Craft a standout resume and build a professional portfolio that highlights your
                    skills and projects, making a lasting impression on employers.
                  </p>
                </div>
              </div>
              <div class="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <!-- 1-on-1 Mentoring Icon -->
                <svg
                  class="w-8 h-8 text-blue-600 flex-shrink-0 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 10a6 6 0 01-12 0V9a2 2 0 00-2-2h0a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h0a2 2 0 00-2 2v1"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18V8m-4 5h8"
                  ></path>
                </svg>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-1">1-on-1 Mentoring</h3>
                  <p class="text-gray-700">
                    Get the opportunity for 1-on-1 mentoring for interview preparation and technical
                    tests according to the time you choose.
                  </p>
                </div>
              </div>
              <div class="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <!-- Job Placement Assistance Icon -->
                <svg
                  class="w-8 h-8 text-blue-600 flex-shrink-0 mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 012-2h4a2 2 0 012 2v2m-4 0h-4"
                  ></path>
                </svg>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-1">Job Placement Assistance</h3>
                  <p class="text-gray-700">
                    We connect you directly with hiring partners and exclusive job opportunities,
                    giving you a head start in the job market.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Instructor & Mentor Section (Updated) -->
          <section id="instructors" class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 rounded-md">Instructor & Mentor</h2>
            <p class="text-gray-700 leading-relaxed mb-8">
              Guided by Experts Who Lead the Industry
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="instructor in instructors"
                :key="instructor.name"
                class="flex flex-col items-center bg-white p-6 rounded-lg shadow-md text-center"
              >
                <img
                  :src="instructor.imageUrl"
                  :alt="instructor.name"
                  class="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ instructor.name }}</h3>
                <p class="text-blue-600 text-sm mb-4">{{ instructor.title }}</p>
                <a
                  :href="instructor.linkedinUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  <svg
                    class="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                  View Linkedin Profile
                </a>
              </div>
            </div>
          </section>

          <!-- Testimonial Section -->
          <section id="testimonials" class="mb-12">
            <TestimonialCarousel :testimonials="testimonials" />
          </section>
        </main>
      </div>
    </template>
    <!-- Fallback if program is not found -->
    <template v-else>
      <div class="container mx-auto text-center py-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Program Not Found</h2>
        <p class="text-gray-700">The program you are looking for does not exist.</p>
        <NuxtLink to="/programs" class="text-blue-600 hover:underline mt-4 inline-block">
          Go back to Programs
        </NuxtLink>
      </div>
    </template>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import TestimonialCarousel from '~/components/TestimonialCarousel.vue';
import { testimonials } from '~/data/testimonial';
import { programsData, type Program } from '~/data/programs';
import { instructors } from '~/data/instructor';

const route = useRoute();
const programSlug = route.params.slug as string;

const program = ref<Program | undefined>(programsData.find((p) => p.id === programSlug));

const activeSection = ref('overview');

const setActiveSection = (sectionId: string) => {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const toggleModule = (index: number) => {
  if (program.value && program.value.curriculum[index]) {
    program.value.curriculum[index].isOpen = !program.value.curriculum[index].isOpen;
  }
};

onMounted(() => {
  if (!program.value) {
    console.error(`Program with slug "${programSlug}" not found.`);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    },
  );

  document.querySelectorAll('main section[id]').forEach((section) => {
    observer.observe(section);
  });
});

useHead({
  title: program.value ? `${program.value.title}` : 'Program Details',
  meta: [
    {
      name: 'description',
      content: program.value
        ? `Details about the ${program.value.title} bootcamp program.`
        : 'Details for an IT bootcamp program.',
    },
  ],
});
</script>

<style scoped></style>
