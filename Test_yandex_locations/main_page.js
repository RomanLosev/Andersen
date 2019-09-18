
let Page = function() {
 const region = element(by.css('.geolink__reg'));
 const elseLink = element(by.css('a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher'));
 
  this.getStartPage = function(page) {
    browser.waitForAngularEnabled(false);
    browser.get(page);
};
this.clickChangeLocation = function(){
  region.click();
};

this.rememberElseContent = function(){
  let EC = ExpectedConditions;  
      browser.wait(EC.presenceOf(elseLink), 5000);

      elseLink.click();
      const contentElse = element.all(by.css('div.home-tabs__more-item'));
      return contentElse.getText();;
};
};
module.exports = new Page();


