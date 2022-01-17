import { locateWith } from "selenium-webdriver";
import {until, Builder, By, Key, withTagName} from "selenium-webdriver";
import {timeout, longTimeout, browser} from "../util/params.js";

export default class BasePage {

    async actionSendKeys(locator, value) {
        await driver.wait(until.elementLocated(locator), longTimeout);
        await driver.wait(until.elementIsVisible(driver.findElement(locator)), timeout);
        await driver.findElement(locator).clear();
        await driver.findElement(locator).sendKeys(value);
    }

    async actionClick(locator) {
        await driver.wait(until.elementLocated(locator), longTimeout);
        await driver.wait(until.elementIsVisible(driver.findElement(locator)), timeout);
        await driver.wait(until.elementIsEnabled(driver.findElement(locator)), timeout);
        await driver.findElement(locator).click();
    }

    async actionGetText(locator) {
        await driver.wait(until.elementLocated(locator), longTimeout);
        await driver.wait(until.elementIsVisible(driver.findElement(locator)), timeout);
        await driver.wait(until.elementIsEnabled(driver.findElement(locator)), timeout);
        await driver.findElement(locator).getText();
    }

    async beforeBase() {
        beforeEach(() => {
            global.driver = new Builder().forBrowser(browser).build();
        });
    }

    async afterBase() {
        afterEach(async () => {
            // await driver.sleep(3000);
            await driver.quit();
        });
    }

    async actionSendKeysBelow(locator, text) {
        await driver.wait(until.elementLocated(locator), longTimeout);
        await driver.wait(until.elementIsVisible(driver.findElement(locator)), timeout);
        let locatorBelow = await driver.findElement(withTagName('input').below(locator));
        await locatorBelow.sendKeys(text);
    }
}