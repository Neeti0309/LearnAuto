import { test, expect } from '../fixtures/testFixtures.js';
import loginData from '../testData/loginData.json';

test.describe('Login Data Driven Tests', () => {

    test.beforeEach (async({ loginPage }) => {
        await loginPage.page.goto('https://www.saucedemo.com/');
    });

    loginData.forEach((data) => {

        test(`Login test - ${data.scenario} ${data.tag}`, async ({ loginPage, homePage }) => {

        await loginPage.login(data.username, data.password);

        if (data.expected === 'success') {
            await expect(homePage.inventoryContainer).toBeVisible();
        }

        if (data.expected === 'locked') {
            await expect(loginPage.errorMessage).toContainText('locked out');
        }

        });

    });

});