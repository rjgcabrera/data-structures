class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
  }

  push(value) {
    this.count++;
    this[this.count] = value;
  }

  pop() {
    if (this.count > 0) {
      var tmp = this[this.count];
      delete this[this.count];
      this.count--;
      return tmp;
    }
  }

  size() {
    return this.count;
  }

}
