describe('Page Navigation and Content Tests', () => {

  context('Home Page Tests', () => {
    it('should successfully load the home page', () => {
      cy.visit('/');
      cy.url().should('eq', Cypress.config().baseUrl + '/');
      cy.contains('Start Your Journey Today!').should('be.visible');
      cy.title().should('include', 'Home');
    });
  });

});
