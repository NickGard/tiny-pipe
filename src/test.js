const { pipe } = require("./index");
const { expect } = require("chai");
const { spy } = require("sinon");

describe("tiny-pipe", () => {
  it("should apply the results of function calls to successive funcitons from right to left", () => {
    const double = spy(n => 2 * n);
    const addFive = spy(n => 5 + n);
    const cube = spy(n => Math.pow(n, 3));
    const fiftyNine = pipe(cube, double, addFive)(3);

    expect(cube.calledWith(3), "cube was not called with 3").to.be.true;
    expect(double.calledWith(27), "double was not called with 27").to.be.true;
    expect(
      double.calledImmediatelyAfter(cube),
      "cube was not called immediately before double"
    ).to.be.true;
    expect(
      double.calledImmediatelyBefore(addFive),
      "double was not called immediately before addFive"
    ).to.be.true;
    expect(addFive.calledWith(54), "addFive was not called with 54").to.be.true;
    expect(fiftyNine).to.equal(59);
  });
  it("should pipe the same function repeatedly", () => {
    const double = spy(n => 2 * n);
    const twentyFour = pipe(double, double, double)(3);

    expect(double.callCount).to.equal(3);
    expect(twentyFour).to.equal(24);
  });
});
