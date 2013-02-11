// _.each iterates through an object and applies an iterator/callback function on each item in the object. 
// If the object is a array, it iterates across the array using a classic for loop and gives the iterator 
// function access to the element, index and object of the array. If the object is an object literal, it 
// iterates across the keys of the object using a for-in loop and gives the iterator function access to the 
// value, key and object after checking of the object has the property itself and is not inherited.

var each = function(obj, iterator) {
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      iterator(obj[i], i, obj);
    }
  } else {
    for (var i in obj){
      if (obj.hasOwnProperty(i)){
        iterator(obj[i], i, obj);
      }
    }
  }
};

var map = function(array, mappingFunction) {
  var newArray = [];
  each(array, function(value, key, obj){
    newArray.push(mappingFunction(value));
  });
  return newArray;
};

var filter = function(array, mappingFunction) {
  var newArray = [];
  map(array, function(value, key, obj){
    if (mappingFunction(value)) {
      newArray.push(value);
    }
  });
  return newArray;
};


