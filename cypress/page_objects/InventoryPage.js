import InventoryPageLocators from "../locators/InventorypageLocators";
import InventorypageInputData from '../input_data/InventorypageInputs'

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
    fillCheckoutForm() {
        cy.get(InventoryPageLocators.checkoutFormFirstName).type(InventorypageInputData.checkoutFormDetails.firstName);
        cy.get(InventoryPageLocators.checkoutFormLastName).type(InventorypageInputData.checkoutFormDetails.lastName);
        cy.get(InventoryPageLocators.checkoutFormPostalCode).type(InventorypageInputData.checkoutFormDetails.postalCode);
    }
    finishOrder() {
        cy.get(InventoryPageLocators.continueToCheckout).click();
        cy.get(InventoryPageLocators.finishCheckout).click();
    }
    assertOrderConfirmationMessage() {
        cy.get(InventoryPageLocators.orderConfirmationMessage).should('have.text', InventorypageInputData.verificationPage.thankYouMessage);
    }
    // Add more methods for assertions and actions related to the InventoryPage
}

export default new InventoryPage();
