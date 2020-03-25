module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': `<rootDir>/jest-preprocess.js`,
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.ts`,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`, `cypress`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: ['<rootDir>/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/src/**/*.d.ts'],
  verbose: true,
}
