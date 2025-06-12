// cypress/e2e/navigation.cy.ts

describe('Global Navigation', () => {
  beforeEach(() => {
    cy.visit('/'); // Start from the home page
  });

  it('should navigate to the Programs page from the Home page header', () => {
    cy.get('header').contains('Programs').click();
    cy.url().should('include', '/program');
    cy.contains('h1', 'Master In-Demand Tech Skills and Build Your Future Today').should('be.visible');
  });

  it('should navigate back to Home from Programs page header', () => {
    cy.visit('/program');
    cy.get('header').contains('Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.contains('h1', 'Level Up Your Tech Skills').should('be.visible');
  });

  it('should navigate to a specific program detail page from the Programs page', () => {
    cy.visit('/program');
    // Find a program card (e.g., 'UI/UX Design Bootcamp') and click its 'Learn More' link
    cy.contains('.bg-white', 'UI/UX Design Bootcamp') // Find the card containing this title
      .find('a.text-blue-600') // Find the "Learn More" link within that card
      .click();

    cy.url().should('include', '/programs/ui-ux-design');
    cy.contains('h1', 'Bootcamp - UI/UX Design').should('be.visible');
  });

  it('should navigate to programs from the "Explore Programs" button on the home page', () => {
    cy.get('section.relative button').contains('Explore Programs').click();
    cy.url().should('include', '/program');
    cy.contains('h1', 'Master In-Demand Tech Skills and Build Your Future Today').should('be.visible');
  });
});
