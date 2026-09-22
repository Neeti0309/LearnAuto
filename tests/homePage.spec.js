import { test, expect } from '../fixtures/testFixtures';
import loginData from '../testData/loginData.json';

test.beforeEach(async ({ homePage, loginPage}) => {
    await loginPage.page.goto('https://www.saucedemo.com/');
});

test('homepage test', async ({ homePage, loginPage }) => {
    await loginPage.login(loginData[0].username, loginData[0].password);
    await loginPage.page.pause(1000);
    await expect(homePage.inventoryContainer).toBeVisible();
});