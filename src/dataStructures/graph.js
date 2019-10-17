/**
 * undirected, weighted graph
 */
class Graph {
  constructor() {
    this.list = {};
  }
  //number of edges
  get size() {
    let size = 0;
    for (let i in this.list) {
      size += Object.keys(this.list[i]).length;
    }
    return size;
  }
  //number of vertices
  get order() {
    return Object.keys(this.list).length;
  }
  insertVertex(v) {
    this.list[v] = {};
  }
  insertEdge(v1, v2, weight = 1) {
    this.list[v1][v2] = weight;
  }
  getWeight(v1, v2) {
    const w = this.list[v1][v2];
    return w ? w : Infinity;
  }
  //dijkstra's algorithm
  findPath(v1, v2) {
    let current = v1;
    const vertices = Object.keys(this.list);
    let unvisited = [...vertices];
    //initialize all weights to infinity
    const weights = vertices.reduce((obj, item) => {
      obj[item] = Infinity;
      return obj;
    }, {});
    weights[v1] = 0;
    const previous = {};
    while (unvisited.length > 0) {
      for (let v of vertices) {
        const n = this.getWeight(current, v) + weights[current];
        if (n < weights[v]) {
          weights[v] = n;
          previous[v] = current;
        }
      }
      //remove current
      unvisited = unvisited.filter(item => item != current);
      if (unvisited.length == 0) break;
      //find the unvisited vertex with the minimum weight
      let min = unvisited.reduce((prev, cur) => {
        return weights[cur] > weights[prev] ? prev : cur;
      }, unvisited[0]);
      current = min;
    }
    if (!previous[v2]) {
      //there is no path from v1 to v2
      return undefined;
    }
    //the algorithm is done here all that remains is to format the data
    //in an array so it looks like an actual path
    let v = v2;
    const ret = [v2];
    do {
      v = previous[v];
      ret.push(v);
    } while (v != v1);
    return ret.reverse();
  }
}

module.exports = Graph;
