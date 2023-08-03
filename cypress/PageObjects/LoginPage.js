class Login{

    setusername(username)
    {
        cy.get("input[placeholder='Username']").type(username)
        
    }

    setpassword(password)
    {
        cy.get("input[placeholder='Password']").type(password)
              
    }
    ClickSubmit()
    {
        cy.get("button[type='submit']").click()
    }

    VerifyLogin()
    {
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text' , 'Dashboard')
    }

}

export default Login;