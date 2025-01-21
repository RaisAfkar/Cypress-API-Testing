/// <reference types="cypress" />

describe('Testing 1', () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com/');
    });
    it('Sign up without input field Username', () => {
        cy.get('#signin2').click()
        cy.get('h5').should('be.visible')
        cy.get('#sign-password').type('wkwk')
        cy.get('.btn-primary').contains('Sign up').click()
        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Please fill out Username and Password.');
        });
    });
    it('Sign up with Account Registered', () => {
        cy.get('#signin2').click()
        cy.get('h5').should('be.visible')
        cy.get('#sign-username').type('1111')
        cy.get('#sign-password').type('1111')
        cy.get('.btn-primary').contains('Sign up').click()
        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('This user already exist.');
        });
    });
    it('Sign up with New Account', () => {
        cy.get('#signin2').click()
        cy.get('h5').should('be.visible')
        cy.get('#sign-username').type('iipp')
        cy.get('#sign-password').type('iipp')
        cy.get('.btn-primary').contains('Sign up').click()
        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Sign up successful.');
        });
    });
})