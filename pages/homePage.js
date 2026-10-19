export class HomePage {

    constructor(page) {
        this.page = page;
        this.inventoryContainer = page.locator('.inventory_container');
        this.cartLink = page.locator('.shopping_cart_link');
        this.addBackpackToCart= page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async openCart() {
        await this.cartLink.click();
    }

    async firstItemAddToCart() {
        await this.addBackpackToCart.click();
    }
}