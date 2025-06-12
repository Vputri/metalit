// Corrected import: createCache comes from '@emotion/cache', not '@emotion/css'
import '@mantine/core/styles.css'; // Import Mantine core styles

export default defineNuxtPlugin(() => {
  // Create an emotion cache for Mantine
  // Define your Mantine theme override if needed
  // MantineProvider is a React component, not a Vue plugin.
  // We apply its CSS globally by importing styles.css.
  // Direct use of MantineProvider as a Vue plugin is not supported without a Vue-React bridge.
  // If you need to deeply customize Mantine's theme for usage with Vue's JSX/template,
  // it usually involves overriding CSS variables or creating Vue wrappers for React components.
  // For basic global styling, importing '@mantine/core/styles.css' is sufficient.
  // The following line is removed as it causes the "No overload matches this call" error:
  // nuxtApp.vueApp.use(MantineProvider, { theme: mantineTheme, emotionCache: emotionCache });
});
