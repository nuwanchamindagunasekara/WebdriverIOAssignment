import secondPage from '../pageObjects/second.result'
class CartFunction {
    AddToCart(){
        secondPage.clickCartArea();
        secondPage.clickAddtoCart();
        browser.setTimeout({ 'implicit': 5000 })
    }

    ProceedToCheckout(){
        secondPage.switchToWindowAddToCart();
        secondPage.clickProceedToCheckout()
    }

    getPriceText(){
        secondPage.clickCartArea();
        secondPage.getPrice();

    }

}
export default new CartFunction();