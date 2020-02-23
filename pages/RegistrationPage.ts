import {browser, by, element} from "protractor";
import * as faker from 'faker';

export class RegistrationPage {

    emailInput = element(by.id('user-identifier-input'));
    passwordInput = element(by.id('password-input'));
    countrySelect = element(by.id('location-select'));
    registerBtn = element(by.id('submit-button'));

    setRandomEmail() {
        this.emailInput.sendKeys(faker.internet.email());
    };

    getEmailErrorCount() {
        return element.all(by.css("input[aria-invalid='true'][id ='user-identifier-input']")).count();
    };

    setEmailWithCheckingCorrectness(){
        this.setRandomEmail();
        this.getEmailErrorCount().then((count) => {
           if(count > 0) {
                this.setEmailWithCheckingCorrectness();
           }
        });
    };

    setRandomPassword() {
        this.passwordInput.sendKeys(faker.internet.password());
    }

    getPasswordErrorCount() {
        return element.all(by.css("input[aria-invalid='true'][id ='password-input']")).count();
    }

    setPasswordWithCheckingCorrectness() {
        this.setRandomPassword();
        this.getPasswordErrorCount().then((count) => {
            if(count > 0) {
                this.setPasswordWithCheckingCorrectness();
            }
        });
    }

    selectRandomCountry() {
        this.countrySelect.all(by.tagName("option")).get(faker.random.number({'min' : 0, 'max' : 246})).click();
    }

    enterRegistrationData() {
        this.setEmailWithCheckingCorrectness();
        this.setPasswordWithCheckingCorrectness();
        this.selectRandomCountry();
    }

    clickRegisterBtn() {
        this.registerBtn.click();
    }
}