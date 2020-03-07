/*
 *This test indicates to continue with missing email but after checking I realized
 *this field is not available while proceeding with order, so I selected Zip Code as missing data.
*/
//######################################################################### imports
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';
import CheckoutOnePage from '../pages/checkoutOne.page';
import data from '../utils/data';
//************************************************************************ settings
var itemName;
fixture('Login Flow').page(data.url.toString());

//=========================================================================== tests
test('Continue with missing information test', async t => {
    await LoginPage.loginFlow(data.standardUser.toString(), data.password.toString());
    await t.expect(await InventoryPage.isProductIconVisible()).ok();
    itemName = await InventoryPage.addItemToCartFlow();
    await t.expect(await CartPage.isItemAddedVisible(itemName)).ok();
    await CartPage.clickOnCheckout();
    await CheckoutOnePage.checkoutFlow(data.userOrder.toString(), data.mailOrder.toString(), null);
    console.log(await CheckoutOnePage.isErrorMsgVisible());
    await t.expect(await CheckoutOnePage.isErrorMsgVisible()).contains('Postal Code is required');
});
//***************************************************************************** end