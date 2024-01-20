class HomePage {

    getEditBox(){
        return cy.get("input[name='name']:nth-child(2)")
    }

    getTwoWayDataBinding(){
        return cy.get("input[name='name']:nth-child(1)")
    }

    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

//to expose the class to all files
export default HomePage