var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    count: 0,
  };

  // Use an object with numeric keys to store values
  $.extend(someInstance, stackMethods);
  return someInstance
};

var stackMethods = {
  push: function (value) {
    this.count++;
    this[this.count] = value;
  },
  pop: function() {
    if (this.count > 0) {
      var tmp = this[this.count];
      delete this[this.count];
      this.count--;
      return tmp;
    }
  },
  size: function() {
    return this.count;
  }
};
