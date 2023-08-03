describe('My First Test', () => 
{
    it('verify test - positve', () => 
    {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')

    })
    it('verify test - negative', () => 
    {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM343')

    })
  })