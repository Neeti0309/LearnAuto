import { test as base } from '@playwright/test'; //Import Playwright's test, but give it another name: base.

import { LoginPage } from '../pages/loginPage.js'; //This imports the LoginPage class that you created earlier.
import { HomePage } from '../pages/homePage.js'; //This imports the homePage class that you created earlier.
import { CartPage } from '../pages/cartPage.js'; //This imports the cartPage class that you created earlier.

export const test = base.extend({                //base - This is the original Playwright test that we imported.
                                                //extend - This is a method that allows us to add new fixtures to the original Playwright test.
    loginPage: async ({ page }, use) => {       //loginPage - This is the name of the new fixture that we are creating.
        const loginPage = new LoginPage(page);  // This creates a new instance of the LoginPage class and passes the page object to it.
        await use(loginPage);                   //use - This is a function that allows us to use the new fixture in our tests.
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    }
});

export { expect } from '@playwright/test'; //This exports the expect function from Playwright's test module so that we can use it in our tests.