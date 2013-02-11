describe('map', function(){

  it("should map the iterator function to the elements in an array", function(){
    var doubled = map([1, 2, 3], function(num){ return num * 2; });
    expect(doubled).toEqual([2, 4, 6]);
  });

  it("should map the iterator function to the elements in an object", function(){
    var ages = {"age1": 10, "age2": 20, "age3": 30};
    var doubledAges = map(ages, function(num, val){ return num * 2; });
    expect(doubledAges).toEqual([20, 40, 60]);
  });

  it("should handle null values", function(){
    var ifnull = map(null, function(){});
    expect(ifnull).toEqual([]);
  });

});

describe('filter', function(){

  it("should filter the elements in an array", function(){
    var evens = filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    expect(evens).toEqual([2, 4, 6]);
  });

  it("should map the iterator function to the elements in an object", function(){
    var ages = {"age1": 11, "age2": 20, "age3": 30};
    var evenAges = filter(ages, function(num, val){ return num % 2 == 0; });
    expect(evenAges).toEqual([20, 30]);
  });

  it("should handle null values", function(){
    var ifnull = filter(null, function(){});
    expect(ifnull).toEqual([]);
  });

});