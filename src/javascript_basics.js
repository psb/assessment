String.prototype.startsWith = function(string){
  if (typeof(string) !== "string") {
    throw new Error("Input argument was not a string");
  } else if (this.substring(0, string.length) === string) {
    return true;
  } else {
    return false;
  }
};

var titleizes = function(string){
  if (typeof(string) !== "string") {
    throw new Error("Input argument was not a string");
  } else {
    var titleizedString = [];
    var splitString = string.split(" ");
    for (var i = 0, len = splitString.length; i < len; i++) {
      titleizedString.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1));
    }

    return titleizedString.join(" ");
  } 
};