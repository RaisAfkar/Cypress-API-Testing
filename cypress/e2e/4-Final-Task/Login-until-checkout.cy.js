/// <reference types="cypress" />

describe('Testing 1', () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com/');
    });
    it('Succesfully login with profile registered ', () => {
        cy.get('#login2').click();
        cy.get('h5').contains('Log in');
        cy.get('#loginusername').type('wkwk');
        cy.get('#loginpassword').type('wkwk');
        cy.get('.btn-primary').contains('Log in').click();
    });
    it('Succesfully add Product until checkout', () => {
        cy.get('.hrefch').contains('Nexus 6').click()
        cy.get('h2').contains('Nexus 6')
        cy.get('.btn-success').contains('Add to cart').click()
        cy.get('.nav-link').contains('Cart').click()
        cy.get('h2').should('be.visible');
        cy.get('.btn-success').contains('Place Order').click()
        cy.get('h5').contains('Place order');
        cy.get('#name').type('Data test 1');
        cy.get('#country').type('Uganda Country');
        cy.get('#city').type('Uganda City');
        cy.get('#card').type('123456789');
        cy.get('#month').type('January');
        cy.get('#year').type('2025');
        cy.get('.btn-primary').contains('Purchase').click();
        cy.get('h2').should('be.visible');
        cy.get('.confirm').contains('OK').click();
    });
})