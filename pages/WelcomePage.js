import { By, until } from "selenium-webdriver";
import { timeout, longTimeout} from "../util/params.js";

// pre conditions
export let welcomePageURL = 'https://qa-practical.qa.swimlane.io/welcome';

// locators
export let usernameLocator = By.id('input-1');

export default class LoginPage {

    //driver;

    constructor() {
        //super();
        //this.driver = driver;
    }

        // open login page 
        async openPage(){
        await driver.get(welcomePageURL);
        await driver.wait(until.urlIs(welcomePageURL),timeout);
        }

}