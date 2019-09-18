let page = require('./main_page');
let locations = require('./change_location_page');

describe('Locations content', function() {
    
    it('should read the content "else" for London and Paris', function() {
        page.getStartPage('https://yandex.by/');
        page.clickChangeLocation();
        locations.getLocation("Лондон");
        const LondonElseContent = page.rememberElseContent();
        page.clickChangeLocation();
        locations.getLocation("Париж");
        const ParisElseContent = page.rememberElseContent();

        expect(LondonElseContent).toEqual(ParisElseContent);
    });
    });