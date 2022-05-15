module.exports = {
  plugins: [
    // 'commitlint-plugin-jira-rules'
  ],
  extends: [
    // 'jira'
    '@commitlint/config-conventional'
  ],
  rules: {
    // 'jira-task-id-max-length': [2, 'always', 12],
    'type-enum': [
      'build',
      'chore',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'revert',
      'style',
      'test',
      'new'
    ]
  }
};
