/// <reference types="cypress"  />

describe('tasks', () => {

    let testData;

    before(() => {
        cy.fixture('tasks').then(t => {
            testData = t
        })
    })

    context('cadastro', () => {
        it('deve cadastrar uma nova task', () => {

            const taskName = 'primeira task'
    
            cy.deleteTaskbyName(taskName)
            cy.createTask(taskName)
    
            cy.contains('primeira task').should('be.visible')
        })
    
        it('mensagem de erro ao cadastrar task duplicada', () => {
    
            const task = testData.dup
    
            cy.deleteTaskbyName(task.name)
            cy.createTaskByApi(task)
            cy.createTask(task.name)
    
            cy.get('.swal2-html-container').should('be.visible')
        })
    
        it('campo obrigatório', () => {
    
            cy.createTask()
            cy.isRequired('This is a required field')
        })
    })

    context('atualização', () => {
        it('deve concluir uma task', () => {
            const task = {
                name: 'primeira task',
                is_done: false
            }

            cy.deleteTaskbyName(task.name)
            cy.createTaskByApi(task)

            cy.visit('http://localhost:8080')

            cy.contains('p', task.name)
            .parent()
            .find('button[class*=ItemToggle]')
            .click()

            cy.contains('p', task.name)
            .should('have.css', 'text-decoration-line', 'line-through')
        })
    })

    context('exclusão', () => {
        it('deve remover uma task', () => {
            const task = {
                name: 'primeira task',
                is_done: false
            }

            cy.deleteTaskbyName(task.name)
            cy.createTaskByApi(task)

            cy.visit('/')

            cy.contains('p', task.name)
            .parent()
            .find('button[class*=ItemDelete]')
            .click()

            cy.contains('p', task.name)
            .should('not.exist')
        })
    })
})