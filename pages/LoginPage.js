import { By, until } from "selenium-webdriver";
import { timeout, longTimeout} from "../util/params.js";
import { welcomePageURL } from "./WelcomePage.js";
import { expect } from "chai";
import { loginFailedMessage } from "..//asserts/loginPage.js";
import ActionsBase from "../util/ActionsBase.js";


// pre conditions
export let loginPageURL = 'https://qa-practical.qa.swimlane.io/login';
export let loginPageTitle = 'Swimlane';

// locators
export let usernameLocator = By.id('input-1');
export let passwordLocator = By.id('input-2');
export let loginButtonLocator = By.xpath('//*[@type=\'submit\']');
export let acronymLocator = By.css('.acronym');
export let loginFailedMessageLocator = By.xpath('//*[text()=\''+ loginFailedMessage +'\']');

export default class LoginPage extends ActionsBase {

    driver;

    constructor(driver) {
        super();
        this.driver = driver;
    }
    

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
        await this.driver.wait(until.urlIs(welcomePageURL),timeout);
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(acronymLocator)),timeout);
        let actualResult = await this.driver.findElement(acronymLocator).getText();
        expect(expectedText).to.equal(actualResult);
        }

        // login failed message verification
        async unvalidPasswordVerification(expectedText){
            await this.driver.wait(until.elementLocated((loginFailedMessageLocator)),longTimeout);
            await this.driver.wait(until.elementIsVisible(this.driver.findElement(loginFailedMessageLocator)),timeout);
            let actualResult = await this.driver.findElement(loginFailedMessageLocator).getText();
            expect(expectedText).to.equal(actualResult);

        }

}