import { PageObject } from './abstractPage'

export class ThankYouForYourInterstPage extends PageObject{

    constructor() {
        cy.intercept('POST', 'https://sigx-stg.azurewebsites.net/send', {
            statusCode: 200
        })
        super('[data-testid="qc_8"]')
    }
}