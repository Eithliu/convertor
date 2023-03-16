describe('Is there an input', () => {
    it('visits the app root url', () => {
      cy.visit('/')
      cy.contains('input', 'You did it!')
    })
  })
  