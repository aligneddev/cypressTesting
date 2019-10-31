context('Privacy test', () => {
    beforeEach(() => {
        cy.visit('https://localhost:44354/');
    });

    describe('Privacy test open', function () {
        it('Opens the page', function () {
            cy.get('[data-cy=navLinkPrivacy]').click();
            cy.url().should('eq', 'https://localhost:44354/Home/Privacy');
            cy.get('h1').first().should('have.text', 'Privacy Policy');
        });
    });
});