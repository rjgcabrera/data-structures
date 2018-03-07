var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;

  };

  someInstance.pop = function() {
    //delete key-value from storage
    //decrement count
    if (count > 0) {
      var tmp = storage[count];
      delete storage[count];
      count--;
      return tmp;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
