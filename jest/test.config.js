module.exports = {
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup.ts',
  rootDir: '..',
  transformIgnorePatterns: ['node_modules/(?!ngrx-query)'],
  transform: {
    '^.+\\.(ts|html)$':
      '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
    '^.+\\.js$': 'babel-jest',
  },
};
