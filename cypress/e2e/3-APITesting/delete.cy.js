/// <reference types="cypress" />

describe('HTTP DELETE METHOD', () => {
    it('Succesfully delete user', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2')
        .its('status')
        .should('equal', 204)
    });
})