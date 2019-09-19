
let Page = function() {
 const checkbox = element(by.css('li:nth-child(1) > div > a > label'));
 const uncheckbox = element(by.css('._2vOXvqbQ4f > label'));
 const scrollButton = element(by.css('._2Wdscr8iIC'));
 const radioButton = element(by.css('div:nth-child(27) > div > div > fieldset > ul > li:nth-child(1) > div > label > div'));
 const enterScrollButton = element(by.cssContainingText('option', '5 взрослых'));
 const buttonDropdown = element(by.css('.sb-group__field.sb-group__field-adults > .sb-custom-select'));
 const closeButton = element(by.css('.c2-calendar-close-button.c2-calendar-close-button-clearappearance'));
 const inputField = element(by.css('#header-search'));
 
  this.getStartPage = function(page) {
    browser.waitForAngularEnabled(false);
    browser.get(page);
    browser.driver.manage().window().maximize();
};

this.checkUncheckCheckbox = function(){
  
  checkbox.click();
  uncheckbox.click();
 
};

this.toScroll = function(){
  browser.actions().mouseMove(scrollButton).perform();
};

this.radioButton = function(){
  radioButton.click();
};

this.selectValueFromDropdown = function(){
  closeButton.click();
  buttonDropdown.click();
  enterScrollButton.click();
  buttonDropdown.click();
  
};

this.inputText = function(){
 inputField.click().sendKeys("Protractor");
 return inputField.getAttribute("value");
};

this.getClassValue = function(){
  //inputField.click().sendKeys("Protractor");
  return inputField.getAttribute("class");
 };
};
module.exports = new Page();


