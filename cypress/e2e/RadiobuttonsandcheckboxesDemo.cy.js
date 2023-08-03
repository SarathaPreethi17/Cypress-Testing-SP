describe('Check UI Elements' , () => {

it('Checking Radio buttons ' , () => {

  cy.visit("https://itera-qa.azurewebsites.net/home/automation")

  //visibility of radio buttons
  cy.get('input#female').should('be.visible')
  cy.get('input#male').should('be.visible')

  //selecting the radio button
  cy.get('input#female').check().should('be.checked')
  cy.get('input#male').should('not.be.checked')


  cy.get('input#male').check().should('be.checked')
  cy.get('input#female').should('not.be.checked')
})
it ('Checking Check boxes', () => {

cy.visit('https://itera-qa.azurewebsites.net/home/automation')
//visitbility of the check boxes

cy.get('input#monday').should('be.visible')

//selecting single check box.
cy.get('input#monday').check().should('be.checked')

//unselecting the check box
cy.get('input#monday').uncheck().should('not.be.checked')

//selecting all the check boxes

cy.get("input.form-check-input[type= 'checkbox']").check().should('be.checked')
cy.get("input.form-check-input[type= 'checkbox']").uncheck().should('not.be.checked')

//selecting first checkbox
cy.get("input.form-check-input[type= 'checkbox']").first().check().should('be.checked')
cy.get("input.form-check-input[type= 'checkbox']").last().check().should('be.checked')






















})



})