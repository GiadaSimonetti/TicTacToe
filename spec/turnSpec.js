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

  it("sets the current move at 0", function() {
    turn.incrementMove();
    expect(turn.currentMove).toEqual(1);
  });

  it("sets the player", function() {
    turn.currentMove = 1;
    expect(turn.setPlayer(player)).toEqual("X");
  });

  it("swaps the player", function() {
    turn.currentMove = 1;
    console.log(turn.currentMove);
    // turn.swapPlayer(player);
    // console.log(turn.swapPlayer(player));
    expect(turn.swapPlayer(player)).toEqual("O");
    expect(turn.currentMove).toEqual(1);
  });
});
