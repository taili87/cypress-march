describe('Suite Fixture DDT', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })


    })
    it('Worl with Fixture for Data Driven Testing', function () {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[id=user-name]').type(this.data.username)
        cy.get('[id=password]').type(this.data.password)
        cy.get('#login-button').click()
        cy.title().should('eq', 'Swag Labs')
    })
})