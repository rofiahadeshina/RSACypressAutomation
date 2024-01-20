import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"
import cartPage from "../pageObjects/cartPage"

describe('Cypress framework', ()=>
{
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then((data)=>
        {
            globalThis.data = data
        })
      })

    it('should handle Cypress hooks',()=>
    {
        

        const homePage = new HomePage()
        const product = new ProductPage()
        const cartpage = new cartPage()


        

        cy.visit(Cypress.env('url')+"angularpractice/")

        homePage.getEditBox().type(globalThis.data.name)

        homePage.getGender().select(globalThis.data.gender)

        homePage.getTwoWayDataBinding().should('have.value',globalThis.data.name)

        homePage.getEditBox().should('have.attr', 'minlength','2')

        homePage.getEntrepreneur().should('be.disabled')
        // cy.pause()

        homePage.getShopTab().click()

        //custom cypress command selectProduct check support/command.js
        // cy.selectProduct('Blackberry')

        // cy.selectProduct('Nokia Edge')
        

        globalThis.data.productName.forEach((product) => cy.selectProduct(product))

        product.checkOutButton().click()

        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>
            {
                const price = parseInt($el.text().split(' ')[1].trim())
                sum = sum + price
                cy.log(sum)
            })
        cy.get('.text-right h3 strong').then((totalPrice)=>{
            // parseInt(totalPrice.)
            const cumPrice = parseInt(totalPrice.text().split(' ')[1].trim())
            expect(sum).to.equal(cumPrice)
        })
        
        
        cartpage.clickCheckout().click()
        cy.get('#country').type('uni')
        // cy.config('defadefaultCommandTimeout', 8000)
        // cy.wait(10000) - deprecated: overide defaultCommandTimeout: 4000 set to 8000 instead can also be placed in spec as above
        cartpage.getCountryList().each(($el, index, $list) => {
            if($el.text() === 'United Kingdom'){
              cy.wrap($el).click()
            }
          })
        
        cy.get('#checkbox2').click({force: true})
        cy.get("input[type='submit']").click()
        // cy.get('.alert').should('include', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then((element)=>
        {
            const actualText = element.text()
            expect(actualText.includes('Success! Thank you!')).to.be.true
        })
    })
})