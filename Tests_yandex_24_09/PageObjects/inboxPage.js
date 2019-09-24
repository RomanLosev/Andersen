 class InboxPage {
      constructor() {
    this.userName = element(by.css('.mail-User-Name'));
    this.exitInboxButtot = element(by.css('div:nth-child(8) > a'));
    this.EC = ExpectedConditions;
      }
   
   getUserName() {
         browser.wait(this.EC.presenceOf(this.userName), 10000);

         return this.userName.getText();;
   };

   exitInbox() {
        browser.wait(this.EC.presenceOf(this.userName), 5000);

        this.userName.click();

        browser.wait(this.EC.presenceOf(this.exitInboxButtot), 5000);

        this.exitInboxButtot.click();
  };
   };
   module.exports = new InboxPage();
   