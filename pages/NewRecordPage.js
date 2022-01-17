import {By, until, Builder} from "selenium-webdriver";
import {timeout, longTimeout} from "../util/params.js";
import BasePage from "./BasePage.js";

// pre conditions
export let welcomePageURL = 'https://qa-practical.qa.swimlane.io/record/';

//locators
export let newRecordButtonLocator = By.xpath('//*[@class=\'ngx-icon ngx ngx-plus ng-star-inserted\']');
export let firstNameInputLocator = By.xpath('//*[text()=\'First Name\']');
export let lastNameInputLocator = By.xpath('//*[text()=\'Last Name\']');
export let cityInputLocator = By.xpath('//*[text()=\'City\']');
export let cityNameInputLocator = By.xpath('//*[@name=\'adwok\']');
export let clickSaveTextLocator = By.xpath('//*[text()=\'Save\']');
export let clickSavePopupLocator = By.xpath('//div[@class=\'modal-footer\']/button');
export let clickDeletePopupLocator = By.xpath('//div[@class=\'modal-footer\']/button[1]');
export let deliteButtonTextLocator = By.xpath('//*[text()=\'Delete\']');

export default class NewRecordPage extends BasePage {

    async clickNewRecordButton() {
        await this.actionClick(newRecordButtonLocator);
    }

    async inputFirstName(firstName) {
        await this.actionSendKeysBelow(firstNameInputLocator, firstName);
    }

    async inputLastName(lastName) {
        await this.actionSendKeysBelow(lastNameInputLocator, lastName);
    }

    async inputCityName(city) {
        await this.actionSendKeysBelow(cityInputLocator, city);
    }

    async clickSave() {
        await this.actionClick(clickSaveTextLocator);
    }

    async clickSavePopup() {
        await this.actionClick(clickSavePopupLocator);
    }

    async getCreatedByValue() {
    }

    async recordCreatedVerification() {
        await driver.sleep(2000);
        await this.actionClick(deliteButtonTextLocator);
        await this.actionClick(clickDeletePopupLocator);
    } 
}