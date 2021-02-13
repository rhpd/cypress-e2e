import { AND, GIVEN, THEN, WHEN } from "../../stepsLib/solarCheckNegativeSteps"
import { BasicUser } from "../../support/data/basicTestData"

describe('As a Person with an owned property I want to know if I can economise with solar panels', () => {

    const users = require('./../../fixtures/negativeFlowsSolarCheckData.json')

    users.forEach((testUser) => {

        let user = new BasicUser(testUser)

        it(`should have issues when trying to register ${testUser.description}`, () => {
            cy.log(JSON.stringify(user))
            GIVEN.iWantToKnowIfICanSaveOnMyEnergyBill(user)
            AND.myRoofTypeIs(user.roofType)
            AND.myRoofHasWindows(user.roofWindows)
            AND.theAmountOfPeopleInMyHouseIs(user.peopleCount)
            AND.myTimeOfPowerUsage(user.powerConsumptionType)
            AND.theHouseIsMyPropery(user.isOwner)
            WHEN.iGoThroughTheSolarChecker()
            THEN.iCannotSubmitMyPostalCode()
        })
    })
})