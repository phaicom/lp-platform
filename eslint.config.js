import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    pnpm: true,
    ignores: [
      '**/dist',
      'skills/**/*.md',
      'README.md',
    ],
  },
)
