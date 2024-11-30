/// <reference types="cypress" />

// validasi dari status

// describe('HTTP METHOD POST', () => {
//     it('Succesfully create user', () => {
//         var user = {
//             "nama": "Rais",
//             "job": "Quality Assurance"
//         }
//         cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
//             expect(response.status).equal(201)
//         })
//     });
// })

// validasi dari nama

// describe('HTTP METHOD POST', () => {
//     it('Succesfully create user', () => {
//         var user = {
//             "nama": "Rais",
//             "job": "Quality Assurance"
//         }
//         cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
//             expect(response.body.nama).equal('Rais')
//         })
//     });
// })

// validasi dari job

// describe('HTTP METHOD POST', () => {
//     it('Succesfully create user', () => {
//         var user = {
//             "nama": "Rais",
//             "job": "Quality Assurance"
//         }
//         cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
//             expect(response.body.job).equal('Quality Assurance')
//         })
//     });
// })

describe('HTTP METHOD POST', () => {
    it('Succesfully create new user', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                name: "Rais",
                job: "Quality Assurance"
            }
        })
        .its('body.name')
        .should('equal', "Rais")
    });
})