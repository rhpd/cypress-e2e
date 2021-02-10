export interface PageObjectProtocol {

}

export abstract  class PageObject {
    private pageTrait: string;

    constructor(pageTrait: string) {
        this.pageTrait = pageTrait
        cy.get(this.pageTrait).should('exist')
    }
}