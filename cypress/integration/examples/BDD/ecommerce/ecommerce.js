import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";;
import HomePage from "../../../pageObjects/HomePage"
import ProductPage from "../../../pageObjects/ProductPage"
import cartPage from "../../../pageObjects/cartPage"


const homePage = new HomePage()
const product = new ProductPage()
const cartpage = new cartPage()
let name 


Given('I open ecommerce page', ()=>
{
    cy.visit(Cypress.env('url')+"angularpractice/")
})

//When I add items to cart

When('I add items to cart', ()=>
{
    homePage.getShopTab().click()

    globalThis.data.productName.forEach((product) => cy.selectProduct(product))

    product.checkOutButton().click()
})

//And validate the total price of items in cart

When('validate the total price of items in cart', ()=>
{
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
})

//Then select the country, submit and verify success message
Then('select the country, submit and verify success message', ()=>
{
    cartpage.clickCheckout().click()
    cy.get('#country').type('uni')
    
    cartpage.getCountryList().each(($el, index, $list) => {
        if($el.text() === 'United Kingdom'){
          cy.wrap($el).click()
        }
      })
    
    cy.get('#checkbox2').click({force: true})
    cy.get("input[type='submit']").click()

    cy.get('.alert').then((element)=>
    {
        const actualText = element.text()
        expect(actualText.includes('Success! Thank you!')).to.be.true
    })
})


//When I fill the form details
When('I fill the form details', (dataTable)=>
{
    //when data is from fixtures:
    // homePage.getEditBox().type(globalThis.data.name)
    // homePage.getGender().select(globalThis.data.gender)

    //when data is defined in feature file use dataTable to get data as below
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

// Then Validate the form behaviour
Then('Validate the form behaviour', (dataTable)=>
{
    // homePage.getTwoWayDataBinding().should('have.value',globalThis.data.name)
    // homePage.getTwoWayDataBinding().should('have.value',dataTable.rawTable[1][0])
    homePage.getTwoWayDataBinding().should('have.value',name)

    homePage.getEditBox().should('have.attr', 'minlength','2')

    homePage.getEntrepreneur().should('be.disabled')
})

// And Select the shop page
When('Select the shop page', ()=>
{
    homePage.getShopTab().click()
})