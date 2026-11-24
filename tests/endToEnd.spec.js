import { test, expect } from '../fixtures/testFixtures.js';
import loginData from '../testData/loginData.json';
import checkoutData from '../testData/cartFillinformation.json';
import checkoutCompleteData from '../testData/checkoutCompleteData.json';

test.describe('End to End Test', () => {
    test('Verify End to End Checkout Process', async ({ loginPage, homePage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
        await loginPage.page.goto('/');
        await loginPage.login(loginData[0].username, loginData[0].password);
        await expect(homePage.inventoryContainer).toBeVisible();

        await homePage.addBackpackToCart.click();
        await homePage.addBikeLightToCart.click();
        await expect(homePage.cartLink).toHaveText('2');

        await homePage.openCart();
        await expect(cartPage.page).toHaveURL(/.*\/cart\.html/);

        await cartPage.clickCheckout();
        await expect(checkoutStepOnePage.title).toHaveText('Checkout: Your Information');

        await checkoutStepOnePage.fillInformation(checkoutData[0].firstName, checkoutData[0].lastName, checkoutData[0].postalCode);
        await checkoutStepOnePage.clickContinue();
        await expect(checkoutStepTwoPage.title).toHaveText('Checkout: Overview');
        await expect(checkoutStepTwoPage.itemName).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);

        await checkoutStepTwoPage.clickFinish();
        await expect(checkoutCompletePage.title).toHaveText('Checkout: Complete!');
        await expect(checkoutCompletePage.completeHeader).toHaveText(checkoutCompleteData[0].completeHeader);

        await checkoutCompletePage.clickBackToHome();
        await expect(homePage.inventoryContainer).toBeVisible();
    });
});

