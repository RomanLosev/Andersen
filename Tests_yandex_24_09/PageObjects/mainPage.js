
class MainPage {
  constructor() {
    this.enter = element(by.css('.desk-notif-card__login-title .home-link.home-link_black_yes'));
    this.unlogin = element(by.css('.home-link.desk-notif-card__login-mail-promo'));
    this.videoButton = element(by.css('div.home-arrow__tabs > div > a:nth-child(1)'));
    this.pictures  = element(by.css('div.home-arrow__tabs > div > a:nth-child(2)'));
    this.news  = element(by.css('div.home-arrow__tabs > div > a:nth-child(3)'));
    this.maps  = element(by.css('div.home-arrow__tabs > div > a:nth-child(4)'));
    this.market  = element(by.css('div.home-arrow__tabs > div > a:nth-child(5)'));
    this.translate  = element(by.css('div.home-arrow__tabs > div > a:nth-child(6)'));
    this.music  = element(by.css('div.home-arrow__tabs > div > a:nth-child(7)'));
    this.languageButton = element(by.css('.headline__bar>div>div>div>div>a'));
    this.dropdownLanguageButton = element(by.css('div.popup2.popup2_view_default.popup2_theme_normal.popup2_alt-shadow_yes.popup2_autoclosable_yes.popup2_target_anchor.i-bem.popup2_js_inited.popup2_direction_bottom-center.popup2_visible_yes > ul > div:nth-child(2)'));
    this.EC = ExpectedConditions;
  }

clickToLogin() {
  
  browser.wait(this.EC.presenceOf(this.enter), 10000);

  this.enter.click();
};

  clickToLogin  () {
  
  browser.wait(this.EC.presenceOf(this.enter), 10000);

  this.enter.click();
  };

sureOfLogout() {
  
   browser.wait(this.EC.visibilityOf(this.unlogin), 10000);
 
   return this.unlogin.isDisplayed();
 };

navigationVideo() {
 
   browser.wait(this.EC.visibilityOf(this.videoButton), 10000);
 
   this.videoButton.click();

  browser.getAllWindowHandles().then(function(handles){
    browser.switchTo().window(handles[1]).then(function(){
    });
 });

   return browser.getCurrentUrl();
 };

navigations(category){
  category.click();

   return browser.getCurrentUrl();
 };

changeLanguages(){
   
    browser.wait(this.EC.visibilityOf(this.languageButton), 10000);

    this.languageButton.click();
    this.dropdownLanguageButton.click();
  };
};
module.exports = new MainPage();


