class Login{

    eleUsername = "input[placeholder='Username']";
    elePassword = "input[placeholder='Password']";
     btnSubmit = "button[type='submit']";
     txtHeader = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";


    setusername(username)
    {
        cy.get(this.eleUsername).type(username)
        
    }

    setpassword(password)
    {
        cy.get(this.elePassword).type(password)
              
    }
    ClickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }

    VerifyLogin()
    {
        cy.get(this.txtHeader).should('have.text' , 'Dashboard')
    }

}

export default Login;