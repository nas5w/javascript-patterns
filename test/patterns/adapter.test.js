const OldInterface = require('../../src/patterns/adapter/old-interface');
const NewInterface = require('../../src/patterns/adapter/new-interface');
const Adapter = require('../../src/patterns/adapter/adapter');

test("return the same value", () => {
    const oldInterface = new OldInterface();
    const newInterface = new NewInterface();
    expect(oldInterface.request('hello', 'say')).toBe(newInterface.say('hello'));
});

test("return the same value", () => {
    const oldInterface = new OldInterface();
    const adapter = new Adapter();
    expect(oldInterface.request('hello', 'say')).toBe(adapter.request('hello', 'say'));
});