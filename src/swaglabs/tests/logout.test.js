//######################################################################### imports
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import data from '../utils/data';
//************************************************************************ settings
fixture('Login Flow').page(data.url.toString());

//=========================================================================== tests
test('Logout from Products page', async t => {
    await LoginPage.loginFlow(data.standardUser.toString(), data.password.toString());
    await t.expect(await InventoryPage.isProductIconVisible()).ok();
    await InventoryPage.logoutFlow();
    console.log("Login Page Visible (true or false): " + (await LoginPage.isLoginPageVisible()));
    await t.expect(await LoginPage.isLoginPageVisible()).ok();
});
//***************************************************************************** end