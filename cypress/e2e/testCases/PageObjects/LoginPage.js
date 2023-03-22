
class LoginPage {
    visit() {
        cy.visit('/login/');

    }

    fillEmail(value) {
        const field = cy.get('[id = Email]')
        field.clear()
        field.type(value)
        return this // return the class
    }

    fillPassword(value) {
        const field = cy.get('[id = Password]')
        field.clear()
        field.type(value)
        return this // return the class
    }

    submitButton() {
        const button = cy.get('[type=submit]')
        button.click()
    }


}

export default LoginPage
