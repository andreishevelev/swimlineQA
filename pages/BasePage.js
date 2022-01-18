import { locateWith } from "selenium-webdriver";
import {until, Builder, By, Key, withTagName} from "selenium-webdriver";
import {timeout, longTimeout, browser} from "../util/params.js";

export default class BasePage {

    async locateVisibleEnabled(locator){
        await driver.wait(until.elementLocated(locator), longTimeout);
        await driver.wait(until.elementIsVisible(driver.findElement(locator)), timeout);
        await driver.wait(until.elementIsEnabled(driver.findElement(locator)), timeout);
    }

    async actionSendKeys(locator, value) {
        await this.locateVisibleEnabled(locator);
        await driver.findElement(locator).clear();
        await driver.findElement(locator).sendKeys(value);
    }

    async actionClick(locator) {
        await this.locateVisibleEnabled(locator);
        await driver.findElement(locator).click();
    }

    async actionGetText(locator) {
        await this.locateVisibleEnabled(locator);
        await driver.findElement(locator).getText();
    }

    async beforeBase() {
        beforeEach(() => {
            global.driver = new Builder().forBrowser(browser).build();
            driver.manage().window().maximize();
        });
    }

    async afterBase() {
        afterEach(async () => {
            // await driver.sleep(3000);
            await driver.quit();
        });
    }

    async actionSendKeysBelow(locator, text, originLocator) {
        await this.locateVisibleEnabled(locator);
        let locatorBelow = await driver.findElement(withTagName(originLocator).below(locator));
        await locatorBelow.sendKeys(text);
    }

    async actionClickLocators(locators, position) {
        let locator = await driver.findElements(locators);
        locator[position].click();
    }

}