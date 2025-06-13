<template>
  <header class="bg-white shadow-md py-4 px-6 fixed top-0 left-0 w-full z-50">
    <nav class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center">
        <img src="/assets/img/logo.png" alt="metalit logo" class="h-8 mr-2" />
      </NuxtLink>

      <button
        class="lg:hidden p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        @click="toggleMobileMenu"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <ul class="hidden lg:flex space-x-6">
        <li>
          <NuxtLink
            to="/"
            :class="{ 'text-blue-700 font-semibold': isActive('/') }"
            class="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/programs"
            :class="{
              'text-blue-700 font-semibold': isActive('/programs') || isActive('/programs/', true),
            }"
            class="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            Programs
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/career-support"
            :class="{
              'text-blue-700 font-semibold':
                isActive('/career-support') || isActive('/career-support/', true),
            }"
            class="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            Career Support
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            :class="{ 'text-blue-700 font-semibold': isActive('/about') }"
            class="text-gray-700 hover:text-blue-700 transition duration-300"
          >
            About Us
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="#footer" class="text-gray-700 hover:text-blue-700 transition duration-300">
            Contact Us
          </NuxtLink>
        </li>
      </ul>

      <div class="hidden lg:flex space-x-4">
        <button
          class="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 font-semibold"
        >
          Login
        </button>
        <button
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Registrasi
        </button>
      </div>
    </nav>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden absolute inset-x-0 top-full bg-white shadow-lg py-4 transition-all duration-300 ease-in-out"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          to="/"
          :class="{ 'text-blue-700 font-semibold': isActive('/') }"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          @click="closeMobileMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/programs" :class="{
            'text-blue-700 font-semibold': isActive('/programs') || isActive('/programs/', true),
          }"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          @click="closeMobileMenu"
        >
          Programs
        </NuxtLink>
        <NuxtLink
          to="/career-support"
          :class="{
            'text-blue-700 font-semibold':
              isActive('/career-support') || isActive('/career-support/', true),
          }"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          @click="closeMobileMenu"
        >
          Career Support
        </NuxtLink>
        <NuxtLink
          to="/about"
          :class="{ 'text-blue-700 font-semibold': isActive('/about') }"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          @click="closeMobileMenu"
        >
          About Us
        </NuxtLink>
        <NuxtLink
          to="#footer"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
          @click="closeMobileMenu"
        >
          Contact Us
        </NuxtLink>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex flex-col items-center px-5 space-y-2">
          <button
            class="block w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-base font-medium hover:bg-blue-50"
            @click="closeMobileMenu"
          >
            Login
          </button>
          <button
            class="block w-full px-4 py-2 bg-blue-600 text-white rounded-md text-base font-medium hover:bg-blue-700"
            @click="closeMobileMenu"
          >
            Registrasi
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const isMobileMenuOpen = ref(false);
const route = useRoute();

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const isActive = (path: string, startsWith = false) => {
  const currentPath = route.path;
  let result;

  if (startsWith) {
    result = currentPath.startsWith(path);
  } else {
    result = currentPath === path;
  }
  return result;
};
</script>
