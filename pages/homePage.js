export class HomePage {

    constructor(page) {
        this.page = page;
        this.inventoryContainer = page.locator('.inventory_container');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async openCart() {
        await this.cartLink.click();
    }
}