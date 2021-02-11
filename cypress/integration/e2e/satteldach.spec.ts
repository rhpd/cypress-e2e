import { Given, When, Then, And, RoofType, PeopleCount, PowerUsageTimes } from "../../support/steps/stepsLibrary"

const baseUrl = 'https://dynamic-slider-staging.azurewebsites.net/'

const user = {
    firstName: "Josken",
    lastName: "Vermeulen",
    email: "josken.vermeulen@belgium.de",
    phone: "+491234567",
    streetAndNumber: "Lüttischer Straße 30",
    germanPostalCode: 52059,
    city: "Aachen"
}

describe('Solarstrom-check tests for gable roofs', () => {
    beforeEach( () => {
        cy.visit(baseUrl)
        cy.intercept('POST', 'https://sigx-stg.azurewebsites.net/send', {
            statusCode: 200
        })
    })

    it('should tell me how much I can economise by installing solar panels', () => {
        Given.iWantToKnowIfICanSaveOnMyEnergyBill(user)
        And.myRoofTypeIs(RoofType.GableRoof)
        And.theAmountOfPeopleInMyHouseIs(PeopleCount.OneToTwo)
        And.myTimeOfPowerUsage(PowerUsageTimes.MorningAndEvening)
        And.theHouseIsMyPropery(true)
        When.iGoThroughTheSolarChecker()
        Then.iSeeHowMuchICanEconomise()
    })

    it('should subscribe correctly after going through the Solar Checker', () => {
        Given.iWantToKnowIfICanSaveOnMyEnergyBill(user)
        And.myRoofTypeIs(RoofType.GableRoof)
        And.theAmountOfPeopleInMyHouseIs(PeopleCount.OneToTwo)
        And.myTimeOfPowerUsage(PowerUsageTimes.MorningAndEvening)
        And.theHouseIsMyPropery(true)
        When.iGoThroughTheSolarChecker()
        And.iFillInMyPersonalData()
        Then.iGetConfirmationMyPersonalDataIsSentCorrectly()
    })
})