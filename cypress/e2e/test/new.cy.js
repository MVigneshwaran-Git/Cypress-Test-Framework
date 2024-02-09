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
});
