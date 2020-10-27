import Page from './page';

class firstPage extends Page {

    open(){
        super.open('/index.php?controller=my-account');
    }
    get searchField() {
        return $('//*[@id="search_query_top"]');
    }
    get SearchBtn() {
        return $('//*[@id="searchbox"]/button');
    }
    get availabilytyInStock(){
        return $('//*[@id="center_column"]/ul/li/div/div[2]/span/span');
    }
    

    setSearchId(searchid) {
        this.searchField.setValue(searchid);
    }

    clickSearch() {
        this.SearchBtn.click();
    }
   


}
export default new firstPage();