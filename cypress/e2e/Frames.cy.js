

describe("Handling Frames", () => {

    it.skip(" Approach 1" ,() => {

   cy.visit("https://the-internet.herokuapp.com/iframe")
   cy.wait(3000)

     const iframe = cy.get('#mce_0_ifr')
     .its('0.contentDocument.body').should('be.visible').then(cy.wrap)
     cy.wait(3000)
     iframe.clear().type('Welcome world{ctrl+a}')
     cy.get("button[title='Bold']").click()

    })
})
it("Approach 2", () => {

  cy.visit("https://the-internet.herokuapp.com/iframe")
  cy.getIframe('#mce_0_ifr').clear().type('Welcome world{ctrl+a}')
  cy.wait(3000)
  cy.get("button[title='Bold']").click()




})
