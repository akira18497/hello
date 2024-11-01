/// <reference types="cypress" />

describe('First test suite', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    })
    it('Find type of locators', () => {
        //put the code of the test

        //by Tag name
        cy.get('input')

        //by ID
        cy.get('#inputEmail')

        //by Class value
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[fullwidth]')

        //by Attribute and value
        cy.get('[placeHolder = "Email"]')

        //by entire Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by two attribute
        cy.get('[placeHolder = "Email"][fullwidth]')

        //by tag, attribute id and class
        cy.get('input[placeHolder = "Email"]#inputEmail.input-full-width')

        //by cypress test ID
        cy.get('[data-cy="imputEmail1"]')
    })

    it.only('Practice get attribute', () => {

         //by Tag name, cannot use to get attribute: class, id
         cy.get('label')

         //by ID
         cy.get('#inputEmail1')
 
         //by Class value
         cy.get('.menu-sidebar')
 
         //by Attribute name
         
 
         //by Attribute and value
         
 
         //by entire Class value
         
 
         //by two attribute
         
 
         //by tag, attribute id and class
         
 
         //by cypress test ID
         

    })
    it('Finding web element', () => {
        //get() - find Element on the page by locator globally
        
        //contains() - find HTML text and by text and locator

        //contains() finds first element has that text, does not care other element with the same text
        cy.contains('Sign in')

        //contains() template: ('html attribute', 'texts')
        cy.contains('[status="warning"]','Sign in')

        //find() - find child elements by locator, cannot be CALL from cy
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')
        cy.contains('nb-card', 'Horizontal form').get('button')

        //cypress chains and DOM
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
    })

    it('Save subject of the command', () => {
        //put the code of the test

        cy.contains('nb-card', 'Using the Grid')

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]')

        //Cannot do thing like this
        /**
         *  const usingGrid = cy.contains('nb-card', 'Using the Grid')
            usingGrid.find('[for="inputEmail1"]').should('contain', 'Email')
            usingGrid.find('[for="inputPassword2"]')
         */

        //Alternative way: alias
        cy.contains('nb-card', 'Using the Grid').as('usingGrid')
        cy.get('@usingGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingGrid').find('[for="inputPassword2"]')

        //Alternative way: then()
        cy.contains('nb-card', 'Using the Grid').then(usingGrid => {
            cy.wrap(usingGrid).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingGrid).find('[for="inputPassword2"]')
        })
    })

})
