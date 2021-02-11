import { Pages } from "../../support/pageFactory"

const baseUrl = 'https://dynamic-slider-staging.azurewebsites.net/'

const user = {
    name: "Josken",
    surname: "Vermeulen",
    email: "josken.vermeulen@belgium.de",
    phone: "++491234567",
    streetAndNumber: "Lüttischer Straße 30",
    germanPostalCode: 52059,
    city: "Aachen"
}

describe('Solarstrom-check tests for gable roofs', () => {
    it('Does not know yet what it is going to test', () => {
        cy.visit(baseUrl)
        Pages.Shared().roofChooserQuestionPage().sattelDachButton().click()
        Pages.Shared().roofTypeWindowQuestionPage().yesAnswerButton().click()
        Pages.Shared().peopleInHouseholdQuestionPage().oneToTwoButton().click()
        Pages.Shared().timeOfPowerUsageQuestionPage().morningAndEveningButton().click()
        Pages.Shared().propertyOwnerQuestionPage().yesAnswerButton().click()
        Pages.Shared().enterPostalCodePage().postalCodeInputTextfield().type(user.germanPostalCode.toString())
        Pages.Shared().enterPostalCodePage().submitButton().click()
        Pages.Shared().successPage().nameAndSurnameInputTextfield().type(`${user.name} ${user.surname}`)
        Pages.Shared().successPage().streetAndHouseNumberInputTextfield().type(user.streetAndNumber)
        Pages.Shared().successPage().phoneNumberInputTextfield().type(user.phone)
        Pages.Shared().successPage().emailInputTextfield().type(user.email)
        Pages.Shared().successPage().freeInformationSubmitButton().click()
        Pages.Shared().thankYouForYourInterstPage()
    })
})