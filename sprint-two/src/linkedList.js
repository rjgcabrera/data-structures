var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if (list.head === null) {
      list.head = newTail;
      list.tail = list.head;
    } else {
      list.tail = newTail;
      list.head.next = newTail;
    }
  };

  list.removeHead = function() {
    var result = list.head.value;
    if (list.head.next === null) {
      list.head = list.tail;
    } else {
      list.head = list.head.next;

    }

    return result;
  };

  list.contains = function(target) {
    if(list.head === null){
      return false;
    }
    var currentNode = list.head;
    while (currentNode !== null) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */
