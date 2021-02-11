import { PageObject } from './abstractPage'

export class PropertyOwnerQuestionPage extends PageObject{

    private buttonBaseSelector = '[data-testid="answer"]'

    private yesAnswerButtonIndex = 0
    private noAnswerButtonIndex = 1

    constructor() {
        super('[data-testid="qc_4"]')
        cy.get(this.buttonBaseSelector).should('have.have.length', 2)
    }

    public yesAnswerButton() {
        return cy.get(this.buttonBaseSelector).eq(this.yesAnswerButtonIndex)
    }
}