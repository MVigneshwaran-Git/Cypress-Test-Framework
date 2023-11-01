const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3kxvi9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  screenshotOnRunFailure: true, // Capture a screenshot when the entire run fails
  screenshotsFolder: "cypress/results/mochawesome-report/assets",
  screenshotOnTestFailure: true, // Capture a screenshot on test failure
  screenshotOnCommandFailure: true, // Capture a screenshot on command failure
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/results",
      quite: true,
      overwrite: true,
      html: true,
      json: false,
      includeScreenshots: true // Add this line to enable screenshots in the HTML report
    }
  }
});
