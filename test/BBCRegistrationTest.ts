import {browser} from "protractor";
import {ChooseAgePage} from "../pages/ChooseAgePage";
import {DateOfBirthPage} from "../pages/DateOfBirthPage";
import {RegistrationPage} from "../pages/RegistrationPage";
import {SuccessSingnedInPage} from "../pages/SuccessSingnedInPage";
import {HomePage} from "../pages/HomePage";

describe ('BBC Test Suite',  async () => {
    it('Check registration workflow', async () => {

        const url = 'https://account.bbc.com/register';
        
        browser.waitForAngularEnabled(false);
        browser.driver.get(url);

        //click thirteen or over btn because of impossibility
        //of using under thirteen account outside the UK
        let chooseAgePage = new ChooseAgePage();
        chooseAgePage.clickThirteenOrOverBtn();

        //enter random date of birth on just opened page and continue
        let dateOfBirthPage = new DateOfBirthPage();
        dateOfBirthPage.setRandomDateOfBirth();
        dateOfBirthPage.clickContinueBtn();

        //enter random registration data and register
        let registrationPage = new RegistrationPage();
        registrationPage.enterRegistrationData();
        registrationPage.clickRegisterBtn();

        //check visibility of success header on final registration page
        //disagree for marketing emails
        let successSignedInPage = new SuccessSingnedInPage();
        expect(await successSignedInPage.isSuccessHeaderPresent()).toEqual(true);
        successSignedInPage.clickNoAds();
        successSignedInPage.clickContinue();

        //check 'your account' caption for personal account link on site
        //which means you have an account from the moment
        let homePage = new HomePage();
        homePage.waitForAccountNameChanged();
        expect(await homePage.getAccountLinkInnerText()).toEqual('Your account');
    });
});
