let inboxPage = function() {
    const userName = element(by.css('.mail-User-Name'));
    const exitInboxButtot = element(by.css('div:nth-child(8) > a'));
   
   this.getUserName = function(){
     let EC = ExpectedConditions;  
         browser.wait(EC.presenceOf(userName), 10000);

         return userName.getText();;
   };

   this.exitInbox = function(){
    let EC = ExpectedConditions;  
        browser.wait(EC.presenceOf(userName), 5000);

        userName.click();

     let EC1 = ExpectedConditions;  
        browser.wait(EC1.presenceOf(exitInboxButtot), 5000);

        exitInboxButtot.click();
  };
   };
   module.exports = new inboxPage();
   