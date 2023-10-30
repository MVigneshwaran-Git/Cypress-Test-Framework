import LoginPage from '../page_objects/LoginPage';
import InventoryPage from '../page_objects/InventoryPage';


describe('Saucedemo End to End testing', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(); cy.wait(1000)
  });

  it('Login with valid credentials', function () {
    InventoryPage.assertProductLabelExists(); cy.wait(1000)
  });

  it('Login with invalid credentials', function () {
    LoginPage.visit();
    LoginPage.loginWithInvalidCredentials();
    LoginPage.checkFailurMessage(); cy.wait(1000)
  });

  it('Side Menu is opened while clicking the menu button', function () {
    InventoryPage.openSideMenu(); cy.wait(1000)
    InventoryPage.closeSideMenu(); cy.wait(1000)
  });

  it('Verify inventory list is displayed with products', function () {
    InventoryPage.assertInventoryListExists();
    InventoryPage.assertInventoryListHasProducts(); cy.wait(1000)
  });

  it('Choose any random product and add it to the cart', function () {
    InventoryPage.chooseRandomProductAndAddToCart(); cy.wait(1000)
    InventoryPage.assertShoppingCartContainsItems(); cy.wait(1000)
  });

  it('Buy a product', function () {
    InventoryPage.chooseRandomProductAndAddToCart();
    InventoryPage.goToShoppingCart();
    InventoryPage.checkout();
    InventoryPage.fillCheckoutForm('donald', 'trump', '123456');
    InventoryPage.finishOrder(); cy.wait(1000)
    InventoryPage.assertOrderConfirmationMessage('THANK YOU FOR YOUR ORDER'); cy.wait(1000)
  });
});
