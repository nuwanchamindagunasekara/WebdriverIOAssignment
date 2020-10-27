import Page from './page';

class LandingPage extends Page {
    get SignInBtn() {
       return $('#header > div.nav > div > div > nav > div.header_user_info > a');
    }

    open(){
        super.open('/index.php');
    }
    clickSignIn(){
        this.SignInBtn.click();
        //browser.setTimeout({ 'implicit': 5000 })
    }

  //  get LoadedPageText(){
//return $('//a[@class="login"]');

  //  }

}
export default new LandingPage();