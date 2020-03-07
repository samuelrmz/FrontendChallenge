//######################################################################### imports
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';
import CheckoutOnePage from '../pages/checkoutOne.page';
import CheckoutTwoPage from '../pages/checkoutTwo.page';
import ConfirmationPage from '../pages/confirmation.page';
import data from '../utils/data';
//************************************************************************ settings
fixture('Login Flow').page(data.url.toString());
//=========================================================================== tests
test('Final order', async t => {
    await LoginPage.loginFlow(data.standardUser.toString(), data.password.toString());
    await InventoryPage.addMultipleItemsFlow(data.BackpackItem.toString(), data.JacketItem.toString(), data.OnesieItem.toString());
    await CartPage.clickOnCheckout();
    await CheckoutOnePage.checkoutFlow(data.userOrder.toString(), data.mailOrder.toString(), data.zipCode.toString());
    await CheckoutTwoPage.clickOnContinueButton();
    await t.expect(await ConfirmationPage.isConfirmationImageVisible()).ok();
    console.log("Order completed successfully");
});
//***************************************************************************** end