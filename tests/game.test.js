test("bullet creation", () => {
  const bullets = new Bullets({});
  bullets.addBullet(0, 0, 0);
  expect(bullets.bullets.length).toBe(1);
});