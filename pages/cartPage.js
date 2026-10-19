export class CartPage {

    constructor(page) {
        this.page = page;
        this.cartContainer = page.locator('.cart_contents_container');
        this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
        this.cartquantity = page.locator('[data-test="item-quantity"]');
    }

}