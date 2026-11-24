export class CheckoutCompletePage {
    constructor(page) {
        this.page = page;
        this.title = page.getByTestId('title'); //This gets the title of the checkout complete page.
        this.completeHeader = page.getByTestId('complete-header'); //This gets the header of the checkout complete page.
        this.completeText = page.getByTestId('complete-text'); //This gets the text of the checkout complete page.
        this.backToHomeButton = page.getByTestId('back-to-products');
    }

    async clickBackToHome() {
        await this.backToHomeButton.click();
    }
}