class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/v1/index.html');
    }

    login(username, password) {
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('#login-button').click();
    }
    checkFailurMessage(){
        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
    }
    
}

export default new LoginPage();
