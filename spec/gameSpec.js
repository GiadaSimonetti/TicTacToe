describe("Feature test", function() {
  var player;
  var turn;
  var game;

  beforeEach(function() {
    player = new Player();
    turn = new Turn(player);
    game = new Game(turn);
  });
});
