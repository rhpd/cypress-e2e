import { PageObject } from "./abstractPage";

export class ButtonsPage extends PageObject {
    private _buttonBaseSelector = '[data-testid="answer"]'

    constructor(pageTrait: string, totalButtonCount: number) {
        super(pageTrait)
        cy.get(this._buttonBaseSelector).should('have.have.length', totalButtonCount)
    }

    public buttonBaseSelector() {
        return this._buttonBaseSelector
    }
}