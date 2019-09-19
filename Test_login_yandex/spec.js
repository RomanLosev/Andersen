let main_page = require('./main_page');
let login_page = require('./login_page');
let inbox_page = require('./inbox_page');

describe('Locations content', function() {
    
    it('should contain the UserName with "roma1n.losev"', function() {
        main_page.getStartPage('https://yandex.by/');
        main_page.clickToLogin();
        login_page.enterLoginPassword("roma1n.losev","1122334455");
        const userName = inbox_page.getUserName();

        expect(userName).toEqual("roma1n.losev");
    });
    });