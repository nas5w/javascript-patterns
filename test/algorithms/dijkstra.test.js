const dijkstra = require('../../src/algorithms/dijkstra');

test('find distances', () => {
    const answer = [ 0, 4, 7, 8, 15 ];
    const INF = 9999;
    const graph = [
        [0, 4, INF, 8, INF],
        [4, 0, 3, INF, INF],
        [INF, 3, 0, 4, INF],
        [8, INF, 4, 0, 7],
        [INF, INF, INF, 7, 0]
    ]
    
    const V = 5;
    
    let distances = new Array(V);

    expect(dijkstra(graph, distances)).toEqual(answer);
})