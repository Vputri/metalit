<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4"
  >
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg md:max-w-2xl p-6 md:p-8 relative">
      <button
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-300"
        aria-label="Close"
        @click="closePopup"
      >
        <svg
          v-if="fileName && !fileError"
          class="w-6 h-6 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <svg
          v-else
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

      <h2
        class="font-poppins font-bold text-xl md:text-2xl leading-none tracking-normal text-[#262626] mb-1 text-center"
      >
        Upload CV
      </h2>
      <p
        class="font-poppins font-normal text-base md:text-lg leading-none tracking-normal text-[#262626] mb-6 text-center"
      >
        {{ jobTitle }}
      </p>

      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <div
            class="flex items-center justify-between w-full border border-gray-300 rounded-md px-4 py-3 cursor-pointer hover:bg-gray-50 transition duration-300"
            @click="fileName && !fileError ? null : cvFileInput?.click()"
          >
            <p
              class="font-poppins font-normal text-sm leading-none tracking-normal text-[#939393] mr-2"
            >
              {{ fileName || 'Upload File CV' }}
            </p>
            <input
              id="cvFile"
              ref="cvFileInput"
              type="file"
              accept=".jpg,.pdf"
              class="hidden"
              @change="handleFileUpload"
            />
            <svg
              v-if="fileName && !fileError"
              class="w-6 h-6 text-red-500 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              @click.stop="clearFileUpload"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6 text-[#939393] cursor-pointer"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click.stop="cvFileInput?.click()"
            >
              <path
                d="M11 16.5V8.35L8.4 10.95L7 9.5L12 4.5L17 9.5L15.6 10.95L13 8.35V16.5H11ZM6 20.5C5.45 20.5 4.97933 20.3043 4.588 19.913C4.19667 19.5217 4.00067 19.0507 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.8043 19.521 19.413 19.913C19.0217 20.305 18.5507 20.5007 18 20.5H6Z"
                fill="#4A91E1"
              />
            </svg>
          </div>
          <p class="font-poppins font-normal text-xs leading-4 tracking-normal text-[#939393] mt-1">
            Unggah file Anda dalam format JPG atau PDF (ukuran maksimum 5 MB)
          </p>
          <p v-if="fileError" class="text-red-500 text-sm mt-1">
            {{ fileError }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins font-normal text-base leading-normal tracking-normal text-gray-700 placeholder-gray-400"
              required
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins font-normal text-base leading-normal tracking-normal text-gray-700 placeholder-gray-400"
              required
              placeholder="Last Name"
            />
          </div>
        </div>

        <div class="mb-4">
          <div class="relative">
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 font-poppins font-normal text-base leading-normal tracking-normal text-gray-700 placeholder-gray-400"
              required
              placeholder="Email"
            />
            <svg
              class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                fill="#939393"
              />
            </svg>
          </div>
        </div>

        <div class="mb-4">
          <div class="flex items-stretch">
            <span
              class="inline-flex items-center px-3 text-base text-[#939393] bg-white border border-r-0 border-gray-300 rounded-l-md font-poppins font-normal text-base leading-normal tracking-normal"
              style="padding-top: 0.75rem; padding-bottom: 0.75rem"
            >
              +628
            </span>
            <input
              id="mobilePhone"
              v-model="formData.phoneNumber"
              type="tel"
              class="rounded-none rounded-r-lg border border-gray-300 text-gray-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full font-poppins font-normal text-base px-4 py-3 bg-white leading-normal tracking-normal placeholder-gray-400"
              placeholder="Phone number"
              required
            />
          </div>
        </div>

        <div class="mb-4">
          <div class="relative">
            <input
              id="githubLink"
              v-model="formData.githubLink"
              type="url"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 font-poppins font-normal text-base leading-normal tracking-normal text-gray-700 placeholder-gray-400"
              placeholder="Link Github"
            />
            <svg
              class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00001 15L15 9M11 6L11.463 5.464C12.4008 4.52633 13.6727 3.9996 14.9989 3.99969C16.325 3.99979 17.5968 4.52669 18.5345 5.4645C19.4722 6.40231 19.9989 7.67419 19.9988 9.00035C19.9987 10.3265 19.4718 11.5983 18.534 12.536L18 13M13 18L12.603 18.534C11.654 19.4717 10.3736 19.9976 9.03951 19.9976C7.70538 19.9976 6.42502 19.4717 5.47601 18.534C5.00813 18.0717 4.63665 17.5212 4.38311 16.9143C4.12958 16.3074 3.99902 15.6562 3.99902 14.9985C3.99902 14.3408 4.12958 13.6896 4.38311 13.0827C4.63665 12.4758 5.00813 11.9253 5.47601 11.463L6.00001 11"
                stroke="#939393"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="mb-4">
          <div class="relative">
            <input
              id="linkedinLink"
              v-model="formData.linkedinLink"
              type="url"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 font-poppins font-normal text-base leading-normal tracking-normal text-gray-700 placeholder-gray-400"
              placeholder="Link LinkedIn"
            />
            <svg
              class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00001 15L15 9M11 6L11.463 5.464C12.4008 4.52633 13.6727 3.9996 14.9989 3.99969C16.325 3.99979 17.5968 4.52669 18.5345 5.4645C19.4722 6.40231 19.9989 7.67419 19.9988 9.00035C19.9987 10.3265 19.4718 11.5983 18.534 12.536L18 13M13 18L12.603 18.534C11.654 19.4717 10.3736 19.9976 9.03951 19.9976C7.70538 19.9976 6.42502 19.4717 5.47601 18.534C5.00813 18.0717 4.63665 17.5212 4.38311 16.9143C4.12958 16.3074 3.99902 15.6562 3.99902 14.9985C3.99902 14.3408 4.12958 13.6896 4.38311 13.0827C4.63665 12.4758 5.00813 11.9253 5.47601 11.463L6.00001 11"
                stroke="#939393"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="mb-6">
          <div class="relative">
            <input
              id="websiteLink"
              v-model="formData.websiteLink"
              type="url"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 font-poppins font-normal text-base leading-normal tracking-normal text-gray-700 placeholder-gray-400"
              placeholder="Link Personal Website"
            />
            <svg
              class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00001 15L15 9M11 6L11.463 5.464C12.4008 4.52633 13.6727 3.9996 14.9989 3.99969C16.325 3.99979 17.5968 4.52669 18.5345 5.4645C19.4722 6.40231 19.9989 7.67419 19.9988 9.00035C19.9987 10.3265 19.4718 11.5983 18.534 12.536L18 13M13 18L12.603 18.534C11.654 19.4717 10.3736 19.9976 9.03951 19.9976C7.70538 19.9976 6.42502 19.4717 5.47601 18.534C5.00813 18.0717 4.63665 17.5212 4.38311 16.9143C4.12958 16.3074 3.99902 15.6562 3.99902 14.9985C3.99902 14.3408 4.12958 13.6896 4.38311 13.0827C4.63665 12.4758 5.00813 11.9253 5.47601 11.463L6.00001 11"
                stroke="#939393"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="flex justify-end space-x-4">
          <button
            type="button"
            class="px-6 py-2 border border-gray-300 text-[#262626] rounded-lg hover:bg-gray-100 transition duration-300 font-poppins font-normal text-base leading-none tracking-normal"
            @click="closePopup"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-6 py-2 bg-[#0F5DA9] text-white rounded-lg hover:bg-blue-700 transition duration-300 font-poppins font-semibold text-base leading-none tracking-normal"
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

const clearFileUpload = () => {
  formData.value.cvFile = null;
  fileName.value = '';
  fileError.value = '';
  if (cvFileInput.value) cvFileInput.value.value = ''; // Crucial to clear the actual file input
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
  if (cvFileInput.value) cvFileInput.value.value = '';
};
</script>
