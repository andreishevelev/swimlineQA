import { By, until, Key } from "selenium-webdriver";
import { timeout, longTimeout} from "../util/params.js";
import { welcomePageURL } from "./WelcomePage.js";
import { expect } from "chai";
import { loginFailedMessage } from "..//asserts/loginPage.js";
import BasePage from "./BasePage.js";

// pre conditions
export let loginPageURL = 'https://qa-practical.qa.swimlane.io/login';
export let loginPageTitle = 'Swimlane';

// locators
export let usernameLocator = By.id('input-1');
export let passwordLocator = By.id('input-2');
export let loginButtonLocator = By.xpath('//*[@type=\'submit\']');
export let acronymLocator = By.css('.acronym');
export let loginFailedMessageLocator = By.xpath('//*[text()=\''+ loginFailedMessage +'\']');
export let welcomeHeaderLocator = By.xpath('//*[text()=\'Welcome to Swimlane\']');


export default class LoginPage extends BasePage {

        // open login page 
        async openPage(){
            await this.actionOpenPage(loginPageURL, loginPageTitle);
        }

        // input username
        async inputUsername(username){
            await this.actionSendKeys(usernameLocator, username);
        }

        // input password
        async inputPassword(password){
            await this.actionSendKeys(passwordLocator, password);
        }

        // click 'Login' button
        async clickLogin(){
            await this.actionClick(loginButtonLocator);
        
        }

        // login verification
        async loginVerification(expectedText){
        await driver.wait(until.urlIs(welcomePageURL),timeout);
        await driver.wait(until.elementIsVisible(driver.findElement(acronymLocator)),timeout);
        let actualResult = await driver.findElement(acronymLocator).getText();
        expect(expectedText).to.equal(actualResult);
        }

        // login failed message verification
        async unvalidPasswordVerification(expectedText){
            await driver.wait(until.elementLocated((loginFailedMessageLocator)),longTimeout);
            await driver.wait(until.elementIsVisible(driver.findElement(loginFailedMessageLocator)),timeout);
            let actualResult = await driver.findElement(loginFailedMessageLocator).getText();
            expect(expectedText).to.equal(actualResult);

        }

        // copy password disabled verification
        async passDisabledVerification(expectedResult){

        await driver.sleep(1000);
        await driver.actions()
        .doubleClick(driver.findElement(usernameLocator))
        .click(driver.findElement(usernameLocator))
        .keyDown(Key.COMMAND)
        .sendKeys("c")
        .keyUp(Key.COMMAND)
        .doubleClick(driver.findElement(passwordLocator))
        .keyDown(Key.COMMAND)
        .sendKeys("c")
        .keyUp(Key.COMMAND)
        .doubleClick(driver.findElement(usernameLocator))
        .click(driver.findElement(usernameLocator))
        .keyDown(Key.COMMAND)
        .sendKeys("v")
        .keyUp(Key.COMMAND)
        .perform();
        let actualResult = await driver.findElement(usernameLocator).getAttribute('value');
        expect(expectedResult).to.equal(actualResult);
        }
}