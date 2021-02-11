import { PageObject } from './abstractPage'

export class TimeOfPowerUsageQuestionPage extends PageObject{

    private buttonBaseSelector = '[data-testid="answer"]'

    private morningAndEveningAnswerButtonIndex = 0
    private spreadDuringTheDayAnswerButtonIndex = 1
    private somethingElseAnswerButtonIndex = 2

    constructor() {
        super('[data-testid="qc_3"]')
        cy.get(this.buttonBaseSelector).should('have.have.length', 3)
    }

    public morningAndEveningButton() {
        return cy.get(this.buttonBaseSelector).eq(this.morningAndEveningAnswerButtonIndex)
    }
}