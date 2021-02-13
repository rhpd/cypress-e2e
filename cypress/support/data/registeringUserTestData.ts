import { BasicUser, ConformsToBasicUserInfo } from "./basicTestData"

export interface ConformsToRegisteringUserInfo extends ConformsToBasicUserInfo {
    firstName: string
    lastName: string
    email: string
    phone: string
    streetAndNumber: string
}

export class RegisteringUser extends BasicUser implements ConformsToRegisteringUserInfo{
    firstName: string
    lastName: string
    email: string
    phone: string
    streetAndNumber: string

    constructor(jsonObject?) {
        super(jsonObject)
        if (jsonObject != undefined) {
            this.firstName = jsonObject.firstName
            this.lastName = jsonObject.lastName
            this.email = jsonObject.email
            this.phone = jsonObject.phone
            this.streetAndNumber = jsonObject.streetAndNumber
            this.isOwner = jsonObject.isOwner
        }
    }
}