/// <reference types="cypress" />

// describe('VALIDASI CONTEN', () => {
//     it('succesfully validate body response', () => {
//         cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur')
//         .its('body.')
//         .should('include', {abilities: "ability"})
//     });
// })

describe('Validate response body containing an array', () => {
    it('should validate the ability property in an array of objects', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur')
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.abilities[0].ability).to.have.property('name', 'overgrow');
            expect(response.body.abilities[0].ability.name).to.equal('overgrow');
        });
    });
  });
