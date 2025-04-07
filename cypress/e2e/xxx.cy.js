describe('Verify Browser Stack Home Page', () => {

  it('Verify Browserstack logo is visible', () => {
      cy.visit('https://www.browserstack.com/');
      cy.get('#logo').should('be.visible');
  })

  it('Click on Sign In', () => {
    cy.visit('https://www.browserstack.com/');
    cy.get('a[title="Sign in"]').then(($selectedElement) => {
      $selectedElement.get(0).click()
    })
  })
})