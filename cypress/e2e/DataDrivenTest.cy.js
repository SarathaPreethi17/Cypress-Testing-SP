describe('My TEst Suite', () => {

    it('Data Driven Test' , ( ) => {

        cy.fixture('OrangeHRM').then((data) => 
        { // iterate 3 sets of data / foreach loop
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()                
                
                if(userdata.username == 'Admin' && userdata.password ==' admin123')
                {
                    cy.wait(4000)
                    cy.get('.oxd-topbar-header-title').should('have.text' ,userdata.expected);
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                }
               else
               {
                cy.get('.oxd-alert-content > .oxd-text').should('have.text', userdata.expected)

               }
            });
        })
    })


})