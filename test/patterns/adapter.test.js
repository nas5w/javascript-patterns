const OldInterface = require('../../src/patterns/structural/adapter/old-interface');
const NewInterface = require('../../src/patterns/structural/adapter/new-interface');
const Adapter = require('../../src/patterns/structural/adapter/adapter');

test('return the same value', () => {
  const oldInterface = new OldInterface();
  const newInterface = new NewInterface();
  expect(oldInterface.request('hello', 'say')).toBe(newInterface.say('hello'));
});

test('return the same value', () => {
  const oldInterface = new OldInterface();
  const adapter = new Adapter();
  expect(oldInterface.request('hello', 'say')).toBe(adapter.request('hello', 'say'));
});

test('returns undefined if operation does not exist', () => {
  const oldInterface = new OldInterface();
  const adapter = new Adapter();
  expect(oldInterface.request('hello', 'speak')).toBe(undefined);
  expect(adapter.request('hello', 'speak')).toBe(undefined);
});
