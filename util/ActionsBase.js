import { until } from "selenium-webdriver";
import { timeout, longTimeout } from "./params.js";

export default class ActionsBase {

    constructor(driver) {
        this.driver = driver;
    }

    async actionOpenPage(pageURL, pageTitle) {

        await this.driver.get(pageURL, pageTitle);
        await this.driver.wait(until.urlIs(pageURL),timeout);
        await this.driver.wait(until.titleIs(pageTitle));

    }

    async actionSendKeys(locator, value) {

        await this.driver.wait(until.elementLocated(locator),longTimeout);
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(locator)),timeout);
        await this.driver.findElement(locator).clear();
        await this.driver.findElement(locator).sendKeys(value);

    }

    async actionClick(locator) {

        await this.driver.wait(until.elementLocated(locator),longTimeout);
        await this.driver.wait(until.elementIsEnabled(this.driver.findElement(locator)),timeout);
        await this.driver.findElement(locator).click();

    }

}