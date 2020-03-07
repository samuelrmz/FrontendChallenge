//######################################################################### imports
import LoginPage from '../pages/login.page';
import InventoryPage from '../pages/inventory.page';
import data from '../utils/data';
import { Role } from 'testcafe';
//*************************************************************************** roles
var problemUser = Role(data.url.toString(), async t => {
    await t
        .typeText("#user-name", data.performanceUser.toString())
        .typeText("#password", data.password.toString())
        .click(".btn_action")
}, { preserveUrl: true });
//---------------------------------------------------------------------------------
var standarUser = Role(data.url.toString(), async t => {
    await t
        .typeText("#user-name", data.problemdUser.toString())
        .typeText("#password", data.password.toString())
        .click(".btn_action")

}, { preserveUrl: true });
//************************************************************************ settings
fixture('Login Flow').page(data.url.toString());

//=========================================================================== tests
test('Login with valid user', async t => {
    await LoginPage.loginFlow(data.standardUser.toString(), data.password.toString());
    console.log("Product Icon Visible (Successfull login): " + (await InventoryPage.isProductIconVisible()));
    await t.expect(await InventoryPage.isProductIconVisible()).ok();
});
//---------------------------------------------------------------------------------
test('Login with Role users', async t => {
    await t.useRole(standarUser);
    await t.expect(await InventoryPage.isProductIconVisible()).ok();
    await t.useRole(problemUser);
    await t.expect(await InventoryPage.isProductIconVisible()).ok();
});
//***************************************************************************** end