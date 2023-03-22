
import LoginPage from './PageObjects/LoginPage'
describe('Test suite', function () {
    it('Valid Login Credentials', function () {
        const lp = new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submitButton()


        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
    })
})