/// <reference types="cypress" />

describe('Get User', () => {
    it('Verify the list users will displayed', () => {
        cy.request('GET', 'https://reqres.in/api/users')
        .its('status')
        .should('equal', 200);
    });
})