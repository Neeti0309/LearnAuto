import { test, expect } from '../fixtures/testFixtures.js';
import loginData from '../testData/loginData.json';
import checkoutData from '../testData/cartFillinformation.json';
import checkoutCompleteData from '../testData/checkoutCompleteData.json';   

test.describe('Checkout Complete Page', () => {
    test.beforeEach(async ({ loginPage, homePage, cartPage, checkoutStepOnePage, checkoutStepTwoPage }) => {
        await loginPage.page.goto('/');
        await loginPage.login(loginData[0].username, loginData[0].password);
        await homePage.addBackpackToCart.click();
        await homePage.addBikeLightToCart.click();
        await homePage.openCart();
        await cartPage.clickCheckout();
        await checkoutStepOnePage.fillInformation(checkoutData[0].firstName, checkoutData[0].lastName, checkoutData[0].postalCode);
        await checkoutStepOnePage.clickContinue();
        await checkoutStepTwoPage.clickFinish();
    });

    test('Verify Checkout Complete Page Elements', async ({ checkoutCompletePage }) => {
        await expect(checkoutCompletePage.title).toHaveText(checkoutCompleteData[0].title);
        await expect(checkoutCompletePage.completeHeader).toHaveText(checkoutCompleteData[0].completeHeader);
        await expect(checkoutCompletePage.completeText).toHaveText(checkoutCompleteData[0].completeText);
    });

    test('Verify Back to Home Button', async ({ checkoutCompletePage }) => {
        await checkoutCompletePage.clickBackToHome();
        await expect(checkoutCompletePage.page).toHaveURL(/inventory/);
    });
});