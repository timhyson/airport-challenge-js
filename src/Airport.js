'use strict'

function Airport() {
  this._hanger = [];
};

Airport.prototype.planes = function() {
  return this._hanger;
};

Airport.prototype.clearForLanding = function(plane) {
  this._hanger.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  this._hanger = [];
};

//Airport.prototype.land = function(plane) {
//  if (this.hanger.length >= this.defaultCapacity) {
//    throw new Error('Negative Ghost Rider, the pattern is full');
//  // } else if (this.isStormy = true) {
//  //   throw new Error('There\'s a storm brewing');
//  } else {
//    this.hanger.push(plane);
//  }
//};
//
//Airport.prototype.sunny = function() {
//  this.isStormy = false;
//};
//
//Airport.prototype.stormy = function() {
//  this.isStormy = true;
//};
