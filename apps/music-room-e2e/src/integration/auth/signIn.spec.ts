describe('music-room', () => {
  beforeEach(() => cy.visit('/'));

  it('should display header after login', function () {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.contains('Music Room', { timeout: 10000 });
  });

  it('should show invalid credentials message', function () {
    cy.login('invalid@hello.com', Cypress.env('password'));
    cy.contains('Invalid login credentials', { timeout: 10000 });
  });
});
