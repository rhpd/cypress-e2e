import { PageObject } from './abstractPage'

export class EnterPostalCodePage extends PageObject{

    private germanPostalcodeInputTextfieldSelector = '[name="zipCode"]'
    private postalcodeSubmitButtonSelector = '[data-testid="submit"]'

    constructor() {
        super('[data-testid="qc_5"]')
    }

    public postalCodeInputTextfield() {
        return cy.get(this.germanPostalcodeInputTextfieldSelector)
    }

    public submitButton() {
        return cy.get(this.postalcodeSubmitButtonSelector)
    }
}