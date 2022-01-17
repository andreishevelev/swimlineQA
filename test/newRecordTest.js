import {Builder} from "selenium-webdriver";
import {browser} from "../util/params.js";
import NewRecordPage from "../pages/NewRecordPage.js";
import {testEmployee} from "../fixtures/testData.js";
import LoginPage from "../pages/LoginPage.js";

// pages identification
let newRecordPage = new NewRecordPage();
let loginPage = new LoginPage;

// Application Records module
describe('\'New record\' form', () => {

    newRecordPage.beforeBase();
    newRecordPage.afterBase();

    // happy path
    it('should create record with required fields', async () => {

        // go to Base Test State
        await loginPage.successLogin();
        await newRecordPage.clickNewRecordButton();

        // fill out required fields
        await newRecordPage.inputFirstName(testEmployee.firstName);
        await newRecordPage.inputLastName(testEmployee.lastName);
        await newRecordPage.inputCityName(testEmployee.city);

        // click save button
        await newRecordPage.clickSave();
        await newRecordPage.clickSavePopup();

        // record created verification
        await newRecordPage.recordCreatedVerification();
    });

        // test all fields
        it('should create record with all fields', async () => {

            // go to Base Test State
            await loginPage.successLogin();
            await newRecordPage.clickNewRecordButton();
    
            // fill out all fields
            await newRecordPage.inputFirstName(testEmployee.firstName);
            await newRecordPage.inputLastName(testEmployee.lastName);
            await newRecordPage.inputCityName(testEmployee.city);
    
            // click save button
            await newRecordPage.clickSave();
            await newRecordPage.clickSavePopup();
    
            // record created verification
            await newRecordPage.recordCreatedVerification();
        });
});