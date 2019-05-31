describe('Search Input', function() {
    it('Has entered text', function() {
        cy.visit('localhost:3000');
        cy.contains('NetflixRoulette');
        cy.get('input').type('Text for search');
        cy.get('input').should('have.value', 'Text for search');
    });
});
