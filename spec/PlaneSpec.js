'use strict';

describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding']);
  });

  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  xit('should be flying when created', function() {
    expect(plane.isFlying).toBeTruthy();
  });

  xit('should be able to take off', function() {
    plane.takeoff();
    expect(plane.isFlying).toBeTruthy();
  });

});
