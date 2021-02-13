import { BasicUser } from "../../support/data/basicTestData"
import { GIVEN, AND, WHEN, THEN } from "../../stepsLib/solarCheckSteps"

describe('Data driven dynamic tests for different solar check combinations', () => {

    const jsonArrayData = require('./../../fixtures/positiveFlowsSolarCheckData.json')

    jsonArrayData.forEach((jsonData) => {

        let user = new BasicUser(jsonData)

        it(`should not have any issues with a user like ${user.generateTestDescription()}`, () => {
            GIVEN.iWantToKnowIfICanSaveOnMyEnergyBill(user)
            AND.myRoofTypeIs(user.roofType)
            AND.myRoofHasWindows(user.roofWindows)
            AND.theAmountOfPeopleInMyHouseIs(user.peopleCount)
            AND.myTimeOfPowerUsage(user.powerConsumptionType)
            AND.theHouseIsMyPropery(user.isOwner)
            WHEN.iGoThroughTheSolarChecker()
            AND.iSubmitMyPostalCode()
            AND.iSeeHowMuchICanEconomise()
            THEN.iSeeHowMuchICanEconomise()
        })
    })
})