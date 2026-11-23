export class CartPage {

    constructor(page) {     //Constructor → defines/stores the page locators.
        this.page = page; //page is the parameter/ variable
        this.cartContainer = page.locator('.cart_contents_container'); //cartContainer is the element/label on the web page
        this.inventoryItemName = page.locator('[data-test="inventory-item-name"]'); //inventoryItemName is the element/label on the web page
        this.cartquantity = page.locator('[data-test="item-quantity"]'); //cartquantity is the element/label on the web page
        this.checkoutButton = page.getByTestId('checkout'); //checkoutButton is the element/label on the web page
    }

    async clickCheckout() { //This is a method that clicks the checkout button on the cart page.
        await this.checkoutButton.click(); //checkoutButton is the parameter/ variable
    }

}