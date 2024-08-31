Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('information', (firstname, lastname, postalcode) => {
    cy.get('[data-test="firstName"]').type(firstname);
    cy.get('[data-test="lastName"]').type(lastname);
    cy.get('[data-test="postalCode"]').type(postalcode);
});

Cypress.Commands.add('dataTestClick', (value) => {
    cy.get(`[data-test=${CSS.escape(value)}]`).click();
});