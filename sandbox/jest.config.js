module.exports = {
    "collectCoverage": false,
    "verbose": true,
    "notify": false,
    "bail": false,
    //"reporters": [],
    "globals": { "__strykerGlobalNamespace__": "__stryker__" },
    "testEnvironment": "./node_modules/@stryker-mutator/jest-runner/dist/src/jest-plugins/jest-environment-generic.js"
  }
  