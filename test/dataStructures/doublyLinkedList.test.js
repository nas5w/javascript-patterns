const DLL = require("../../src/dataStructures/doublyLinkedList");

describe("Doubly Linked List Data structure", () => {
  it("Should have empty head when created", () => {
    const dll = new DLL();
    expect(dll.head).toBe(null);
  });

  it("Should add the first node as head of the dll", () => {
    const dll = new DLL();
    dll.insertToStart(1);
    expect(dll.head.value).toBe(1);
  });

  it("Should add an element to the end of the list", () => {
    const dll = new DLL();
    dll.insertToEnd(1);
    dll.insertToEnd(2);
    dll.insertToEnd(3);
    expect(dll.toString()).toBe("1, 2, 3");
  });

  it("Should return a string with the contents of the dll", () => {
    const dll = new DLL();
    dll.insertToStart(1);
    dll.insertToStart(2);
    dll.insertToStart(3);
    expect(dll.toString()).toBe("3, 2, 1");
  });

  it("Should delete the first element in the list", () => {
    const dll = new DLL();
    dll.insertToStart(1);
    dll.insertToStart(2);
    dll.insertToStart(3);
    dll.deleteStart();
    expect(dll.toString()).toBe("2, 1");
  });

  it("Should delete the last element in the list", () => {
    const dll = new DLL();
    dll.insertToStart(1);
    dll.insertToStart(2);
    dll.insertToStart(3);
    dll.deleteStart();
    expect(dll.toString()).toBe("3, 2");
  });
});
