function Airport() {
  this.hanger = [];
  this.defaultCapacity = 10;
};

Airport.prototype.land = function(plane) {
  this.hanger.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  this.hanger.pop(plane);
};
