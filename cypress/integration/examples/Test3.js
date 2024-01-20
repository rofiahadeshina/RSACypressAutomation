/// <reference types="Cypress"/>

describe('My Third Test Suite', () => {
    it('My Third test case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      cy.get('input[type=checkbox]').check(['option2','option3']).should('be.checked')

      //static dropdown
      cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
      
      //Dynamic dropdown
      cy.get('#autocomplete').type('ind')

      cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if($el.text() === 'India'){
          cy.wrap($el).click()
        }
        
      })

      cy.get('#autocomplete').should('have.value','India')

      //hide and show

      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      cy.get('input[type=radio]').check(['radio1']).should('be.checked','radio1')
      cy.get('input[value=radio2]').check()
    })
  })