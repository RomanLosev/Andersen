
let Page1 = function() {
 const enter = element(by.css('.desk-notif-card__login-title .home-link.home-link_black_yes'));

  this.getStartPage = function(page) {
    browser.waitForAngularEnabled(false);
    browser.get(page);
    browser.driver.manage().window().maximize();
};
this.clickToLogin = function(){
 let EC = ExpectedConditions;  
      browser.wait(EC.presenceOf(enter), 30000);

  enter.click();
};
};
module.exports = new Page1();


