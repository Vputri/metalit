import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Base URL of your Nuxt.js application
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Where your E2E tests are located
    supportFile: 'cypress/support/e2e.ts', // Support file for global commands
    // setupNodeEvents(on, config) {
    //   // Implement node event listeners here
    //   // For example, for code coverage or processing tasks
    // },
  },
  // You can add component testing configuration here if needed
  // component: {
  //   devServer: {
  //     framework: 'vue',
  //     bundler: 'vite',
  //   },
  // },
});
