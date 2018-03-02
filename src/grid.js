function Grid() {
  this.moves = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.showGrid();
}

Grid.prototype.setGrid = function() {
  return (
    "\n" +
    this.moves[0] +
    " | " +
    this.moves[1] +
    " | " +
    this.moves[2] +
    "\n" +
    "---------\n" +
    this.moves[3] +
    " | " +
    this.moves[4] +
    " | " +
    this.moves[5] +
    "\n" +
    "---------\n" +
    this.moves[6] +
    " | " +
    this.moves[7] +
    " | " +
    this.moves[8] +
    "\n"
  );
};

Grid.prototype.showGrid = function() {
  console.log(this.setGrid());
};
