import { PageObject } from './abstractPage'

export class ThankYouForYourInterstPage extends PageObject{
    private _successText = 'Vielen Dank für Ihr Interesse'
    private _successTextSubscript = 'Wir setzen uns schnellstmöglich mit Ihnen in Verbindung'

    constructor() {
        super('[data-testid="qc_8"]')
    }

    public assertSuccessText() {
        cy.get(this.pageTrait).contains(this._successText)
        cy.get(this.pageTrait).contains(this._successTextSubscript)
    }
}