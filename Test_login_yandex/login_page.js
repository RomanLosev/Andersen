let Page2 = function() {
    const loginField = element(by.css('#passp-field-login'));
    const passwordField = element(by.css('#passp-field-passwd'));
    const enterButton = element(by.css('.control.button2.button2_view_classic.button2_size_l.button2_theme_action.button2_width_max.button2_type_submit.passp-form-button'));

   
   this.enterLoginPassword = function(login,password){
    loginField.clear();
    loginField.sendKeys(login);
    enterButton.click();

    let EC = ExpectedConditions;  
     browser.wait(EC.presenceOf(passwordField), 5000);

    passwordField.clear();
    passwordField.sendKeys(password);
    enterButton.click();
   };
   };
   module.exports = new Page2();
   
   