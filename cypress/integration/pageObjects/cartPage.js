class cartPage{
    clickCheckout(){
        return cy.get('button.btn.btn-success')
    }

    getCountryList(){
        return cy.get('.suggestions ul li a')
    }
}

export default cartPage