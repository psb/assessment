// A stack and a queue are similar in design, i.e. both can be made from a linked list, but they differ in the way 
// items are accessed by default. A stack gives you the items it contains via last in, first out. A queue gives 
// the items it contains via first in, first out.

// You would a stack to process an execution chain, where the last function on the stack is executed first. You 
// would use a queue when you are processing requests or jobs, where the first job intot he queue is the first 
// job to be processed. 

Array.prototype.last = function(){
  return this[this.length - 1];
};

Array.prototype.first = function(){
  return this[0];
};

Array.prototype.removeAtIndex = function(index){
  if (typeof(index) !== "number") {
    throw new Error("Input argument was not a number");
  } else if (index >= this.length || index < 0) {
    throw new Error("Input index is out of range");
  } else {
    var index = Math.floor(index);
    this.splice(index, 1);
    return this;
  }
};