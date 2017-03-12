var assert = require("chai").assert;
var luhn = require("../src/luhn");

describe("Luhn Check", function() {
  it("should return the correct number of characters in a given string", function() {
    var test_value = "1234567890";
    var result = luhn.countDigits(test_value);
    assert.strictEqual(result, 10)
  });

  it("should return true if a valid credit card is inputted", function() {
    var validCC = "4532595229395528";
    assert.isTrue(luhn.luhn_check(validCC));
  });

it("should return false if an invalid credit card is inputted", function() {
    var validCC = "888888888888888";
    assert.isFalse(luhn.luhn_check(validCC));
  });

});
