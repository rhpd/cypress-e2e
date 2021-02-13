import { AND, GIVEN, THEN, WHEN } from "../../stepsLib/solarCheckSteps"
import { BasicUser } from "../../support/data/basicTestData"

describe('Data driven dynamic tests for invalid postal codes', () => {

    const jsonArrayData = require('./../../fixtures/negativeFlowsSolarCheckData.json')

    jsonArrayData.forEach((jsonData) => {

        let user = new BasicUser(jsonData)

        it(`should have issues when trying to register ${jsonData.description}`, () => {
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