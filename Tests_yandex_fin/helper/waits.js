class Waits {
       
    constructor() {
  this.EC = ExpectedConditions;
    }

 waitVisElement(element) {
  browser.wait(this.EC.visibilityOf(element), 10000);
 };
};
 module.exports = new Waits();


