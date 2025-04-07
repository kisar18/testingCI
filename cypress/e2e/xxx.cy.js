describe('Verify Browser Stack Home Page', () => {

  it('Verify Browserstack logo is visible', () => {
      cy.visit('https://www.browserstack.com/');
      cy.get('#logo').should('be.visible');
  })

  it.only('Click on Sign In', () => {
    cy.visit('https://www.browserstack.com/');
    cy.get('a[title="Sign in"]').then(($selectedElement) => {
      debugger;
      $selectedElement.get(0).click()
    })
  })
})