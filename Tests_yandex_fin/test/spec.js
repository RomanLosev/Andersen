
let mainPage = require('../PageObjects/mainPage');
let loginPage = require('../PageObjects/loginPage');
let languagePage = require('../PageObjects/languagePage');
let inboxPage = require('../PageObjects/inboxPage');

describe('Yandex tests', function() {

    beforeEach(function() {
       
        browser.waitForAngularEnabled(false);
        browser.driver.manage().deleteAllCookies();
        browser.get('https://yandex.by/');
        browser.driver.manage().window().maximize();
      });

    it('should compare UserName with "roma1n.losev"', function() {
        mainPage.clickToLogin();
        loginPage.enterLoginclickSubmit("roma1n.losev");
        loginPage.enterPasswordclickSubmit("1122334455");
        const userName = inboxPage.getUserName();

        expect(userName).toEqual("roma1n.losev");
    });

    it('should be sure of logout', function() {
        mainPage.clickToLogin();
        //loginPage.enterLoginclickSubmit("roma1n.losev");
        loginPage.enterPasswordclickSubmit("1122334455");
        inboxPage.exitInbox();
        const logout = mainPage.sureOfLogout();

        expect(logout).toBe(true);
    });

    it('should be sure of invalid password', function() {
        mainPage.clickToLogin();
        //loginPage.enterLoginclickSubmit("roma1n.losev");
        loginPage.enterPasswordclickSubmit("11223344");
        const invalidPassword = loginPage.invalidPassword();

        expect(invalidPassword).toBe(true);
    });

    it('should be sure of invalid login', function() {
        mainPage.clickToLogin();
        loginPage.enterLoginclickSubmit("roma1n.los");
        const invalidLogin = loginPage.invalidLogin();

        expect(invalidLogin).toBe(true);
    });

    it('should be sure in navigating to the page Video', function() {
        const videoCategory = mainPage.navigationVideo();

        expect(videoCategory).toContain("https://yandex.by/portal/video");
    });

    it('should be sure in navigating to the page Picture', function() {
        const pictureCategory = mainPage.navigations(mainPage.pictures);

        expect(pictureCategory).toEqual("https://yandex.by/images/");
    });

    it('should be sure in navigating to the page News', function() {
        const newsCategory = mainPage.navigations(mainPage.news);

        expect(newsCategory).toEqual("https://yandex.by/news/");
    });

    it('should be sure in navigating to the page Maps', function() {
        const mapsCategory = mainPage.navigations(mainPage.maps);

        expect(mapsCategory).toContain("https://yandex.by/maps/157/minsk/");
    });

    it('should be sure in navigating to the page Translate', function() {
        const translateCategory = mainPage.navigations(mainPage.translate);

        expect(translateCategory).toEqual("https://translate.yandex.by/");
    });

    it('should be sure in navigating to the page Market', function() {
        const marketCategory = mainPage.navigations(mainPage.market);

        expect(marketCategory).toEqual("https://market.yandex.by/?clid=505&utm_source=face_abovesearch&utm_campaign=face_abovesearch");
    });

    it('should be sure in navigating to the page Music', function() {
        const musicCategory = mainPage.navigations(mainPage.music);

        expect(musicCategory).toEqual("https://music.yandex.by/home");
    });

    it('should be sure of english language', function() {
        mainPage.changeLanguages();
        const language = languagePage.changeEnglishLanguage();

        expect(language).toEqual("Eng");
    });
});