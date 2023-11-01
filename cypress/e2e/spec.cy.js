import LoginPage from '../page_objects/LoginPage';
import InventoryPage from '../page_objects/InventoryPage';



describe('Saucedemo End to End testing', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login();
  });

  it('Login with valid credentials', function () {
    InventoryPage.assertProductLabelExists();
  });

  it('Login with invalid credentials', function () {
    LoginPage.visit();
    LoginPage.loginWithInvalidCredentials();
    LoginPage.checkFailurMessage();
  });

  it('Side Menu is opened while clicking the menu button', function () {
    InventoryPage.openSideMenu();
    InventoryPage.closeSideMenu();
  });

  it('Verify inventory list is displayed with products', function () {
    InventoryPage.assertInventoryListExists();
    InventoryPage.assertInventoryListHasProducts();
  });

  it('Choose any random product and add it to the cart', function () {
    InventoryPage.chooseRandomProductAndAddToCart();
    InventoryPage.assertShoppingCartContainsItems();
  });

  it('Buy a product', function () {
    InventoryPage.chooseRandomProductAndAddToCart();
    InventoryPage.goToShoppingCart();
    InventoryPage.checkout();
    InventoryPage.fillCheckoutForm();
    InventoryPage.finishOrder();
    InventoryPage.assertOrderConfirmationMessage();
  });
});
