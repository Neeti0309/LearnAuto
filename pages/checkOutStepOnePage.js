export class CheckOutStepOnePage {
    constructor(page) {
        this.page = page;
        this.title = page.getByTestId('title'); // Checkout: Your Information is the element/label on the web page
        this.firstName = page.getByTestId('firstName'); // First Name is the element/label on the web page
        this.lastName = page.getByTestId('lastName'); // Last Name is the element/label on the web page
        this.postalCode = page.getByTestId('postalCode'); // Zip/Postal Code is the element/label on the web page
        this.continueButton = page.getByTestId('continue'); // Continue button is the element/label on the web page
        this.cancelButton = page.getByTestId('cancel'); // Cancel button is the element/label on the web page
        this.errorMessage = page.getByTestId('error'); // Error message is the element/label on the web page
    }

    async fillInformation(firstName, lastName, postalCode) {
        await this.firstName.fill(firstName); // firstName is the parameter/ variable
        await this.lastName.fill(lastName); // lastName is the parameter/ variable
        await this.postalCode.fill(postalCode); // postalCode is the parameter/ variable
    }

    async clickContinue() {
        await this.continueButton.click(); // continueButton is the parameter/ variable
    }

    async clickCancel() {
        await this.cancelButton.click(); // cancelButton is the parameter/ variable
    }   
}

