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

});
