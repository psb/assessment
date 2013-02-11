describe("startsWith", function(){

  var testString;

  it("should return an error when a string is not passed as the argument", function(){
    testString = "this is a string";
    expect(function(){ testString.startsWith(3); }).toThrow(new Error("Input argument was not a string"));
  });

  it("should return 'true' if the string starts with the input argument", function(){
    testString = "this is a string";
    expect(testString.startsWith("this")).toBe(true);
  });

  it("should return 'false' if the string  does not start with the input argument", function(){
    testString = "this is a string";
    expect(testString.startsWith("boom")).toBe(false);
  });

});

describe("titleizes", function(){

  it("should return an error when a string is not passed as the argument", function(){
    testString = "this is a string";
    expect(function(){ testString.startsWith(3); }).toThrow(new Error("Input argument was not a string"));
  });

  it("should return a titlized string", function(){
    testString = "this is a string";
    expect(titleizes(testString)).toBe("This Is A String");
  });

  it("should return a titlized string with punctuation in tact", function(){
    testString = "this, is, a, string";
    expect(titleizes(testString)).toBe("This, Is, A, String");
  });

});