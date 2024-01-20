beforeEach(() => {
    // root-level hook
    // runs once before all tests
    cy.fixture('example').then((data)=>
    {
        globalThis.data = data
    })
  })