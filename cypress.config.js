const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://rahulshettyacademy.com",
  },
  projectId: "618inr",
  video: true,
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
