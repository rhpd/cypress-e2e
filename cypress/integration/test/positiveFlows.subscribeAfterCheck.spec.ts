import { GIVEN, AND, WHEN, THEN } from "../../stepsLib/registrationSteps"
import { RegisteringUser } from "../../support/data/registeringUserTestData"


describe('Register with valid credentials', () => {

    let jsonUserData = require('./../../fixtures/positiveFlowSubscriptionData')

    it(`should have no problems registering when all fields are completed with valid data`, () => {

        let user = new RegisteringUser(jsonUserData)

        GIVEN.iWantToKnowIfICanSaveOnMyEnergyBill(user)
        AND.myRoofTypeIs(user.roofType)
        AND.myRoofHasWindows(user.roofWindows)
        AND.theAmountOfPeopleInMyHouseIs(user.peopleCount)
        AND.myTimeOfPowerUsage(user.powerConsumptionType)
        AND.theHouseIsMyPropery(user.isOwner)
        WHEN.iGoThroughTheSolarChecker()
        AND.iSubmitMyPostalCode()
        AND.iFillInMyPersonalData()
        AND.iWantToSubmitMyPersonalData()
        THEN.iGetConfirmationMyPersonalDataIsSentCorrectly()
    })
})