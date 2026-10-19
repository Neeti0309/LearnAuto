import { test, expect } from '../fixtures/testFixtures.js'; 
import loginData from '../testData/loginData.json';

test.describe('Login Data Driven Tests', () => {    //Groups everything inside into one named block, for organized reporting and so a shared beforeEach only applies to this group.

    test.beforeEach (async({ loginPage }) => {  //before each test, we will navigate to the login page
        await loginPage.page.goto('https://www.saucedemo.com/'); //navigate to the login page
    });

    loginData.forEach((data) => {   //for each data set in the loginData.json file, we will run a test

        test(`Login test - ${data.scenario} ${data.tag}`, async ({ loginPage, homePage }) => {  //for each data set, we will run a test with the scenario and tag as the test name

        await loginPage.login(data.username, data.password);    //we will use the login method from the loginPage class to login with the username and password from the data set

        if (data.expected === 'success') {  //if the expected result is success, we will check that the inventory container is visible on the home page
            await expect(homePage.inventoryContainer).toBeVisible();    //we will check that the inventory container is visible on the home page
        }

        if (data.expected === 'locked') {   //if the expected result is locked, we will check that the error message is visible and contains the text 'locked out', and that the username and password fields are still visible
            await expect(loginPage.errorMessage).toContainText('locked out');   //we will check that the error message is visible and contains the text 'locked out'
            await expect(loginPage.username).toBeVisible(); //we will check that the username field is still visible
            await expect(loginPage.password).toBeVisible(); //we will check that the password field is still visible
        }

        }); 

    });

});