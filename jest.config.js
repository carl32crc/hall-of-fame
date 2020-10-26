module.exports = {
  testPathIgnorePatterns: [
    "<rootDir>/cypress/"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/setupTest.js"
  ],
  collectCoverageFrom: [
    "src/components/**/*.js",
    "src/containers/**/*.js",
    "src/services/**/*.js",
    "!**/styles.js"
  ],
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/setupTest.js",
    "\\.(css|less)$": "<rootDir>/setupTest.js"
  }
}