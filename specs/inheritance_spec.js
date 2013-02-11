describe("BakedGood", function(){

  var bakedGood;

  beforeEach(function(){
    bakedGood = new BakedGood("Oreo", 2)
  });

  it("should have a 'name' and 'diameter' property", function(){
    expect(bakedGood.name).toEqual("Oreo");
    expect(bakedGood.diameter).toEqual(2);
  });

  it("should have a radius property", function(){
    expect(bakedGood.radius).toEqual(1);
  });

  it("should have a size property", function(){
    expect(bakedGood.size).toEqual(3);
  });

  it("should have a eat function that reduces it's size by 30%", function(){
    bakedGood.eat()
    expect(bakedGood.size).toEqual(2);
  });

});

describe("Cookie", function(){

  var cookie;

  it("should have a 'name' and 'diameter' property", function(){
    cookie = new Cookie("Ginger", 3);
    expect(cookie.name).toEqual("Ginger");
    expect(cookie.diameter).toEqual(3);
  });

  it("should have a eat function that reduces it's size by 30%", function(){
    cookie.eat()
    expect(cookie.size).toEqual(4);
  });

});

describe("addColour", function(){

  var cookie;

  it("should add colour property", function(){
    cookie = new Cookie("Ginger", 3);
  });

});