import { PageObject } from './abstractPage'

export class PeopleInHouseholdQuestionPage extends PageObject{

    private buttonBaseSelector = '[data-testid="answer"]'

    private oneToTwoAnswerButtonIndex = 0
    private threeToFourAnswerButtonIndex = 1
    private fiveAndMoreAnswerButtonIndex = 2
    private noIdeaAnswerButtonIndex = 3

    constructor() {
        super('[data-testid="qc_2"]')
        cy.get(this.buttonBaseSelector).should('have.have.length', 4)
    }

    public oneToTwoButton() {
        return cy.get(this.buttonBaseSelector).eq(this.oneToTwoAnswerButtonIndex)
    }
}