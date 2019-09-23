let loginPage = function() {
    const loginField = element(by.css('#passp-field-login'));
    const passwordField = element(by.css('#passp-field-passwd'));
    const enterButton = element(by.css('.control.button2.button2_view_classic.button2_size_l.button2_theme_action.button2_width_max.button2_type_submit.passp-form-button'));
    const messageInvalidPassword = element(by.xpath('.//div[contains(text(), "Неверный пароль")]'));
    const messageInvalidLogin = element(by.xpath('.//div[contains(text(), "Такого аккаунта нет")]'));

  this.enterLogin = function(login){
      let EC = ExpectedConditions;  
      browser.wait(EC.presenceOf(loginField), 10000);

    loginField.clear();
    loginField.sendKeys(login);
    enterButton.click();
   };

  this.enterPassword = function(password){
    let EC = ExpectedConditions;  
     browser.wait(EC.presenceOf(passwordField), 5000);

    passwordField.clear();
    passwordField.sendKeys(password);
    enterButton.click();
   };

  this.invalidPassword = function(login,password){
    let EC = ExpectedConditions;  
     browser.wait(EC.presenceOf(messageInvalidPassword), 5000);

       return messageInvalidPassword.isDisplayed();
   };

  this.invalidLogin = function(login,password){
    let EC = ExpectedConditions;  
     browser.wait(EC.presenceOf(messageInvalidLogin), 5000);

       return messageInvalidLogin.isDisplayed();
   };
};
module.exports = new loginPage();
   
   