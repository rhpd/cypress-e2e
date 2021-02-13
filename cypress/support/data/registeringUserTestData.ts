import { BasicUser } from "./basicTestData"

export interface ConformsToUserInfo {
    firstName: string
    lastName: string
    email: string
    phone: string
    streetAndNumber: string
    city: string
}

export class User extends BasicUser {
    firstName: string
    lastName: string
    email: string
    phone: string
    streetAndNumber: string
    city: string

    constructor(jsonObject) {
        super(jsonObject)
        this.firstName = jsonObject.firstName
        this.lastName = jsonObject.lastName
        this.email = jsonObject.email
        this.phone = jsonObject.phone
        this.streetAndNumber = jsonObject.streetAndNumber
        this.city = jsonObject.city
        this.isOwner = jsonObject.isOwner
    }
}