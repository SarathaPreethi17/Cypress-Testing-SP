describe('Assertions' , ()=>{
    it('Implicit Assertions' , ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrm')

         //cy.url().should('include', 'orangehrmlive.com')
        //.should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       //.should('contain','orangehrm')

       cy.url().should('include', 'orangehrmlive.com')
       .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain','orangehrm')
      cy.title().should('include', 'Orange')
      .and('eq', 'OrangeHRM')
      .and('contain', 'HRM')

      cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible or not in page
      cy.get('.orangehrm-login-branding > img').should('exist')
      .and('exist') // logo exist or not

      //cy.xpath("//a").should('have.length', '5')  //no of links 

      cy.get("input[placeholder='Username']" ).type('Admin')
      cy.get("input[placeholder='Username']").should('have.value', 'Admin')
      
      
    })

    it("Explicit Assertions", () => {

      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']" ).type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()

    let expName = "Paul Collings";

    cy.get(".oxd-userdropdown-tab"). then( (x) =>{
                //BDD style
               let actNAme  = x.text()
               expect(actNAme).to.eq(expName)
                

               //TDD style
               assert.equal(actNAme,expName)
               //assert.notEqual(actNAme,expName)




    })


















    })
})