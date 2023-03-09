import { sveltekit } from '@sveltejs/kit/vite'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    coverage: {
      all: true,
      reporter: ['text', 'html'],
      src: ['./src'],
    },
    // Exclude playwright tests folder
    exclude: [...configDefaults.exclude, 'tests'],
  },
})
