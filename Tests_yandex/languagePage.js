let languagePage = function() {
    const languageChange  = element(by.css('.button.select__button.button_theme_normal.button_arrow_down.button_size_m.i-bem.button_js_inited'));
    const englishLanguageButton  = element(by.xpath('.//span[contains(text(), "English")]'));
    const saveLanguageButton  = element(by.css('#form__a11y > div:nth-child(4) > div > button'));
    const languageButton = element(by.xpath('.//a[contains(text(), "Rus")]'));

  this.changeEnglishLanguage = function(){
     let EC1 = ExpectedConditions;  
        browser.wait(EC1.visibilityOf(languageChange), 10000);
 
    languageChange.click();

    let EC2 = ExpectedConditions;  
        browser.wait(EC2.visibilityOf(englishLanguageButton), 10000);
 
    englishLanguageButton.click();
 
    let EC3 = ExpectedConditions;  
        browser.wait(EC3.visibilityOf(saveLanguageButton), 10000);

    saveLanguageButton.click();
 
    let EC4 = ExpectedConditions;  
        browser.wait(EC4.visibilityOf(languageButton), 10000);
 
     return languageButton.getText();
   };
};
module.exports = new languagePage();