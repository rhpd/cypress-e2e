import { Pages } from "../support/pageFactory";
import { GenericSteps } from "./genericSteps";

export class SolarCheckNegativeSteps extends GenericSteps {
    private static _shared: SolarCheckNegativeSteps

    public static Shared() {
        return this._shared || (this._shared = new this())
    }

    public iCannotSubmitMyPostalCode() {
        Pages.Shared().enterPostalCodePage().submitButton().should('be.disabled')
    }
}

export let GIVEN = SolarCheckNegativeSteps.Shared()
export let WHEN = SolarCheckNegativeSteps.Shared()
export let THEN = SolarCheckNegativeSteps.Shared()
export let AND = SolarCheckNegativeSteps.Shared()