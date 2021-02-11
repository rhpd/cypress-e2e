import { Given, When, Then, And, RoofType, PeopleCount, PowerUsageTimes, WindowsOnRoof } from "../../support/steps/stepsLibrary"

const baseUrl = 'https://dynamic-slider-staging.azurewebsites.net/'

const user = {
    firstName: "Josken",
    lastName: "Vermeulen",
    email: "josken.vermeulen@belgium.de",
    phone: "+491234567",
    streetAndNumber: "Lüttischer Straße 30",
    germanPostalCode: 52059,
    city: "Aachen",
    isOwner: true
}

describe('Solarstrom-check tests for gable roofs as owner of the property', () => {
    beforeEach( () => {
        cy.visit(baseUrl)
        cy.intercept('POST', 'https://sigx-stg.azurewebsites.net/send', {
            statusCode: 200
        })
    })

    it('should tell me how much I can economise with: 1-2 people, morning and evening usage', () => {
        Given.iWantToKnowIfICanSaveOnMyEnergyBill(user)
        And.myRoofTypeIs(RoofType.GableRoof)
        And.myRoofHasWindows(WindowsOnRoof.Yes)
        And.theAmountOfPeopleInMyHouseIs(PeopleCount.OneToTwo)
        And.myTimeOfPowerUsage(PowerUsageTimes.MorningAndEvening)
        And.theHouseIsMyPropery(user.isOwner)
        When.iGoThroughTheSolarChecker()
        Then.iSeeHowMuchICanEconomise()
    })

    it('should subscribe correctly after the Solar checker tells me how much I can economise with: 1-2 people, morning and evening usage', () => {
        Given.iWantToKnowIfICanSaveOnMyEnergyBill(user)
        And.myRoofTypeIs(RoofType.GableRoof)
        And.myRoofHasWindows(WindowsOnRoof.Yes)
        And.theAmountOfPeopleInMyHouseIs(PeopleCount.OneToTwo)
        And.myTimeOfPowerUsage(PowerUsageTimes.MorningAndEvening)
        And.theHouseIsMyPropery(user.isOwner)
        When.iGoThroughTheSolarChecker()
        And.iFillInMyPersonalData()
        Then.iGetConfirmationMyPersonalDataIsSentCorrectly()
    })

    it('should tell me how much I can economise with: 4-3 people, morning and evening usage', () => {
        Given.iWantToKnowIfICanSaveOnMyEnergyBill(user)
        And.myRoofTypeIs(RoofType.GableRoof)
        And.myRoofHasWindows(WindowsOnRoof.Yes)
        And.theAmountOfPeopleInMyHouseIs(PeopleCount.ThreeToFour)
        And.myTimeOfPowerUsage(PowerUsageTimes.MorningAndEvening)
        And.theHouseIsMyPropery(user.isOwner)
        When.iGoThroughTheSolarChecker()
        Then.iSeeHowMuchICanEconomise()
    })

    it('should subscribe correctly after the Solar checker tells me how much I can economise with: 3-4 people, morning and evening usage', () => {
        Given.iWantToKnowIfICanSaveOnMyEnergyBill(user)
        And.myRoofTypeIs(RoofType.GableRoof)
        And.myRoofHasWindows(WindowsOnRoof.Yes)
        And.theAmountOfPeopleInMyHouseIs(PeopleCount.ThreeToFour)
        And.myTimeOfPowerUsage(PowerUsageTimes.MorningAndEvening)
        And.theHouseIsMyPropery(user.isOwner)
        When.iGoThroughTheSolarChecker()
        And.iFillInMyPersonalData()
        Then.iGetConfirmationMyPersonalDataIsSentCorrectly()
    })
})