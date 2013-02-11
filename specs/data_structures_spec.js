describe("last", function(){

  var array = [1, 2, "hello"];

  it("should return the last element in the array", function(){
    expect(array.last()).toEqual("hello");
  });

});

describe("first", function(){

  var array = [1, 2, "hello"];

  it("should return the first element in the array", function(){
    expect(array.first()).toEqual(1);
  });

});

describe("removeAtIndex", function(){

  var array = [1, 2, "hello"];

  it("should return an error when a number is not passed as the argument", function(){
    expect(function(){ array.removeAtIndex("1"); }).toThrow(new Error("Input argument was not a number"));
  });

  it("should return an error when index is out of range", function(){
      expect(function(){ array.removeAtIndex(10); }).toThrow(new Error("Input index is out of range"));
      expect(function(){ array.removeAtIndex(-1); }).toThrow(new Error("Input index is out of range"));
    });

  it("should remove the element in the array at the given index", function(){
    expect(array.removeAtIndex(1)).toEqual([1, "hello"]);
  });

});
