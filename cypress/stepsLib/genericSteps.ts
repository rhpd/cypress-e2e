import { BasicUser, ConformsToBasicUserInfo, PeopleCount, PowerUsageTimes, RoofType, WindowsOnRoof } from '../support/data/basicTestData'
import { Pages } from '../support/pageFactory'

export class GenericSteps{
    public testUser = new BasicUser()

    public iWantToKnowIfICanSaveOnMyEnergyBill(user: ConformsToBasicUserInfo) {
        this.testUser.postalCode = user.postalCode
    }

    public myRoofTypeIs(roofType: RoofType) {
        this.testUser.roofType = roofType
    }

    public theAmountOfPeopleInMyHouseIs(count: PeopleCount) {
        this.testUser.peopleCount = count
    }

    public myTimeOfPowerUsage(times: PowerUsageTimes) {
        this.testUser.powerConsumptionType = times
    }

    public theHouseIsMyPropery(houseOwner: boolean) {
        this.testUser.isOwner = houseOwner
    }

    public myRoofHasWindows(roofWindows: WindowsOnRoof) {
        this.testUser.roofWindows = roofWindows
    }

    public iGoThroughTheSolarChecker() {
        this.enterUserDataOnRoofChooserPage()
        this.enterUserDataOnRoofWindowChooserPage()
        this.enterUserDataOnPeopleInHouseholdPage()
        this.enterUserDataOnPowerUsagePage()
        this.enterUserDataOnOwnership()
        let postalCodePage = Pages.Shared().enterPostalCodePage()
        postalCodePage.typeTextIntoTextfield(this.testUser.postalCode, postalCodePage.postalCodeInputTextfield())
    }

    public iSubmitMyPostalCode() {
        Pages.Shared().enterPostalCodePage().submitButton().click()
        
    }

    private enterUserDataOnOwnership() {
        if (this.testUser.isOwner) {
            Pages.Shared().propertyOwnerQuestionPage().yesAnswerButton().click()
        } else {
            Pages.Shared().propertyOwnerQuestionPage().noAnswerButton().click()
        }
    }

    private enterUserDataOnPowerUsagePage() {
        switch (this.testUser.powerConsumptionType) {
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
        switch (this.testUser.roofType) {
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
        switch (this.testUser.roofWindows) {
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
        switch (this.testUser.peopleCount) {
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