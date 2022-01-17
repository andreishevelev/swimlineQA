import { testUser } from "../fixtures/testData.js";

// expected result for login with valid credentials
export let acronym = testUser.firstName.charAt(0) + testUser.lastName.charAt(0);

// expected result for invalid credentials
export let loginFailedMessage = 'Login failed.';