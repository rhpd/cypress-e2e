export abstract class PageObject {
    private _pageTrait: string;

    constructor(pageTrait: string) {
        this._pageTrait = pageTrait
        cy.get(this._pageTrait).should('exist')
    }
}