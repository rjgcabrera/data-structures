

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = [];
  this.count = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node.toString()] = node;
  this.count++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var nodes = this.nodes;
  for (var key in nodes) {
    if (nodes[key] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    delete this.nodes[node.toString()];
    //find the array containing node
    for (var i = 0; i < this.edges.length; i++){

      if(this.edges[i].includes(node)){
        if(this.edges[i][0] <= this.edges[i][1]){
          this.removeEdge(this.edges[i][0], this.edges[i][1]);
        } else {
          this.removeEdge(this.edges[i][1], this.edges[i][0]);
        }
      }

    }
    //sort the pair and call removeEdge(the pair)
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    if (fromNode <= toNode) {   // store the lesser of two nodes
      for (var i = 0; i < this.edges.length; i++) {
        if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
          return true;
        }
      }
    } else {
      for (var i = 0; i < this.edges.length; i++) {
        if (this.edges[i][1] === fromNode && this.edges[i][0] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  if (this.contains(fromNode) && this.contains(toNode)
       && !this.hasEdge(fromNode, toNode)) {
    if (fromNode <= toNode) {   // store the lesser of two nodes
      this.edges.push([fromNode, toNode]);
    } else {
      this.edges.push([toNode , fromNode]);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var pair = [];
  (fromNode < toNode) ? pair = [fromNode, toNode] : pair = [toNode, fromNode];

  for (var i = 0; i < this.edges.length; i++) {
    if(this.edges[i][0] === pair[0] && this.edges[i][1] === pair[1]){
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.map(this.nodes, cb);
  for (var i = 0; i < this.edges.length; i++) {
    _.map(this.edges[i], cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };
