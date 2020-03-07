//######################################################################### imports
import { Selector, t } from 'testcafe';
//*************************************************************************** class
class LoginPage {
    //================================================================= constructor
    constructor() {
        this.userField = Selector("#user-name");
        this.passwordField = Selector("#password");
        this.loginButton = Selector(".btn_action");
        this.errorMsg = Selector("[data-test='error']");
        this.botIcon = Selector(".bot_column");
    }
    //===================================================================== methods
    async loginFlow(user, password) {
        await t.typeText(this.userField, user);
        await t.typeText(this.passwordField, password);
        await t.click(this.loginButton);
    }
    //-----------------------------------------------------------------------------
    async isErrorMsgVisible() {
        return this.errorMsg.textContent;
    }
    //-----------------------------------------------------------------------------
    async isLoginPageVisible() {
        return this.botIcon.exists;
    }
}

export default new LoginPage();
//***************************************************************************** end