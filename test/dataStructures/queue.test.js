const Queue = require("../../src/dataStructures/queue");

test("enqueue elements", () => {
  const queue = new Queue();

  const elements = [2, 5, 36, 8, 9, 5, 3];

  expect(queue.size()).toBe(0);
  elements.forEach(element => queue.enqueue(element));
  expect(queue.size()).toBe(elements.length);
  expect(queue.front()).toBe(elements[0]);
});

test("dequeue elements", () => {
  const queue = new Queue();

  expect(() => queue.dequeue()).toThrow();

  const elements = [5, 6, 9, 656, 1, 2, 7, 8, 6, 3];

  elements.forEach(element => {
    queue.enqueue(element);
  });

  elements.forEach((_, i) => {
    const element = queue.dequeue();
    expect(element).toBe(elements[i]);
  });

  expect(queue.size()).toBe(0);
  expect(() => queue.dequeue()).toThrow();
});

test("front", () => {
  const queue = new Queue();

  expect(() => queue.front()).toThrow();

  const elements = [5, 6, 9, 656, 1, 2, 7, 8, 6, 3];

  elements.forEach(element => {
    queue.enqueue(element);
  });

  elements.forEach((_, i) => {
    expect(queue.front()).toBe(elements[i]);
    queue.dequeue();
  });

  expect(queue.size()).toBe(0);
  expect(() => queue.front()).toThrow();
});

test("isEmpty", () => {
  const queue = new Queue();

  expect(queue.isEmpty()).toBe(true);

  queue.enqueue(2);

  expect(queue.isEmpty()).toBe(false);

  queue.dequeue();

  expect(queue.isEmpty()).toBe(true);
});

test("queue size", () => {
  const queue = new Queue();

  expect(queue.size()).toBe(0);

  const elements = [1, 5, 6, 8, 9];
  elements.forEach(element => queue.enqueue(element));

  expect(queue.size()).toBe(elements.length);
});
