describe('Dealing with Table', ()=>
{
    it('should obtain an entry from a table', ()=>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get("table[name='courses']  tr td:nth-child(2)").each(($el, index, $list)=>
        {
            const text = $el.text()
            // if(text.includes("Python"))
            if(text === 'Master Selenium Automation in simple Python Language'){
                cy.get("table[name='courses']  tr td:nth-child(2)").eq(index).next().then((price)=>{
                   const priceText = price.text()
                   expect(priceText).to.equal('25')
                })
            }

        })
    })
})