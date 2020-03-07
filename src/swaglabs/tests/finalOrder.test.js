//######################################################################### imports
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';
import CheckoutOnePage from '../pages/checkoutOne.page';
import data from '../utils/data';
//************************************************************************ settings
fixture('Login Flow').page(data.url.toString());
//=========================================================================== tests
test('Final order', async t => {
    //ITEMS OBJECT AS DATA PROVIDER
    var items = [
        { value: 'Sauce Labs Backpack' },
        { value: 'Sauce Labs Fleece Jacket' },
        { value: 'Sauce Labs Onesie' },
    ];

    await LoginPage.loginFlow(data.standardUser.toString(), data.password.toString());
    await InventoryPage.addMultipleItemsFlow(data.BackpackItem.toString(), data.JacketItem.toString(), data.OnesieItem.toString());
    await t.expect(await CartPage.areItemsAddedInCart()).eql(3);

    for (var k = 0; k < items.length; k++) {
        console.log(await CartPage.isItemAddedVisible(items[k].value));
        await t.expect(await CartPage.isItemAddedVisible(items[k].value)).ok();
    }
    //CONFIRMATION OF ITEMS ADDED
    await CartPage.clickOnCheckout();
    await CheckoutOnePage.checkoutFlow(data.userOrder.toString(), data.mailOrder.toString(), data.zipCode.toString());
    for (var k = 0; k < items.length; k++) {
        console.log(await CartPage.isItemAddedVisible(items[k].value));
        await t.expect(await CartPage.isItemAddedVisible(items[k].value)).ok();
    }
    console.log("Validation of items added is correct");
});
//***************************************************************************** end