function Game(turn) {
  this.moves = [
    {
      1: " ",
      2: " ",
      3: " ",
      4: " ",
      5: " ",
      6: " ",
      7: " ",
      8: " ",
      9: " "
    }
  ];
  this.grid = "";
}

Game.prototype.printGrid = function() {
  for (var move in moves) {
    grid = grid + moves[move];
  }
};
