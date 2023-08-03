describe("Custom Commands" , () => {
    it('Handling links' , ( ) =>
    {
        cy.visit("https://demo.nopcommerce.com/")

        //Direct approch without custom command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        
        //using custom command
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')

    })
    it("Handling links overwrite existing command", () => {
        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink('APPLE MACBOOK PRO 13-inch')
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')

    })

    it.only("Login custom command", () => {

        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink('Log in')
        cy.LoginApp('gsarathapreethi@gmail.com', 'Password"1234')
        cy.get('.ico-account').should('have.text','My account')

    })
})