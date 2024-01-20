/// <reference types="Cypress"/>

describe('My First Test Suite', () => {
    it('My first test case', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)

      cy.get('.product:visible').should("have.length", 4)

      //another way without using the visible using the parent-child chaining
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').should('have.length',4)

      //adding the second product to cart
      cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

      //iterate through array using each
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const vegName = $el.find('h4.product-name').text()
        if(vegName.includes('Cashews'))
        {
          cy.wrap($el).find('button').click()

        }
      })

      //assert if logo text is correct
      cy.get('.brand').should('have.text', 'GREENKART')

      //print logo in cypress logs
      cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
      })
      
      
    })
  })