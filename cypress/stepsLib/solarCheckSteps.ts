import { Pages } from "../support/pageFactory";
import { GenericSteps } from "./genericSteps";

export class SolarCheckPostiveSteps extends GenericSteps {
    private static _shared: SolarCheckPostiveSteps

    public static Shared() {
        return this._shared || (this._shared = new this())
    }

    public iCannotSubmitMyPostalCode() {
        Pages.Shared().enterPostalCodePage().submitButton().should('be.disabled')
    }

    public iSeeHowMuchICanEconomise() {
        Pages.Shared().successPage().assertSuccessfulPostalCodeSubmission()
    }
}

export let GIVEN = SolarCheckPostiveSteps.Shared()
export let WHEN = SolarCheckPostiveSteps.Shared()
export let THEN = SolarCheckPostiveSteps.Shared()
export let AND = SolarCheckPostiveSteps.Shared()