var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

this.treeMethods = {};

this.treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

this.treeMethods.contains = function(target) {
  var result = false;
  if(this.value === target){
    return true;
  }
  var searchChildren = function(child){
    for(var i = 0; i < child.children.length; i++){
      if(child.children[i].value === target){
        result = true;
      }
      if(child.children[i].children.length > 0){
        searchChildren(child.children[i]);
      }
    }
  }
  searchChildren(this);

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */
