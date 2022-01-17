import LoginPage from "../pages/LoginPage.js";
import {testUser} from "../fixtures/testData.js";
import {acronym, loginFailedMessage} from "..//asserts/loginPage.js";

// pages identification
let loginPage = new LoginPage();

// Login module test suite
describe('Log in module', () => {

    loginPage.beforeBase();
    loginPage.afterBase();

    // happy path
    it('should log in with valid credentials', async () => {

        // open login page 
        await loginPage.openPage();

        // input valid username        
        await loginPage.inputUsername(testUser.username);

        // input valid password
        await loginPage.inputPassword(testUser.password);

        // click 'Login' button
        await loginPage.clickLogin();

        // login verification
        await loginPage.loginVerification(acronym);

    });

    // negative (valid username and invalid password)
    it('should show \'Login failed.\' message with valid username and invalid password ', async () => {

        // open login page 
        await loginPage.openPage();

        // input valid username        
        await loginPage.inputUsername(testUser.username);

        // input invalid password
        await loginPage.inputPassword(testUser.invalidPassword);

        // click 'Login' button
        await loginPage.clickLogin();

        // login failed message verification
        await loginPage.invalidPasswordVerification(loginFailedMessage);

    });

    // security (password copy disabled)
    it('should disable password copy', async () => {

        // open login page
        await loginPage.openPage();

        // input username
        await loginPage.inputUsername(testUser.username);

        // input invalid password
        await loginPage.inputPassword(testUser.invalidPassword);

        // copy password disabled verification
        await loginPage.passDisabledVerification(testUser.username);
    });
});