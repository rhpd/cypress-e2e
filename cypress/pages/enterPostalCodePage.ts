import { PageObject } from './abstractPage'

export class EnterPostalCodePage extends PageObject{

    private _germanPostalcodeInputTextfieldSelector = '[name="zipCode"]'
    private _postalcodeSubmitButtonSelector = '[data-testid="submit"]'

    constructor() {
        super('[data-testid="qc_5"]')
    }

    public postalCodeInputTextfield() {
        return cy.get(this._germanPostalcodeInputTextfieldSelector)
    }

    public submitButton() {
        return cy.get(this._postalcodeSubmitButtonSelector)
    }
}