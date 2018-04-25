function Game(turn) {
  this.grid = new Grid();
  this.turn = new Turn(player);
  this.move = turn.currentMove;
}

Game.prototype.move = function(choice) {
  grid.moves[choice - 1] = turn.setPlayer(player);
  turn.swapPlayer(player);
  grid.showGrid();
};
