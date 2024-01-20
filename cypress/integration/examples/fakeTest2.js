/// <reference types="Cypress"/>

describe('Mocking HTTP request and response', () => {
    it('should mock Http request', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>{
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra',
            //use the continue method to send the above request to server
            req.continue((res)=>{
                // expect(res.statusCode).to.equal(403)
                
            })
        }).as('mockedRequest')

        cy.get("button[data-target = '#exampleModal']").click()
        cy.wait('@mockedRequest')
        
       
    })
})