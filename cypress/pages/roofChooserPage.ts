import { PageObject } from './abstractPage'

export class RoofChooserPage extends PageObject{

    private buttonBaseSelector = '[data-testid="answer"]'

    private sattelDachButtonIndex = 0
    private flachDachButtonIndex = 1
    private pultDachButtonIndex = 2
    private anderesDachButtonIndex = 3

    constructor() {
        super('[data-testid="qc_0"]')
        cy.get(this.buttonBaseSelector).should('have.have.length', 4)
    }

    public sattelDachButton() {
        return cy.get(this.buttonBaseSelector).eq(this.sattelDachButtonIndex)
    }

    public flachDachButton() {
        return cy.get(this.buttonBaseSelector).eq(this.flachDachButtonIndex)
    }

    public pultDachButton() {
        return cy.get(this.buttonBaseSelector).eq(this.pultDachButtonIndex)
    }

    public anderesDachButton() {
        return cy.get(this.buttonBaseSelector).eq(this.anderesDachButtonIndex)
    }
}