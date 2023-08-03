describe('MyFirstSuite for Fixture', () => {

    let userdata;
    before( () => {

    cy.fixture('OrangeHRM').then((data) => {
        userdata = data;
    })
})

    it('Fixture Demo test', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()

        cy.get('.oxd-topbar-header-title').should('have.text' ,userdata.expected)


    })

    })