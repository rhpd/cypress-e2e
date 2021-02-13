export interface ConformsToBasicUserInfo {
    postalCode: string
    isOwner: boolean
    roofType: RoofType
    peopleCount: PeopleCount
    roofWindows: WindowsOnRoof
    powerConsumptionType: PowerUsageTimes
}

export class BasicUser implements ConformsToBasicUserInfo {
    postalCode: string
    isOwner: boolean
    roofType: RoofType
    peopleCount: PeopleCount
    roofWindows: WindowsOnRoof
    powerConsumptionType: PowerUsageTimes

    constructor(jsonObject?) {
        if (jsonObject != undefined) {
            this.postalCode = jsonObject.postalCode
            this.isOwner = jsonObject.isOwner
            this.roofType = jsonObject.roofType
            this.peopleCount = jsonObject.peopleCount
            this.roofWindows = jsonObject.roofWindows
            this.powerConsumptionType = jsonObject.powerConsumptionType
        }
    }

    public generateTestDescription() {
        let returnString = `user with roof type: ${RoofType[this.roofType]}, `
        returnString += `roof windows: ${WindowsOnRoof[this.roofWindows]}, `
        returnString += `people: ${PeopleCount[this.peopleCount]}, `
        returnString += `power usage: ${PowerUsageTimes[this.powerConsumptionType]} and`
        return (this.isOwner ? `${returnString} who owns the property` : `${returnString} who doesn't own the property`);
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