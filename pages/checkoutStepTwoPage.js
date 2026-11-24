export class CheckoutStepTwoPage {
    constructor(page) {
        this.page = page;
        this.title = page.getByTestId('title');
        this.itemQuantity = page.getByTestId('item-quantity');
        this.itemName = page.getByTestId('inventory-item-name');
        this.itemDescription = page.getByTestId('inventory-item-desc');
        this.itemPrice = page.getByTestId('inventory-item-price');
        this.paymentInfoValue = page.getByTestId('payment-info-value');
        this.shippingInfoValue = page.getByTestId('shipping-info-value');
        this.subtotalLabel = page.getByTestId('subtotal-label');
        this.taxLabel = page.getByTestId('tax-label');
        this.totalLabel = page.getByTestId('total-label');
        this.finishButton = page.getByTestId('finish');
        this.cancelButton = page.getByTestId('cancel');
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }

}    