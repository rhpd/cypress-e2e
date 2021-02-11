import { PageObject } from './abstractPage'

export class RoofChooserQuestionPage extends PageObject{

    private buttonBaseSelector = '[data-testid="answer"]'

    private sattelDachAnswerButtonIndex = 0
    private flachDachAnswerButtonIndex = 1
    private pultDachAnswerButtonIndex = 2
    private anderesDachAnswerButtonIndex = 3

    constructor() {
        super('[data-testid="qc_0"]')
        cy.get(this.buttonBaseSelector).should('have.have.length', 4)
    }

    public sattelDachButton() {
        return cy.get(this.buttonBaseSelector).eq(this.sattelDachAnswerButtonIndex)
    }

    public flachDachButton() {
        return cy.get(this.buttonBaseSelector).eq(this.flachDachAnswerButtonIndex)
    }

    public pultDachButton() {
        return cy.get(this.buttonBaseSelector).eq(this.pultDachAnswerButtonIndex)
    }

    public anderesDachButton() {
        return cy.get(this.buttonBaseSelector).eq(this.anderesDachAnswerButtonIndex)
    }
}