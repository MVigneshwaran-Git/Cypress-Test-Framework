const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3kxvi9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});