describe('Plane', function() {
  'use strict';

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('should be flying when created', function() {
    expect(plane.isFlying).toBeTruthy();
  });

  it('should be able to land', function() {
    plane.land();
    expect(plane.isFlying).toBeFalsy();
  });

  it('should be able to take off', function() {
    plane.takeoff();
    expect(plane.isFlying).toBeTruthy();
  });

});
