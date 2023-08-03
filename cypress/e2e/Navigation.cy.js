describe("My Test Suite" , () => {

    it('Navigation TEst', () => {

        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', 'Your Store') // homepage
        cy.get(':nth-child(7) > .nav-link').click()
        cy.get('h2').should('have.text', 'Cameras')
        cy.go("back")//camera page
        cy.title().should('eq', 'Your Store')
        cy.go("forward")//home page
        cy.get('h2').should('have.text', 'Cameras')
        cy.go(-1)
        cy.reload()


    })
})