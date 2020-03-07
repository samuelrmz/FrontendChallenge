//######################################################################### imports
import { Selector, t } from 'testcafe';
//*************************************************************************** class
class CartPage {
    //================================================================= constructor
    constructor() {
        this.subheaderTitle = Selector(".subheader");
        this.itemField = Selector(".inventory_item_name");
        this.checkoutButton = Selector(".checkout_button");
    }
    //===================================================================== methods
    async isCartPageVisible() {
        return this.subheaderTitle.textContent;
    }
    //-----------------------------------------------------------------------------
    async isItemAddedVisible(item) {
        return this.itemField.withText(item).visible;
    }
    //-----------------------------------------------------------------------------
    async areItemsAddedInCart() {
        return this.itemField.count
    }
    //-----------------------------------------------------------------------------
    async clickOnCheckout() {
        await t.click(this.checkoutButton);
    }
}

export default new CartPage();
//***************************************************************************** end