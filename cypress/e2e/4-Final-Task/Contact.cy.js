/// <reference types="cypress" />

describe('Testing1', () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com');
    })
    it('Succesfully send New Message from Contact menu', () => {
        cy.get('.nav-link').contains('Contact').click()
        cy.get('h5').should('be.visible');
        cy.get('#recipient-email').type('fakeEmail@gmail.com')
        cy.get('#recipient-name').type('fake name')
        cy.get('#message-text').type('ini adalah pesan')
        cy.get('.btn-primary').contains('Send message').click()
        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Thanks for the message!!');
        });
    });
})