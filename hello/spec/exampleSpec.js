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

describe('e2e test', function() {
  it('should get a correct page', function() {
     browser.get('http://localhost:3000/home');
    // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    // element(by.css('[value="add"]')).click();

    // var todoList = element.all(by.repeater('todo in todoList.todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    console.log('dd');
    console.log(browser.getTitle);
    expect(browser.getTitle()).toEqual('home');
    element(by.name('btn')).click();
   // expect(completedAmount.count()).toEqual(2);
  });
});

