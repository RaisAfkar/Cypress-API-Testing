/// <reference types="cypress" />

// MATERI
// describe('validate header', () => {
//     it('succesfully validate content type', () => {
//         cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
//         .its('headers')
//         .its('content-type')
//         .should('include','application/json; charset=utf-8')
//     });
// })

// Tugas
describe('validate header', () => {
    it('succesfully validate content type', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
        .its('status')
        .should('equal', 200);
    });
})
