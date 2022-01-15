import { Builder, By, Key, until } from "selenium-webdriver";



// new record test suite
describe.skip('New Employee module', () => {
    
    // happy path
    it('should create new record with valid data', async () => {

        // open login page 
        await driver.get(loginURL);

        // vait for 'login' page url
        await driver.wait(until.urlIs(loginURL),timeout);

        // input username        
        await driver.wait(until.elementLocated(usernameLocator),longtimeout);
        
        await driver.findElement(usernameLocator).clear();
        await driver.findElement(usernameLocator).sendKeys(testUser.username);

        // input password
        await driver.wait(until.elementIsVisible(driver.findElement(passwordLocator)),timeout);
        await driver.findElement(passwordLocator).clear();
        await driver.findElement(passwordLocator).sendKeys(testUser.password);

        // click 'Login' button
        await driver.wait(until.elementIsEnabled(driver.findElement(loginButtonLocator)),timeout);
        await driver.findElement(loginButtonLocator).click();

        // vait for 'welcome' page url
        await driver.wait(until.urlIs(welcomeURL),timeout);



        // login verification
        
    });

});