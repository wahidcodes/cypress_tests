describe('template spec', () => {
  it('positive-test', () => {
    cy.visit('https://dashboard.digy4.com/auth/login');
	cy.get('[name=userName]', {timeout: 10000}).type('wahid_md');
	cy.get('[name=password]').type('Wahid@20.03');
	cy.get('[type=submit]').click();
	
	cy.get('[id=admin-panel-parent-id]', {timeout: 20000}).click();
	cy.get('div').contains('Projects').click();
	cy.get('button').contains('Add Project').click();
	cy.get('[name=name]').type('CypressTest');
	cy.get('[name=line_of_business]').type('Student');
	cy.get('[name=description]').type('Test is successfull');
	cy.get('[name=comments]').type('Automated the comments section');
	cy.get('button').contains('Submit').click();
  })
})



