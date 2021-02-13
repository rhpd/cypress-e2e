import { PageObject } from './abstractPage'

export class SuccessPage extends PageObject{
    private _successText = 'Prüfung erfolgreich!'

    constructor() {
        super('[data-testid="qc_6"]')
    }

    public assertSuccessfulPostalCodeSubmission() {
        cy.get(this.pageTrait).contains(this._successText)
    }
}