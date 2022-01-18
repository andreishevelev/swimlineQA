import {By, until, Key} from "selenium-webdriver";
import {timeout, longTimeout} from "../util/params.js";
import {welcomePageURL} from "./WelcomePage.js";
import {expect} from "chai";
import {loginFailedMessage} from "..//asserts/loginPage.js";
import BasePage from "./BasePage.js";
import {testUser} from "../fixtures/testData.js";

// pre conditions
export let loginPageURL = 'https://qa-practical.qa.swimlane.io/login';

// locators
export let usernameLocator = By.id('input-1');
export let passwordLocator = By.id('input-2');
export let loginButtonLocator = By.xpath('//*[@type=\'submit\']');
export let acronymLocator = By.css('.acronym');
export let loginFailedMessageLocator = By.xpath('//*[text()=\'' + loginFailedMessage + '\']');

export default class LoginPage extends BasePage {

    // success login
    async successLogin() {
        // open login page
        await this.openPage();
        // input username
        await this.inputUsername(testUser.username);
        // input password
        await this.inputPassword(testUser.password);
        // click 'Login' button
        await this.clickLogin();
    }

    // open login page
    async openPage() {
        await driver.get(loginPageURL);
        await driver.wait(until.urlIs(loginPageURL), timeout);
    }

    // input username
    async inputUsername(value) {
        await this.actionSendKeys(usernameLocator, value);
    }

    // input password
    async inputPassword(value) {
        await this.actionSendKeys(passwordLocator, value);
    }

    // click 'Login' button
    async clickLogin() {
        await this.actionClick(loginButtonLocator);
    }

    // login verification
    async loginVerification(expectedText) {
        await driver.wait(until.urlIs(welcomePageURL), timeout);
        await driver.wait(until.elementIsVisible(driver.findElement(acronymLocator)), timeout);
        let actualResult = await driver.findElement(acronymLocator).getText();
        expect(expectedText).to.equal(actualResult);
    }

    // login failed message verification
    async invalidPasswordVerification(expectedText) {
        await driver.wait(until.elementLocated((loginFailedMessageLocator)), longTimeout);
        await driver.wait(until.elementIsVisible(driver.findElement(loginFailedMessageLocator)), timeout);
        let actualResult = await driver.findElement(loginFailedMessageLocator).getText();
        expect(expectedText).to.equal(actualResult);
    }

    // copy password disabled verification
    async passDisabledVerification(expectedResult) {
        await driver.sleep(1000);
        await driver.actions()
            // this will copy username to the clipboard
            .doubleClick(driver.findElement(usernameLocator))
            .click(driver.findElement(usernameLocator))
            .keyDown(Key.COMMAND)
            .sendKeys("c")
            .keyUp(Key.COMMAND)
            // this will try to copy password to the clipboard
            .doubleClick(driver.findElement(passwordLocator))
            .keyDown(Key.COMMAND)
            .sendKeys("c")
            .keyUp(Key.COMMAND)
            // this will paste data from the clipboard to the username field
            .doubleClick(driver.findElement(usernameLocator))
            .click(driver.findElement(usernameLocator))
            .keyDown(Key.COMMAND)
            .sendKeys("v")
            .keyUp(Key.COMMAND)
            .perform();
        // this will verify if copy password disabled
        let actualResult = await driver.findElement(usernameLocator).getAttribute('value');
        expect(expectedResult).to.equal(actualResult);
    }
}