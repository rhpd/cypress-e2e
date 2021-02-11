import { PageObject } from './abstractPage'

export class SuccessPage extends PageObject{

    private nameAndSurnameInputTextfieldLabelSelector = '[data-testid="formName"]'
    private streetAndHouseNumberInputTextfieldLabelSelector = '[data-testid="formAddress"]'
    private phoneNumberInputTextfieldLabelSelector = '[data-testid="formPhone"]'
    private emailInputTextfieldLabelSelector = '[data-testid="formEmail"]'
    private freeInformationSubmitButtonSelector = '[data-testid="submit"]'


    constructor() {
        super('[data-testid="qc_7"]')
    }

    public nameAndSurnameInputTextfield() {
        return cy.get(this.nameAndSurnameInputTextfieldLabelSelector).next('[name="name"]')
    }

    public streetAndHouseNumberInputTextfield() {
        return cy.get(this.streetAndHouseNumberInputTextfieldLabelSelector).next('[name="address"]')
    }

    public phoneNumberInputTextfield() {
        return cy.get(this.phoneNumberInputTextfieldLabelSelector).next('[name="phone"]')
    }

    public emailInputTextfield() {
        return cy.get(this.emailInputTextfieldLabelSelector).next('[name="email"]')
    }

    public freeInformationSubmitButton() {
        return cy.get(this.freeInformationSubmitButtonSelector)
    }
}