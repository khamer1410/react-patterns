
describe('myFirst test', () => {
  it('visit webpage', ()=> {
    cy.visit('http://localhost:3000/react-patterns/')

    cy.get('ul').contains('FORM').click()
    cy.url().should('include', '/utils')
  })
})

