import { until, Builder, By, Key } from "selenium-webdriver";
import { timeout, longTimeout, browser } from "../util/params.js";

export default class BasePage {

    async actionOpenPage(pageURL, pageTitle) {

        await driver.get(pageURL, pageTitle);
        await driver.wait(until.urlIs(pageURL),timeout);
        await driver.wait(until.titleIs(pageTitle));

    }

    async actionSendKeys(locator, value) {

        await driver.wait(until.elementLocated(locator),longTimeout);
        await driver.wait(until.elementIsVisible(driver.findElement(locator)),timeout);
        await driver.findElement(locator).clear();
        await driver.findElement(locator).sendKeys(value);

    }

    async actionClick(locator) {

        await driver.wait(until.elementLocated(locator),longTimeout);
        await driver.wait(until.elementIsEnabled(driver.findElement(locator)),timeout);
        await driver.findElement(locator).click();

    }

    async actionGetText(locator) {

        return await driver.findElement(locator).getText();

    }

    async before(){
    
        beforeEach(function(){
        global.driver = new Builder().forBrowser(browser).build();
        });
        
    }

    async after(){
    
        afterEach(async function(){
             await driver.quit();
        });
    
    }



}