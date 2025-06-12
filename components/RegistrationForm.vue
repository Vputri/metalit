<template>
  <div class="bg-white p-8 rounded-xl shadow-md">
    <form class="space-y-8" @submit.prevent="handleSubmit">
      <!-- Select Program -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label for="selectProgram" class="block text-gray-700 text-sm font-semibold mb-2"
            >Select Program</label
          >
          <select
            id="selectProgram"
            v-model="formData.program"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            required
          >
            <option value="" disabled>Select Program</option>
            <option v-for="program in programs" :key="program.id" :value="program.id">
              {{ program.title }}
            </option>
          </select>
        </div>
        <div>
          <label for="selectLocation" class="block text-gray-700 text-sm font-semibold mb-2"
            >Pilih Lokasi</label
          >
          <select
            id="selectLocation"
            v-model="formData.location"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            required
          >
            <option value="" disabled>Select Location</option>
            <option value="jakarta">Jakarta</option>
            <option value="surabaya">Surabaya</option>
            <option value="online">Online</option>
          </select>
        </div>
        <div>
          <label for="selectBatch" class="block text-gray-700 text-sm font-semibold mb-2"
            >Pilih Batch</label
          >
          <select
            id="selectBatch"
            v-model="formData.batch"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            required
          >
            <option value="" disabled>Select Batch</option>
            <option v-for="batch in availableBatches" :key="batch" :value="batch">
              {{ batch }}
            </option>
          </select>
        </div>
      </div>

      <!-- Personal Data Information -->
      <div class="border-t border-gray-200 pt-8 mt-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6 rounded-md">Personal Data Information</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="firstName" class="block text-gray-700 text-sm font-semibold mb-2"
              >First Name According to KTP</label
            >
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label for="lastName" class="block text-gray-700 text-sm font-semibold mb-2"
              >Last Name According to KTP</label
            >
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter last name"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
              required
            />
          </div>
          <div>
            <label for="mobilePhone" class="block text-gray-700 text-sm font-semibold mb-2"
              >Mobile Phone Number</label
            >
            <div class="flex">
              <span
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md"
              >
                +628
              </span>
              <input
                id="mobilePhone"
                v-model="formData.phoneNumber"
                type="tel"
                class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-3"
                placeholder="Phone number"
                required
              />
            </div>
          </div>
          <div class="col-span-1">
            <label for="gender" class="block text-gray-700 text-sm font-semibold mb-2"
              >Gender</label
            >
            <div class="flex items-center space-x-4">
              <label class="inline-flex items-center">
                <input
                  v-model="formData.gender"
                  type="radio"
                  value="male"
                  class="form-radio text-blue-600 h-5 w-5"
                  name="gender"
                  required
                />
                <span class="ml-2 text-gray-700">Male</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  v-model="formData.gender"
                  type="radio"
                  value="female"
                  class="form-radio text-blue-600 h-5 w-5"
                  name="gender"
                  required
                />
                <span class="ml-2 text-gray-700">Female</span>
              </label>
            </div>
          </div>
          <div>
            <label for="lastEducation" class="block text-gray-700 text-sm font-semibold mb-2"
              >Last Education</label
            >
            <select
              id="lastEducation"
              v-model="formData.lastEducation"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              required
            >
              <option value="" disabled>Select...</option>
              <option value="highschool">High School</option>
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <div>
            <label for="cityOfDomicile" class="block text-gray-700 text-sm font-semibold mb-2"
              >City Of Domicile</label
            >
            <select
              id="cityOfDomicile"
              v-model="formData.cityOfDomicile"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              required
            >
              <option value="" disabled>Select...</option>
              <option value="jakarta">Jakarta</option>
              <option value="surabaya">Surabaya</option>
              <option value="bandung">Bandung</option>
              <option value="medan">Medan</option>
            </select>
          </div>
          <div class="col-span-full">
            <label for="completeAddress" class="block text-gray-700 text-sm font-semibold mb-2"
              >Complete Address</label
            >
            <textarea
              id="completeAddress"
              v-model="formData.completeAddress"
              rows="3"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter complete address"
              required
            ></textarea>
          </div>
          <div>
            <label for="howToFind" class="block text-gray-700 text-sm font-semibold mb-2"
              >Where to Find Out About This Program</label
            >
            <select
              id="howToFind"
              v-model="formData.howToFind"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              required
            >
              <option value="" disabled>Select...</option>
              <option value="social_media">Social Media</option>
              <option value="search_engine">Search Engine</option>
              <option value="friend_referral">Friend Referral</option>
              <option value="online_ads">Online Ads</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label for="motivation" class="block text-gray-700 text-sm font-semibold mb-2"
              >What is your motivation for joining this program?</label
            >
            <select
              id="motivation"
              v-model="formData.motivation"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              required
            >
              <option value="" disabled>Select...</option>
              <option value="career_change">Career Change</option>
              <option value="skill_improvement">Skill Improvement</option>
              <option value="new_career">Start New Career</option>
              <option value="networking">Networking</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Payment Method -->
      <div class="border-t border-gray-200 pt-8 mt-8">
        <h3 class="text-xl font-bold text-gray-900 mb-6 rounded-md">Payment Method</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <label
            v-for="method in paymentMethods"
            :key="method.value"
            :class="{
              'border-blue-600 ring-2 ring-blue-600': formData.paymentMethod === method.value,
              'border-gray-300': formData.paymentMethod !== method.value,
            }"
            class="flex flex-col items-center p-4 rounded-lg cursor-pointer transition duration-300 text-center bg-white shadow-sm hover:shadow-md border"
          >
            <input
              v-model="formData.paymentMethod"
              type="radio"
              :value="method.value"
              name="paymentMethod"
              class="hidden"
              required
            />
            <span class="font-semibold text-lg text-gray-800 mb-1">{{ method.label }}</span>
            <span class="text-sm text-gray-600">{{ method.description }}</span>
          </label>
        </div>
      </div>

      <!-- Referral Code -->
      <div class="border-t border-gray-200 pt-8 mt-8">
        <label for="referralCode" class="block text-gray-700 text-sm font-semibold mb-2"
          >Referral Code</label
        >
        <input
          id="referralCode"
          v-model="formData.referralCode"
          type="text"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter referral code (if there are)"
        />
      </div>

      <!-- Agreement Checkbox -->
      <div class="flex items-start mt-8">
        <input
          id="agreeTerms"
          v-model="formData.agreeTerms"
          type="checkbox"
          class="form-checkbox h-5 w-5 text-blue-600 rounded mt-1"
          required
        />
        <label for="agreeTerms" class="ml-3 text-gray-700 text-sm">
          By submitting this form I agree to the
          <a href="#" class="text-blue-600 hover:underline">Terms and Conditions</a> for
          participating in the program I am registering for.
        </label>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end pt-6">
        <button
          type="submit"
          class="bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg transform hover:scale-105"
        >
          Submit Form
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';

