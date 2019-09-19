let Page3 = function() {
    const userName = element(by.css('.mail-User-Name'));
   
   this.getUserName = function(){
     let EC = ExpectedConditions;  
         browser.wait(EC.presenceOf(userName), 5000);

         return userName.getText();;
   };
   };
   module.exports = new Page3();
   