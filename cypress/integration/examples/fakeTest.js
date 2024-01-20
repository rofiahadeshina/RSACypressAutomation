/// <reference types="Cypress"/>

describe('Mocking HTTP request and response', () => {
    it('should mock Http response', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept(
            {
                //requestobject: specify the request you want to keep an eye on for testing(Cypress listens for this call to be made on the browser)
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            //upon hitting this request if reponseobject is provided, Cypress mocks the API response by sending the response below as opposed the original response
            {
                statusCode: 200,
                body: [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "BSG",
                        "aisle": "2302"
                    }
                ]

            }
        ).as('bookRetrievals')

        cy.get("button[data-target = '#exampleModal']").click()
        cy.wait('@bookRetrievals').then(({request, response})=>
        {
           cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})