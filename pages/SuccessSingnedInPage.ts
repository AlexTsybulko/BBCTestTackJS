import {BasePage} from "./BasePage";
import {browser, by, element, protractor} from "protractor";

export class SuccessSingnedInPage extends  BasePage{

    successHeader = element(by.className('header__title--success'));
    emailsYesBtn = element(by.css("label[for = 'optIn']"));
    emailsNoBtn = element(by.css("label[for = 'optOut']"));
    continueBtn = element(by.id("submit-button"));

    isSuccessHeaderPresent() {
        return this.successHeader.isPresent();
    }

    clickYesAds() {
        this.emailsYesBtn.click();
    }

    clickNoAds() {
        this.emailsNoBtn.click();
    }

    clickContinue() {
        this.continueBtn.click();
    }
}