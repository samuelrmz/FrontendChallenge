//######################################################################### imports
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';
import CheckoutOnePage from '../pages/checkoutOne.page';
import CheckoutTwoPage from '../pages/checkoutTwo.page';
import data from '../utils/data';
//************************************************************************ settings
fixture('Login Flow').page(data.url.toString());

//=========================================================================== tests
test('Fill user information', async t => {
    await LoginPage.loginFlow(data.standardUser.toString(), data.password.toString());
    await InventoryPage.addMultipleItemsFlow(data.BackpackItem.toString(), data.JacketItem.toString(), data.OnesieItem.toString());
    await t.expect(await CartPage.areItemsAddedInCart()).eql(3);
    await t.expect(await CartPage.isItemAddedVisible(data.BackpackItem.toString())).ok();
    await t.expect(await CartPage.isItemAddedVisible(data.JacketItem.toString())).ok();
    await t.expect(await CartPage.isItemAddedVisible(data.OnesieItem.toString())).ok();
    await CartPage.clickOnCheckout();
    await CheckoutOnePage.checkoutFlow(data.userOrder.toString(), data.mailOrder.toString(), data.zipCode.toString());
    console.log("Corfirmation order is visible: " + await CheckoutTwoPage.isConfirmationOrderVisible());
    await t.expect(await CheckoutTwoPage.isConfirmationOrderVisible()).ok();
});
//***************************************************************************** end