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
        let personalDetailsPage = Pages.Shared().personalDetailsPage()
        personalDetailsPage.typeTextIntoTextfield(`${this.testUser.firstName} ${this.testUser.lastName}`, personalDetailsPage.nameAndSurnameInputTextfield())
        personalDetailsPage.typeTextIntoTextfield(this.testUser.streetAndNumber, personalDetailsPage.streetAndHouseNumberInputTextfield())
        personalDetailsPage.typeTextIntoTextfield(this.testUser.phone, personalDetailsPage.phoneNumberInputTextfield())
        personalDetailsPage.typeTextIntoTextfield(this.testUser.email, personalDetailsPage.emailInputTextfield())
    }

    public iWantToSubmitMyPersonalData() {
        Pages.Shared().personalDetailsPage().freeInformationSubmitButton().click()
    }

    public iCannotSubmitMyPersonalData() {
        Pages.Shared().personalDetailsPage().freeInformationSubmitButton().should('be.disabled')
    }

    public iGetConfirmationMyPersonalDataIsSentCorrectly() {
        Pages.Shared().thankYouForYourInterstPage().assertSuccessText()
    }
}

export let GIVEN = RegistrationPositiveSteps.Shared()
export let WHEN = RegistrationPositiveSteps.Shared()
export let THEN = RegistrationPositiveSteps.Shared()
export let AND = RegistrationPositiveSteps.Shared()