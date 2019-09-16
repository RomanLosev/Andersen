describe('Locations content', function() {
    var region = element(by.css('.geolink__reg'));
    var regionField = element(by.css('.input__control '));
    var etc = element(by.css('a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher'));
    
    it('should read the content "etc" for London and Paris', function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://yandex.by/');

      region.click();
      regionField.clear();
      regionField.sendKeys('Лондон');
      regionField.submit();

      let EC = ExpectedConditions;  
      browser.wait(EC.visibilityOf(etc), 5000);

      etc.click();
      var contentLondon = element.all(by.css('div.home-tabs__more-item'));

      region.click();
      regionField.clear();
      regionField.sendKeys('Париж');
      regionField.submit();

      browser.wait(EC.visibilityOf(etc), 5000);

      etc.click();
      var contentParis = element.all(by.css('div.home-tabs__more-item'));
      
      expect(contentLondon.getText()).toEqual(contentParis.getText());
    });
    });