// Dummy program data for the select dropdown (should ideally come from an API)
const programs = [
  { id: 'it-project-management', title: 'IT Project Management' },
  { id: 'full-stack-development', title: 'Full-Stack Development' },
  { id: 'data-science-ml', title: 'Data Science & Machine Learning' },
  { id: 'ui-ux-designer', title: 'UI/UX Designer' },
  { id: 'software-testing-qa', title: 'Software Testing & Quality Assurance' },
  { id: 'cloud-computing-devops', title: 'Cloud Computing & DevOps' },
];

// Dummy batches (can be dynamic based on selected program and location)
const allBatches = {
  'it-project-management': ['Batch A - Nov 2024', 'Batch B - Jan 2025'],
  'full-stack-development': ['Batch 1 - Oct 2024', 'Batch 2 - Dec 2024'],
  // Add more batches for other programs
};

const availableBatches = computed(() => {
  return formData.program ? (allBatches as any)[formData.program] || [] : [];
});

const formData = reactive({
  program: '',
  location: '',
  batch: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  gender: '',
  lastEducation: '',
  cityOfDomicile: '',
  completeAddress: '',
  howToFind: '',
  motivation: '',
  paymentMethod: '',
  referralCode: '',
  agreeTerms: false,
});

const paymentMethods = [
  { value: 'upfront', label: 'Upfront', description: 'Early settlement' },
  { value: '0-installment', label: '0% installment', description: 'Interest free installments' },
  { value: 'isa', label: 'ISA', description: 'Installment fee after work' },
  { value: 'snpl', label: 'SNPL', description: 'Fees are paid in installments after graduation' },
];

const handleSubmit = () => {
  if (formData.agreeTerms) {
    console.log('Form Submitted:', formData);
    alert('Registration Form Submitted! Check console for data.');
    Object.assign(formData, {
      program: '',
      location: '',
      batch: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      gender: '',
      lastEducation: '',
      cityOfDomicile: '',
      completeAddress: '',
      howToFind: '',
      motivation: '',
      paymentMethod: '',
      referralCode: '',
      agreeTerms: false,
    });
  } else {
    alert('Please agree to the Terms and Conditions.');
  }
};
</script>
