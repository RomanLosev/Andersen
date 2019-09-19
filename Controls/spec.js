let page = require('./main_page');


describe('Base controlls training', function() {
    
    it('should compare the enter word with "Protractor"', function() {
        page.getStartPage('https://www.booking.com/searchresults.ru.html?label=gen173nr-1DCAEoggI46AdIM1gEaCWIAQGYASG4ARfIAQzYAQPoAQGIAgGoAgO4AqOzjewFwAIB&sid=952ebd4fd55c107128e8f8c22392d7c8&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.ru.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaCWIAQGYASG4ARfIAQzYAQPoAQGIAgGoAgO4AqOzjewFwAIB%3Bsid%3D952ebd4fd55c107128e8f8c22392d7c8%3Bsb_price_type%3Dtotal%26%3B&ss=%D0%A2%D0%BE%D0%B4%D0%B4%D1%83&is_ski_area=0&ssne=%D0%A2%D0%BE%D0%B4%D0%B4%D1%83&ssne_untouched=%D0%A2%D0%BE%D0%B4%D0%B4%D1%83&dest_id=900054014&dest_type=city&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1');
        page.selectValueFromDropdown();
        page.getStartPage('https://market.yandex.by/catalog/54726/list?local-offers-first=0&onstock=1&deliveryincluded=1');
        page.checkUncheckCheckbox();
        page.toScroll();
        page.radioButton();
        const text1 = page.inputText();
        const classValue = page.getClassValue();

        expect(text1).toEqual("Protractor");
        expect(classValue).toEqual("input__control");
    });
    });
