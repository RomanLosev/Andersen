
let mainPage = require('../PageObjects/mainPage');
let marketPage = require('../PageObjects/marketPage');
let loginPage = require('../PageObjects/loginPage');
let inboxPage = require('../PageObjects/inboxPage');
let musicPage = require('../PageObjects/musicPage');
let phonePage = require('../PageObjects/phonePage');
let camerasPage = require('../PageObjects/camerasPage');
let fridgePage = require('../PageObjects/fridgePage');

describe('Yandex tests2', function() {

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().deleteAllCookies();
        browser.get('https://yandex.by/');
        browser.driver.manage().window().maximize();
      });

    it('sure that items are added to the comparison', function() {
        mainPage.goToMarketPage();
        marketPage.enterAndSearchProduct();
        const infoElement1 = phonePage.addToComparingFirstElement();
        const infoElement2 = phonePage.addToComparingSecondElement();
        phonePage.goToComparePage();
        const infoCompareElement1 = phonePage.getInfoFistElementInComparing();
        const infoCompareElement2 = phonePage.getInfoSecondElementInComparing()

        expect(infoElement1).toEqual(infoCompareElement1);
        expect(infoElement2).toEqual(infoCompareElement2);
    });
    
    it('sure that items are added to the comparison; delete items and sure that the comparison is empty ', function() {
        mainPage.goToMarketPage();
        marketPage.enterAndSearchProduct();
        const infoElement1 = phonePage.addToComparingFirstElement();
        const infoElement2 = phonePage.addToComparingSecondElement();
        phonePage.goToComparePage();
        const infoCompareElement1 = phonePage.getInfoFistElementInComparing();
        const infoCompareElement2 = phonePage.getInfoSecondElementInComparing();
        phonePage.deleteCompareElements();
        const emptyCompare = phonePage.getInfoAboutEmptyElements();

        expect(infoElement1).toEqual(infoCompareElement1);
        expect(infoElement2).toEqual(infoCompareElement2);
        expect(emptyCompare).toEqual("https://market.yandex.by/compare");
    });

    it('sure in sorting cameras by price', function() {
        mainPage.goToMarketPage();
        marketPage.goToElectronikPage();
        marketPage.goToKameryPage();
        camerasPage.sortingByPrice();
        const arrayPrice = camerasPage.checkDecreasingArray();

        expect(arrayPrice).toBe(true);
    });

    it('sure in sorting refrigerators by weight', function() {
        mainPage.goToMarketPage();
        marketPage.goToAppliancesPage();
        marketPage.goToFridgePage();
        fridgePage.sortingByWeight();
        const arrayWeight = fridgePage.checkSortingByWeight();

        expect(arrayWeight).toBe(true);
    });

    it('should check that "Metallica" is in pop albums', function() {
        mainPage.clickToLogin();
        loginPage.enterLoginclickSubmit("roma1n.losev");
        loginPage.enterPasswordclickSubmit("1122334455");
        inboxPage.exitInbox();
        mainPage.goToMusicPage();
        const artistInfo = musicPage.goToMetallicaArtist();
        const contentArtist = musicPage.checkAlbumsAsMetallica();

        expect(artistInfo).toEqual("Metallica");
        expect(contentArtist).toBe(true);
    });

    it('should check that song play on/play off', function() {
        mainPage.clickToLogin();
        loginPage.enterLoginclickSubmit("roma1n.losev");
        loginPage.enterPasswordclickSubmit("1122334455");
        inboxPage.exitInbox();
        mainPage.goToMusicPage();
        musicPage.goToBeyonceArtist();
        const isMusicPlay = musicPage.isSongPlay();
        const isMusicStop = musicPage.isSongStop();

        expect(isMusicPlay).toBe(true);
        expect(isMusicStop).toBe(true);
    });
});