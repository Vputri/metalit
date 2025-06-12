// cypress/e2e/example.cy.ts

describe('Nuxt Boilerplate E2E Test', () => {
  it('should navigate to the home page and display a welcome message', () => {
    // Visit the base URL defined in cypress.config.ts
    cy.visit('/');

    // Assert that the page title is correct (adjust based on your actual title)
    cy.title().should('eq', 'Nuxt Boilerplate');

    // Assert that a specific element with a welcome message exists
    // You might need to adjust the selector based on your actual home page content
    cy.get('h1').should('contain', 'Welcome to Nuxt Boilerplate!');
  });

  // Example of another test
  it('should display a navigation link', () => {
    cy.visit('/');
    cy.get('nav a').should('exist'); // Assuming you have a nav with links
  });
});
