context('Given the homne page', () => {
    beforeEach(() => {
        cy.visit('');
    });

    describe('Navigate to Home', function () {
        it('Opens the page', function () {
            cy.get('[data-cy=navLinkHome]').click();
            cy.get('h1').first().should('have.text', 'Hello, world!');
        });
    });
});