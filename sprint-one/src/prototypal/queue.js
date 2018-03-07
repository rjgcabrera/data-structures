var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  return someInstance;
};

var queueMethods = {
  first: 0,
  last: 0,
  enqueue: function(value) {
    this.last++;
    if (this.first === 0 && this.last === 1) {
      this.first = 1;
    }
    this[this.last] = value;
  },
  dequeue: function() {
    var tmp = this[this.first];
    delete this[this.first];
    this.first++;
    return tmp;
  },
  size: function() {
    if (this.first > this.last) {
      this.first = 0;
      this.last = 0;
      return 0;
    }
    if (this.first === 0 && this.last === 0) {
      return 0;
    }
    return this.last - (this.first - 1);
  }
};
