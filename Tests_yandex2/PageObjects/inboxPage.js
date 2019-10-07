let waits = require('../helper/waits');
 
class InboxPage {

  constructor() {

    this.userName = element(by.css('.mail-User-Name'));
    this.exitInboxButtot = element(by.css('div:nth-child(9) > a'));
  }
   
   getUserName() {

     waits.waitVisElement(this.userName);

     return this.userName.getText();;
   };

   exitInbox() {

     waits.waitVisElement(this.userName);

     this.userName.click();

     waits.waitVisElement(this.exitInboxButtot);

     this.exitInboxButtot.click();
   };
};
   module.exports = new InboxPage();
   