describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
  });

  it('should be empty when created', function() {
    expect(airport.plane).toEqual([]);
  });

});
