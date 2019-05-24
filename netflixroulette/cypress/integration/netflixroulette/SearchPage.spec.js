/* eslint-disable no-undef */
// Homework 4: Cypress E2E test
describe('E2E Cypress test#1', () => {
  it('Finds the content type', () => {
    cy.visit('localhost:8080');
    cy.get('.search-page').should('be.visible');
  });
});
