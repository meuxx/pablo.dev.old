describe('index', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('takes a screenshot', () => {
    cy.contains('View CV')

    // Wait for the avatar to be fully loaded
    cy.get('picture')
      .find('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })

    cy.viewport('macbook-13')
    cy.screenshot('preview', { clip: { x: 0, y: 0, width: 1366, height: 400 } })

    cy.viewport('macbook-13')
    cy.screenshot('macbook-13')

    cy.viewport('ipad-mini')
    cy.screenshot('ipad-mini')

    cy.viewport('iphone-x')
    cy.screenshot('iphone-x')
  })
})
