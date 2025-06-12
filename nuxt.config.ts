import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // Nuxt 3 modules
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS module
    '@nuxt/test-utils/module', // Nuxt Test Utils for Vitest
  ],

  // TypeScript configuration
  typescript: {
    typeCheck: true, // Enable TypeScript type checking
    strict: true, // Enable strict mode for TypeScript
  },

  // Vite configuration (used by Nuxt for bundling)
  vite: {
    vue: {
      script: {
        defineModel: true, // Enable defineModel for better component communication
      },
    },
  },

  // App configuration
  app: {
    head: {
      title: 'Nuxt Boilerplate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Use 'key' instead of 'hid' for meta tags in Nuxt 3
        {
          key: 'description',
          name: 'description',
          content: 'A robust Nuxt.js boilerplate with essential tools.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css', // Path to your main Tailwind CSS file
    configPath: 'tailwind.config.cjs', // Path to your Tailwind config file
    exposeConfig: false, // Don't expose Tailwind config in runtime
    // 'injectPosition' is not a valid option for @nuxtjs/tailwindcss in Nuxt 3
    // It is handled internally or not needed.
    viewer: true, // Enable Tailwind CSS viewer in development
  },

  // Plugins to load before mounting the App
  plugins: [
    '~/plugins/mantine.ts', // Register the Mantine plugin
  ],

  // Build configuration
  build: {
    transpile: ['@mantine/core'], // Transpile Mantine to ensure compatibility
  },

  // Dev server configuration
  devServer: {
    port: 3000,
    host: '0.0.0.0', // Listen on all network interfaces
  },

  // @nuxt/test-utils module options. Vitest configuration is handled in vitest.config.ts
  // The 'test' key directly in nuxt.config.ts is for module options, not direct Vitest config.
  // We're removing the detailed Vitest config here as it belongs in vitest.config.ts
  // If needed, you would put `test: { ...module options... }` but not Vitest's own config.
  // The `@nuxt/test-utils/module` handles linking `vitest.config.ts`.

  // Runtime config (for environment variables)
  runtimeConfig: {
    public: {
      // Define public environment variables here
    },
  },
});
