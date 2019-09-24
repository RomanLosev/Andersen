let waits = require('../helper/waits');

class LanguagePage {

    constructor() {
    this.languageChange  = element(by.css('.button.select__button.button_theme_normal.button_arrow_down.button_size_m.i-bem.button_js_inited'));
    this.englishLanguageButton  = element(by.cssContainingText('.select__item', 'English'));
    this.saveLanguageButton  = element(by.css('#form__a11y > div:nth-child(4) > div > button'));
    this.languageButton = element(by.css('.headline__bar>div>div>div>div>a'));  
    }

  changeEnglishLanguage() {

        waits.waitVisElement(this.languageChange);
 
        this.languageChange.click();

        waits.waitVisElement(this.englishLanguageButton);
      
        this.englishLanguageButton.click();

        waits.waitVisElement(this.saveLanguageButton);

        this.saveLanguageButton.click();

        waits.waitVisElement(this.languageButton);
 
     return this.languageButton.getText();
   };
};
module.exports = new LanguagePage();