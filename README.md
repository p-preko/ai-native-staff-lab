# AI Native Staff Lab

Monorepo for AI-powered applications.

## Structure

```
├── apps/
│   ├── mobile/    # Expo app
│   └── web/       # Next.js app (16)
├── packages/
│   ├── config/    # Shared configs
│   ├── core/      # Core domain logic
│   └── ai/        # AI integrations
```

## Setup

```bash
yarn install
yarn lint
yarn typecheck
yarn test
```

## Commits

Uses conventional commits: `type: subject`

Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`
