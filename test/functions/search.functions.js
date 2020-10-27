import FirstPage from '../pageObjects/first.page'
class SearchFunction {
search(searchid){
FirstPage.setSearchId(searchid);
FirstPage.clickSearch();
browser.setTimeout({ 'pageLoad': 10000 })
}

}

export default new SearchFunction();