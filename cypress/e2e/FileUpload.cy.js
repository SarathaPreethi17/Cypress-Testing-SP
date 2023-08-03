///<reference types = "Cypress"/>

import 'cypress-file-upload'
describe("Various File Uploads", () => {

    it.skip("Single File upload", () => {

     cy.visit("https://the-internet.herokuapp.com/upload")
     cy.get('#file-upload').attachFile('SarathaPreethi_CV.pdf')
     cy.get('#file-submit').click()
     cy.wait(5000)
     cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it.skip("File Upload - Rename" , () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'SarathaPreethi_CV.pdf', fileName:'new.pdf'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it.skip("File Upload - Drag and Drop", () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('SarathaPreethi_CV.pdf', {subjectType: 'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('have.text' , 'SarathaPreethi_CV.pdf')
    })

    it("Upload Multiple files" , ()=> {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(['SarathaPreethi_CV.pdf', '23-24_olp_340114.pdf'])
        cy.get('.demo-wrapper > :nth-child(6)').should('contain.text', 'Files You Selected')


    })


})