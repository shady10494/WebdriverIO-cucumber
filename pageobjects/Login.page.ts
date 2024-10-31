class LoginPage {

  ///////////////////// Define elements ///////////////////////////

  get usernameField() {
        return $('//android.widget.EditText[@content-desc="Username input field"]');
    }

    get passwordField() {
        return $('//android.widget.EditText[@password="true"]');
    }

    get loginButton()     {
        return $('//android.view.ViewGroup[@content-desc="Login button"]');
    }
 
  ///////////////////// Define methods for actions ///////////////////////////

    // Enteres user name & password and click on login button
    async loginWithUserNameAndPassword(username: string, password: string) {
        await this.usernameField.waitForDisplayed({timeout:5000}); 
        await this.usernameField.addValue(username);
        await this.passwordField.addValue(password);
        await this.loginButton.click();
    }
}

export const loginPage = new LoginPage();