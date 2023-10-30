class InventoryPage {
    openSideMenu() {
        cy.get('.bm-burger-button').click();
    }

    closeSideMenu() {
        cy.contains('Close Menu').click();
    }
    assertProductLabelExists() {
        cy.get('.product_label').should('exist')
    }

    assertInventoryListExists() {
        cy.get('.inventory_list').should('exist');
    }

    assertInventoryListHasProducts() {
        cy.get('.inventory_list').children().should('have.length.above', 1);
    }

    chooseRandomProductAndAddToCart() {
        cy.get('.inventory_list')
            .children()
            .find('.inventory_item_name')
            .then(($children) => {
                const randomIndex = Math.floor(Math.random() * $children.length);
                cy.wrap($children[randomIndex]).click();
            });
        cy.get('.btn_primary').click();
    }
    assertShoppingCartContainsItems(){
            cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('exist')

    }
    goToShoppingCart() {
        cy.get('.shopping_cart_link').click();
    }

    checkout() {
        cy.get('.btn_action').click();
    } 
    fillCheckoutForm(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
    }
    finishOrder() {
        cy.get('.btn_primary').click();
        cy.get('.btn_action').click();
    }
    assertOrderConfirmationMessage(message) {
        cy.get('.complete-header').should('have.text', message);
    }
    // Add more methods for assertions and actions related to the InventoryPage
}

export default new InventoryPage();
