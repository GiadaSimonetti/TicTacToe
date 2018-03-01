function Turn(player) {
  this.FIRST_MOVE = 0;
  this.LAST_MOVE = 9;
  this.currentMove = this.FIRST_MOVE;
  // this.currentPlayer = player.first;
}

Turn.prototype.incrementMove = function() {
  this.currentMove += 1;
};

Turn.prototype.setPlayer = function(player) {
  if (this.currentMove % 2 !== 0) {
    return player.first;
  } else {
    return player.second;
  }
};

Turn.prototype.swapPlayer = function(player) {
  if (player.first) {
    return player.second;
  } else {
    return player.first;
  }
  this.incrementMove();
};
