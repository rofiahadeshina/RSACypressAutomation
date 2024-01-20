/// <reference types = "Cypress"/>
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe'
describe('Handle Frames', ()=>
{
    it('should deal with frames', ()=>
    {
        cy.visit(Cypress.env('url')+"AutomationPractice/")

        cy.frameLoaded('#courses-iframe')
        cy.wait(40000)
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(10000)
        cy.iframe().find("h1.pricing-title").should('have.length',2)


        // const iframe = cy.get('#courses-iframe').its('0.contentDocument.body').should('be.visible').then(cy.wrap)

        // iframe.find("a[href*='mentorship']").eq(0).click().should('be.visible')
        // iframe.find("h1.pricing-title")

    })

})