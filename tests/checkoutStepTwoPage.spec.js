import { test,expect } from '../fixtures/testFixtures'; //This imports the test and expect functions from the testFixtures.js file that we created earlier.

import loginData from '../testData/loginData.json'; //This imports the loginData object from the loginData.js file that we created earlier.
import checkoutData from '../testData/cartFillinformation.json'; //This imports the checkoutData object from the checkoutData.js file that we created earlier.
import checkoutStepTwoData from '../testData/checkoutStepTwoData.json'; //This imports the checkoutStepTwoData object from the checkoutStepTwoData.js file that we created earlier.

test.describe('Checkout Step Two Page', () => { //This creates a test suite for the Checkout Step Two Page.
    
    test.beforeEach(async ({ loginPage, homePage, cartPage, checkoutStepOnePage }) => { //This runs before each test in the suite. It logs in and navigates to the checkout step two page
        await loginPage.page.goto('/'); //This navigates to the login page.
        await loginPage.login(loginData[0].username, loginData[0].password); //This logs in using the login method from the loginPage class.
        await homePage.addBackpackToCart.click(); //This clicks the "Add to Cart" button for the backpack item on the home page.
        await homePage.addBikeLightToCart.click();
        await homePage.openCart(); //This opens the cart page.
        await cartPage.clickCheckout(); //This clicks the "Checkout" button on the cart page to navigate to the checkout step one page.
        await checkoutStepOnePage.fillInformation(checkoutData[0].firstName, checkoutData[0].lastName, checkoutData[0].postalCode); //This fills in the checkout information using the data from the test data file.
        await checkoutStepOnePage.clickContinue(); //This clicks the continue button to go to the next step.
    });

    test('Verify Checkout Step Two Page Elements', async ({ checkoutStepTwoPage }) => { //This is the test case. It verifies that all the elements on the checkout step two page are displayed correctly.
        await expect(checkoutStepTwoPage.title).toHaveText('Checkout: Overview'); //This checks that the title of the page is correct.
        await expect(checkoutStepTwoPage.itemQuantity).toHaveText(['1', '1']); //This checks that the item quantity is correct.
        await expect(checkoutStepTwoPage.itemName).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
        await expect (checkoutStepTwoPage.paymentInfoValue).toHaveText(checkoutStepTwoData[0].paymentValue); //This checks that the payment information is correct.
        await expect(checkoutStepTwoPage.shippingInfoValue).toHaveText(checkoutStepTwoData[0].shippingValue); //This checks that the shipping information is correct.
        
    });

    test('Verify Checkout Step Two Page Total Calculation', async ({ checkoutStepTwoPage }) => { //This is the test case. It verifies that the total calculation on the checkout step two page is correct.
        
        // 1. Read every item price from the page, e.g. ["$29.99", "$9.99"]
        const itemPrice = await checkoutStepTwoPage.itemPrice.allTextContents();

         // 2. Convert to numbers and add them up
        const subtotal = itemPrice
            .map(text => parseFloat(text.replace('$', '')))
            .reduce((sum, price) => sum + price, 0); 

        // 3. Calculate tax and total (rate is a constant, see below)
        const taxRate = checkoutStepTwoData[0].taxRate; //This gets the tax rate from the test data file.
        const tax = subtotal * taxRate;
        const total = subtotal + tax;

        // 4. Compare with what the page shows, rounded to 2 decimals
        await expect(checkoutStepTwoPage.subtotalLabel).toHaveText(`Item total: $${subtotal.toFixed(2)}`); //This checks that the subtotal is correct.
        await expect(checkoutStepTwoPage.taxLabel).toHaveText(`Tax: $${tax.toFixed(2)}`); //This checks that the tax is correct.
        await expect(checkoutStepTwoPage.totalLabel).toHaveText(`Total: $${total.toFixed(2)}`); //This checks that the total is correct.
        
    });

    test('Verify Finish navigate to checkout complete page', async ({ checkoutStepTwoPage }) => { //This is the test case. It verifies that the finish and cancel buttons on the checkout step two page work correctly.
        await checkoutStepTwoPage.clickFinish(); //This clicks the finish button to complete the checkout process.
        await expect(checkoutStepTwoPage.page).toHaveURL(/checkout-complete/); //This checks that the URL of the page is correct.
        });

    test('Verify cancel goes back to the inventory page', async ({ checkoutStepTwoPage }) => { //This is the test case. It verifies that the cancel button on the checkout step two page works correctly.
        await checkoutStepTwoPage.clickCancel(); //This clicks the cancel button to go back to the previous page.
        await expect(checkoutStepTwoPage.page).toHaveURL(/inventory/); //This checks that the URL of the page is correct.
        });
});
