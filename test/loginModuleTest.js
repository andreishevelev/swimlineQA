import {Builder} from "selenium-webdriver";
import LoginPage from "../pages/LoginPage.js";
import { testUser } from "..//fixtures/users.js";
import { acronym, loginFailedMessage } from "..//asserts/loginPage.js";
import { browser } from "..//util/params.js";

// Login module test suite
describe.only('Log in module', () => {
    
    // happy path
    it('should log in with valid credentials', async () => {

        let driver = await new Builder().forBrowser(browser).build();

        // pages identification
        let loginPage = new LoginPage(driver);

        // open login page 
        await loginPage.openPage();

        // valid username        
        await loginPage.inputUsername(testUser.username);

        // valid password
        await loginPage.inputPassword(testUser.password);

        // click 'Login' button
        await loginPage.clickLogin();

        // login verification
        await loginPage.loginVerification(acronym);

        await driver.quit();
        
    });

    // negative (valid username and invalid password)
    it('should show \'Login failed.\' message with valid username and invalid password ', async () => {

        let driver = await new Builder().forBrowser(browser).build();

        // pages identification
        let loginPage = new LoginPage(driver);

        // open login page 
        await loginPage.openPage();

        // valid username        
        await loginPage.inputUsername(testUser.username);

        // invalid password
        await loginPage.inputPassword(testUser.invalidPassword);

        // click 'Login' button
        await loginPage.clickLogin();

        // login failed message verification
        await loginPage.unvalidPasswordVerification(loginFailedMessage);

        await driver.quit();
        
    });

});