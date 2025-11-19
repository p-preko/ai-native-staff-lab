export default {
  '*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,json,md,mdx,css,yaml,yml}': [
    'prettier --write',
  ],
  'packages/**/*.{ts,tsx,js,jsx}': () => ['yarn lint', 'yarn typecheck'],
};
