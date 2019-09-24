class LanguagePage {
    constructor() {
    this.languageChange  = element(by.css('.button.select__button.button_theme_normal.button_arrow_down.button_size_m.i-bem.button_js_inited'));
    this.englishLanguageButton  = element(by.cssContainingText('.select__item', 'English'));
    this.saveLanguageButton  = element(by.css('#form__a11y > div:nth-child(4) > div > button'));
    this.languageButton = element(by.css('.headline__bar>div>div>div>div>a'));
    this.EC = ExpectedConditions;  
    }

  changeEnglishLanguage() {

        browser.wait(this.EC.visibilityOf(this.languageChange), 10000);
 
        this.languageChange.click();

        browser.wait(this.EC.visibilityOf(this.englishLanguageButton), 10000);
 
        this.englishLanguageButton.click();

        browser.wait(this.EC.visibilityOf(this.saveLanguageButton), 10000);

        this.saveLanguageButton.click();
 
        browser.wait(this.EC.visibilityOf(this.languageButton), 10000);
 
     return this.languageButton.getText();
   };
};
module.exports = new LanguagePage();