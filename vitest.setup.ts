import { config } from '@vue/test-utils';
import { vi } from 'vitest'; // Import vi from vitest

// Vitest's 'environment: jsdom' in nuxt.config.ts handles global environment setup.
// No manual 'installGlobals()' is needed here.

// Global Vue Test Utils config
config.global.stubs = {
  // Global stubs for components if needed, e.g., for NuxtLink
  NuxtLink: { template: '<a v-bind="$attrs"><slot /></a>' },
};

// Mock Nuxt's useHead composable globally
// This ensures useHead is mocked in all tests without needing to mock #app in each file.
// We're casting `global` to `any` because `useHead` might not be directly declared on `global` types,
// but Nuxt's auto-imports make it globally available at runtime for tests.
(global as any).useHead = vi.fn();

console.log('Vitest setup complete!');
