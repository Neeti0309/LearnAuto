import { test, expect } from '../fixtures/testFixtures';
import loginData from '../testData/loginData.json';

test.beforeEach(async ({ loginPage}) => {
    await loginPage.page.goto('https://www.saucedemo.com/');
    await loginPage.login(loginData[0].username, loginData[0].password);
}); 

test('cart page test', async ({ loginPage, homePage, cartPage }) => {
    await expect(homePage.inventoryContainer).toBeVisible();
    await homePage.addBackpackToCart.click();
    await homePage.openCart();
    //await cartPage.page.waitForTimeout(1000);
    await expect(cartPage.page).toHaveURL(/.*\/cart\.html/);
    await expect(cartPage.cartContainer).toBeVisible();
    await expect(cartPage.inventoryItemName).toHaveText('Sauce Labs Backpack');
    await expect(cartPage.cartquantity).toHaveText('1');
});