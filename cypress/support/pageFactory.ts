import { EnterPostalCodePage } from './../pages/enterPostalCodePage'
import { PeopleInHouseholdQuestionPage } from '../pages/peopleInHouseholdQuestionPage'
import { PropertyOwnerQuestionPage } from './../pages/propertyOwnerQuestionPage'
import { RoofChooserQuestionPage } from '../pages/roofTypeChooserQuestionPage'
import { RoofTypeWindowQuestionPage } from './../pages/roofTypeWindowQuestionPage'
import { SuccessPage } from './../pages/successPage'
import { ThankYouForYourInterstPage } from './../pages/thankYouForYourInterstPage'
import { TimeOfPowerUsageQuestionPage } from './../pages/timeOfPowerUsageQuestionPage'

export class Pages {
    private static shared: Pages

    public static Shared() {
        return this.shared || (this.shared = new this())
    }

    public enterPostalCodePage() {
        return new EnterPostalCodePage()
    }

    public peopleInHouseholdQuestionPage() {
        return new PeopleInHouseholdQuestionPage()
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