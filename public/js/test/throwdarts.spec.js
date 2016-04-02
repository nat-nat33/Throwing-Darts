describe('ScoreThrows', function () {
  it('should exist', function () {
    expect(ScoreThrows).to.exist;
  });

  it('it should be a function', function () {
    expect(ScoreThrows).to.be.a('function');
  });

  it('should return a number', function () {
    expect(ScoreThrows([1, 5, 11])).to.a('number');
  });

  it('should return a calculated score', function () {
    var darts1 = [1, 5, 11];
    var darts2 = [15, 20, 30];
    var darts3 = [1, 2, 3, 4];

    expect(ScoreThrows(darts1)).to.deep.equal(15);
    expect(ScoreThrows(darts2)).to.deep.equal(0);
    expect(ScoreThrows(darts3)).to.deep.equal(140);
  });

});