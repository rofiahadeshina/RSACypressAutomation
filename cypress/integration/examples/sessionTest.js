/// <reference types="Cypress"/>
const neatCSV = require('neat-csv')


let productName

describe('Auto Login with session token', () => {
    it('should automatically login through local storage token ', () => {

        cy.LoginAPI().then(()=>{
            cy.visit('https://rahulshettyacademy.com/client',
            {
                onBeforeLoad: (window)=>{
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })

        })

        cy.get('.card-body b').eq(1).then((ele)=>
        {
           productName =  ele.text()
        })

        cy.get('.card-body .w-10').eq(1).click();

        cy.get("[routerlink*='cart']").click();

        cy.contains('Checkout').click();

        cy.get("input[placeholder*='Country']").type('unit')
        
        
        cy.get('.ta-results button').each(($el, index, $list) => {
            if($el.text() == ' United Kingdom')
            {
              cy.wrap($el).click()
            }
            
          })

          cy.get('a.btnn.action__submit').click()
          cy.wait(2000)

          cy.get('.order-summary button').eq(0).click()

          cy.readFile(Cypress.config('fileServerFolder')+'/cypress/downloads/order-invoice_rofiahadeshina.csv').then(async (text)=>
          {
            const csv = await neatCSV(text)
            console.log(csv)
            const productNameCSV = csv[0]["Product Name"]
            expect(productName).to.eq(productNameCSV)

          })

          

          


        
    })


})