const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {

    charts: true,

    reportPageTitle: 'Cypress Inline Reporter',

    embeddedScreenshots: true,

    inlineAssets: true, //Adds the asserts inline

  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://warrantyxpress-int.airbus-v.com/claims",
  },
  taskTimeout: 20000,
  pageLoadTimeout: 20000,
  defaultCommandTimeout: 20000,
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 0,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  },
  chromeWebSecurity: false // to avoid cypress.origin() error



});
