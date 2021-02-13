import { PeopleCount, PowerUsageTimes, RoofType, User, WindowsOnRoof } from "../../support/data/userTestData"
import { Given, And, When, Then } from "../../support/steps/stepsLibrary"

describe('As a Person with an owned property I want to know if I can economise with solar panels', () => {

    let users: User[]

    // TODO: Create Users

    users.forEach((testUser) => {
        it('tests this user', () => {
            Given.iWantToKnowIfICanSaveOnMyEnergyBill(testUser)
            And.myRoofTypeIs(RoofType.GableRoof)
            And.myRoofHasWindows(WindowsOnRoof.Yes)
            And.theAmountOfPeopleInMyHouseIs(PeopleCount.OneToTwo)
            And.myTimeOfPowerUsage(PowerUsageTimes.MorningAndEvening)
            And.theHouseIsMyPropery(testUser.isOwner)
            When.iGoThroughTheSolarChecker()
            And.iFillInMyPersonalData()
            Then.iGetConfirmationMyPersonalDataIsSentCorrectly()
        })
    })
})