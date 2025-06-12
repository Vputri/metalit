// cypress/e2e/career-support-detail.cy.ts

describe('Career Support Detail Page and CV Upload', () => {
  const testJobSlug = 'data-engineer'; // Use a specific job slug for testing

  beforeEach(() => {
    cy.visit(`/career-support/${testJobSlug}`);
  });

  it('should display the career support detail page content correctly', () => {
    // Verify job title and salary
    cy.get('h1').should('contain', 'Data Engineer');
    cy.get('p.text-blue-600').should('contain', 'Rp 6,000,000 - Rp 9,000,000');

    // Verify description section
    cy.contains('h2', 'Description').should('be.visible');
    cy.contains('div', 'Jakarta, Indonesia').should('be.visible');
    cy.contains('div', 'Hybrid, Full-time').should('be.visible');
    cy.get('p.text-gray-700.leading-relaxed').should('contain', 'The ideal candidate will have strong technical skills');

    // Verify Responsibilities section
    cy.contains('h2', 'Responsibilities').should('be.visible');
    cy.get('div:contains("Responsibilities") ul li').should('have.length.at.least', 5); // Check for multiple responsibilities
    cy.contains('li', 'Develop and maintain data pipelines using Python.').should('be.visible');

    // Verify Qualifications section
    cy.contains('h2', 'Qualifications').should('be.visible');
    cy.get('div:contains("Qualifications") ul li').should('have.length.at.least', 5); // Check for multiple qualifications
    cy.contains('li', '1 to 2 years of experience as a Data Engineer.').should('be.visible');
  });

  it('should open the "Upload CV" modal when "Send CV" button is clicked', () => {
    cy.get('button').contains('Send CV').click();

    // Verify modal is visible
    cy.get('.fixed.inset-0.bg-black.bg-opacity-50').should('be.visible'); // The modal overlay
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl').should('be.visible'); // The modal content box
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl h2').should('contain', 'Upload CV');
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl p').should('contain', 'Data Engineer'); // Check job title in modal
  });

  it('should close the "Upload CV" modal when cancel button is clicked', () => {
    cy.get('button').contains('Send CV').click();
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl').should('be.visible');

    cy.get('button').contains('Cancel').click();
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl').should('not.exist'); // Modal should be gone
  });

  it('should close the "Upload CV" modal when clicking outside (on overlay)', () => {
    cy.get('button').contains('Send CV').click();
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl').should('be.visible');

    // Click on the modal overlay (which is the parent div of the modal content)
    cy.get('.fixed.inset-0.bg-black.bg-opacity-50').click('topLeft', { force: true }); // Click top-left of overlay
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl').should('not.exist');
  });

  it('should display error message if CV file is not uploaded on submit', () => {
    cy.get('button').contains('Send CV').click();
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl').should('be.visible');

    // Attempt to submit without uploading a file
    cy.get('button[type="submit"]').contains('Submit').click();
    cy.get('p.text-red-500').should('contain', 'Please upload your CV.');
  });

  it('should allow filling out the form and simulating a CV upload', () => {
    cy.get('button').contains('Send CV').click();
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl').should('be.visible');

    // Fill out the form fields
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#phoneNumber').type('81234567890');
    cy.get('#githubLink').type('https://github.com/johndoe');
    cy.get('#linkedinLink').type('https://linkedin.com/in/johndoe');
    cy.get('#personalWebsiteLink').type('https://johndoe.com');

    // Simulate file upload (Cypress provides a fixture command for this)
    // Create a dummy PDF file in cypress/fixtures/ folder (e.g., test.pdf)
    const fileName = 'test_cv.pdf';
    cy.fixture(fileName, 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileBlob) => {
        const file = new File([fileBlob], fileName, { type: 'application/pdf' });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        // Dispatch event manually because input type="file" is hidden
        cy.get('#cvFile').trigger('change', { dataTransfer });
      });

    cy.get('p.text-green-600').should('contain', 'Selected file: test_cv.pdf');

    // Intercept the console.log for handleCvSubmit and verify its arguments
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog');
    });

    cy.get('button[type="submit"]').contains('Submit').click();

    // Verify the console log indicates submission
    cy.get('@consoleLog').should('have.been.calledWith', 'CV submitted for:', 'Data Engineer');
    cy.get('@consoleLog').should('have.been.calledWithMatch', 'Form Data:', Cypress.sinon.match.has('firstName', 'John'));

    // The modal should close after successful submission (due to `closeUploadModal()` in handleCvSubmit)
    cy.get('.bg-white.p-8.rounded-xl.shadow-2xl').should('not.exist');
  });
});
