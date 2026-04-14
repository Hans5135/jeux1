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