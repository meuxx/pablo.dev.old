describe('index', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('takes a screenshot', () => {
    cy.contains('View CV')
    cy.screenshot('index')
  })
})
