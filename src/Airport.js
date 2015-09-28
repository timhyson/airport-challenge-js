function Airport() {
  this.hanger = [];

  // this.defaultCapacity = 1;
};

Airport.prototype.land = function(plane) {
  this.hanger.push(plane);
};
