describe('Task item',()=>{
    beforeEach(()=>{
        const newTask="Save and buy a house"
        cy.visit("/")
        cy.get('.input').type(newTask).type('{enter}')
    })

    it('should be active upon created',()=>{
        cy.get('.task__box .task__check').should('have.length',0)
    })
    // it('should be completed upon clicked',())
})