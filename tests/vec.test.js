const { Vec } = require("../main");

test("Vec add", () => {
  const a = new Vec(1, 2);
  const b = new Vec(3, 4);
  expect(a.add(b)).toEqual({ x: 4, y: 6 });
});

test("Vec dot", () => {
  const a = new Vec(1, 2);
  const b = new Vec(2, 1);
  expect(a.dot(b)).toBe(4);
});


test("Vec mul", () => {
  const a = new Vec(1, 2);
  expect(a.mul(2, 3)).toEqual({ x: 2, y: 6 });
});

test("Vec cross", () => {
  const a = new Vec(1, 2);
  const b = new Vec(3, 4);
  expect(a.cross(b)).toBe(-2);
});