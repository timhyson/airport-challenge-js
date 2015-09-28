describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  it('should be empty when created', function() {
    expect(airport.hanger).toEqual([]);
  });

  it('can land a plane and add it to an array', function() {
    airport.land(plane);
    expect(airport.hanger).not.toEqual([]);
  });

  it('can clear a plane for takeoff', function() {
    airport.land(plane);
    airport.clearForTakeoff(plane);
    expect(airport.hanger).toEqual([]);
  });

  it('has a default capacity', function() {
    expect(airport.defaultCapacity).toEqual(10);
  });

  it('throws an error if the airport hanger is full', function() {
    var capacity = airport.defaultCapacity;
    for (var i = 0; i < capacity; i++) {
      airport.land(plane);
    };

    expect(function() {
      airport.land(plane);
    }).toThrowError('Negative Ghost Rider, the pattern is full');
  });

});
