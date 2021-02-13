import { ButtonsPage } from './abstractButtonsPage'
export class PropertyOwnerQuestionPage extends ButtonsPage{
    private _yesAnswerButtonIndex = 0
    private _noAnswerButtonIndex = 1

    constructor() {
        super('[data-testid="qc_4"]', 2)
    }

    public yesAnswerButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._yesAnswerButtonIndex)
    }

    public noAnswerButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._noAnswerButtonIndex)
    }
}