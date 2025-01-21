/// <reference types="cypress" />

describe('HTTP PUT METHOD', () => {
    it('Succesfully create new user', () => {
        let user = {
            "name": "Rais",
            "job": "Developer"
        }
        cy.request('PUT','https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
        })
    });
})

// describe('HTTP METHOD POST', () => {
//     it('Succesfully create new user', () => {
//         cy.request({
//             method: "PUT",
//             url: "https://reqres.in/api/users/2",
//             body: {
//                 name: "Rais",
//                 job: "Quality Assurance Manual"
//             }
//         })
//         .its('body.name')
//         .should('equal', 'Rais')
//     });
// })