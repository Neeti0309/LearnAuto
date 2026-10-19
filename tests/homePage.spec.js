import { test, expect } from '../fixtures/testFixtures';
import loginData from '../testData/loginData.json';

test.beforeEach(async ({ homePage, loginPage}) => {     //before each test, we will navigate to the login page
    await loginPage.page.goto('https://www.saucedemo.com/');    //navigate to the login page
});

test('homepage test', async ({ homePage, loginPage }) => {  //test to verify that the homepage is displayed after a successful login
    await loginPage.login(loginData[0].username, loginData[0].password);    //login with the first set of credentials from the loginData.json file
    await loginPage.page.waitForTimeout(1000);      //wait for 1 second to allow the page to load completely
    await expect(homePage.inventoryContainer).toBeVisible();    //verify that the inventory container is visible on the homepage
    await homePage.addBackpackToCart.click();       //click on the "Add to Cart" button for the backpack item
    await expect(homePage.cartLink).toHaveText('1');    //verify that the cart link shows "1" indicating that one item has been added to the cart
});