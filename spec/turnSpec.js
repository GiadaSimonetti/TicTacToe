describe("Feature test", function() {
  var turn;
  var player;

  beforeEach(function() {
    turn = new Turn(player);
    player = new Player();
  });

  it("sets the first move at 0", function() {
    expect(turn.FIRST_MOVE).toEqual(0);
  });

  it("sets the last move at 9", function() {
    expect(turn.LAST_MOVE).toEqual(9);
  });

  it("sets the current move at 0", function() {
    expect(turn.currentMove).toEqual(0);
  });
});
