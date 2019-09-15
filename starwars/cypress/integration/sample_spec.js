describe('My Lambda Assignment, Simple Test', function() {
    it('clicks the link "type"', function() {
      cy.visit('https://build-week-celeb-dead-or-alive.github.io/mogwai/')
  
      cy.contains('Play Game').click()
    })
  })