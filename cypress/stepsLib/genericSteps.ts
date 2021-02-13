import { BasicUser, ConformsToBasicUserInfo } from '../support/data/basicTestData'
import { PeopleCount, PowerUsageTimes, RoofType, WindowsOnRoof } from '../support/data/userTestData'
import { Pages } from '../support/pageFactory'

/***********************************************************
    Info on Steps Libraries:
    ========================

    Why?
        - To improve reusability of test steps
        - To improve readability of tests
    
    Why not use Cucumber instead?
        - To prevent overhead from adding yet another library
        - To prevent complexity that Cucumber brings to the project
        - To increase the flexibility that Cucumber lacks
    
    Sins against good coding practices:
        - using pronouns in method names (Could have used a different BDD way of describing steps)
        - export the same instance multiple times under different names (GIVEN, AND, WHEN, THEN)
        - long method names (Tried to keep them as short as possible)

***********************************************************/

export class GenericSteps{
    private _testUser = new BasicUser()

    public iWantToKnowIfICanSaveOnMyEnergyBill(user: ConformsToBasicUserInfo) {
        this._testUser.postalCode = user.postalCode
    }

    public myRoofTypeIs(roofType: RoofType) {
        this._testUser.roofType = roofType

    }

    public theAmountOfPeopleInMyHouseIs(count: PeopleCount) {
        this._testUser.peopleCount = count
    }

    public myTimeOfPowerUsage(times: PowerUsageTimes) {
        this._testUser.powerConsumptionType = times
    }

    public theHouseIsMyPropery(houseOwner: boolean) {
        this._testUser.isOwner = houseOwner
    }

    public myRoofHasWindows(roofWindows: WindowsOnRoof) {
        this._testUser.roofWindows = roofWindows
    }

    public iGoThroughTheSolarChecker() {
        this.enterUserDataOnRoofChooserPage()
        this.enterUserDataOnRoofWindowChooserPage()
        this.enterUserDataOnPeopleInHouseholdPage()
        this.enterUserDataOnPowerUsagePage()
        this.enterUserDataOnOwnership()
        /***********************************************************
            Nasty Workarounds up next:
            - Cypress refuses to type empty strings
                Problem: Cypress throws an error when passing an empty string to ".type(string)"
                Solution: Check for an empty string with an if-condition

            - Check for empty string:
                Problem: Typescript does not have something like "isEmpty: Bool { get }" (Documentation from Swift lang)
                Solution: Using this nasty syntax: !== ''
        ***********************************************************/
        if (this._testUser.postalCode !== '') {
            Pages.Shared().enterPostalCodePage().postalCodeInputTextfield().type(this._testUser.postalCode)
        }
    }

    public iSubmitMyPostalCode() {
        Pages.Shared().enterPostalCodePage().submitButton().click()
        
    }

    public iGetConfirmationMyPersonalDataIsSentCorrectly() {
        Pages.Shared().thankYouForYourInterstPage()// TODO: Add assertion
    }

    private enterUserDataOnOwnership() {
        if (this._testUser.isOwner) {
            Pages.Shared().propertyOwnerQuestionPage().yesAnswerButton().click()
        } else {
            Pages.Shared().propertyOwnerQuestionPage().noAnswerButton().click()
        }
    }

    private enterUserDataOnPowerUsagePage() {
        switch (this._testUser.powerConsumptionType) {
            case PowerUsageTimes.MorningAndEvening:
                Pages.Shared().timeOfPowerUsageQuestionPage().morningAndEveningButton().click()
                break;
            case PowerUsageTimes.SpreadDuringTheDay:
                Pages.Shared().timeOfPowerUsageQuestionPage().spreadDuringTheDayButton().click()
                break;
            case PowerUsageTimes.SomethingElse:
                Pages.Shared().timeOfPowerUsageQuestionPage().somethingElseButton().click()
                break;
        }
    }

    private enterUserDataOnRoofChooserPage() {
        switch (this._testUser.roofType) {
            case RoofType.GableRoof:
                Pages.Shared().roofChooserQuestionPage().sattelDachButton().click()
                break;
            case RoofType.FlatRoof:
                Pages.Shared().roofChooserQuestionPage().flachDachButton().click()
                break;
            case RoofType.PentRoof:
                Pages.Shared().roofChooserQuestionPage().pultDachButton().click()
                break;
            case RoofType.OtherRoof:
                Pages.Shared().roofChooserQuestionPage().anderesDachButton().click()
                break;
        }
    }

    private enterUserDataOnRoofWindowChooserPage() {
        switch (this._testUser.roofWindows) {
            case WindowsOnRoof.Yes:
                Pages.Shared().roofTypeWindowQuestionPage().yesAnswerButton().click()
                break;
            case WindowsOnRoof.No:
                Pages.Shared().roofTypeWindowQuestionPage().noAnswerButton().click()
                break;
            case WindowsOnRoof.DontKnow:
                Pages.Shared().roofTypeWindowQuestionPage().dontKnowAnserButton().click()
                break;
        }
    }

    private enterUserDataOnPeopleInHouseholdPage() {
        switch (this._testUser.peopleCount) {
            case PeopleCount.OneToTwo:
                Pages.Shared().peopleInHouseholdQuestionPage().oneToTwoButton().click()
                break;
            case PeopleCount.ThreeToFour:
                Pages.Shared().peopleInHouseholdQuestionPage().threeToFourButton().click()
                break;
            case PeopleCount.FivaAndMore:
                Pages.Shared().peopleInHouseholdQuestionPage().fiveAndMoreButton().click()
                break;
            case PeopleCount.NoIdea:
                Pages.Shared().peopleInHouseholdQuestionPage().noIdeaButton().click()
                break;
        }
    }
}