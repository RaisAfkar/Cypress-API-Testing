/// <reference types="cypress" />

describe('HTTP METHOD POST', () => {
    it('Succesfully create new user', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                name: "Rais",
                job: "Quality Assurance Manual"
            }
        })
        .its('status')
        .should('equal', 200)
    });
})