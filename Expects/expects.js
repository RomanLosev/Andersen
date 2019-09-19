describe('Expects training', function() {
    var textElement = element(by.css('div.project-navigation__part.project-navigation__part_1 > ul:nth-child(2) > li > a > span > span'));
    arr = [1, 2, 3];
    arrString = ['один', 'два', 'три'];

    it('should comparе of two numbers', function() {

      expect(6 + 2).toBe(8);

    });

    it('should compare of two strings', function() {

        browser.waitForAngularEnabled(false);
        browser.get('https://onliner.by/');
   
         expect(textElement.getText()).toEqual("Смартфоны");
   
       });

    it('should contain of string', function() {

        expect(textElement.getText()).toContain("Смарт");
   
       });

    it('should compare array', function() {

        expect(arr).toEqual([1, 2, 3]);
   
       });

    it('should compare string array', function() {

        expect(arrString).toEqual(["один", "два", "три"]);
   
       });
    });