describe('createRoom', () => {
  beforeEach(() => cy.visit('/'));

  it('should display sign up page after signOut', () => {
    cy.login(Cypress.env('email'), Cypress.env('password'));

    cy.get('form').get('[name=name]').type('name');
    cy.get('form').get('[name=slug]').type('slug123');
    cy.get('form').submit();

    cy.location('pathname').should('eq', '/room/slug123');

    cy.get('a').contains('Settings').click();
    cy.get('button').contains('Remove Room').click();
    cy.get('button').contains('Confirm').click();

    cy.location('pathname').should('eq', '/');
  });

  it('should display error after empty name', () => {
    cy.intercept('POST', '/rest/v1/rooms*').as('room');

    cy.login(Cypress.env('email'), Cypress.env('password'));

    cy.get('form').get('[name=slug]').type('slug123');
    cy.get('form').submit();

    cy.contains('fieldIsRequired');
  });
});
