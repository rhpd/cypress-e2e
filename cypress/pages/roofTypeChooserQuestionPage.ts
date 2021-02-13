import { ButtonsPage } from './abstractButtonsPage'

export class RoofChooserQuestionPage extends ButtonsPage{
    private _sattelDachAnswerButtonIndex = 0
    private _flachDachAnswerButtonIndex = 1
    private _pultDachAnswerButtonIndex = 2
    private _anderesDachAnswerButtonIndex = 3

    constructor() {
        super('[data-testid="qc_0"]', 4)
    }

    public sattelDachButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._sattelDachAnswerButtonIndex)
    }

    public flachDachButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._flachDachAnswerButtonIndex)
    }

    public pultDachButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._pultDachAnswerButtonIndex)
    }

    public anderesDachButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._anderesDachAnswerButtonIndex)
    }
}