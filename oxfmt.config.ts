import { defineConfig } from 'oxfmt'

export default defineConfig({
  ignorePatterns: [
    '**/*.gen.*',
    '**/.turbo/**',
    '**/coverage/**',
    '**/dist/**',
    '**/src/paraglide/**',
    'pnpm-lock.yaml',
  ],
  semi: false,
  singleQuote: true,
})
