import {By, until} from "selenium-webdriver";
import {timeout, longTimeout} from "../util/params.js";
import BasePage from "./BasePage.js";

// pre conditions
export let welcomePageURL = 'https://qa-practical.qa.swimlane.io/welcome';

// locators
//export let usernameLocator = By.id('input-1');

export default class WelcomePage extends BasePage {

}