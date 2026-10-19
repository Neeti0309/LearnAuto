import { test, expect } from '../fixtures/testFixtures';
import loginData from '../testData/loginData.json';

test.beforeEach(async ({ loginPage}) => {   //before each test, we will navigate to the login page
    await loginPage.page.goto('https://www.saucedemo.com/');    //navigate to the login page
    await loginPage.login(loginData[0].username, loginData[0].password);    //login with the first set of credentials from the loginData.json file
}); 

test('cart page test', async ({ loginPage, homePage, cartPage }) => {   //test to verify that the cart page is displayed after adding an item to the cart
    await expect(homePage.inventoryContainer).toBeVisible();    //verify that the inventory container is visible on the homepage
    await homePage.addBackpackToCart.click();   //click on the "Add to Cart" button for the backpack item
    await homePage.openCart();  //click on the cart link to open the cart page
    //await cartPage.page.waitForTimeout(1000);
    await expect(cartPage.page).toHaveURL(/.*\/cart\.html/);    //verify that the cart page URL is correct
    await expect(cartPage.cartContainer).toBeVisible();         //verify that the cart container is visible on the cart page
    await expect(cartPage.inventoryItemName).toHaveText('Sauce Labs Backpack');     //verify that the item name in the cart is correct
    await expect(cartPage.cartquantity).toHaveText('1');        //verify that the item quantity in the cart is correct
});