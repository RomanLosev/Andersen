let waits = require('../helper/waits');

class FridgePage {

  constructor() {
   
    this.weightField  = element(by.css('._178jz2CyDL > div:nth-child(12) > div >div > fieldset._2ESDYRtKSQ > div > ul > li:nth-child(2) > ._1idia0vVNM > ._2yK7W3SWQ-._1f2usTwyAs'));
    this.mouseButton  = element(by.css('div._178jz2CyDL > div:nth-child(12) > div > div'));
    this.contentWeight = element.all(by.css('ul.n-snippet-card2__desc.n-snippet-card2__desc_type_list > li:nth-child(1)'));
  }

  sortingByWeight() {

    waits.waitVisElement(this.mouseButton);
       
    browser.actions().mouseMove(this.mouseButton).perform();
    this.weightField.click().sendKeys("50");
  };
    
  async checkSortingByWeight() {

    let contentWeight = await this.contentWeight.getText();
    let contentWeight1 = contentWeight.map(item => item.slice(7, 9));
    let contentWeight2 = contentWeight1.map(item => item.replace(/[^0-9]/g, ''));
    let contentWeight3 = contentWeight2.map(Number);

    return contentWeight3.every(item => item <= 50);
  };
}
module.exports = new FridgePage();
