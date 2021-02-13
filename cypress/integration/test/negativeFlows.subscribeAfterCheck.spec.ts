import { AND, GIVEN, THEN, WHEN } from "../../stepsLib/registrationSteps"
import { RegisteringUser } from "../../support/data/registeringUserTestData"

describe('Data driven dynamic tests for invalid postal codes', () => {

    const jsonArrayData = require('./../../fixtures/negativeFlowsSubscriptionData.json')

    jsonArrayData.forEach((jsonData) => {

        let user = new RegisteringUser(jsonData)

        it(`should have issues when trying to register ${jsonData.description}`, () => {
            GIVEN.iWantToKnowIfICanSaveOnMyEnergyBill(user)
            AND.myRoofTypeIs(user.roofType)
            AND.myRoofHasWindows(user.roofWindows)
            AND.theAmountOfPeopleInMyHouseIs(user.peopleCount)
            AND.myTimeOfPowerUsage(user.powerConsumptionType)
            AND.theHouseIsMyPropery(user.isOwner)
            WHEN.iGoThroughTheSolarChecker()
            AND.iSubmitMyPostalCode()
            AND.iFillInMyPersonalData()
            THEN.iCannotSubmitMyPersonalData()
        })
    })
})