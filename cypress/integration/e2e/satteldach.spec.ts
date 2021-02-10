import { Pages } from "../../support/pageFactory"

const baseUrl = 'https://dynamic-slider-staging.azurewebsites.net/'

describe('Solarstrom-check tests for gable roofs', () => {
    it('Does not know yet what it is going to test', () => {
        cy.visit(baseUrl)
        Pages.Shared().roofChooserPage().sattelDachButton().click()
        Pages.Shared().roofTypeWindowQuestionPAge().yesAnswerButton().click()
    })
})