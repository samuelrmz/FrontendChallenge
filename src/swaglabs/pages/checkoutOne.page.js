//######################################################################### imports
import { Selector, t } from 'testcafe';
//*************************************************************************** class
class CheckoutOnePage {
    //================================================================= constructor
    constructor() {
        this.firstName = Selector("#first-name");
        this.lastName = Selector("#last-name");
        this.postalCode = Selector("#postal-code");
        this.continueButton = Selector(".cart_button");
        this.errorMsg = Selector("[data-test='error']");
    }
    //===================================================================== methods
    async checkoutFlow(firstName, lastName, zipCode) {
        await t.typeText(this.firstName, firstName);
        await t.typeText(this.lastName, lastName);
        if (zipCode) {
            await t.typeText(this.postalCode, zipCode);
        }
        await t.click(this.continueButton);
    }
    //-----------------------------------------------------------------------------
    async isErrorMsgVisible() {
        return this.errorMsg.textContent;
    }
}

export default new CheckoutOnePage();
//***************************************************************************** end