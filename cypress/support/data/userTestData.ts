export interface ConformsToUserInfo {
    firstName: string
    lastName: string
    email: string
    phone: string
    streetAndNumber: string
    germanPostalCode: number
    city: string
    isOwner: boolean
    hasRoofType: RoofType
    personsLivingIn: PeopleCount
    hasWindowOnRoof: WindowsOnRoof
    powerConsumptionType: PowerUsageTimes
}

export class User implements ConformsToUserInfo {
    firstName: string
    lastName: string
    email: string
    phone: string
    streetAndNumber: string
    germanPostalCode: number
    city: string
    isOwner: boolean
    hasRoofType: RoofType
    personsLivingIn: PeopleCount
    hasWindowOnRoof: WindowsOnRoof
    powerConsumptionType: PowerUsageTimes

    constructor(jsonObject) {
        this.firstName = jsonObject.firstName
        this.lastName = jsonObject.lastName
        this.email = jsonObject.email
        this.phone = jsonObject.phone
        this.streetAndNumber = jsonObject.streetAndNumber
        this.germanPostalCode = jsonObject.germanPostalCode
        this.city = jsonObject.city
        this.isOwner = jsonObject.isOwner
    }
    
}

export enum WindowsOnRoof {
    Yes,
    No,
    DontKnow,
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