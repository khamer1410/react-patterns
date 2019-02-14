
describe('myFirst test', () => {
  beforeEach(()=> {
    cy.visit('/react-patterns/')
  })

  it('navigation works', ()=> {
    cy.get(':nth-child(4) > a').click()
    cy.url().should('include', '/conditional')
  })

  it('click toggles state', () => {
    //Arrange
    cy.visit('/react-patterns/conditional-rendering')
    cy.getByTestId('statusInfo').contains('CHILL')

    //Act
    cy.getByTestId('toggleButton', {timeout: 500}).click() //You can add timeout to queries

    //Assert
    cy.getByTestId('statusInfo').contains('PARTY')
  })
})

