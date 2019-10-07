let waits = require('../helper/waits');

class CamerasPage {

  constructor() {
   
    this.waitButton1  = element(by.css('.title.title_size_32.i-bem.title_changeable_yes.title_js_inited'));
    this.sortingButton  = element(by.css('div.n-filter-block_pos_left.i-bem > div:nth-child(3) > a'));
    this.price1  = element(by.css('div:nth-child(1) > div.n-snippet-cell2__body > div.n-snippet-cell2__price > div > div > a > div'));
    this.contentPrice = element.all(by.css('div.n-snippet-cell2__price > div > div > a > div'));
  }
    
    sortingByPrice() {
    
      waits.waitVisElement(this.waitButton1);
         
      browser.actions().doubleClick(this.sortingButton).perform();
    };
    
    async checkDecreasingArray() {
    
      let contentPrice =  await this.contentPrice.getText();
      let newcontentPrice = contentPrice.map(item => item.slice(0, -4));
      let newcontentPrice1 = newcontentPrice.map(item => item.replace(/,/g, '.'));
      let newcontentPrice2 = newcontentPrice1.map(item => item.replace(/\s/g, ''));
      let newcontentPriceNumber = newcontentPrice2.map(Number);
    
      let result;
      for (let i = 0; i < newcontentPriceNumber.length-1; i++){
       if ( newcontentPriceNumber[i] < newcontentPriceNumber[i+1]) {
          result = false;
       } else {
         result = true;
       }
          }return result;
    };
}
module.exports = new CamerasPage();
