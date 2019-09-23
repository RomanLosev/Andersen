
let mainPage = function() {
 const enter = element(by.css('.desk-notif-card__login-title .home-link.home-link_black_yes'));
 const unlogin = element(by.xpath('.//span[contains(text(), "Войти в почту")]'));
 const videoButton = element(by.css('div.home-arrow__tabs > div > a:nth-child(1)'));
 const video = element(by.xpath('.//a[contains(text(), "Фильмы для вас")]'));
 pictures  = element(by.css('div.home-arrow__tabs > div > a:nth-child(2)'));
 news  = element(by.css('div.home-arrow__tabs > div > a:nth-child(3)'));
 maps  = element(by.css('div.home-arrow__tabs > div > a:nth-child(4)'));
 market  = element(by.css('div.home-arrow__tabs > div > a:nth-child(5)'));
 translate  = element(by.css('div.home-arrow__tabs > div > a:nth-child(6)'));
 music  = element(by.css('div.home-arrow__tabs > div > a:nth-child(7)'));
 const languageButton = element(by.xpath('.//a[contains(text(), "Rus")]'));
 const dropdownLanguageButton = element(by.css('div.popup2.popup2_view_default.popup2_theme_normal.popup2_alt-shadow_yes.popup2_autoclosable_yes.popup2_target_anchor.i-bem.popup2_js_inited.popup2_direction_bottom-center.popup2_visible_yes > ul > div:nth-child(2)'));

this.clickToLogin = function(){
 let EC = ExpectedConditions;  
  browser.wait(EC.presenceOf(enter), 10000);

  enter.click();
};

this.sureOfLogout = function(){
  let EC = ExpectedConditions;  
   browser.wait(EC.visibilityOf(unlogin), 10000);
 
   return unlogin.isDisplayed();
 };

this.navigationVideo = function(){
  let EC = ExpectedConditions;  
   browser.wait(EC.visibilityOf(videoButton), 10000);
 
   videoButton.click();

  browser.getAllWindowHandles().then(function(handles){
    browser.switchTo().window(handles[1]).then(function(){
    });
});
  let EC1 = ExpectedConditions;  
   browser.wait(EC1.visibilityOf(video), 10000);

    return video.isDisplayed();
 };

this.navigations = function(category){
   category.click();

   return browser.getCurrentUrl();
 };

this.changeLanguages = function(){
   let EC = ExpectedConditions;  
    browser.wait(EC.visibilityOf(languageButton), 10000);

   languageButton.click();
   dropdownLanguageButton.click();
  };
};
module.exports = new mainPage();


