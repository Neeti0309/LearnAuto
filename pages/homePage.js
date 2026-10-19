export class HomePage { 

    constructor(page) { //Constructor → defines/stores the page locators.
        this.page = page; //page is the parameter/ variable
        this.inventoryContainer = page.locator('.inventory_container'); //inventoryContainer is the element/label on the web page
        this.cartLink = page.locator('.shopping_cart_link'); //cartLink is the element/label on the web page
        this.addBackpackToCart= page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'); //addBackpackToCart is the element/label on the web page
    }

    async openCart() {      //click on the cart link to open the cart page
        await this.cartLink.click(); //cartLink is the element/label on the web page
    }

    async firstItemAddToCart() {    //click on the "Add to Cart" button for the first item in the inventory list
        await this.addBackpackToCart.click();   //addBackpackToCart is the element/label on the web page
    }
}