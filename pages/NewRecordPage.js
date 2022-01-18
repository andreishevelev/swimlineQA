import {By, Key, withTagName} from "selenium-webdriver";
import BasePage from "./BasePage.js";

// pre conditions
export let welcomePageURL = 'https://qa-practical.qa.swimlane.io/record/';

// locators
export let newRecordButtonLocator = By.xpath('//*[@class=\'ngx-icon ngx ngx-plus ng-star-inserted\']');
export let firstNameLabelLocator = By.xpath('//*[text()=\'First Name\']');
export let lastNameLabelLocator = By.xpath('//*[text()=\'Last Name\']');
export let cityLabelLocator = By.xpath('//*[text()=\'City\']');
export let streetAddressLabelLocator = By.xpath('//*[text()=\'Street Address\']');
export let stateLabelLocator = By.xpath('//*[text()=\'State\']');
export let telephoneLabelLocator = By.xpath('//*[text()=\'Telephone\']');
export let zipLabelLocator = By.xpath('//*[text()=\'Zip\']');
export let emailLabelLocator = By.xpath('//*[text()=\'Email\']');
export let textLabelLocator = By.xpath('//*[text()=\'Text\']');
export let radioButtonLocators = By.xpath('//*[@type=\'radio\']');
export let hiringInfoHeaderLocator = By.xpath('//*[text()=\'Hiring Information\']');
export let employeeIdLabelLocator = By.xpath('//*[text()=\'Employee ID\']');
export let favoriteBandLabelLocator = By.xpath('//*[text()=\'Favourite Band\']');
export let favoriteBandInputLocator = By.xpath('//input[@type=\'search\']');
export let notesLocator = By.xpath('//*[@class=\'comments-field\']//p');
export let postCommentButtonLocator = By.xpath('//*[text()=\'Post Comment\']');
export let clickSaveTextLocator = By.xpath('//*[text()=\'Save\']');
export let clickSavePopupLocator = By.xpath('//div[@class=\'modal-footer\']/button');
export let clickDeletePopupLocator = By.xpath('//div[@class=\'modal-footer\']/button[1]');
export let deliteButtonTextLocator = By.xpath('//*[text()=\'Delete\']');

export default class NewRecordPage extends BasePage {

    // click New record button
    async clickNewRecordButton() {
        await this.actionClick(newRecordButtonLocator);
    }

    // input First name
    async inputFirstName(value) {
        await this.actionSendKeysBelow(firstNameLabelLocator, value, 'input');
    }

    // input Last name
    async inputLastName(value) {
        await this.actionSendKeysBelow(lastNameLabelLocator, value, 'input');
    }

    // input City
    async inputCity(value) {
        await this.actionSendKeysBelow(cityLabelLocator, value, 'input');
    }

    // input Street
    async inputStreet(value) {
        await this.actionSendKeysBelow(streetAddressLabelLocator, value, 'textarea');
    }

    // input State
    async inputState(value) {
        await this.actionSendKeysBelow(stateLabelLocator, value, 'input');
    }

    // input Telephone
    async inputTelephone(value) {
        await this.actionSendKeysBelow(telephoneLabelLocator, value, 'input');
    }

    // input ZIP
    async inputZIP(value) {
        let locatorBetween = await driver.findElement(withTagName('input').below(zipLabelLocator)
            .toLeftOf(telephoneLabelLocator));
        await locatorBetween.sendKeys(value);
    }

    // input Email
    async inputEmail(value) {
        await this.actionSendKeysBelow(emailLabelLocator, value, 'input');
    }

    // input Text
    async inputText(value) {
        let locatorBetween = await driver.findElement(withTagName('input')
            .below(textLabelLocator)
            .above(hiringInfoHeaderLocator));
        await locatorBetween.sendKeys(value);

    }

    // select Status
    async selectStatus(option) {
        option === 'Full Time' ? await this.actionClickLocators(radioButtonLocators, 0) :
            option === 'Part Time' ? await this.actionClickLocators(radioButtonLocators, 1) :
                option === 'Intern' ? await this.actionClickLocators(radioButtonLocators, 2)
                    : '';
    }

    // select Department
    async selectDepartment(option) {
        option === 'Engineering' ? await this.actionClickLocators(radioButtonLocators, 3) :
            option === 'Sales' ? await this.actionClickLocators(radioButtonLocators, 4) :
                option === 'Accounting' ? await this.actionClickLocators(radioButtonLocators, 5) :
                    option === 'Products' ? await this.actionClickLocators(radioButtonLocators, 6) :
                        option === 'Custodial' ? await this.actionClickLocators(radioButtonLocators, 7) :
                            option === 'HR' ? await this.actionClickLocators(radioButtonLocators, 8) :
                                option === 'Marketing' ? await this.actionClickLocators(radioButtonLocators, 9) :
                                    option === 'Other' ? await this.actionClickLocators(radioButtonLocators, 10)
                                        : '';
    }

    // select Benefits
    async selectBenefits(option) {
        option === '401k' ? await this.actionClickLocators(radioButtonLocators, 11) :
            option === 'Medical' ? await this.actionClickLocators(radioButtonLocators, 12) :
                option === 'Dental' ? await this.actionClickLocators(radioButtonLocators, 13) :
                    option === 'Vision' ? await this.actionClickLocators(radioButtonLocators, 14)
                        : '';
    }

    // input Employee ID
    async inputEmployeeId(value) {
        await this.actionSendKeysBelow(employeeIdLabelLocator, value, 'input');
    }

    // input Notes
    async inputNotes(value) {
        await this.actionSendKeys(notesLocator, value);
    }

    // click 'Post Comment' button
    async clickPostComment() {
        await this.actionClick(postCommentButtonLocator);
    }

    // input favorite Band
    async selectFavoriteBand(value) {
        await this.locateVisibleEnabled(favoriteBandLabelLocator);
        let locatorBelow = await driver.findElement(withTagName('a').below(favoriteBandLabelLocator));
        await locatorBelow.click();
        //await this.actionClick(favoriteBandInputLocator);
        await this.actionSendKeys(favoriteBandInputLocator, value);
        await driver.findElement(favoriteBandInputLocator).sendKeys(Key.ENTER);
    }

    // click 'Save' button
    async clickSave() {
        await this.actionClick(clickSaveTextLocator);
    }

    // click 'Save' popup button
    async clickSavePopup() {
        await this.actionClick(clickSavePopupLocator);
    }

    // verify record creation
    async recordCreatedVerification() {
        await driver.sleep(2000);
        await this.actionClick(deliteButtonTextLocator);
        await this.actionClick(clickDeletePopupLocator);
    }
}