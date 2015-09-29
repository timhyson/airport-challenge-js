function Airport() {
  this.hanger = [];
  this.defaultCapacity = 10;
  this.isStormy = true;
};

Airport.prototype.land = function(plane) {
  if (this.hanger.length >= this.defaultCapacity) {
    throw new Error('Negative Ghost Rider, the pattern is full');
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
