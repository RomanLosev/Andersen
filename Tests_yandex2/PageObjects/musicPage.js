let waits = require('../helper/waits');
 
 class MusicPage {

  constructor() {

    this.searchField = element(by.css('div.d-input.deco-input-wrapper.d-input_size-M.d-input_suggest.deco-input-wrapper_suggest.d-suggest__input.deco-input__suggest'));
    this.metallicaButton = element(by.cssContainingText('div', 'Metallica'));
    this.beyonceButton = element(by.css('div.d-suggest__items.d-suggest__items_type_artist > div:nth-child(2) > a'));
    this.artistInfo = element(by.css('.page-artist__title.typo-h1.typo-h1_big'));
    this.artistArray = element.all(by.css('.d-artists .d-link.deco-link.d-link_muted.deco-link_muted'));
    this.playButton = element(by.css('.player-controls__btn.deco-player-controls__button.player-controls__btn_play.player-controls__btn_pause'));
    this.stopButton = element(by.css('.player-controls__btn.deco-player-controls__button.player-controls__btn_play')); 
    this.songButton = element(by.xpath('(.//div[@class="entity-cover deco-entity-image-placeholder d-track__cover entity-cover_size_Large"])[1]'));
  }
   
   goToMetallicaArtist() {

     waits.waitVisElement(this.searchField);

     browser.executeScript(`document.querySelector('.d-input__field.deco-input.deco-input_suggest').value="Metal"`);
     browser.executeScript(`document.querySelector('.d-input__field.deco-input.deco-input_suggest').click()`);

     waits.waitVisElement(this.metallicaButton);

     browser.executeScript(`document.querySelector('div.d-suggest__items.d-suggest__items_type_artist > div:nth-child(2) > a').click()`);

     waits.waitVisElement(this.artistInfo);

     return this.artistInfo.getText();
   };

   async checkAlbumsAsMetallica() {

     let contentArtist = await this.artistArray.getText();

     return contentArtist.every(item => item == "Metallica");
   };

   goToBeyonceArtist() {

     waits.waitVisElement(this.searchField);

     browser.executeScript(`document.querySelector('.d-input__field.deco-input.deco-input_suggest').value="beyo"`);
     browser.executeScript(`document.querySelector('.d-input__field.deco-input.deco-input_suggest').click()`);
 
     waits.waitVisElement(this.beyonceButton);
    
     browser.executeScript(`document.querySelector('div.d-suggest__items.d-suggest__items_type_artist > div:nth-child(2) > a').click()`);
   }

   isSongPlay() {

     waits.waitVisElement(this.artistInfo);

     browser.executeScript(`document.querySelector('div.d-generic-page-head__main-actions > button > span.d-icon.deco-icon.d-icon_play-small').click()`);
   
     return this.playButton.isDisplayed();
   }

   isSongStop() {
 
     browser.executeScript(`document.querySelector('div.d-generic-page-head__main-actions > button > span.d-icon.deco-icon.d-icon_play-small').click()`);
    
     return this.stopButton.isDisplayed();
   }
 };
 module.exports = new MusicPage();
   