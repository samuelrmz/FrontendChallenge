//######################################################################### imports
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';
import data from '../utils/data';
//************************************************************************ settings
var itemName;
fixture('Login Flow').page(data.url.toString());

//=========================================================================== tests
test('Add single item to shopping cart', async t => {
    await LoginPage.loginFlow(data.standardUser.toString(), data.password.toString());
    await t.expect(await InventoryPage.isProductIconVisible()).ok();
    itemName = await InventoryPage.addItemToCartFlow();
    console.log(itemName);
    console.log("New product added visible (true or false): " + (await CartPage.isItemAddedVisible(itemName)));
    await t.expect(await CartPage.isItemAddedVisible(itemName)).ok();
});
//***************************************************************************** end