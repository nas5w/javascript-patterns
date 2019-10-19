function dijkstra(graph, distances) {
  let visited = new Array(V);

  for (let i = 0; i < V; i++) {
    distances[i] = INF;
    visited[i] = false;
  }

  distances[0] = 0;

  for (let i = 0; i < V - 1; i++) {
    let index = minDistanceVertex(distances, visited);
    visited[index] = true;
    for (let j = 0; j < V; j++) {
      if (
        !visited[j] &&
        graph[i][j] != 0 &&
        distances[i] != INF &&
        distances[i] + graph[i][j] < distances[j]
      ) {
        distances[j] = distances[i] + graph[i][j];
      }
    }
  }
}

function minDistanceVertex(distances, visited) {
  let min = INF;
  let index;
  for (let i = 0; i < V; i++) {
    if (distances[i] < min && !visited[i]) {
      min = distances[i];
      index = i;
    }
  }

  return index;
}

const INF = 9999;

const V = 5;

module.exports = dijkstra;
