import loginPageLocators from '../locators/LoginpageLocators';
import loginInputData from '../input_data/LoginpageInputs'
class LoginPage {
    visit() {
        cy.visit(loginInputData.url.baseURL);
    }

    login() {
        cy.get(loginPageLocators.usernameInput).type(loginInputData.validCredentials.username);
        cy.get(loginPageLocators.passwordInput).type(loginInputData.validCredentials.password);
        cy.get(loginPageLocators.loginButton).click();
    }
    loginWithInvalidCredentials() {
        cy.get(loginPageLocators.usernameInput).type(loginInputData.invalidCredentials.username);
        cy.get(loginPageLocators.passwordInput).type(loginInputData.invalidCredentials.password);
        cy.get(loginPageLocators.loginButton).click();

    }
    checkFailurMessage() {
        cy.get(loginPageLocators.errorMessage).contains(loginInputData.invalidCredentials.errorMessageText)
    }

}

export default new LoginPage();
