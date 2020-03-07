//######################################################################### imports
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import CartPage from '../pages/cart.page';
import data from '../utils/data';
//************************************************************************ settings
fixture('Login Flow').page(data.url.toString());

//=========================================================================== tests
test('Navigate to shopping page', async t => {
    await LoginPage.loginFlow(data.standardUser.toString(), data.password.toString());
    await t.expect(await InventoryPage.isProductIconVisible()).ok();
    await InventoryPage.navigateToShoppingFlow();
    console.log('Subheader text: '+ await CartPage.isCartPageVisible());
    await t.expect(await CartPage.isCartPageVisible()).contains('Your Cart');
});
//***************************************************************************** end