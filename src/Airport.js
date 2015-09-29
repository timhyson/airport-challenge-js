function Airport() {
  this.hanger = [];
  this.defaultCapacity = 10;
  this.isStormy = true;
};

Airport.prototype.land = function(plane) {
  if (this.hanger.length >= this.defaultCapacity) {
    throw new Error('Negative Ghost Rider, the pattern is full');
  // } else if (this.isStormy = true) {
  //   throw new Error('There\'s a storm brewing');
  } else {
    this.hanger.push(plane);
  }
};

Airport.prototype.clearForTakeoff = function(plane) {
  this.hanger.pop(plane);
};

Airport.prototype.sunny = function() {
  this.isStormy = false;
};

Airport.prototype.stormy = function() {
  this.isStormy = true;
};
