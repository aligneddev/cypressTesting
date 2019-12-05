
context('Registration', () => {
    beforeEach(() => {
        cy.visit('');
    });

    describe('Registration test open', function () {
        this.beforeEach(() => {
            cy.get('[data-cy=navLinkRegistration]').click();
        });
        it('Opens the page', function () {
            cy.url().should('contain', 'Identity/Account/Register');
            cy.get('h1').first().should('have.text', 'Register');
        });
        describe('when filling out the fields', () => {
            describe('when no confirm password', () => {
                it('should show validation', () => {
                    cy.get('#Input_Email').type('klogan@omnitech-inc.com');
                    cy.get('#Input_Password').type('password1');
                    cy.get('#registerSubmit').click();

                    cy.get('.validation-summary-errors').should('have.text', 'The password and confirmation password do not match.');
                });
            });
        });
    });
});