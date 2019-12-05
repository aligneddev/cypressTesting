Cypress.Commands.add('login', (username, password1, password2) => {
    cy.get('#Input_Email').type(username);
    cy.get('#Input_Password').type(password1);
    if (password2 !== '') {
        cy.get('#Input_ConfirmPassword').type(password2);
    }

    cy.get('#registerSubmit').click();
});