import {browser} from "protractor";
import {ChooseAgePage} from "../pages/ChooseAgePage";
import {DateOfBirthPage} from "../pages/DateOfBirthPage";
import {RegistrationPage} from "../pages/RegistrationPage";
import {SuccessSingnedInPage} from "../pages/SuccessSingnedInPage";
import {HomePage} from "../pages/HomePage";

describe ('BBC Test Suite',  async () => {
    it('Check registration workflow', async () => {


        // browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.driver.get('https://account.bbc.com/register');

        //click thirteen or over btn because of impossibility
        //of using under thirteen account outside the UK
        let chooseAgePage = new ChooseAgePage();
        chooseAgePage.clickThirteenOrOverBtn();

        //enter random date of birth on just opened page and continue
        let dateOfBirthPage = new DateOfBirthPage();
        dateOfBirthPage.setRandomDateOfBirth();
        dateOfBirthPage.clickContinueBtn();
        browser.sleep(2000);

        let registrationPage = new RegistrationPage();
        registrationPage.enterRegistrationData();
        registrationPage.clickRegisterBtn();

        let successSignedInPage = new SuccessSingnedInPage();
        expect(await successSignedInPage.isSuccessHeaderPresent()).toEqual(true);
        successSignedInPage.clickNoAds();
        successSignedInPage.clickContinue();

        let homePage = new HomePage();
        homePage.waitForAccountNameChanged();
        expect(await homePage.getAccountLinkInnerText()).toEqual('Your account');
    });
});
