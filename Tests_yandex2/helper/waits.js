class Waits {
       
  constructor() {

  this.EC = ExpectedConditions;
  }

  waitVisElement(element) {

   browser.wait(this.EC.visibilityOf(element), 10000);
  };

  waitUrl(urlIs) {

   browser.wait(this.EC.urlIs(urlIs), 5000);
  };
};
module.exports = new Waits();


