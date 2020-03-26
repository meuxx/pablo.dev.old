describe('index', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('takes a screenshot', () => {
    cy.contains('View CV')

    cy.viewport('macbook-13')
    cy.screenshot('macbook-13')

    cy.viewport('ipad-mini')
    cy.screenshot('ipad-mini')

    cy.viewport('iphone-x')
    cy.screenshot('iphone-x')

    cy.viewport('macbook-13')
    cy.screenshot('cropped', { clip: { x: 0, y: 0, width: 1366, height: 500 } })
  })
})
