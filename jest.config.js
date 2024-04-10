module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  moduleNameMapper: {
    '@octokit/auth-action': '<rootDir>/mocks/auth-action.js',
  }
}