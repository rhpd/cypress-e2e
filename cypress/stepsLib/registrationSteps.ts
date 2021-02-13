import { ConformsToRegisteringUserInfo, RegisteringUser } from "../support/data/registeringUserTestData";
import { Pages } from "../support/pageFactory";
import { GenericSteps } from "./genericSteps";

export class RegistrationPositiveSteps extends GenericSteps {
    private static _shared: RegistrationPositiveSteps

    public testUser = new RegisteringUser()

    public static Shared() {
        return this._shared || (this._shared = new this())
    }

    public iWantToKnowIfICanSaveOnMyEnergyBill(user: ConformsToRegisteringUserInfo) {
        this.testUser.postalCode = user.postalCode
        this.testUser.firstName = user.firstName
        this.testUser.lastName = user.lastName
        this.testUser.email = user.email
        this.testUser.phone = user.phone
        this.testUser.streetAndNumber = user.streetAndNumber
    }

    public iFillInMyPersonalData() {
        let successPage = Pages.Shared().successPage()
        successPage.typeTextIntoTextfield(`${this.testUser.firstName} ${this.testUser.lastName}`, successPage.nameAndSurnameInputTextfield())
        successPage.typeTextIntoTextfield(this.testUser.streetAndNumber, successPage.streetAndHouseNumberInputTextfield())
        successPage.typeTextIntoTextfield(this.testUser.phone, successPage.phoneNumberInputTextfield())
        successPage.typeTextIntoTextfield(this.testUser.email, successPage.emailInputTextfield())
    }

    public iWantToSubmitMyPersonalData() {
        Pages.Shared().successPage().freeInformationSubmitButton().click()
    }

    public iCannotSubmitMyPersonalData() {
        Pages.Shared().successPage().freeInformationSubmitButton().should('be.disabled')
    }

    public iGetConfirmationMyPersonalDataIsSentCorrectly() {
        Pages.Shared().thankYouForYourInterstPage()// TODO: Add assertion
    }
}

export let GIVEN = RegistrationPositiveSteps.Shared()
export let WHEN = RegistrationPositiveSteps.Shared()
export let THEN = RegistrationPositiveSteps.Shared()
export let AND = RegistrationPositiveSteps.Shared()