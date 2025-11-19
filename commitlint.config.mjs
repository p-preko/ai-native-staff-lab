export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Allow longer subject lines for detailed commits
    'subject-max-length': [2, 'always', 100],
    // Enforce lowercase subject
    'subject-case': [2, 'always', 'lower-case'],
    // Allow these types
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation only
        'style', // Formatting, missing semi colons, etc; no code change
        'refactor', // Refactoring production code
        'perf', // Performance improvements
        'test', // Adding or updating tests
        'build', // Build system or external dependencies
        'ci', // CI configuration files and scripts
        'chore', // Updating grunt tasks etc; no production code change
        'revert', // Revert a previous commit
      ],
    ],
  },
};
