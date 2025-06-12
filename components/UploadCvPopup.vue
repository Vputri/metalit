<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4"
  >
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
      <button
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-300"
        @click="closePopup"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <h2 class="text-2xl font-bold text-gray-900 mb-2">Upload CV</h2>
      <p class="text-lg text-gray-700 mb-6">{{ jobTitle }}</p>

      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="cvFile" class="block text-gray-700 text-sm font-semibold mb-2"
            >Upload File CV</label
          >
          <div
            class="flex items-center justify-center w-full border border-gray-300 rounded-md p-4 cursor-pointer hover:bg-gray-50 transition duration-300"
          >
            <input
              id="cvFile"
              ref="cvFileInput"
              type="file"
              accept=".jpg,.pdf"
              class="hidden"
              @change="handleFileUpload"
            />
            <p class="text-gray-500 mr-2">{{ fileName || 'No file chosen' }}</p>
            <svg
              class="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              ></path>
            </svg>
          </div>
          <p class="text-xs text-gray-500 mt-1">
            Unggah file Anda dalam format JPG atau PDF (ukuran maksimum 5 MB)
          </p>
          <p v-if="fileError" class="text-red-500 text-sm mt-1">{{ fileError }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="firstName" class="block text-gray-700 text-sm font-semibold mb-2"
              >First Name</label
            >
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label for="lastName" class="block text-gray-700 text-sm font-semibold mb-2"
              >Last Name</label
            >
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div class="mb-4">
          <label for="phoneNumber" class="block text-gray-700 text-sm font-semibold mb-2"
            >+628 Phone Number</label
          >
          <input
            id="phoneNumber"
            v-model="formData.phoneNumber"
            type="tel"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 81234567890"
          />
        </div>

        <div class="mb-4">
          <label for="githubLink" class="block text-gray-700 text-sm font-semibold mb-2"
            >Link Github</label
          >
          <input
            id="githubLink"
            v-model="formData.githubLink"
            type="url"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://github.com/yourprofile"
          />
        </div>

        <div class="mb-4">
          <label for="linkedinLink" class="block text-gray-700 text-sm font-semibold mb-2"
            >Link LinkedIn</label
          >
          <input
            id="linkedinLink"
            v-model="formData.linkedinLink"
            type="url"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div class="mb-6">
          <label for="websiteLink" class="block text-gray-700 text-sm font-semibold mb-2"
            >Link Personal Website</label
          >
          <input
            id="websiteLink"
            v-model="formData.websiteLink"
            type="url"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://yourwebsite.com"
          />
        </div>

        <div class="flex justify-end space-x-4">
          <button
            type="button"
            class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-300"
            @click="closePopup"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  jobTitle: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['close', 'submit']);

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  githubLink: '',
  linkedinLink: '',
  websiteLink: '',
  cvFile: null as File | null,
});

const fileName = ref('');
const fileError = ref('');
const MAX_FILE_SIZE_MB = 5; // 5 MB

const cvFileInput = ref<HTMLInputElement | null>(null);

// Reset form data when the popup opens
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      resetForm();
    }
  },
);

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    fileError.value = ''; // Clear previous error

    // Validate file type
    const validTypes = ['image/jpeg', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      fileError.value = 'Hanya format JPG atau PDF yang diizinkan.';
      formData.value.cvFile = null;
      fileName.value = '';
      if (cvFileInput.value) cvFileInput.value.value = ''; // Clear input
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      fileError.value = `Ukuran file maksimum adalah ${MAX_FILE_SIZE_MB} MB.`;
      formData.value.cvFile = null;
      fileName.value = '';
      if (cvFileInput.value) cvFileInput.value.value = ''; // Clear input
      return;
    }

    formData.value.cvFile = file;
    fileName.value = file.name;
  } else {
    formData.value.cvFile = null;
    fileName.value = '';
  }
};

const submitForm = () => {
  if (!formData.value.cvFile) {
    fileError.value = 'Harap unggah file CV Anda.';
    return;
  }
  emit('submit', formData.value);
};

const closePopup = () => {
  emit('close');
};

const resetForm = () => {
  formData.value = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    githubLink: '',
    linkedinLink: '',
    websiteLink: '',
    cvFile: null,
  };
  fileName.value = '';
  fileError.value = '';
  if (cvFileInput.value) cvFileInput.value.value = ''; // Clear file input visually
};
</script>
