describe('signIn', () => {
  beforeEach(() => cy.visit('/'));

  it('should display header after login', () => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.contains('Music Room');
  });

  it('should show invalid credentials message', () => {
    cy.login('invalid@hello.com', Cypress.env('password'));
    cy.contains('Invalid login credentials');
  });
});
