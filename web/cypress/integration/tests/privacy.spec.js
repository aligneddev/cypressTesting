context('Privacy test', () => {
    beforeEach(() => {
        cy.visit('');
    });

    describe('Privacy test open', function () {
        it('Opens the page', function () {
            cy.get('[data-cy=navLinkPrivacy]').click();
            cy.url().should('contain', 'Home/Privacy');
            cy.get('h1').first().should('have.text', 'Privacy Policy');
        });
    });
});