describe('Mouse Hover Effect', ()=>
{
    it('should deal element only visible on mouse hover', ()=>
    {
        cy.visit(Cypress.env('url')+'AutomationPractice/')

        cy.get('.mouse-hover-content').invoke('show')
        // cy.contains('Top').click({force:true})
        cy.contains('Top').click()
        cy.url().should('include','top')

    })

})