let waits = require('../helper/waits');

class MainPage {

  constructor() {
   
    this.marketButton = element(by.css('.home-arrow__tabs > div > a:nth-child(5)'));
    this.musicButton = element(by.css('div.home-arrow__tabs > div > a:nth-child(7)'));
    this.enter = element(by.css('.desk-notif-card__login-title .home-link.home-link_black_yes'));
  }

 clickToLogin() {
  
  waits.waitVisElement(this.enter);
  
  this.enter.click();
 };

 goToMarketPage() {
  
  waits.waitVisElement(this.marketButton);

  this.marketButton.click();
 };

 goToMusicPage() {

  waits.waitVisElement(this.musicButton);
  
  this.musicButton.click();
 };
};
module.exports = new MainPage();


