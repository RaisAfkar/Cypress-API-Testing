/// <reference types="cypress" />

// Cara satu

describe('Login to a website using basic authentication', () => {

// CARA SATU
    it('should login in using basic authentication', () => {
        cy.loginBasicAuth()
        cy.get('h3').should('have.text', 'Basic Auth') 
    });
    
// CARA DUA
//     // it('should login in using basic authentication', () => {
//     //     cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth/')
//     //     cy.get('h3').should('have.text', 'Basic Auth')
//     // });

// LOGIN WITH AUTHORIZATION
// it('should login in using basic authentication', () => {
    //     cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth'), {
    //         header: {
    //             authorization: "Basic YWRtaW46YWRtaW4="
    //         }
    //     }
    //     cy.get('h3').should('have.text', 'Basic Auth') 
    // });
})

    