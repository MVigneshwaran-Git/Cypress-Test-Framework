import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
        const screenshot = `cypress/results/mochawesome-report/assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
        console.log("called " + screenshot)
        addContext({ test }, screenshot);
    }
});

// pay attention to the "screenshot" constant because if you specify an incorrect file name mask, the screenshot will not be included in the report
