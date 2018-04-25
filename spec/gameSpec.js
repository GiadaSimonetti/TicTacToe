describe("Feature test", function() {
  var player;
  var turn;
  var grid;
  var game;

  beforeEach(function() {
    player = new Player();
    turn = new Turn(player);
    grid = new Grid();
    game = new Game(turn);
  });

  it("should return the grid", function() {});
});
