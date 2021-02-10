import { RoofChooserPage } from './../pages/roofChooserPage'
import { RoofTypeWindowQuestionPage } from './../pages/roofTypeWindowQuestionPage'

export class Pages {
    private static shared: Pages

    public static Shared() {
        return this.shared || (this.shared = new this())
    }

    public roofChooserPage() {
        return new RoofChooserPage()
    }

    public roofTypeWindowQuestionPAge() {
        return new RoofTypeWindowQuestionPage()
    }
}