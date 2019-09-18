
let Locations = function() {
 const regionField = element(by.css('.input__control '));
 const regionAuto = element(by.css('li:nth-child(1) > div.b-autocomplete-item__reg'));  

this.getLocation = function(city){
  regionField.clear();
  regionField.sendKeys(city);
  
  let EC = ExpectedConditions;  
  browser.wait(EC.presenceOf(regionAuto), 10000);

  regionAuto.click();
};
};
module.exports = new Locations();


