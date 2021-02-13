import { ButtonsPage } from './abstractButtonsPage'
export class PeopleInHouseholdQuestionPage extends ButtonsPage{
    private _oneToTwoAnswerButtonIndex = 0
    private _threeToFourAnswerButtonIndex = 1
    private _fiveAndMoreAnswerButtonIndex = 2
    private _noIdeaAnswerButtonIndex = 3

    constructor() {
        super('[data-testid="qc_2"]', 4)
    }

    public oneToTwoButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._oneToTwoAnswerButtonIndex)
    }

    public threeToFourButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._threeToFourAnswerButtonIndex)
    }

    public fiveAndMoreButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._fiveAndMoreAnswerButtonIndex)
    }

    public noIdeaButton() {
        return cy.get(this.buttonBaseSelector()).eq(this._noIdeaAnswerButtonIndex)
    }
}