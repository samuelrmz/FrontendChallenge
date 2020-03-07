//######################################################################### imports
import LoginPage from '../pages/login.page';
import data from '../utils/data';
//************************************************************************ settings
fixture('Login Flow').page(data.url.toString());

//=========================================================================== tests
test('Login with invalid user', async t => {
    await LoginPage.loginFlow(data.lockedUser.toString(), data.password.toString());
    console.log("Error message: " + (await LoginPage.isErrorMsgVisible()));
    await t.expect(await LoginPage.isErrorMsgVisible()).contains('this user has been locked out');
});
//***************************************************************************** end