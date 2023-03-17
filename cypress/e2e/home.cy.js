/// <reference types="cypress"  />

describe('home', () => {
    const url = 'http://localhost:8080'

    it('verificar se página está no ar', () => {

        cy.visit(url)

        cy.title().should('eq','Gerencie suas tarefas com Mark L')
    })
})