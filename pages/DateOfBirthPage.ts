import {element, by} from 'protractor';
import * as faker from 'faker';
import {BasePage} from "./BasePage";

export class DateOfBirthPage extends BasePage{

    constructor() {
        super();
        this.waitForElementPresent(this.pageHeader, 5000);
    }

    pageHeader = element(by.id('dateOfBirthField'));
    dayOfBirthInput = element(by.id('day-input'));
    monthOfBirthInput = element(by.id('month-input'));
    yearOfBirthInput = element(by.id('year-input'));
    continueBtn = element(by.id('submit-button'));

    getRandomDay() {
        return faker.random.number({'min' : 1, 'max' : 28});
    }

    getRandomMonth() {
        return faker.random.number({'min' : 1, 'max' : 12});
    }

    getRandomYear() {
        return faker.random.number({'min' : 1940, 'max' : 2005});
    }

    setRandomDateOfBirth() {
        this.waitToBeClickable(this.dayOfBirthInput, 2000);
        this.dayOfBirthInput.sendKeys(this.getRandomDay());
        this.monthOfBirthInput.sendKeys(this.getRandomMonth());
        this.yearOfBirthInput.sendKeys(this.getRandomYear());
    }

    clickContinueBtn() {
        this.waitToBeClickable(this.continueBtn, 4000);
        this.continueBtn.click();
    }
}
