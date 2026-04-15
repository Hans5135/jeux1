const { Bullets } = require("../main");

const fakeCtx = {
  clearRect: () => {},
  beginPath: () => {},
  arc: () => {},
  stroke: () => {},
  fill: () => {}
};

test("bullet creation", () => {
  const bullets = new Bullets(fakeCtx);
  bullets.addBullet(0, 0, 0);
  expect(bullets.bullets.length).toBe(1);
});