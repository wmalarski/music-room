describe('music-room', () => {
  beforeEach(() => cy.visit('/?tab=signUp'));

  it('should redirect to login after register', function () {
    cy.fixture('session').then((data) => {
      cy.intercept(
        {
          path: '/auth/v1/signup*',
          method: 'POST',
        },
        (req) => {
          req.reply(data);
        }
      );
    });

    cy.get('[name=email]').type('hello@example.com');
    cy.get('[name=password]').type('password');
    cy.get('[name=confirmPassword]').type('password');
    cy.get('[name=signUp]').click();

    cy.contains('Music Room', { timeout: 10000 });
  });
});
