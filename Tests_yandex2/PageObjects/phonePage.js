let waits = require('../helper/waits');

class PhonePage {

  constructor() {
   
    this.waitButton  = element(by.css('.headline__header-title'));
    this.element1 = element(by.css('div:nth-child(1) > div.n-snippet-cell2__hover > div > div > div'));
    this.infoElement1  = element(by.css('div:nth-child(1) > div.n-snippet-cell2__header > div.n-snippet-cell2__title > a'));
    this.element2 = element(by.css('div:nth-child(2) > div.n-snippet-cell2__hover > div > div > div'));
    this.infoElement2  = element(by.css('div:nth-child(2) > div.n-snippet-cell2__header > div.n-snippet-cell2__title > a'));
    this.comparisonButton  = element(by.css('div.popup-informer__controls'));
    this.infoInCompareElement2  = element(by.css('div.n-compare-cell.n-compare-cell_product_573324027.n-compare-cell-draggable.i-bem.n-compare-cell_js_inited > a'));
    this.infoInCompareElement1  = element(by.css('div.n-compare-cell.n-compare-cell_product_1731400948.n-compare-cell-draggable.i-bem.n-compare-cell_js_inited.n-compare-cell_mode_last > a'));
    this.deleteButton  = element(by.css('.n-compare-toolbar__action-clear.link'));
    this.emptyPage = element.all(by.css('.n-compare-empty__content'));
  }

  addToComparingFirstElement() {

   waits.waitVisElement(this.waitButton);
   this.element1.click();
   return this.infoElement1.getAttribute("title");
  };

  addToComparingSecondElement() {

   this.element2.click();
   return this.infoElement2.getAttribute("title");
  };

  goToComparePage() {

   waits.waitVisElement(this.comparisonButton);

   this.comparisonButton.click();
  };

  getInfoFistElementInComparing() {
  
   return this.infoInCompareElement1.getText();
  };

  getInfoSecondElementInComparing() {
     
   return this.infoInCompareElement2.getText();
  };

  deleteCompareElements() {

   waits.waitVisElement(this.deleteButton);

   this.deleteButton.click();
  };

  getInfoAboutEmptyElements() {
  
   waits.waitUrl('https://market.yandex.by/compare');

   return browser.getCurrentUrl();
  };
}
module.exports = new PhonePage();
