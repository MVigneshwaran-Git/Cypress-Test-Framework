// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// const CustomReporter = require('../reporter/CustomReport');

// Cypress.on('run:start', () => {
//     const customReporter = new CustomReporter(Cypress.runner);
// });
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
        const screenshot = `mochawesome-report/assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
        addContext({ test }, screenshot);
    }

});


// pay attention to the "screenshot" constant because if you specify an incorrect file name mask, the screenshot will not be included in the report





