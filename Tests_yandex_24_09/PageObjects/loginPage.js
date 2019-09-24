class LoginPage {

  constructor() {
    this.loginField = element(by.css('#passp-field-login'));
    this.passwordField = element(by.css('#passp-field-passwd'));
    this.enterButton = element(by.css('.control.button2.button2_view_classic.button2_size_l.button2_theme_action.button2_width_max.button2_type_submit.passp-form-button'));
    this. messageInvalidPassword = element(by.css('.passp-form-field__error'));
    this.messageInvalidLogin = element(by.css('.passp-form-field__error'));
    this.EC = ExpectedConditions;  
  }

  enterLoginclickSubmit(login) {
      
      browser.wait(this.EC.presenceOf(this.loginField), 10000);

      this.loginField.clear();
      this.loginField.sendKeys(login);
      this.enterButton.click();
   };

  enterPasswordclickSubmit(password) {
  
     browser.wait(this.EC.presenceOf(this.passwordField), 5000);

     this.passwordField.clear();
     this.passwordField.sendKeys(password);
     this.enterButton.click();
   };

  invalidPassword(login,password) {
      
     browser.wait(this.EC.presenceOf(this.messageInvalidPassword), 5000);

       return this.messageInvalidPassword.isDisplayed();
   };

  invalidLogin(login,password) {
      
     browser.wait(this.EC.presenceOf(this.messageInvalidLogin), 5000);

       return this.messageInvalidLogin.isDisplayed();
   };
};
module.exports = new LoginPage();
   
   