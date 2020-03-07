//######################################################################### imports
import { Selector, t } from 'testcafe';
//*************************************************************************** class
class ConfirmationPage {
     //================================================================= constructor
    constructor() {
        this.ponyImage = Selector(".pony_express");
    }
    //===================================================================== methods
    async isConfirmationImageVisible() {
        return this.ponyImage.visible;
    }
}

export default new ConfirmationPage();
//***************************************************************************** end