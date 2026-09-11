import { defineConfig } from 'oxlint'

export default defineConfig({
  plugins: ['typescript', 'unicorn', 'oxc', 'import', 'react', 'jsx-a11y'],
  ignorePatterns: ['**/*.gen.*', '**/coverage/**', '**/dist/**', '**/src/paraglide/**'],
})
