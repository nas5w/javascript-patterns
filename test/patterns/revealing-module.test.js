const revealingModule = require('../../src/patterns/revealing-module');

test("shouldn't expose privateFunction", () => {
  expect(revealingModule.privateFunction).not.toBeDefined();
});

test('exposes a publicFunction', () => {
  expect(typeof revealingModule.publicFunction).toBe('function');
  expect(revealingModule.publicFunction()).toMatch(/this is a public function/i);
});

test('access privateFunction from exposePrivateFunction', () => {
  const result = revealingModule.exposePrivateFunction();
  expect(result).toMatch(/this is a private function/i);
});
