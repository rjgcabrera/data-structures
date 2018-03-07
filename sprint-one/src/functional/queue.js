var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    last++;
    if (first === 0 && last === 1) {
      first = 1;
    }
    storage[last] = value;
  };

  someInstance.dequeue = function() {
    var tmp = storage[first];
    delete storage[first];
    first++;
    return tmp;
  };

  someInstance.size = function() {
    if (first > last) {
      first = 0;
      last = 0;
      return 0;
    }
    if (first === 0 && last === 0) {
      return 0;
    }
    return last - (first - 1);
  };

  return someInstance;
};
