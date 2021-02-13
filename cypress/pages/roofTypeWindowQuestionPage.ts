import { ButtonsPage } from './abstractButtonsPage'

export class RoofTypeWindowQuestionPage extends ButtonsPage {
    private _yesAnswerButtonIndex = 0
    private _noAnswerButtonIndex = 1
    private _dontKnowAnserButtonIndex = 2

    constructor() {
        super('[data-testid="qc_1"]', 3)
    }

    public yesAnswerButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._yesAnswerButtonIndex)
    }

    public noAnswerButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._noAnswerButtonIndex)
    }

    public dontKnowAnserButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._dontKnowAnserButtonIndex)
    }
}