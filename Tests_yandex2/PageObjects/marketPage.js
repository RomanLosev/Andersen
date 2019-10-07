let waits = require('../helper/waits');

class MarketPage {

  constructor() {
   
    this.inputField = element(by.css('#header-search'));
    this.enterButton = element(by.css('.search2__button'));
    this.electronikButton  = element(by.css('div:nth-child(3) > a'));
    this.kameryButton  = element(by.css('div:nth-child(4) > div._3VMnEHDoVX > ul > li:nth-child(3) > div > a'));
    this.applianceButton  = element(by.css('div.n-w-tabs__horizontal-tabs > div:nth-child(4) > a'));
    this.fridgeButton  = element(by.xpath('(.//a[@class="_2qvOOvezty _2x2zBaVN-3 _9qbcyI_fyS"])[1]'));
  }

 enterAndSearchProduct() {
  
  waits.waitVisElement(this.inputField);

  this.inputField.click().sendKeys("Note 8");
  this.enterButton.click();
 };

 goToElectronikPage() {
  
  this.electronikButton.click();
 };

 goToKameryPage() {
  
  this.kameryButton.click();
 };

 goToAppliancesPage() {

  waits.waitVisElement(this.applianceButton);
  
  this.applianceButton.click();
 };
  
 goToFridgePage() {

  waits.waitVisElement(this.fridgeButton);
    
  this.fridgeButton.click();
 };
}
module.exports = new MarketPage();

