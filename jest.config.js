module.exports = {
  "transform": {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testRegex": "/src/.*\\.(test|spec)\\.(ts|tsx|js)$",
  "testPathIgnorePatterns": [
    "<rootDir>/.cache/",
    "<rootDir>/node_modules/",
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "json"
  ]
};
