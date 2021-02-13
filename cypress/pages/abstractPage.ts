export abstract class PageObject {
    public pageTrait: string;

    constructor(pageTrait: string) {
        this.pageTrait = pageTrait
        cy.get(this.pageTrait).should('exist')
    }

    public typeTextIntoTextfield(textToType: string, textField: any) {
        let cypressTextField = new CypressTextfield(textField)
        cypressTextField.type(textToType)
    }
}

class CypressTextfield {
    private _selector: any

    constructor(cypresselement: any) {
        this._selector = cypresselement
    }

    public type(text: string) {
        /***********************************************************
            Nasty Workarounds up next:
            - Cypress refuses to type empty strings
                Problem: Cypress throws an error when passing an empty string to ".type(string)"
                Solution: Check for an empty string with an if-condition

            - Check for empty string:
                Problem: Typescript does not have something like "isEmpty: Bool { get }" (Documentation from Swift lang)
                Solution: Using this nasty syntax: !== ''
        ***********************************************************/
        if (text !== '') {
            this._selector.type(text)
        }
    }
}