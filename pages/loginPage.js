export class LoginPage {
    //Constructor → defines/stores the page locators.
    //Constructor = What elements are on the page?
    constructor(page) {     
        this.page = page;   //page is the parameter/ variable
        
        this.username = page.getByLabel('Username'); // Username is the element/label on the web page 
        this.password = page.getByLabel('Password'); // password is the element/label on the web page
        //this.loginButton = page.getByRole('button',{ name: 'Login' });
        this.loginButton = page.getByTestId('login-button'); //loginButton is the element/label on the web page
        this.errorMessage = page.locator('[data-test="error"]'); //errorMessage is the element/label on the web page

    }
    //Method - defines the actions we perform using those locators.
    //Method = What do I do with those elements?
        async login(username, password) //login is the method name, username and password are the parameters/ variables
        {
            await this.username.fill(username); //username is the parameter/ variable 
            await this.password.fill(password); //password is the parameter/ variable
            await this.loginButton.click();     //loginButton is the parameter/ variable

        }
}