<template>
  <div class="bg-white p-8 rounded-xl shadow-md">
    <form class="space-y-8" @submit.prevent="handleSubmit">
      <h2
        class="font-poppins font-semibold text-2xl sm:text-3xl md:text-[25px] leading-normal tracking-[-1px] capitalize text-gray-900 mb-6 text-center"
      >
        Registration Form
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label
            for="selectProgram"
            class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
          >
            Select Program
          </label>
          <select
            id="selectProgram"
            v-model="formData.program"
            class="w-full p-3 rounded-md focus:outline-none bg-gray-50 text-gray-900 font-poppins font-semibold text-lg leading-normal tracking-normal"
            required
          >
            <option value="" disabled>Select Program</option>
            <option v-for="program in programs" :key="program.id" :value="program.id">
              {{ program.title }}
            </option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label
            for="selectLocation"
            class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
          >
            Pilih Lokasi
          </label>
          <select
            id="selectLocation"
            v-model="formData.location"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
            required
          >
            <option value="" disabled>Select Location</option>
            <option value="jakarta">Jakarta</option>
            <option value="surabaya">Surabaya</option>
            <option value="online">Online</option>
          </select>
        </div>
        <div>
          <label
            for="selectBatch"
            class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
          >
            Pilih Batch
          </label>
          <select
            id="selectBatch"
            v-model="formData.batch"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
            required
          >
            <option value="" disabled>Select Batch</option>
            <option v-for="batch in availableBatches" :key="batch" :value="batch">
              {{ batch }}
            </option>
          </select>
        </div>
      </div>

      <div class="border-t border-gray-200 pt-8 mt-8">
        <h3
          class="text-xl font-bold mb-6 font-poppins font-semibold text-lgleading-normal tracking-normal text-[#0F5DA9] border-b-2 border-[#0F5DA9] pb-1"
        >
          Personal Data Information
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              for="firstName"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
            >
              First Name According to KTP
            </label>
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label
              for="lastName"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
            >
              Last Name According to KTP
            </label>
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
              placeholder="Enter last name"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
            >
              Email
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
              placeholder="Enter email address"
              required
            />
          </div>
          <div>
            <label
              for="mobilePhone"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
            >
              Mobile Phone Number
            </label>
            <div class="flex">
              <span
                class="inline-flex items-center px-3 text-sm text-gray-900 bg-white border border-r-0 border-gray-300 rounded-l-md font-poppins font-normal text-base leading-normal tracking-normal"
              >
                +628
              </span>
              <input
                id="mobilePhone"
                v-model="formData.phoneNumber"
                type="tel"
                class="rounded-none rounded-r-lg border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-3 bg-white font-poppins font-normal text-base leading-normal tracking-normal"
                placeholder="Phone number"
                required
              />
            </div>
          </div>
          <div class="col-span-1">
            <label
              for="gender"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
            >
              Gender
            </label>
            <div class="flex items-center space-x-4">
              <label class="inline-flex items-center">
                <input
                  v-model="formData.gender"
                  type="radio"
                  value="male"
                  class="form-radio h-5 w-5"
                  name="gender"
                  required
                />
                <span
                  class="ml-2 text-gray-700 font-poppins font-normal text-base leading-normal tracking-normal"
                  >Male</span
                >
              </label>
              <label class="inline-flex items-center">
                <input
                  v-model="formData.gender"
                  type="radio"
                  value="female"
                  class="form-radio h-5 w-5"
                  name="gender"
                  required
                />
                <span
                  class="ml-2 text-gray-700 font-poppins font-normal text-base leading-normal tracking-normal"
                  >Female</span
                >
              </label>
            </div>
          </div>
          <div>
            <label
              for="lastEducation"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
            >
              Last Education
            </label>
            <select
              id="lastEducation"
              v-model="formData.lastEducation"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
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
            <label
              for="cityOfDomicile"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
            >
              City Of Domicile
            </label>
            <select
              id="cityOfDomicile"
              v-model="formData.cityOfDomicile"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
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
            <label
              for="completeAddress"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
            >
              Complete Address
            </label>
            <textarea
              id="completeAddress"
              v-model="formData.completeAddress"
              rows="3"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
              placeholder="Enter complete address"
              required
            ></textarea>
          </div>
          <div>
            <label
              for="howToFind"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
            >
              Where to Find Out About This Program
            </label>
            <select
              id="howToFind"
              v-model="formData.howToFind"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
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
            <label
              for="motivation"
              class="block text-sm font-semibold mb-2 font-poppins font-normal text-base leading-[20px] tracking-normal"
            >
              What is your motivation for joining this program?
            </label>
            <select
              id="motivation"
              v-model="formData.motivation"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
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
        <h3
          class="text-xl font-bold mb-6 font-poppins font-semibold text-lg leading-normal tracking-normal text-[#0F5DA9] border-b-2 border-[#0F5DA9] pb-1"
        >
          Payment Method
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <label
            v-for="method in paymentMethods"
            :key="method.value"
            :class="{
              'bg-blue-600 border-blue-600 ring-2 ring-blue-600 text-white hover:bg-blue-700':
                formData.paymentMethod === method.value,
              'bg-white border-gray-300 text-gray-800 hover:bg-gray-50':
                formData.paymentMethod !== method.value,
            }"
            class="flex flex-col items-center p-4 rounded-lg cursor-pointer transition duration-300 text-center shadow-sm hover:shadow-md"
          >
            <input
              v-model="formData.paymentMethod"
              type="radio"
              :value="method.value"
              name="paymentMethod"
              class="hidden"
              required
            />
            <span
              class="font-semibold text-lg mb-1"
              :class="{
                'text-white': formData.paymentMethod === method.value,
                'text-gray-800': formData.paymentMethod !== method.value,
              }"
            >
              {{ method.label }}
            </span>
            <span
              class="text-sm"
              :class="{
                'text-white': formData.paymentMethod === method.value,
                'text-gray-600': formData.paymentMethod !== method.value,
              }"
            >
              {{ method.description }}
            </span>
          </label>
        </div>
      </div>

      <div class="border-t border-gray-200 pt-8 mt-8">
        <label
          for="referralCode"
          class="block text-gray-700 text-sm font-semibold mb-2 font-poppins font-normal text-base leading-normal tracking-normal"
        >
          Referral Code
        </label>
        <input
          id="referralCode"
          v-model="formData.referralCode"
          type="text"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-poppins font-normal text-base leading-normal tracking-normal"
          placeholder="Enter referral code (if there are)"
        />
      </div>

      <div class="flex items-start mt-8">
        <input
          id="agreeTerms"
          v-model="formData.agreeTerms"
          type="checkbox"
          class="form-checkbox h-5 w-5 text-blue-600 rounded mt-1 bg-white dark:bg-gray-700 dark:text-blue-400"
          required
        />
        <label
          for="agreeTerms"
          class="ml-3 text-gray-700 text-sm font-poppins font-normal text-base leading-[20px] tracking-normal"
        >
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
import { allBatches } from '~/data/batch';
import { programs } from '~/data/program-item';
import { paymentMethods } from '~/data/payment';

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

const handleSubmit = () => {
  if (formData.agreeTerms) {
    console.log('Form Submitted:', formData);
    alert('Formulir berhasil dikirim! Data akan ditampilkan di konsol.');
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
