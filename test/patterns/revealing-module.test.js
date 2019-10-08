const revealingModule = require('../../src/patterns/revealing-module');

test("shouldn't expose privateFunction", () => {
  expect(revealingModule.privateFunction).not.toBeDefined();
});

test('exposes a publicFunction', () => {
  expect(typeof revealingModule.publicFunction).toBe('function');
});

test('access privateFunction from exposePrivateFunction', () => {
  const result = revealingModule.exposePrivateFunction();
  expect(result).toMatch(/this is a private function/i);
});

test('access publicFunction from publicFunction', () => {
  const result = revealingModule.publicFunction();
  expect(result).toMatch(/this is a public function/i);
});
