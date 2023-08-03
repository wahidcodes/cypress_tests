describe('template spec', () => {
  it('positive-test', () => {
    cy.visit('https://dashboard.digy4.com/auth/login');
	cy.get('[name=userName]', {timeout: 10000}).type('wahid_md');
	cy.get('[name=password]').type('Wahid@20.03');
	cy.get('[type=submit]').click();
	
  })
})

