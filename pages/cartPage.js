export class CartPage {

    constructor(page) {
        this.page = page;
        this.cartContainer = page.locator('.cart_contents_container');
    }

}