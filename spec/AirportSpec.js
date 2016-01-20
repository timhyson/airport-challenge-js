'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport();
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function() {
    it('can clear planes for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });

    it('does not clear planes for takeoff', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForTakeoff(plane); }).toThrowError('cannot takeoff during storm');
    });

    it('does not clear planes to land', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
  });

  xit('can land a plane and add it to an array', function() {
    // airport.sunny();
    airport.land(plane);
    expect(airport.hanger).not.toEqual([]);
  });

  xit('has a default capacity', function() {
    expect(airport.defaultCapacity).toEqual(10);
  });

  xit('throws an error if the airport hanger is full', function() {
    var capacity = airport.defaultCapacity;
    for (var i = 0; i < capacity; i++) {
      airport.land(plane);
    };

    expect(function() {
      airport.land(plane);
    }).toThrowError('Negative Ghost Rider, the pattern is full');
  });

  xit('has weather conditions', function() {
    expect(airport.isStormy).toBeTruthy();
  });

  xit('can be sunny', function() {
    airport.sunny();
    expect(airport.isStormy).toBeFalsy();
  });

  xit('can be stormy', function() {
    airport.stormy();
    expect(airport.isStormy).toBeTruthy();
  });

  // it('will not allow a plane to land if weather is bad', function() {
  //   airport.stormy();
  //   expect(function() {
  //     airport.land(plane);
  //   }).toThrowError('There\'s a storm brewing');
  // });

});
