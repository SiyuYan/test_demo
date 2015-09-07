//var webdriver = require('selenium-webdriver'),
//    By = require('selenium-webdriver').By,
//    until = require('selenium-webdriver').until;
//
//var driver = new webdriver.Builder()
//    .forBrowser('firefox')
//    .build();
//
//driver.get('http://localhost:3000/home');
//driver.findElement(By.name('btn')).click();
//driver.quit();
//
//
describe('angularjs homepage', function () {
    it('should get correct pages', function (done) {
        browser.driver.get('http://localhost:3000/home');
        expect(browser.driver.getTitle()).toEqual('home');
        done();
    });
    it('should return baidu when click button', function (done) {
        browser.driver.get('http://localhost:3000/home');
        browser.driver.findElement(by.name('btn')).click();
        expect(browser.driver.getTitle()).toEqual('百度一下，你就知道');
        done();
    });
});

