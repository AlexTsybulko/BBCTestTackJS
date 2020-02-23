import {browser, by, element, protractor} from "protractor";

export class HomePage {

    yourAccountLink = element(by.id('idcta-username'));

    getYourAccountLink() {
        return this.yourAccountLink;
    }

    getAccountLinkInnerText(){
        return this.getYourAccountLink().getAttribute("innerText");
    }

    waitForAccountNameChanged() {
        let EC = protractor.ExpectedConditions;
        let isAccChanged = EC.textToBePresentInElement(this.getYourAccountLink(), 'Your account');
        browser.wait(isAccChanged, 8000);
    }
}