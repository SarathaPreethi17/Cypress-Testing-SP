describe("Hooks and tags", () => {

    before(() => {
        cy.log('****** Launch app ******')

    })

    after(() => {
        cy.log('*******Close App ****')
    })

    beforeEach(() => {
        cy.log('**********Login*********')
        
    })
    afterEach(() => {
        cy.log('*******Logout******')
    })
    it("Search", () => {
          cy.log('*******Searching*********')

    })

    it("Advanced Search" , () => {
        cy.log('**********Adv searching*********')

    })

    it("Listing Products", () => {
        cy.log('*************Listing products***********')


    })
})