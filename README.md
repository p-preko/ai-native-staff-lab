# AI Native Staff Lab

Monorepo for AI-powered applications built with React Native (Expo), Next.js, and shared TypeScript packages.

## Structure

```
ai-native-staff-lab/
├── apps/
│   ├── mobile/          # Expo / React Native app
│   └── web/             # Next.js app
├── packages/
│   ├── config/          # Shared tooling configs (ESLint, TypeScript, Jest, Prettier)
│   ├── core/            # Core business logic
│   └── ai/              # AI integrations
```

## Setup

```bash
# Install dependencies (also sets up Git hooks)
yarn install

# Run linting across all packages
yarn lint

# Run type checking
yarn typecheck

# Run tests
yarn test

# Format code
yarn format
```

## Git Hooks & Commit Conventions

This repo uses **Husky** + **lint-staged** + **commitlint** for quality gates:

### Pre-commit Hook

Automatically runs on `git commit`:

- Formats staged files with Prettier
- Lints staged files with ESLint (`--fix`)
- Type-checks staged TypeScript files

### Commit Message Hook

Enforces [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: resolve bug
docs: update documentation
refactor: restructure code
test: add tests
chore: update dependencies
```

**Valid types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

See [.husky/README.md](.husky/README.md) for details.

## Package Scripts

Each package has the following scripts:

```bash
yarn lint           # ESLint
yarn lint:fix       # ESLint with auto-fix
yarn typecheck      # TypeScript type checking
yarn format         # Prettier format check
yarn format:fix     # Prettier auto-format
yarn test           # Jest tests
yarn test:watch     # Jest watch mode
yarn test:coverage  # Jest with coverage
```

## Tools & Configuration

- **Package Manager**: Yarn Berry (v4) with `node_modules` linker
- **TypeScript**: Configured via `@staff-lab/config`
- **ESLint**: ESLint 9 with flat config + type-aware rules
- **Prettier**: Using `@vercel/style-guide`
- **Testing**: Jest with `ts-jest`
- **Git Hooks**: Husky v9 + lint-staged + commitlint

### Adding a New Package

1. Create package directory: `packages/new-package/`
2. Add `package.json`, `tsconfig.json`, `eslint.config.mjs`, `jest.config.mjs`
3. Extend configs from `@staff-lab/config`
4. Add dependency: `"@staff-lab/config": "workspace:*"`

## Native Development

### iOS (React Native)

- Native code in `apps/mobile/ios/` is **ignored by default**
- Uncomment `!ios/` in `.gitignore` if you want to track native modifications

### Android (React Native)

- Native code in `apps/mobile/android/` is **ignored by default**
- Uncomment `!android/` in `.gitignore` if you want to track native modifications

## Notes

- Apps (Next.js, Expo) manage their own ESLint/TypeScript versions
- Shared packages use tools from `@staff-lab/config`
- No version conflicts between app and package tooling
