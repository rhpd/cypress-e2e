import { PageObject } from './abstractPage'

export class PersonalDetailsPage extends PageObject{
    private _nameAndSurnameInputTextfieldLabelSelector = '[data-testid="formName"]'
    private _streetAndHouseNumberInputTextfieldLabelSelector = '[data-testid="formAddress"]'
    private _phoneNumberInputTextfieldLabelSelector = '[data-testid="formPhone"]'
    private _emailInputTextfieldLabelSelector = '[data-testid="formEmail"]'
    private _freeInformationSubmitButtonSelector = '[data-testid="submit"]'


    constructor() {
        super('[data-testid="qc_7"]')
    }

    public nameAndSurnameInputTextfield() {
        return cy.get(this._nameAndSurnameInputTextfieldLabelSelector).next('[name="name"]')
    }

    public streetAndHouseNumberInputTextfield() {
        return cy.get(this._streetAndHouseNumberInputTextfieldLabelSelector).next('[name="address"]')
    }

    public phoneNumberInputTextfield() {
        return cy.get(this._phoneNumberInputTextfieldLabelSelector).next('[name="phone"]')
    }

    public emailInputTextfield() {
        return cy.get(this._emailInputTextfieldLabelSelector).next('[name="email"]')
    }

    public freeInformationSubmitButton() {
        return cy.get(this._freeInformationSubmitButtonSelector)
    }
}