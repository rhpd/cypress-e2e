import { EnterPostalCodePage } from './../pages/enterPostalCodePage'
import { PeopleInHouseholdQuestionPage } from '../pages/peopleInHouseholdQuestionPage'
import { PropertyOwnerQuestionPage } from './../pages/propertyOwnerQuestionPage'
import { RoofChooserQuestionPage } from '../pages/roofTypeChooserQuestionPage'
import { RoofTypeWindowQuestionPage } from './../pages/roofTypeWindowQuestionPage'
import { PersonalDetailsPage } from '../pages/personalDetailsPage'
import { ThankYouForYourInterstPage } from './../pages/thankYouForYourInterstPage'
import { TimeOfPowerUsageQuestionPage } from './../pages/timeOfPowerUsageQuestionPage'
import { SuccessPage } from '../pages/successPage'

export class Pages {
    private static _shared: Pages

    public static Shared() {
        return this._shared || (this._shared = new this())
    }

    public enterPostalCodePage() {
        return new EnterPostalCodePage()
    }

    public peopleInHouseholdQuestionPage() {
        return new PeopleInHouseholdQuestionPage()
    }

    public personalDetailsPage() {
        return new PersonalDetailsPage()
    }

    public propertyOwnerQuestionPage() {
        return new PropertyOwnerQuestionPage()
    }

    public roofChooserQuestionPage() {
        return new RoofChooserQuestionPage()
    }

    public roofTypeWindowQuestionPage() {
        return new RoofTypeWindowQuestionPage()
    }

    public successPage() {
        return new SuccessPage()
    }
    
    public thankYouForYourInterstPage() {
        return new ThankYouForYourInterstPage()
    }

    public timeOfPowerUsageQuestionPage() {
        return new TimeOfPowerUsageQuestionPage()
    }    
}