import InventoryPageLocators from "../locators/InventorypageLocators";
class InventoryPage {
    openSideMenu() {
        cy.get(InventoryPageLocators.openMenuButton).click();
    }

    closeSideMenu() {
        cy.contains(InventoryPageLocators.closeMenuText).click();
    }
    assertProductLabelExists() {
        cy.get(InventoryPageLocators.productPageHeader).should('exist')
    }

    assertInventoryListExists() {
        cy.get(InventoryPageLocators.listOfProducts).should('exist');
    }

    assertInventoryListHasProducts() {
        cy.get(InventoryPageLocators.listOfProducts).children().should('have.length.above', 1);
    }

    chooseRandomProductAndAddToCart() {
        cy.get(InventoryPageLocators.listOfProducts)
            .children()
            .find(InventoryPageLocators.individualProducts)
            .then(($children) => {
                const randomIndex = Math.floor(Math.random() * $children.length);
                cy.wrap($children[randomIndex]).click();
            });
        cy.get(InventoryPageLocators.addToCartButton).click();
    }
    assertShoppingCartContainsItems() {
        cy.get(InventoryPageLocators.openCartPage).click()
        cy.get(InventoryPageLocators.listOfItemsInCart).should('exist')

    }
    goToShoppingCart() {
        cy.get(InventoryPageLocators.openCartPage).click();
    }

    checkout() {
        cy.get(InventoryPageLocators.checkOutButton).click();
    }
    fillCheckoutForm(firstName, lastName, postalCode) {
        cy.get(InventoryPageLocators.checkoutFormFirstName).type(firstName);
        cy.get(InventoryPageLocators.checkoutFormLastName).type(lastName);
        cy.get(InventoryPageLocators.checkoutFormPostalCode).type(postalCode);
    }
    finishOrder() {
        cy.get(InventoryPageLocators.continueToCheckout).click();
        cy.get(InventoryPageLocators.finishCheckout).click();
    }
    assertOrderConfirmationMessage(message) {
        cy.get(InventoryPageLocators.orderConfirmationMessage).should('have.text', message);
    }
    // Add more methods for assertions and actions related to the InventoryPage
}

export default new InventoryPage();
