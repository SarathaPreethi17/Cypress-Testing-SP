describe('MySuite', () => {
    it('Capture Screenshots and Videos' , () => {

        cy.visit("https://demo.opencart.com/")
        cy.screenshot("Homepage")
        cy.wait(5000)
        cy.get("img[title='Your Store']").screenshot('Logo')



    })
})