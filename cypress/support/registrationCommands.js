Cypress.Commands.add('login', (username, password) => {
    cy.get('#Input_Email').type(username);
    cy.get('#Input_Password').type(password);
    cy.get('#registerSubmit').click();
})