
import {element, by} from 'protractor';
import {BasePage} from "./BasePage";

export class ChooseAgePage extends BasePage{

    underThirteenBtn = element(by.css("a[aria-label = \'Under 13\']"));
    thirteenOrOverBtn = element(by.css("a[aria-label = \'13 or over\']"));

    clickUnderThirteenBtn(){
        this.underThirteenBtn.click();
    };

    clickThirteenOrOverBtn(){
        this.thirteenOrOverBtn.click();
    };
};