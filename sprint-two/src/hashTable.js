

var HashTable = function() {
  this._limit = 8;
  this._min = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
    this.count++;
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (k === this._storage.get(index)[i][0]) {
        this._storage.get(index)[i][1] = v;
        this.count++;
        return;
      }
    }
    this.count++;
    this._storage.get(index).push([k,v]);
  }

  if (this.count >= .75 * this._limit) {
    this.count = 0;
    this._limit *= 2;
    var tempStorage = LimitedArray(this._limit);

    this._storage.each((bucket) => {
      if (bucket !== undefined) {
        for (var bucketIdx = 0; bucketIdx < bucket.length; bucketIdx++) {
          var newKey = bucket[bucketIdx][0];
          var newVal = bucket[bucketIdx][1];
          var index = getIndexBelowMaxForKey(newKey, this._limit);
          if (tempStorage.get(index) === undefined) {
            tempStorage.set(index, [[newKey, newVal]]);
          } else {
            for (var i = 0; i < tempStorage.get(index).length; i++) {
              if (newKey === tempStorage.get(index)[i][0]) {
                tempStorage.get(index)[i][1] = newVal;
                return;
              }
            }
            tempStorage.get(index).push([newKey, newVal]);
          }
        }
      }
    });
    this._storage = tempStorage;
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
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (k === this._storage.get(index)[i][0]) {
        this._storage.get(index).splice(i, 1);
        this.count--;
      }
    }
  if (this.count < .25 * this._limit) {
    this._limit = this._limit / 2;
    if(this._limit < this._min) {
      this._limit = this._min;
    }
    var tempStorage = LimitedArray(this._limit);

    this._storage.each((bucket) => {
      if (bucket !== undefined) {
        for (var bucketIdx = 0; bucketIdx < bucket.length; bucketIdx++) {
          var newKey = bucket[bucketIdx][0];
          var newVal = bucket[bucketIdx][1];
          var index = getIndexBelowMaxForKey(newKey, this._limit);
          if (tempStorage.get(index) === undefined) {
            tempStorage.set(index, [[newKey, newVal]]);
          } else {
            for (var i = 0; i < tempStorage.get(index).length; i++) {
              if (newKey === tempStorage.get(index)[i][0]) {
                tempStorage.get(index)[i][1] = newVal;
                return;
              }
            }
            tempStorage.get(index).push([newKey, newVal]);
          }
        }
      }
    });
    this._storage = tempStorage;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * retrieve: O(n)
 * remove: O(1)
 */
