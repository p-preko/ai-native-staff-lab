export default {
  // Format all staged files with Prettier
  '*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,json,md,mdx,css,yaml,yml}': [
    'prettier --write',
  ],
  // Run package-level lint and typecheck for changed packages
  'packages/*/src/**/*.{ts,tsx,js,jsx}': () => [
    "yarn workspaces foreach -Ap --include '@staff-lab/core' --include '@staff-lab/ai' run lint:fix",
    "yarn workspaces foreach -Ap --include '@staff-lab/core' --include '@staff-lab/ai' run typecheck",
  ],
};
