describe("Testy", () => {
  it('Vzorový test', () => {
    cy.visit('https://example.cypress.io')
    cy.task('log', 'Toto je zpráva do příkazové řádky')
  })
})

