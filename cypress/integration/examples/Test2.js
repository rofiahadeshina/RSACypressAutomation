/// <reference types="Cypress"/>

describe('My Second Test Suite', () => {
    it('My Second test case', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)

      //another way without using the visible using the parent-child chaining
      cy.get('.products').as('productLocator')

      //iterate through array using each
      cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const vegName = $el.find('h4.product-name').text()
        if(vegName.includes('Cashews'))
        {
          cy.wrap($el).find('button').click()
        }
      })    
      
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
      





    })
  })