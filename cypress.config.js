const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    env: {
      apiUrl: 'http://localhost:3333',
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    videoFolder: false,
    video: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
