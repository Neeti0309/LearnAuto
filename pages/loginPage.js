export class LoginPage {
    //Constructor → defines/stores the page locators.
    //Constructor = What elements are on the page?
    constructor(page) {
        this.page = page;
        
        this.username = page.getByLabel('Username'); // Username is the element/label on the web page 
        this.password = page.getByLabel('Password'); // password is the element/label on the web page
        this.loginButton = page.getByRole('button',{ name: 'Login' });
        this.errorMessage = page.locator('[data-test="error"]');

    }
    //Method - defines the actions we perform using those locators.
    //Method = What do I do with those elements?
        async login(username, password) 
        {
            await this.username.fill(username); //username is the parameter/ variable 
            await this.password.fill(password); //password is the parameter/ variable
            await this.loginButton.click();

        }
}