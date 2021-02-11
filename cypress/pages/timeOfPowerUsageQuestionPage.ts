import { ButtonsPage } from './abstractButtonsPage'

export class TimeOfPowerUsageQuestionPage extends ButtonsPage{

    private _morningAndEveningAnswerButtonIndex = 0
    private _spreadDuringTheDayAnswerButtonIndex = 1
    private _somethingElseAnswerButtonIndex = 2

    constructor() {
        super('[data-testid="qc_3"]', 3)
    }

    public morningAndEveningButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._morningAndEveningAnswerButtonIndex)
    }

    public spreadDuringTheDayButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._spreadDuringTheDayAnswerButtonIndex)
    }

    public somethingElseButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._somethingElseAnswerButtonIndex)
    }
}