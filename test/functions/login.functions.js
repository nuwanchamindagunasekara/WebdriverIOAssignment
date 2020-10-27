import LoginPage from '../pageObjects/login.page'

class LoginFunction {

    login(userid, password){
        LoginPage.setUserId(userid);
        LoginPage.setPassword(password);
        LoginPage.clickLogin();
        browser.setTimeout({ 'pageLoad': 10000 })
    }


}
export default new LoginFunction();