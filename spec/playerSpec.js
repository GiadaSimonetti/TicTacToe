describe("Feature test", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it("sets the first player as 'X'", function() {
    expect(player.first).toEqual("X");
  });

  it("sets the second player as 'O'", function() {
    expect(player.second).toEqual("O");
  });
});
