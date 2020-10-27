import LandingPage from '../pageObjects/landing.page';
import LoginFunction from '../functions/login.functions';
import SearchFunction from '../functions/search.functions';
import CartFunction from '../functions/cart.functions';
import secondPage from '../pageObjects/second.result';
import firstPage from '../pageObjects/first.page';


describe('Workshop test suite',() =>{
    it('Go to the landing page',() =>{
        browser.maximizeWindow();
        LandingPage.open();
        LandingPage.clickSignIn();
        expect(browser).toHaveTitle('Login - My Store');
        LoginFunction.login("nuwanchamindawusl@gmail.com","Cmd$1234");
        expect(browser).toHaveTitle('My account - My Store');
        SearchFunction.search("T-Shirt");
        //secondPage.clickCartArea();        
        expect(firstPage.availabilytyInStock).toHaveTextContaining('In stock');
        secondPage.clickCartArea();        
        expect(secondPage.priceDisplayed).toHaveTextContaining('$16.51');           
        CartFunction.AddToCart();
        expect(secondPage.shippingPrice).toHaveTextContaining('$2.00');  
        expect(secondPage.totalPrice).toHaveTextContaining('$18.51');  
        CartFunction.ProceedToCheckout();
        browser.setTimeout({ 'pageLoad': 10000 });
        expect(browser).toHaveTitle('Order - My Store')
    })
})