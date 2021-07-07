<div align="center">

<img src="https://raw.githubusercontent.com/nas5w/javascript-patterns/master/logo.png" alt="JavaScript Algorithms, Design Patterns, and Techniques" />

<img src="https://raw.githubusercontent.com/nas5w/javascript-patterns/master/brain.jpg" alt="brain" />

&nbsp;

![Build Status](https://travis-ci.org/nas5w/javascript-patterns.svg?branch=master)
[![Codecov Status](https://codecov.io/gh/nas5w/javascript-patterns/branch/master/graph/badge.svg)](https://codecov.io/gh/nas5w/javascript-patterns/branch/master)

</div>

<hr />

This repository contains common algorithms, design patters, and techniques implemented in JavaScript. Code here is best used for learning purposes and practice. [Contributing](#Contributing) to this repo is appreciated and requested, especially if you're trying to learn JavaScript!

**Note:** Code from this repository should not be used in production! There are likely much more robust and well-tested built-in methods or npm packages to accomplish any task

This repository maintained by [Nick Scialli](https://twitter.com/nas5w) and powered by awesome contributors like you!

# Contents

## Algorithms

- Sorting

  - [Bubble Sort](/src/algorithms/sorting/bubbleSort.js)
  - [Bucket Sort](/src/algorithms/sorting/bucketSort.js)
  - [Counting Sort](/src/algorithms/sorting/countingSort.js)
  - [Heap Sort](/src/algorithms/sorting/heapSort.js)
  - [Insertion Sort](/src/algorithms/sorting/insertionSort.js)
  - [Merge Sort](/src/algorithms/sorting/mergeSort.js)
  - [Quick Sort](/src/algorithms/sorting/quickSort.js)
  - [Radix Sort](/src/algorithms/sorting/radixSort.js)
  - [Selection Sort](/src/algorithms/sorting/selectionSort.js)
  - [Shell Sort](/src/algorithms/sorting/shellSort.js)

- Searching

  - [Binary Search](/src/algorithms/searching/binarySearch.js)
  - [Exponential Search](/src/algorithms/searching/exponentialSearch.js)
  - [Fibonacci Search](/src/algorithms/searching/fibonacciSearch.js)
  - [Interpolation Search](/src/algorithms/searching/interpolationSearch.js)
  - [Jump Search](/src/algorithms/searching/jumpSearch.js)
  - [Linear Search](/src/algorithms/searching/linearSearch.js)
  - TODO: Sublist Search (Search a linked list in another list)
  - TODO: The Ubiquitous Binary Search

## Patterns

- [Observer](/src/patterns/behavioral/observer.js)
- [Revealing Module](/src/patterns/structural/revealing-module.js)
- [Singleton](/src/patterns/creational/singleton.js)
- [Builder](/src/patterns/creational/builder.js)
- [Factory](/src/patterns/factory.js)
- [Adapter](/src/patterns/structural/adapter/adapter.js)
- [Bridge](/src/patterns/structural/bridge.js)
- [Decorator](/src/patterns/structural/decorator.js)
- [Flyweight](/src/patterns/flyweight.js)
- [Proxy](/src/patterns/proxy.js)
- [Facade](/src/patterns/facade.js)
- TODO: Mixin
- [Prototype](/src/patterns/prototype.js)
- [Strategy](/src/patterns/behavioral/strategy.js)

## Techniques

- [Memoize](/src/techniques/memoize.js)

## Data Structures

- [Linked List](/src/dataStructures/linkedList.js)
- TODO: Doubly Linked List
- [Stack](/src/dataStructures/Stack.js)
- [Queue](/src/dataStructures/queue.js)
- [Graph](/src/dataStructures/graph.js)
- [Hash Table](/src/dataStructures/hashTable.js)
- TODO: Heap
- TODO: Tree
- TODO: Binary Tree
- TODO: Disjoint Set
- [Binary Search Tree](/src/dataStructures/binarySearchTree.js)

# Contributing

**Please make sure to claim an algorithm on the issues list (either by claiming an existing one or creating a new issue if the algo isn't listed). This helps make sure multiple people aren't doing the same work!**

Contributing to this repository is appreciated and requested! Please look at the list above and select a section that has TODO next to it, or one that needs testing. In the former case, please add both the content of that section as well as matching tests in the `tests` directory. Please [Check the open issues](https://github.com/nas5w/javascript-patterns/issues) before working on anything to make sure someone else isn't working on it already. If it looks available, [open a new issue](https://github.com/nas5w/javascript-patterns/issues/new) detailing what you plan to work on and I will verify no one else is working on it. Thank you!
