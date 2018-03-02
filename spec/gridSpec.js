describe("Feature test", function() {
  var grid;

  beforeEach(function() {
    grid = new Grid();
  });

  it("should print out the grid", function() {
    expect(grid.setGrid()).toEqual(
      "\n" +
        1 +
        " | " +
        2 +
        " | " +
        3 +
        "\n" +
        "---------\n" +
        4 +
        " | " +
        5 +
        " | " +
        6 +
        "\n" +
        "---------\n" +
        7 +
        " | " +
        8 +
        " | " +
        9 +
        "\n"
    );
  });
});
