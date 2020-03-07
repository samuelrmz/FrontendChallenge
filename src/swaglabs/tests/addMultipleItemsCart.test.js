//######################################################################### imports
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';
import data from '../utils/data';
//************************************************************************ settings
fixture('Login Flow').page(data.url.toString());

//=========================================================================== tests
test('Add multiple items to shopping cart', async t => {
    await LoginPage.loginFlow(data.standardUser.toString(), data.password.toString());
    await InventoryPage.addMultipleItemsFlow(data.BackpackItem.toString(), data.JacketItem.toString(), data.OnesieItem.toString());
    await t.expect(await CartPage.areItemsAddedInCart()).eql(3);
    console.log("Validation of items added is correct");
    console.log("New product added visible (true or false): " + (await CartPage.isItemAddedVisible(data.BackpackItem.toString())));
    await t.expect(await CartPage.isItemAddedVisible(data.BackpackItem.toString())).ok();
    console.log("New product added visible (true or false): " + (await CartPage.isItemAddedVisible(data.JacketItem.toString())));
    await t.expect(await CartPage.isItemAddedVisible(data.JacketItem.toString())).ok();
    console.log("New product added visible (true or false): " + (await CartPage.isItemAddedVisible(data.OnesieItem.toString())));
    await t.expect(await CartPage.isItemAddedVisible(data.OnesieItem.toString())).ok();
});
//***************************************************************************** end