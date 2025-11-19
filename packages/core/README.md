# @staff-lab/core

Core package for testing configuration setup.

## Testing Configuration

This package is set up to test that `@staff-lab/config` works correctly for:

- ✅ TypeScript type checking
- ✅ ESLint linting
- ✅ Prettier formatting

### Test Files

- `src/good.ts` - Should pass all checks ✅
- `src/eslint-errors.ts` - Has intentional ESLint errors ❌
- `src/typescript-errors.ts` - Has intentional TypeScript errors ❌
- `src/prettier-errors.ts` - Has intentional Prettier formatting errors ❌

### Running Tests

```bash
# Test ESLint (should find errors in eslint-errors.ts)
yarn lint

# Test TypeScript (should find errors in typescript-errors.ts)
yarn typecheck

# Test Prettier (should find errors in prettier-errors.ts)
yarn format

# Run all tests at once
yarn test:config
```

### Expected Results

- ✅ `yarn lint` should report errors in `eslint-errors.ts`
- ✅ `yarn typecheck` should report errors in `typescript-errors.ts`
- ✅ `yarn format` should report formatting issues in `prettier-errors.ts`
- ✅ `src/good.ts` should pass all checks
