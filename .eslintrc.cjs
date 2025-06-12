module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript', // Nuxt and TypeScript specific rules
    'prettier', // Disable ESLint rules that conflict with Prettier
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error', // Enforce Prettier formatting
    'vue/multi-word-component-names': 'off', // Allow single-word component names (e.g., App)
    'vue/no-multiple-template-root': 'off', // Allow multiple root elements in templates (Nuxt layouts)
    'vue/no-v-html': 'off', // Allow v-html for specific cases (use with caution)
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused vars starting with underscore
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Warn on console.log in production
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Warn on debugger in production
  },
  // Add global variables for Vitest if needed
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    vi: 'readonly', // For Vitest mocks and spies
    describe: 'readonly',
    it: 'readonly',
    expect: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
  },
};
