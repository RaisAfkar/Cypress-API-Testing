/// <reference types="cypress" />

describe('Negative Response', () => {
    it('Displays status code 404', () => {
        cy.request({
          method: 'GET',
          url: 'https://pokeapi.co/api/v2/Eduwork',
          failOnStatusCode: false
        })
        .its('status')
        .should('equal', 404)
    });
})