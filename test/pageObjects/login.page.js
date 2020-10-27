import Page from './page';

class LoginPage extends Page {
    get userIdField() {
        return $('//input[@name="email"]');
    }
    get passwordField() {
        return $('//input[@name="passwd"]');
    }
    get loginBtn() {
        return $('//*[@id="SubmitLogin"]/span');
    }

    open() {
        super.open('/index.php?controller=authentication&back=my-account');
    }

    setUserId(userid) {
        this.userIdField.setValue(userid);
    }
 
    setPassword(password) {
        this.passwordField.setValue(password);
    }
 
    clickLogin() {
        this.loginBtn.click();
    }
}
export default new LoginPage();