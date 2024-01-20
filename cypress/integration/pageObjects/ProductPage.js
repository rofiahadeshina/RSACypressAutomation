class ProductPage {
    getProductName(){
        return cy.get("h4.card-title")
    }

    addToCart(){
        return cy.get('button.btn.btn-info')
    }

    checkOutButton(){
        return cy.get('#navbarResponsive ul li a.nav-link')
    }
}

export default ProductPage