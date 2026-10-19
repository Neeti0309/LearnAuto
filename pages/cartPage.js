export class CartPage {

    constructor(page) {     //Constructor → defines/stores the page locators.
        this.page = page; //page is the parameter/ variable
        this.cartContainer = page.locator('.cart_contents_container'); //cartContainer is the element/label on the web page
        this.inventoryItemName = page.locator('[data-test="inventory-item-name"]'); //inventoryItemName is the element/label on the web page
        this.cartquantity = page.locator('[data-test="item-quantity"]'); //cartquantity is the element/label on the web page
    }

}