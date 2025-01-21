/// <reference types="cypress" />

describe('Testing 1', () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com/');
    });
    it('Log in without input field Username', () => {
        cy.get('#login2').click()
        cy.get('h5').should('be.visible')
        cy.get('#loginpassword').type('wkwk')
        cy.get('.btn-primary').contains('Log in').click()
        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Please fill out Username and Password.');
        });
    });
    it('Log in with wrong password', () => {
        cy.get('#login2').click()
        cy.get('h5').should('be.visible')
        cy.get('#loginusername').type('1111')
        cy.get('#loginpassword').type('11111')
        cy.get('.btn-primary').contains('Log in').click()
        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Wrong password.');
        });
    });
    it('Log in with account unregistered', () => {
        cy.get('#login2').click()
        cy.get('h5').should('be.visible')
        cy.get('#loginusername').type('090000')
        cy.get('#loginpassword').type('090000')
        cy.get('.btn-primary').contains('Log in').click()
        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('User does not exist.');
        });
    });
    it('Log in with account registered', () => {
        cy.get('#login2').click()
        cy.get('h5').should('be.visible')
        cy.get('#loginusername').type('@@test')
        cy.get('#loginpassword').type('@@test')
        cy.get('.btn-primary').contains('Log in').click()
    });
    
})