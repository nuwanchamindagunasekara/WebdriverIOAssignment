import Page from './page';

class secondPage extends Page {
    get HoverOverAndSelectCart() {
        return $('//*[@id="center_column"]/ul/li/div/div[2]');
    }
    get AddToCartBtn() {
        return $('//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]/span');
    }
    get priceDisplayed(){
        
        return $('//*[@id="center_column"]/ul/li/div/div[1]/div/div[2]/span');
    } 

    get shippingPrice(){
        return $('//*[@id="layer_cart"]/div[1]/div[2]/div[2]/span')
    }

    get totalPrice(){
        return $('//*[@id="layer_cart"]/div[1]/div[2]/div[3]/span')        
    }
    
    get ProceedToCheckoutBtn() {
        return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span');
    }
    open(){
        super.open('/index.php?controller=search&orderby=position&orderway=desc&search_query=T-Shirt&submit_search=');
    }
    clickCartArea() {
        this.HoverOverAndSelectCart.click();
    }

    clickAddtoCart() {
        this.AddToCartBtn.click();
    }
    switchToWindowAddToCart(){
        browser.switchWindow('controller=search&orderby=position&orderway=desc&search_query=T-Shirt&submit_search=');
        //ToWindow('controller=search&orderby=position&orderway=desc&search_query=T-Shirt&submit_search=');

    }
    clickProceedToCheckout() {
        this.ProceedToCheckoutBtn.click();
    }
 


}
export default new secondPage();