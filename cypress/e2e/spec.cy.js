/// <reference types="cypress" />

// https://glebbahmutov.com/blog/cypress-tips-and-tricks/
// or use https://github.com/bahmutov/cy-spok
chai.config.truncateThreshold = 200

it('has a parsed JSON user object', () => {
  const user = Cypress.env('user')
  cy.wrap(user).should('deep.equal', {
    username: 'Joe',
    password: '123secret!',
    age: 42,
    valid: true,
  })
})
