/// <reference types="cypress" />

describe('login via API Method POST', () => {
    it('succesfully login via API', () => {
        cy.loginViaApi()
        cy.url().should('include', '/profile')
    });
})