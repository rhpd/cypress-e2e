import { Pages } from '../pageFactory'

interface UserInfoProtocol {
    firstName: string
    lastName: string
    email: string
    phone: string
    streetAndNumber: string
    germanPostalCode: number
    city: string
}

class UserTestData {
    public userFirstName: string
    public userLastName: string
    public userEmail: string
    public userPhoneNumber: string
    public userAddress: string
    public userPostalCode: number
    public userCity: string
    public userRoofType: RoofType
    public personsUnderSameRoof: PeopleCount
    public userPowerUsageTimes: PowerUsageTimes
    public userIsHouseOnwer: boolean
}

export class Steps{
    private static shared: Steps

    public static Shared() {
        return this.shared || (this.shared = new this())
    }

    private testData = new UserTestData()

    public iWantToKnowIfICanSaveOnMyEnergyBill(userInfo: UserInfoProtocol) {
        this.testData.userFirstName = userInfo.firstName
        this.testData.userLastName = userInfo.lastName
        this.testData.userEmail = userInfo.email
        this.testData.userPhoneNumber = userInfo.phone
        this.testData.userAddress = userInfo.streetAndNumber
        this.testData.userPostalCode = userInfo.germanPostalCode
        this.testData.userCity = userInfo.city
    }

    public myRoofTypeIs(roofType: RoofType) {
        this.testData.userRoofType = roofType
    }

    public theAmountOfPeopleInMyHouseIs(count: PeopleCount) {
        this.testData.personsUnderSameRoof = count
    }

    public myTimeOfPowerUsage(times: PowerUsageTimes) {
        this.testData.userPowerUsageTimes = times
    }

    public theHouseIsMyPropery(houseOwner: boolean) {
        this.testData.userIsHouseOnwer = houseOwner
    }

    public iGoThroughTheSolarChecker() {
        Pages.Shared().roofChooserQuestionPage().sattelDachButton().click()
        Pages.Shared().roofTypeWindowQuestionPage().yesAnswerButton().click()
        Pages.Shared().peopleInHouseholdQuestionPage().oneToTwoButton().click()
        Pages.Shared().timeOfPowerUsageQuestionPage().morningAndEveningButton().click()
        Pages.Shared().propertyOwnerQuestionPage().yesAnswerButton().click()
        Pages.Shared().enterPostalCodePage().postalCodeInputTextfield().type(this.testData.userPostalCode.toString())
        Pages.Shared().enterPostalCodePage().submitButton().click()
    }

    public iSeeHowMuchICanEconomise() {
        Pages.Shared().enterPostalCodePage()// TODO: Add assertion
    }

    public iFillInMyPersonalData() {
        Pages.Shared().successPage().nameAndSurnameInputTextfield().type(`${this.testData.userFirstName} ${this.testData.userLastName}`)
        Pages.Shared().successPage().streetAndHouseNumberInputTextfield().type(this.testData.userAddress)
        Pages.Shared().successPage().phoneNumberInputTextfield().type(this.testData.userPhoneNumber)
        Pages.Shared().successPage().emailInputTextfield().type(this.testData.userEmail)
        Pages.Shared().successPage().freeInformationSubmitButton().click()
    }

    public iGetConfirmationMyPersonalDataIsSentCorrectly() {
        Pages.Shared().thankYouForYourInterstPage()// TODO: Add assertion
    }
}

export enum PowerUsageTimes {
    MorningAndEvening,
    SpreadDuringTheDay,
    SomethingElse,
}

export enum PeopleCount {
    OneToTwo,
    ThreeToFour,
    FivaAndMore,
    NoIdea,
}

export enum RoofType {
    GableRoof,
    FlatRoof,
    PentRoof,
    OtherRoof,
}

export let Given = Steps.Shared()
export let When = Steps.Shared()
export let Then = Steps.Shared()
export let And = Steps.Shared()