describe("Person toString() Test", function() {
    var testPerson;
    beforeEach(function() { testPerson = new Person(); });   
    afterEach (function() { testPerson = undefined;    });
     
    it("calls the getName() function", function() {
        spyOn(testPerson, "getName");
        testPerson.toString();
        expect(testPerson.getName).toHaveBeenCalled();
    });
     
    it("Method getName() was called with zero arguments", function() {
        spyOn(testPerson, "getName");
        testPerson.toString();
        expect(testPerson.getName).toHaveBeenCalledWith();
    });
});
describe("Person toString() Test with Fake getName() Method", function() {
    it("calls the fake getName() function", function() {
        var testPerson = new Person();
        testPerson.getName = jasmine.createSpy("getName spy");
        testPerson.toString();
        expect(testPerson.getName).toHaveBeenCalled();
    });
});