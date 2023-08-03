///<reference types = "Cypress"/>

describe("Validating Table Row and columns", () => {
it.skip("Verifying Total Rows and columns in table", () => {
    cy.visit("https://tablepress.org/demo/")
    cy.wait(3000)

    cy.get('table[class="tablepress tablepress-id-demo tablepress-responsive dataTable"]>thead>tr>th').should('have.length', '14')

    cy.get('table[class="tablepress tablepress-id-demo tablepress-responsive dataTable"]>tbody>tr').should('have.length', '10')
})

it.skip("Verifying cell data in data", () => {

    cy.visit("https://tablepress.org/demo/")
    cy.get('table[class="tablepress tablepress-id-demo tablepress-responsive dataTable"]>tbody>tr:nth-child(4)>td:nth-child(3)')
    .contains('19803')
})
  
it.skip("Read all the Rows and column data in the first page", () => {
    cy.visit("https://tablepress.org/demo/")
    cy.get('table[class="tablepress tablepress-id-demo tablepress-responsive dataTable"]>tbody>tr')
    .each(($row, index, $rows) => {
        cy.wrap($row).within( () => {
            cy.get("td").each(($col, index, $cols) => {
                    cy.log($col.text())
            })
        })
    })

})
it("Pagination", () => {

    cy.visit("https://tablepress.org/demo/")
    cy.get('#tablepress-demo_info').then((e) =>{

        let mytext = e.text()

    })













})

})