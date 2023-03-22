

describe('my test suite with Cypress', function () {
    it('tc Verify Title of the Page', function () {
        cy.visit('https://demoqa.com/')
        cy.title().should('eq', 'ToolsQA')
    })

    it('Fill the form', function () {
        cy.visit('https://demoqa.com/text-box')
        cy.get("#userName").should('be.visible').should('be.enabled').type("Ablaye Modou Thiam")
        cy.get("#userEmail").should('be.visible').should('be.enabled').type("ablaye@gmail.com")

        cy.get("#currentAddress").type("6615 Jupiter hills cir, Alexandria, Virginia")
        cy.get("#submit").click()
    })

    it("Check radio button and Select", function () {
        cy.visit('https://demoqa.com/Register.html')
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        // Negative 
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')

        // Checked all checkbox in once
        cy.get('input[type=checkbox]').check(['Cricket', 'Hockey', 'Movies'])

        //Drop down menu 
        cy.get('#Skills').select('Android').should('have.value', 'Android')

        // Dropdown without select methods

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Bulgarian').click()
        cy.get('.ui-corner-all').contains('Czech').click()
        cy.get('.ui-corner-all').contains('Estonian').click()

        // Dropdown Select country search
        cy.get('[role=combobox]').click({ force: true })
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')

    })

    it('Work with Alert', function () {
        cy.visit('https://demoqa.com/alerts')
        cy.get('#alertButton').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('You clicked a button')
        })

        cy.get('#confirmButton').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?')
        })


    })

    it('Navigate back or forward', function () {
        cy.visit('https://www.cypress.io/')
        cy.title().should('eq', 'JavaScript End to End Testing Framework | cypress.io') // homePage

        cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(2) > :nth-child(1) > .Link-sc-5cc5in-0').contains('Supp').click()
        cy.title().should('eq', 'Support. | cypress.io') // Support Page

        cy.go('back')
        cy.go('forward')

        cy.go(-1)
        cy.go(1)
        cy.reload()


    })

    it.only('Handling Web Table', function () {
        cy.visit('https://testautomationpractice.blogspot.com/')
        //Check value is presence anywhere in the table 
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium').should('be.visible')

        //check value presence row and columns
        cy.get('table[name=BookTable]> tbody > tr:nth-child(2) > td:nth-child(3)').
            contains('Selenium').should('be.visible')

        // Check value presence base on condition by iterating rows
        //Check the book name Master in Java whose author is Amod

        cy.get('table[name=BookTable]> tbody > tr td:nth-child(2)').each(($e, index, $list) => {
            const text = $e.text()
            if (text.includes('Amod')) {
                cy.get('table[name=BookTable]> tbody > tr td:nth-child(1)').eq(index).then(function (bookname) {
                    const bookName = bookname.text()
                    expect(bookName).to.equal('Master In Java')
                })
            }

        })

    })

})