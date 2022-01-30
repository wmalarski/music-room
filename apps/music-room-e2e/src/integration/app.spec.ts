describe('music-room', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', function () {
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.contains('Music Room', { timeout: 10000 });
  });
});
