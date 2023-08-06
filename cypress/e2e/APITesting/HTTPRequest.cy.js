describe("HTTP Request", () => {

    it("GET call", () => {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status').should('eq', 200)
    })

    it('Post call', () => {

        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: "TEst post",
                body: "This is post call",
                userid: 1
            }

        })
        .its('status').should('equal', 201)
    })

    it("put call", () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: "TEst post",
                body : "This is post call",
                userid: 1,
                id: 1
            }
      })
      .its('status').should('equal', 200)
    })

    it('Delete call', () => {
           cy.request({
            method: 'Delete',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status').should('equal', 200)



    })
})