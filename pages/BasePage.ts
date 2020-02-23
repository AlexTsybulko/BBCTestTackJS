import {browser, by, element, protractor} from "protractor";

export class BasePage {

    EC = protractor.ExpectedConditions;

    constructor() {
        this.waitForPageLoading();
    }

    waitForPageLoading() {
        const loadingSpinner = element(by.css("div[class=\'spinner spinner--fill\']"));
        const isLoaded = this.EC.invisibilityOf(loadingSpinner);
        browser.wait(isLoaded, 10000);
    }

    waitForElementPresent(element, timeout) {
        const isElementVisible = this.EC.visibilityOf(element);
        browser.wait(isElementVisible, timeout);
    }

    waitToBeClickable(element, timeout) {
        const isClickable = this.EC.elementToBeClickable(element);
        browser.wait(isClickable, timeout);
    }
}