import { ConformsToUserInfo, PeopleCount, PowerUsageTimes, RoofType, WindowsOnRoof } from '../support/data/userTestData'
import { Pages } from '../support/pageFactory'

class UserTestData {
    public userFirstName: string
    public userLastName: string
    public userEmail: string
    public userPhoneNumber: string
    public userAddress: string
    public userPostalCode: string
    public userCity: string
    public userRoofType: RoofType
    public personsUnderSameRoof: PeopleCount
    public userPowerUsageTimes: PowerUsageTimes
    public userIsHouseOnwer: boolean
    public userRoofWindows: WindowsOnRoof
}

export class Steps{
    private static _shared: Steps

    public static Shared() {
        return this._shared || (this._shared = new this())
    }

    private _testData = new UserTestData()

    public iWantToKnowIfICanSaveOnMyEnergyBill(user: ConformsToUserInfo) {
        this._testData.userFirstName = user.firstName
        this._testData.userLastName = user.lastName
        this._testData.userEmail = user.email
        this._testData.userPhoneNumber = user.phone
        this._testData.userAddress = user.streetAndNumber
        this._testData.userPostalCode = user.germanPostalCode
        this._testData.userCity = user.city
    }

    public myRoofTypeIs(roofType: RoofType) {
        this._testData.userRoofType = roofType
    }

    public theAmountOfPeopleInMyHouseIs(count: PeopleCount) {
        this._testData.personsUnderSameRoof = count
    }

    public myTimeOfPowerUsage(times: PowerUsageTimes) {
        this._testData.userPowerUsageTimes = times
    }

    public theHouseIsMyPropery(houseOwner: boolean) {
        this._testData.userIsHouseOnwer = houseOwner
    }

    public myRoofHasWindows(roofWindows: WindowsOnRoof) {
        this._testData.userRoofWindows = roofWindows
    }

    public iGoThroughTheSolarChecker() {
        this.enterUserDataOnRoofChooserPage()
        this.enterUserDataOnRoofWindowChooserPage()
        this.enterUserDataOnPeopleInHouseholdPage()
        this.enterUserDataOnPowerUsagePage()
        this.enterUserDataOnOwnership()
        Pages.Shared().enterPostalCodePage().postalCodeInputTextfield().type(this._testData.userPostalCode.toString())
        Pages.Shared().enterPostalCodePage().submitButton().click()
    }

    public iSeeHowMuchICanEconomise() {
        Pages.Shared().enterPostalCodePage()// TODO: Add assertion
    }

    public iFillInMyPersonalData() {
        Pages.Shared().successPage().nameAndSurnameInputTextfield().type(`${this._testData.userFirstName} ${this._testData.userLastName}`)
        Pages.Shared().successPage().streetAndHouseNumberInputTextfield().type(this._testData.userAddress)
        Pages.Shared().successPage().phoneNumberInputTextfield().type(this._testData.userPhoneNumber)
        Pages.Shared().successPage().emailInputTextfield().type(this._testData.userEmail)
        Pages.Shared().successPage().freeInformationSubmitButton().click()
    }

    public iGetConfirmationMyPersonalDataIsSentCorrectly() {
        Pages.Shared().thankYouForYourInterstPage()// TODO: Add assertion
    }

    private enterUserDataOnOwnership() {
        if (this._testData.userIsHouseOnwer) {
            Pages.Shared().propertyOwnerQuestionPage().yesAnswerButton().click()
        } else {
            Pages.Shared().propertyOwnerQuestionPage().noAnswerButton().click()
        }
    }

    private enterUserDataOnPowerUsagePage() {
        switch (this._testData.userPowerUsageTimes) {
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
        switch (this._testData.userRoofType) {
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
        switch (this._testData.userRoofWindows) {
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
        switch (this._testData.personsUnderSameRoof) {
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



export let Given = Steps.Shared()
export let When = Steps.Shared()
export let Then = Steps.Shared()
export let And = Steps.Shared()