# Git Hooks

This directory contains Git hooks managed by [Husky](https://typicode.github.io/husky/).

## Hooks

### `pre-commit`

Runs before each commit:

- **lint-staged**: Formats and lints only staged files
  - Runs Prettier on all staged files
  - Runs ESLint with `--fix` on staged JS/TS files
  - Runs TypeScript type checking

### `commit-msg`

Runs on commit message validation:

- **commitlint**: Enforces [Conventional Commits](https://www.conventionalcommits.org/)
  - Format: `type(scope?): subject`
  - Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

## Examples

✅ Good commit messages:

```
feat: add user authentication
fix: resolve memory leak in chat handler
docs: update API documentation
refactor(core): simplify message parsing
```

❌ Bad commit messages:

```
Update stuff
fixed bug
WIP
```

## Bypass (use sparingly)

If you absolutely need to bypass hooks:

```bash
git commit --no-verify -m "emergency fix"
```

**Note:** CI will still run all checks, so bypassing locally only delays feedback.
