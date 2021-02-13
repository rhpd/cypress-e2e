import { BasicUser } from "../../support/data/basicTestData"
import { GIVEN, AND, WHEN, THEN } from "../../stepsLib/solarCheckPositiveSteps"

describe('As a Person with an owned property I want to know if I can economise with solar panels', () => {

    const users = require('./../../fixtures/positiveFlowsSolarCheckData.json')

    users.forEach((testUser) => {

        let user = new BasicUser(testUser)

        it(`should not have any issues with a user like ${user.generateTestDescription()}`, () => {
            cy.log(JSON.stringify(user))
            GIVEN.iWantToKnowIfICanSaveOnMyEnergyBill(user)
            AND.myRoofTypeIs(user.roofType)
            AND.myRoofHasWindows(user.roofWindows)
            AND.theAmountOfPeopleInMyHouseIs(user.peopleCount)
            AND.myTimeOfPowerUsage(user.powerConsumptionType)
            AND.theHouseIsMyPropery(user.isOwner)
            WHEN.iGoThroughTheSolarChecker()
            AND.iSubmitMyPostalCode()
            THEN.iSeeHowMuchICanEconomise()
        })
    })
})