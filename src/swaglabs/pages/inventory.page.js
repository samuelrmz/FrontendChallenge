//######################################################################### imports
import { Selector, t } from 'testcafe';
//*************************************************************************** class
class InventoryPage {
    //================================================================= constructor
    constructor() {
        this.productsText = Selector(".product_label");
        this.sandwichIcon = Selector(".bm-burger-button button");
        this.logoutLink = Selector("#logout_sidebar_link");
        this.cartIcon = Selector(".svg-inline--fa path");
        this.addToCartButton = Selector(".btn_primary");
        this.itemName = Selector(".inventory_item_name");
        this.goBackButton = Selector (".inventory_details_back_button");
    }
    //===================================================================== methods
    async isProductIconVisible() {
        return this.productsText.visible;
    }
    //-----------------------------------------------------------------------------
    async logoutFlow() {
        await t.click(this.sandwichIcon);
        await t.click(this.logoutLink);
    }
    //-----------------------------------------------------------------------------
    async navigateToShoppingFlow() {
        await t.click(this.cartIcon);
    }
    //-----------------------------------------------------------------------------
    async addItemToCartFlow() {
        await t.click(this.addToCartButton);
        await t.click(this.cartIcon);
        return this.itemName.textContent;
    }
    //-----------------------------------------------------------------------------
    async addMultipleItemsFlow(first, second, third) {
        for (var i=0;i<arguments.length;i++) {
            console.log(arguments[i]);
            await t.click(this.itemName.withExactText(arguments[i]));
            await t.click(this.addToCartButton);
            await t.click(this.goBackButton);
        }
        await t.click(this.cartIcon);
    }
}

export default new InventoryPage();
//***************************************************************************** end