var BakedGood = function(name, diameter){
  this.name = name;
  this.diameter = diameter;
  this.radius = this.diameter / 2;
  this.size = Math.floor(Math.PI * this.radius * this.radius);
  this.printSize = function(){
    console.log(this.size + " cm2");
  };
  this.eat = function(){
    this.size = Math.floor(this.size * 0.7);
  };
};

var Cookie = function(name, diameter){
  BakedGood.apply(this, [name, diameter]);
};

Cookie.prototype = Object.create(BakedGood.prototype);
Cookie.prototype.constructor = Cookie;


// Mixin
var addColour = function() {
  this.randomR = Math.floor(Math.random()*255);
  this.randomG = Math.floor(Math.random()*255);
  this.randomB = Math.floor(Math.random()*255);

  this.RGBcolour = [this.randomR, this.randomG, this.randomB];

  return this;
};

addColour.call(Cookie.prototype);


