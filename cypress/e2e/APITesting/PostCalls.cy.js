describe("Post calls" , () =>{
    it("Post call Approach 1 Hardcoded Json body", () => {

        const requestbody = {
            tourist_name : "John",
            tourist_email : "john657657@gmail.com",
            tourist_location: "Italy"
        }

        cy.request(
            {
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestbody
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("John")
            expect(response.body.tourist_email).to.eq('john657657@gmail.com')
            expect(response.body.tourist_location).to.eq('Italy')

        })
       
    })
    it("Post call Approach 2  Dynamically generated Json body", () => {

        const requestbody = {
            tourist_name : Math.random().toString(5).substring(2),
            tourist_email : Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location: "Italy"
        }

        cy.request(
            {
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestbody
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestbody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestbody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestbody.tourist_location)

        })
       
    })
    
    it.only("Post call Approach 3 using fixture", () => {

        cy.fixture('tourist').then((data) => {

            const requestbody = data;
            cy.request(
                {
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestbody
            })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestbody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestbody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestbody.tourist_location)

                //assert property name and value in body
                expect(response.body).has.property('tourist_email', requestbody.tourist_email)
                expect(response.body).to.have.property('tourist_email', requestbody.tourist_email)
    
            })
           

        })

        
    })
})
