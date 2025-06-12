// cypress/e2e/program-detail-content.cy.ts

describe('Program Detail Page Content', () => {
  beforeEach(() => {
    cy.visit('/programs/ui-ux-design'); // Visit a specific program detail page
  });

  it('should display the program title and tagline', () => {
    cy.get('section.bg-gradient-to-r h1').should('contain', 'Bootcamp - UI/UX Design');
    cy.get('section.bg-gradient-to-r p').should('contain', 'Master the principles of user experience and user interface design.');
  });

  it('should display the program price and Apply Now button', () => {
    cy.get('section.bg-gradient-to-r span.text-yellow-300').should('contain', 'Rp 2.000.000');
    cy.get('section.bg-gradient-to-r button').should('contain', 'Apply Now');
  });

  it('should display the sidebar navigation', () => {
    cy.get('aside nav').should('be.visible');
    cy.get('aside nav a').should('have.length.at.least', 5); // Check for at least 5 links
    cy.get('aside nav a').first().should('contain', 'Program Overview');
  });

  it('should contain the Program Overview section with details and skills', () => {
    cy.get('#overview h2').should('contain', 'Program Overview');
    cy.get('#overview ul').should('contain', 'Duration: 5 Months');
    cy.get('#overview ul').should('contain', 'User Research & Persona Development');
  });

  it('should contain the Curriculum section with modules', () => {
    cy.get('#curriculum h2').should('contain', "What You'll Learn in Bootcamp");
    cy.get('#curriculum div.space-y-4').should('have.descendants', 'h3'); // Check for module titles
    cy.get('#curriculum').should('contain', 'Module 1: User Research & Fundamentals');
  });

  it('should contain the "Guided by Experts" section with instructor cards', () => {
    cy.get('#instructors h2').should('contain', 'Guided by Experts Who Lead the Industry');
    cy.get('#instructors').find('.bg-gray-50').should('have.length.at.least', 1); // Check for instructor cards
    cy.get('#instructors').should('contain', 'Sarah Chen');
  });

  it('should contain the "What Our Graduates Say" section with testimonial cards', () => {
    cy.get('#testimonials h2').should('contain', 'What Our Graduates Say');
    cy.get('#testimonials').find('.bg-gray-100').should('have.length.at.least', 1); // Check for testimonial cards
    cy.get('#testimonials').should('contain', 'Ahmad Mustofa');
  });
});
