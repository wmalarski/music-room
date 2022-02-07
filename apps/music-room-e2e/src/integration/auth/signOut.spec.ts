describe('signOut', () => {
  beforeEach(() => cy.visit('/'));

  it('should display sign up page after signOut', () => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.contains('Sign Out').click();
    cy.contains('Sign Up');
  });
});
