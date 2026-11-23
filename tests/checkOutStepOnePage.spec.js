import { test,expect } from '../fixtures/testFixtures.js'; //This imports the test and expect functions from the testFixtures.js file that we created earlier.
import loginData from '../testData/loginData.json'; //This imports the loginData object from the loginData.js file that we created earlier.
import checkoutData from '../testData/cartFillinformation.json'; //This imports the checkoutData object from the checkoutData.js file that we created earlier.

test.describe('Checkout Step One Page', () => { //This creates a test suite for the Checkout Step One Page.
    
    test.beforeEach(async ({ loginPage, homePage, cartPage }) => { //This runs before each test in the suite. It logs in and navigates to the cart page.
        await loginPage.page.goto('https://www.saucedemo.com/'); //This navigates to the login page.
        await loginPage.login(loginData[0].username, loginData[0].password); //This logs in using the login method from the loginPage class.
        await homePage.addBackpackToCart.click(); //This clicks the "Add to Cart" button for the backpack item on the home page.
        await homePage.addBikeLightToCart.click(); //This clicks the "Add to Cart" button for the bike light item on the home page.
        await homePage.openCart(); //This opens the cart page.
        await cartPage.clickCheckout(); //This clicks the "Checkout" button on the cart page to navigate to the checkout step one page.
    });
    
    checkoutData.forEach((data) => { //This loops through each set of data in the checkoutData object.
        
        test(`Checkout info - ${data.scenario} ${data.tag}`, async ({ checkoutStepOnePage }) => { //This is the test case. It fills in the checkout information and continues to the next step.
            await expect(checkoutStepOnePage.title).toHaveText('Checkout: Your Information'); //This checks that the title of the page is correct.
            await checkoutStepOnePage.fillInformation(data.firstName, data.lastName, data.postalCode); //This fills in the checkout information using the data from the test data file.
            await checkoutStepOnePage.clickContinue(); //This clicks the continue button to go to the next step.

            if (data.expected === 'success') { //This checks if the expected result is success. If it is, it checks that the next page is displayed.
            await expect(checkoutStepOnePage.page).toHaveURL(/checkout-step-two.html/); //This checks that the URL of the page is correct.
            } 
            else

            if (data.expected === 'error') { //This checks if the expected result is error. If it is, it checks that the error message is displayed.
            await expect(checkoutStepOnePage.errorMessage).toContainText('First Name is required'); //This checks that the error message is correct.
            }
        });
    });
});