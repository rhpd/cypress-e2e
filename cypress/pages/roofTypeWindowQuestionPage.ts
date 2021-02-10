import { PageObject } from './abstractPage'

export class RoofTypeWindowQuestionPage extends PageObject {

    private buttonBaseSelector = '[data-testid="answer"]'

    private yesAnswerButtonIndex = 0
    private noAnswerButtonIndex = 1
    private dontKnowAnserButtonIndex = 2

    constructor() {
        super('[data-testid="qc_1"]')
        cy.get(this.buttonBaseSelector).should('have.have.length', 3)
    }

    public yesAnswerButton() {
        return cy.get(this.buttonBaseSelector).eq(this.yesAnswerButtonIndex)
    }

    public noAnswerButton() {
        return cy.get(this.buttonBaseSelector).eq(this.noAnswerButtonIndex)
    }

    public dontKnowAnserButton() {
        return cy.get(this.buttonBaseSelector).eq(this.dontKnowAnserButtonIndex)
    }
}