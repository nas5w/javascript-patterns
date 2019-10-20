const Graph = require("../../src/dataStructures/graph");
const compareArrays = require("../helpers/compareArrays");

describe("Graph", () => {
  it("Should have a size and order of zero after instantiation", () => {
    const g = new Graph();
    expect(g.size).toBe(0);
    expect(g.order).toBe(0);
  });
  it("Should have the correct number of vertices when checking the order", () => {
    const g = new Graph();
    g.insertVertex("a");
    g.insertVertex("b");
    g.insertVertex("c");
    expect(g.order).toBe(3);
  });
  it("Should not insert two vertices of the same key", () => {
    const g = new Graph();
    g.insertVertex("a");
    g.insertVertex("a");
    expect(g.order).toBe(1);
  });
  it("Should have the correct number of edges when checking the size", () => {
    const g = new Graph();
    g.insertVertex("a");
    g.insertVertex("b");
    g.insertVertex("c");
    g.insertEdge("a", "b");
    g.insertEdge("a", "c");
    g.insertEdge("c", "b");
    expect(g.size).toBe(3);
  });
  it("Should not insert two edges with the same source and sink", () => {
    const g = new Graph();
    g.insertVertex("a");
    g.insertVertex("b");
    g.insertEdge("a", "b");
    g.insertEdge("a", "b");
    expect(g.size).toBe(1);
  });
  it("Should have the correct weight when checking the weight between two vertices", () => {
    const g = new Graph();
    g.insertVertex("a");
    g.insertVertex("b");
    g.insertEdge("a", "b", 4);
    expect(g.getWeight("a", "b")).toBe(4);
  });
  it("Should have a weight of infinity when checking the weight between two disconnected vertices", () => {
    const g = new Graph();
    g.insertVertex("a");
    g.insertVertex("b");
    expect(g.getWeight("a", "b")).toBe(Infinity);
  });
  it("Should return the shortest path between two vertices when calling findPath", () => {
    //example from https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_shortest_paths.htm
    const g = new Graph();
    g.insertVertex("1");
    g.insertVertex("2");
    g.insertVertex("3");
    g.insertVertex("4");
    g.insertVertex("5");
    g.insertVertex("6");
    g.insertVertex("7");
    g.insertVertex("8");
    g.insertVertex("9");
    g.insertEdge("1", "2", 5);
    g.insertEdge("1", "3", 2);
    g.insertEdge("2", "5", 7);
    g.insertEdge("2", "4", 3);
    g.insertEdge("3", "2", 2);
    g.insertEdge("3", "7", 9);
    g.insertEdge("4", "3", 3);
    g.insertEdge("4", "5", 2);
    g.insertEdge("4", "7", 6);
    g.insertEdge("5", "6", 8);
    g.insertEdge("5", "7", 5);
    g.insertEdge("5", "8", 7);
    g.insertEdge("6", "9", 4);
    g.insertEdge("7", "8", 2);
    g.insertEdge("8", "6", 3);
    const equal = compareArrays(g.findPath("1", "9"), [
      "1",
      "3",
      "7",
      "8",
      "6",
      "9"
    ]);
    expect(equal).toBe(true);
  });
  it("Should return undefined when searching for a path between two disconnected vertices", () => {
    const g = new Graph();
    g.insertVertex("a");
    g.insertVertex("b");
    expect(g.findPath("a", "b")).toBe(undefined);
  });
});
