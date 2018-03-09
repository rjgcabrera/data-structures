

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (k === this._storage.get(index)[i][0]) {
        this._storage.get(index)[i][1] = v;
        return;
      }
    }
    this._storage.get(index).push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  if (this._storage.get(index).length === 1) {
    return this._storage.get(index)[0][1];
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (k === this._storage.get(index)[i][0]) {
        return this._storage.get(index)[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * retrieve: O(n)
 * remove: O(1)
 */
