const {addObserver, removeObserver, notifyObservers, observers } = require('../../src/patterns/observer')
const testFn = jest.fn(n => n * n)

test("addObserver adds an observer", () => {
  addObserver(testFn)
  expect(observers).toContain(testFn)
})

test("addObserver removes an observer", () => {
  removeObserver(testFn)
  expect(observers).not.toContain(testFn)
})

test("notifyObservers notifies observers", () => {
  addObserver(testFn)
  notifyObservers(3)
  expect(testFn).toHaveBeenCalled()
})
