//######################################################################### imports
import { Selector, t } from 'testcafe';
//*************************************************************************** class
class CheckoutTwoPage {
    //================================================================= constructor
    constructor() {
        this.orderNum = Selector(".summary_value_label");
        this.itemField = Selector(".inventory_item_name");
        this.finishButton = Selector(".btn_action");
    }
    //===================================================================== methods
    async isConfirmationOrderVisible() {
        return this.orderNum.withText("SauceCard").visible;
    }
    //-----------------------------------------------------------------------------
    async isItemAddedVisible(item) {
        return this.itemField.withText(item).visible;
    }
    //-----------------------------------------------------------------------------
    async clickOnContinueButton(){
        await t.click(this.finishButton);
    }
}

export default new CheckoutTwoPage();
//***************************************************************************** end