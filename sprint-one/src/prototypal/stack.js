var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  return someInstance;
};

var stackMethods = {
  count: 0,
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
