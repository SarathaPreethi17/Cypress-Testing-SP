describe('CssLocators', () =>
{
it ("Csslocators" , () =>
{
    cy.visit("https://www.amazon.co.uk/")
    cy.get("#twotabsearchtextbox").type("tops for girls") //id 
    cy.get("#nav-search-submit-button").click() 
    cy.get(".a-color-state.a-text-bold").contains("tops for girls") //assertion
    cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] span[class='a-size-base-plus a-color-base a-text-normal']").click()

}

)
})