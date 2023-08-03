///<reference types = "Cypress"/>

describe("Handle Dropdowns" , () => {

it.skip("Dropdown with select", () => {

cy.visit("https://www.zoho.com/commerce/free-demo.html")
//dropdown with select option

cy.get('#zcf_address_country').select('Italy').should('have.value', 'Italy')

})

//Dropdown without select value // boostrap dropdown

it.skip("Dropdown without select - boostrap ", () => {

cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

cy.get('#select2-billing_country-container').click()
cy.get('.select2-search__field').type('Italy').type('{enter}')
cy.get('#select2-billing_country-container').should('have.text', 'Italy')

})

it.skip("Auto suggest dropdown", () => {

cy.visit("https://www.wikipedia.org/")
cy.get('#searchInput').type('Chennai')
cy.get('.suggestion-title').contains('Chennai Super Kings').click()
cy.get('.mw-page-title-main').should('have.text', 'Chennai Super Kings')

}) 
it("Dynamic dropdown", () => {
cy.visit("https://www.google.com/")

cy.get("textarea[name='q']").type('planning')

cy.wait(3000)

cy.get('div.wM6W7d>span').should('have.length', 12)

cy.get('div.wM6W7d>span').each(($el, index , $list) =>{
    if($el.text() == 'planning permission')
    {
        cy.wrap($el).click()

    }
    cy.get("textarea[name='q']").should('have.value', 'planning permission')

})


})

})