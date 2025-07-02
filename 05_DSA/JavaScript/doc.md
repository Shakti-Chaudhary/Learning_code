To generate an in-depth interview guide for Data Structures and Algorithms (DSA) in JavaScript, I'll need to cover the core concepts, common data structures, fundamental algorithms, complexity analysis, and frequently asked interview problems. Each section will include explanations and runnable JavaScript code examples.

Here's a comprehensive plan for the DSA in JavaScript interview guide:

**DSA in JavaScript Interview Guide (In-Depth with Code Examples)**

1.  **Introduction to DSA & Why It Matters**

      * What are Data Structures?
      * What are Algorithms?
      * Importance of DSA in interviews and real-world development.

2.  **Complexity Analysis**

      * **Time Complexity:**
          * Big O Notation (O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n\!)).
          * How to calculate Big O.
          * Worst-case, Average-case, Best-case.
          * Examples with JS code.
      * **Space Complexity:**
          * Auxiliary Space vs. Total Space.
          * Examples with JS code.

3.  **Fundamental Data Structures**

      * **Arrays:**
          * Definition, characteristics (contiguous memory, fixed/dynamic size).
          * Basic operations (access, insert, delete, search).
          * Pros & Cons.
          * JS Array methods relevant to DSA.
          * Code Examples: Basic operations, finding duplicates.
      * **Strings:**
          * Definition, characteristics (immutable in JS).
          * Common operations (substring, concatenation, search).
          * JS String methods relevant to DSA.
          * Code Examples: Palindrome check, anagrams.
      * **Linked Lists:**
          * Singly Linked List (Node structure, operations: insert, delete, traverse, search).
          * Doubly Linked List (brief).
          * Circular Linked List (brief).
          * Pros & Cons vs. Arrays.
          * Code Examples: Linked List implementation, reverse a linked list.
      * **Stacks:**
          * LIFO (Last-In, First-Out).
          * Operations: `push`, `pop`, `peek`, `isEmpty`, `size`.
          * Implementation using Arrays.
          * Common use cases.
          * Code Examples: Stack implementation, balanced parentheses.
      * **Queues:**
          * FIFO (First-In, First-Out).
          * Operations: `enqueue`, `dequeue`, `peek`, `isEmpty`, `size`.
          * Implementation using Arrays (and consideration for efficiency).
          * Common use cases.
          * Code Examples: Queue implementation, breadth-first search conceptual setup.
      * **Hash Maps (Objects/Maps in JS):**
          * Key-Value pairs, hashing function, collision resolution.
          * Operations: `set`/`add`, `get`, `delete`, `has`.
          * JS `Map` vs. plain `Object`.
          * Common use cases.
          * Code Examples: Frequency counter, two sum.
      * **Sets:**
          * Collection of unique values.
          * Operations: `add`, `delete`, `has`, `size`.
          * JS `Set` object.
          * Common use cases.
          * Code Examples: Finding unique elements.
      * **Trees:**
          * General Tree concepts (root, node, child, parent, leaf, depth, height).
          * **Binary Trees:** Definition, types (full, complete, perfect, skewed).
          * **Binary Search Trees (BST):** Definition, properties, operations (insert, search, delete - conceptual).
          * Tree Traversal (DFS: In-order, Pre-order, Post-order; BFS: Level-order).
          * Code Examples: BST `insert`/`search`, Tree Traversals (recursive & iterative for DFS, queue for BFS).
      * **Heaps (Priority Queues):**
          * Min-Heap, Max-Heap properties.
          * Implementation (conceptual, usually array-based binary tree).
          * Common use cases (Priority Queue).
          * Code Examples: (Simplified) Heapify or PriorityQueue concept using array.
      * **Graphs:**
          * Definition (nodes/vertices, edges).
          * Types (Directed/Undirected, Weighted/Unweighted, Cyclic/Acyclic).
          * Representations (Adjacency Matrix, Adjacency List).
          * Graph Traversal (BFS, DFS).
          * Common Algorithms (Dijkstra's, MSTs - conceptual).
          * Code Examples: Adjacency List representation, BFS/DFS traversal.

4.  **Fundamental Algorithms**

      * **Sorting Algorithms:**
          * Bubble Sort, Selection Sort, Insertion Sort (brief, for comparison).
          * Merge Sort (Divide & Conquer, recursion, stable).
          * Quick Sort (Divide & Conquer, pivot, in-place, average-case fastest).
          * Complexity and stability.
          * Code Examples: Merge Sort, Quick Sort.
      * **Searching Algorithms:**
          * Linear Search.
          * Binary Search (prerequisites, recursive vs. iterative).
          * Code Examples: Binary Search.
      * **Recursion:**
          * Base case, recursive step.
          * Pros & Cons (stack overflow, readability).
          * Memoization & Dynamic Programming (brief introduction).
          * Code Examples: Factorial, Fibonacci.
      * **Greedy Algorithms (brief):**
          * Making locally optimal choices.
          * Example: Coin Change (simplified).
      * **Backtracking (brief):**
          * Exploring all possible solutions by building candidates step by step.
          * Example: Permutations (conceptual).
      * **Dynamic Programming (brief):**
          * Overlapping subproblems, optimal substructure.
          * Memoization vs. Tabulation.
          * Example: Fibonacci (DP version).

5.  **Common Interview Problem Patterns & Techniques**

      * Two Pointers
      * Sliding Window
      * Frequency Counter (Hash Map/Set)
      * Divide and Conquer
      * Backtracking
      * Dynamic Programming
      * Graphs (BFS/DFS on graphs)
      * Linked List Manipulation
      * Tree Traversal
      * Recursion with Memoization

6.  **How to Approach a DSA Problem in an Interview**

      * Understand the Problem (Clarification, Examples)
      * Think Aloud (Brute Force, Optimizations)
      * Plan (Data Structure, Algorithm)
      * Code (Clean, Readable)
      * Test (Edge Cases, Custom Tests)
      * Analyze (Time & Space Complexity)

7.  **Essential JavaScript Features for DSA**

      * `const`, `let`, `var` (scoping).
      * Arrow functions.
      * Destructuring.
      * Spread/Rest operators.
      * `Map`, `Set`.
      * `Array` methods (`forEach`, `map`, `filter`, `reduce`, `sort`, `splice`, `slice`, `push`, `pop`, `shift`, `unshift`).
      * Classes (for data structure implementations).

This plan is quite extensive, covering almost everything. I will ensure to provide clear explanations and **well-formatted, runnable JavaScript code examples** for each significant concept. I'll also prioritize common and essential topics, keeping brevity where a concept is highly complex and rarely implemented from scratch in typical interviews (e.g., advanced tree/graph algorithms, self-balancing BSTs).

-----

Let's start generating the content based on this plan\! I'll break it down into multiple responses for readability and to manage the extensive content.

-----

# Data Structures & Algorithms (DSA) Interview Guide in JavaScript

This comprehensive guide aims to equip you with the essential knowledge of Data Structures and Algorithms, focusing on their implementation and application using JavaScript. Each concept is explained with practical code examples and complexity analysis.

## Table of Contents

1.  [Introduction to DSA & Why It Matters](https://www.google.com/search?q=%231-introduction-to-dsa--why-it-matters)
2.  [Complexity Analysis: Time & Space](https://www.google.com/search?q=%232-complexity-analysis-time--space)
      * 2.1 Time Complexity (Big O Notation)
      * 2.2 Space Complexity
3.  [Fundamental Data Structures](https://www.google.com/search?q=%233-fundamental-data-structures)
      * 3.1 Arrays
      * 3.2 Strings
      * 3.3 Linked Lists
      * 3.4 Stacks
      * 3.5 Queues
      * 3.6 Hash Maps (Objects/Maps)
      * 3.7 Sets
      * 3.8 Trees (Binary Trees, BSTs, Traversals)
      * 3.9 Heaps (Priority Queues)
      * 3.10 Graphs (Representations, Traversals)
4.  [Fundamental Algorithms](https://www.google.com/search?q=%234-fundamental-algorithms)
      * 4.1 Sorting Algorithms
      * 4.2 Searching Algorithms
      * 4.3 Recursion
      * 4.4 Greedy Algorithms (Brief)
      * 4.5 Backtracking (Brief)
      * 4.6 Dynamic Programming (Brief)
5.  [Common Interview Problem Patterns & Techniques](https://www.google.com/search?q=%235-common-interview-problem-patterns--techniques)
6.  [How to Approach a DSA Problem in an Interview](https://www.google.com/search?q=%236-how-to-approach-a-dsa-problem-in-an-interview)
7.  [Essential JavaScript Features for DSA](https://www.google.com/search?q=%237-essential-javascript-features-for-dsa)

-----

## 1\. Introduction to DSA & Why It Matters

### What are Data Structures?

A **Data Structure** is a specialized format for organizing, processing, retrieving, and storing data. It dictates the relationships among data elements and defines the operations that can be performed on the data. Choosing the right data structure is crucial for efficient algorithms.

  * **Examples:** Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Maps.

### What are Algorithms?

An **Algorithm** is a set of well-defined, step-by-step instructions or rules designed to solve a specific problem or perform a specific task. Algorithms take input, process it, and produce output.

  * **Examples:** Sorting algorithms (Bubble Sort, Merge Sort), Searching algorithms (Binary Search), Graph traversal algorithms (BFS, DFS).

### Importance of DSA in Interviews and Real-World Development

  * **Problem-Solving Skills:** DSA forms the backbone of logical thinking and problem-solving. Interviews use them to assess your ability to break down problems and devise efficient solutions.
  * **Efficiency:** Understanding DSA allows you to write code that is not just correct, but also performant (fast) and uses resources (memory) optimally.
  * **Foundation for Complex Systems:** Most complex software systems are built upon fundamental data structures and algorithms.
  * **Code Quality & Readability:** Well-structured data and efficient algorithms often lead to cleaner and more maintainable code.

-----

## 2\. Complexity Analysis: Time & Space

Complexity analysis helps us evaluate the efficiency of an algorithm, especially as the input size grows.

### 2.1 Time Complexity (Big O Notation)

**Time Complexity** quantifies the amount of time an algorithm takes to run as a function of the input size ($n$). It's not about actual seconds but about the growth rate of operations.

**Big O Notation** describes the upper bound of the growth rate of an algorithm's running time. It focuses on the worst-case scenario.

  * **O(1) - Constant Time:**
      * Execution time is independent of the input size.
      * *Example:* Accessing an array element by index.
    <!-- end list -->
    ```javascript
    function getFirstElement(arr) {
        return arr[0]; // O(1)
    }
    ```
  * **O(log n) - Logarithmic Time:**
      * Execution time increases slowly as the input size grows. Often seen in algorithms that divide the problem space in half with each step.
      * *Example:* Binary Search.
    <!-- end list -->
    ```javascript
    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) { // O(log n) because search space halves each time
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    ```
  * **O(n) - Linear Time:**
      * Execution time grows proportionally with the input size.
      * *Example:* Iterating through an array, linear search.
    <!-- end list -->
    ```javascript
    function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) { // O(n) loop
            sum += arr[i];
        }
        return sum;
    }
    ```
  * **O(n log n) - Linearithmic Time:**
      * Often seen in efficient sorting algorithms (e.g., Merge Sort, Quick Sort). It typically involves dividing a problem and then doing linear work on the subproblems.
      * *Example:* Merge Sort (high-level concept of operations).
    <!-- end list -->
    ```javascript
    // Conceptual representation of Merge Sort's O(n log n)
    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        // Recursively sort halves (log n calls)
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        // Merge sorted halves (n operations)
        return merge(sortedLeft, sortedRight);
    }

    function merge(left, right) {
        let result = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
    ```
  * **O(n^2) - Quadratic Time:**
      * Execution time grows proportionally to the square of the input size. Often involves nested loops.
      * *Example:* Bubble Sort, finding all pairs in an array.
    <!-- end list -->
    ```javascript
    function printAllPairs(arr) {
        for (let i = 0; i < arr.length; i++) { // Outer loop O(n)
            for (let j = 0; j < arr.length; j++) { // Inner loop O(n)
                console.log(arr[i], arr[j]); // O(1) operation
            }
        }
    }
    ```
  * **O(2^n) - Exponential Time:**
      * Execution time doubles with each additional element. Often seen in brute-force recursive algorithms, like naive Fibonacci or traveling salesman problem.
      * *Example:* Naive Recursive Fibonacci.
    <!-- end list -->
    ```javascript
    function fibonacciNaive(n) {
        if (n <= 1) return n;
        return fibonacciNaive(n - 1) + fibonacciNaive(n - 2); // O(2^n) due to redundant calculations
    }
    ```
  * **O(n\!) - Factorial Time:**
      * Execution time grows extremely rapidly. Seen in algorithms that try all permutations of a set.
      * *Example:* Solving the Traveling Salesman Problem by checking all paths.

**How to Calculate Big O:**

1.  **Identify the largest growth term:** Discard lower-order terms and constant factors.
      * E.g., $O(n^2 + n + 1)$ becomes $O(n^2)$.
      * E.g., $O(2n)$ becomes $O(n)$.
2.  **Analyze loops:**
      * Single loop: $O(n)$
      * Nested loops: $O(n^k)$ where $k$ is the number of nested loops.
3.  **Analyze recursion:** Determine the number of recursive calls and the work done per call.
4.  **Analyze divisions:** If the input size is halved repeatedly, it's logarithmic.

**Worst-case, Average-case, Best-case:**

  * **Worst-case:** The maximum number of operations an algorithm might perform for a given input size. (Most commonly used in Big O).
  * **Average-case:** The expected number of operations for a random input.
  * **Best-case:** The minimum number of operations an algorithm might perform.

### 2.2 Space Complexity

**Space Complexity** quantifies the amount of memory an algorithm uses as a function of the input size ($n$).

  * **Auxiliary Space:** The extra space used by the algorithm beyond the input data itself. (Often what interviewers mean when they ask for "space complexity").

  * **Total Space:** Auxiliary Space + Space taken by input.

  * **O(1) - Constant Space:**

      * Memory usage is constant regardless of input size.
      * *Example:* Swapping two variables.

    <!-- end list -->

    ```javascript
    function swap(a, b) {
        let temp = a; // O(1) extra space
        a = b;
        b = temp;
    }
    ```

  * **O(n) - Linear Space:**

      * Memory usage grows proportionally with input size.
      * *Example:* Creating a new array of the same size as the input.

    <!-- end list -->

    ```javascript
    function copyArray(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i]); // O(n) extra space for newArr
        }
        return newArr;
    }
    ```

  * **O(log n) - Logarithmic Space:**

      * Memory usage grows logarithmically with input size. Often seen in recursive algorithms that halve the problem size (e.g., recursive binary search due to call stack).

  * **O(n^2) - Quadratic Space:**

      * Memory usage grows quadratically with input size.
      * *Example:* Storing an adjacency matrix for a graph where $V$ is number of vertices. If $V=N$, it's $O(N^2)$ space.

-----

## 3\. Fundamental Data Structures

### 3.1 Arrays

  * **Definition:** A collection of items stored at contiguous memory locations. Elements are accessed by an integer index.
  * **Characteristics:**
      * **Contiguous Memory:** Elements are stored next to each other, allowing for fast random access.
      * **Fixed/Dynamic Size:** In low-level languages, arrays often have a fixed size. In JavaScript, arrays are dynamic and can grow or shrink.
      * **Homogeneous/Heterogeneous:** In JS, arrays can store elements of different data types (heterogeneous).
  * **Basic Operations & Complexity:**
      * **Access (by index):** `arr[i]` - $O(1)$
      * **Search (linear scan):** $O(n)$
      * **Insert/Delete (at end):** `push()`, `pop()` - $O(1)$ (amortized)
      * **Insert/Delete (at beginning/middle):** `unshift()`, `shift()`, `splice()` - $O(n)$ (requires shifting elements)
  * **Pros:** Fast random access, cache-friendly due to contiguity.
  * **Cons:** Slow insertions/deletions in the middle, fixed size in some languages (not strictly JS).
  * **JS Array methods relevant to DSA:** `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `concat`, `indexOf`, `includes`, `forEach`, `map`, `filter`, `reduce`, `sort`, `reverse`.

**Code Example: Finding Duplicates in an Array**

```javascript
/**
 * Finds all duplicate elements in an array.
 * @param {Array<any>} arr The input array.
 * @returns {Array<any>} An array containing duplicate elements.
 * Time Complexity: O(n)
 * Space Complexity: O(n) (for the frequency map)
 */
function findDuplicates(arr) {
    const frequencyMap = new Map(); // Using Map for potentially better performance with varied keys
    const duplicates = new Set(); // Using Set to store unique duplicates

    for (const item of arr) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
        if (frequencyMap.get(item) > 1) {
            duplicates.add(item);
        }
    }
    return Array.from(duplicates);
}

console.log("--- Arrays ---");
const numbers = [1, 2, 3, 4, 2, 5, 3, 6, 1];
console.log("Original array:", numbers);
console.log("Duplicates:", findDuplicates(numbers)); // Output: [2, 3, 1]

const mixed = [1, 'a', 2, 'b', 1, 'a', null, undefined, null];
console.log("Mixed array:", mixed);
console.log("Duplicates:", findDuplicates(mixed)); // Output: [1, "a", null]
```

-----

### 3.2 Strings

  * **Definition:** A sequence of characters.
  * **Characteristics:**
      * **Immutable in JavaScript:** String methods like `toUpperCase()`, `slice()`, `concat()` always return a *new* string; they do not modify the original.
      * Can be treated as arrays of characters for iteration and access (though direct element assignment like `str[0] = 'a'` is not allowed and won't work).
  * **Common Operations & Complexity:**
      * **Access (by index):** `str[i]` - $O(1)$
      * **Concatenation:** $O(m+n)$ where $m$ and $n$ are lengths of strings being concatenated.
      * **Substring:** `slice()`, `substring()` - $O(k)$ where $k$ is the length of the substring.
      * **Search:** `indexOf()`, `includes()` - $O(m \\times n)$ in worst case (naive search), more efficient algorithms exist (e.g., KMP).
  * **JS String methods relevant to DSA:** `length`, `charAt`, `indexOf`, `lastIndexOf`, `slice`, `substring`, `concat`, `split`, `join`, `toLowerCase`, `toUpperCase`, `trim`, `startsWith`, `endsWith`, `includes`.

**Code Example: Palindrome Check**

```javascript
/**
 * Checks if a string is a palindrome (reads the same forwards and backwards).
 * Ignores non-alphanumeric characters and case.
 * @param {string} str The input string.
 * @returns {boolean} True if palindrome, false otherwise.
 * Time Complexity: O(n) (due to string cleaning and comparison)
 * Space Complexity: O(n) (for the cleaned string)
 */
function isPalindrome(str) {
    // Clean the string: remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = cleanedStr.length - 1;

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log("\n--- Strings ---");
console.log("'racecar' is palindrome:", isPalindrome("racecar")); // true
console.log("'hello' is palindrome:", isPalindrome("hello"));     // false
console.log("'A man, a plan, a canal: Panama' is palindrome:", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("'No lemon, no melon' is palindrome:", isPalindrome("No lemon, no melon")); // true
```

-----

### 3.3 Linked Lists

  * **Definition:** A linear data structure where elements (nodes) are not stored at contiguous memory locations. Each node stores its own data and a reference (or pointer) to the next node in the sequence.
  * **Types:**
      * **Singly Linked List:** Each node points only to the next node.
      * **Doubly Linked List:** Each node has pointers to both the next and the previous node.
      * **Circular Linked List:** The last node points back to the first node.
  * **Characteristics:**
      * **Dynamic Size:** Can grow or shrink easily.
      * **Non-contiguous Memory:** Elements can be anywhere in memory.
  * **Pros:** Efficient insertions/deletions at any position (once the position is found), dynamic size.
  * **Cons:** Slow random access (must traverse from head), more memory overhead per node (due to pointers).

**Code Example: Singly Linked List Implementation & Reversal**

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // First node
        this.tail = null; // Last node
        this.length = 0;
    }

    /**
     * Adds a new node to the end of the list.
     * @param {any} data
     * Time Complexity: O(1)
     */
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Prepends a new node to the beginning of the list.
     * @param {any} data
     * Time Complexity: O(1)
     */
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Inserts a new node at a specific index.
     * @param {number} index
     * @param {any} data
     * Time Complexity: O(n) in worst case (middle insertion)
     */
    insert(index, data) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.prepend(data);
            return true;
        }
        if (index === this.length) {
            this.append(data);
            return true;
        }

        const newNode = new Node(data);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return true;
    }

    /**
     * Removes a node at a specific index.
     * @param {number} index
     * Time Complexity: O(n) in worst case (middle deletion)
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined; // Or throw error
        }
        if (index === 0) {
            const removedNode = this.head;
            this.head = this.head.next;
            if (this.length === 1) { // If it was the only node
                this.tail = null;
            }
            this.length--;
            return removedNode;
        }

        const leader = this.traverseToIndex(index - 1);
        const removedNode = leader.next;
        leader.next = removedNode.next;
        if (index === this.length - 1) { // If removing the tail
            this.tail = leader;
        }
        this.length--;
        return removedNode;
    }

    /**
     * Traverses the list to find the node at a specific index.
     * @param {number} index
     * @returns {Node} The node at the given index.
     * Time Complexity: O(n)
     */
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    /**
     * Converts the linked list to an array for easy visualization.
     * Time Complexity: O(n)
     */
    toArray() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return arr;
    }

    /**
     * Reverses the linked list in-place.
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    reverse() {
        if (!this.head || !this.head.next) {
            return this.head; // List is empty or has only one node
        }

        let first = this.head;
        this.tail = this.head; // New tail is the old head
        let second = first.next;

        while (second) {
            const temp = second.next; // Store next node
            second.next = first;     // Reverse pointer
            first = second;          // Move first pointer forward
            second = temp;           // Move second pointer forward
        }
        this.head.next = null; // Old head's next should be null
        this.head = first;     // New head is the last node from original list
        return this;
    }
}

console.log("\n--- Linked Lists ---");
const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
console.log("Initial list:", myLinkedList.toArray()); // [1, 10, 99, 5, 16]
myLinkedList.remove(3); // Remove 5
console.log("After remove(3):", myLinkedList.toArray()); // [1, 10, 99, 16]
console.log("Head:", myLinkedList.head.data);
console.log("Tail:", myLinkedList.tail.data);
myLinkedList.reverse();
console.log("Reversed list:", myLinkedList.toArray()); // [16, 99, 10, 1]
```

-----

### 3.4 Stacks

  * **Definition:** A linear data structure that follows the **LIFO (Last-In, First-Out)** principle. Imagine a stack of plates: you can only add a plate to the top, and you can only remove a plate from the top.
  * **Core Operations:**
      * `push(element)`: Adds an element to the top of the stack.
      * `pop()`: Removes and returns the top element from the stack.
      * `peek()`: Returns the top element without removing it.
      * `isEmpty()`: Checks if the stack is empty.
      * `size()`: Returns the number of elements in the stack.
  * **Implementation:** Typically implemented using Arrays or Linked Lists. Array-based is common for simplicity in JS.
  * **Pros:** Fast `push`/`pop` (O(1)).
  * **Cons:** Accessing elements other than the top is not direct.
  * **Common Use Cases:**
      * Function call stack management.
      * Undo/Redo functionality in applications.
      * Browser history (back button).
      * Expression evaluation (infix to postfix).
      * Balancing parentheses/brackets.
      * DFS (Depth-First Search) for graph/tree traversal (often implicitly via recursion, or explicitly with a stack).

**Code Example: Stack Implementation & Balanced Parentheses**

```javascript
class Stack {
    constructor() {
        this.items = []; // Using a JavaScript array as the underlying storage
    }

    /**
     * Adds an element to the top of the stack.
     * @param {any} element
     * Time Complexity: O(1) (amortized)
     */
    push(element) {
        this.items.push(element);
    }

    /**
     * Removes and returns the top element from the stack.
     * @returns {any | undefined} The removed element, or undefined if stack is empty.
     * Time Complexity: O(1)
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    /**
     * Returns the top element without removing it.
     * @returns {any | undefined} The top element, or undefined if stack is empty.
     * Time Complexity: O(1)
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if empty, false otherwise.
     * Time Complexity: O(1)
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Returns the number of elements in the stack.
     * @returns {number}
     * Time Complexity: O(1)
     */
    size() {
        return this.items.length;
    }

    /**
     * Clears the stack.
     * Time Complexity: O(1)
     */
    clear() {
        this.items = [];
    }

    /**
     * Converts the stack to a string for visualization.
     * @returns {string}
     */
    toString() {
        return this.items.toString();
    }
}

/**
 * Checks if a string of parentheses is balanced.
 * Supports '()', '{}', '[]'.
 * @param {string} s The input string of parentheses.
 * @returns {boolean} True if balanced, false otherwise.
 * Time Complexity: O(n)
 * Space Complexity: O(n) (for the stack)
 */
function isBalancedParentheses(s) {
    const stack = new Stack();
    const map = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) { // If it's an opening parenthesis
            stack.push(char);
        } else { // If it's a closing parenthesis
            if (stack.isEmpty()) {
                return false; // Closing parenthesis with no matching opening one
            }
            const lastOpen = stack.pop();
            if (map[lastOpen] !== char) {
                return false; // Mismatched parentheses
            }
        }
    }
    return stack.isEmpty(); // True if all opened parentheses have been closed
}

console.log("\n--- Stacks ---");
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log("Stack after pushes:", myStack.toString()); // 10,20
console.log("Peek:", myStack.peek()); // 20
console.log("Pop:", myStack.pop()); // 20
console.log("Stack after pop:", myStack.toString()); // 10
console.log("Is empty:", myStack.isEmpty()); // false
myStack.pop();
console.log("Is empty:", myStack.isEmpty()); // true

console.log("Parentheses '({[]})' are balanced:", isBalancedParentheses("({[]})")); // true
console.log("Parentheses '([)]' are balanced:", isBalancedParentheses("([)]"));     // false
console.log("Parentheses '{[}' are balanced:", isBalancedParentheses("{[}"));       // false
console.log("Parentheses '' are balanced:", isBalancedParentheses(""));             // true
console.log("Parentheses '((()' are balanced:", isBalancedParentheses("((()"));     // false
```

-----

### 3.5 Queues

  * **Definition:** A linear data structure that follows the **FIFO (First-In, First-Out)** principle. Imagine a line at a ticket counter: the first person in line is the first to be served.
  * **Core Operations:**
      * `enqueue(element)`: Adds an element to the rear (back) of the queue.
      * `dequeue()`: Removes and returns the front element from the queue.
      * `peek()`: Returns the front element without removing it.
      * `isEmpty()`: Checks if the queue is empty.
      * `size()`: Returns the number of elements in the queue.
  * **Implementation:** Can be implemented using Arrays or Linked Lists.
      * **Array-based:** `push()` for enqueue, `shift()` for dequeue. `shift()` is $O(n)$ in JavaScript because it re-indexes all remaining elements. For better performance, a circular array or a Linked List is preferred.
      * **Linked List-based:** `append()` for enqueue, `removeHead()` for dequeue. Both are $O(1)$.
  * **Pros:** Fair scheduling, maintains order.
  * **Cons:** Array-based `dequeue` can be slow.
  * **Common Use Cases:**
      * Task scheduling (e.g., CPU scheduling, print queue).
      * BFS (Breadth-First Search) for graph/tree traversal.
      * Buffering (e.g., streaming media).
      * Handling asynchronous operations.

**Code Example: Queue Implementation (using Array with `shift` for simplicity, but note efficiency) & BFS Conceptual Setup**

```javascript
class Queue {
    constructor() {
        this.items = []; // Using a JavaScript array
    }

    /**
     * Adds an element to the rear of the queue.
     * @param {any} element
     * Time Complexity: O(1) (amortized)
     */
    enqueue(element) {
        this.items.push(element);
    }

    /**
     * Removes and returns the front element from the queue.
     * @returns {any | undefined} The removed element, or undefined if queue is empty.
     * Time Complexity: O(n) (due to array re-indexing with `shift()`)
     * For O(1) dequeue, use a LinkedList or maintain head/tail pointers in an array.
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }

    /**
     * Returns the front element without removing it.
     * @returns {any | undefined} The front element, or undefined if queue is empty.
     * Time Complexity: O(1)
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if empty, false otherwise.
     * Time Complexity: O(1)
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Returns the number of elements in the queue.
     * @returns {number}
     * Time Complexity: O(1)
     */
    size() {
        return this.items.length;
    }

    /**
     * Converts the queue to a string for visualization.
     * @returns {string}
     */
    toString() {
        return this.items.toString();
    }
}

// Conceptual example for Breadth-First Search (BFS) using a Queue
// BFS is covered more deeply in the Graphs section.
function bfsConceptual(graph, startNode) {
    const queue = new Queue();
    const visited = new Set();
    const result = [];

    queue.enqueue(startNode);
    visited.add(startNode);

    while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();
        result.push(currentNode);

        // For each neighbor of currentNode:
        // if neighbor not visited:
        //   visited.add(neighbor)
        //   queue.enqueue(neighbor)
    }
    return result;
}


console.log("\n--- Queues ---");
const myQueue = new Queue();
myQueue.enqueue(100);
myQueue.enqueue(200);
console.log("Queue after enqueues:", myQueue.toString()); // 100,200
console.log("Peek:", myQueue.peek()); // 100
console.log("Dequeue:", myQueue.dequeue()); // 100
console.log("Queue after dequeue:", myQueue.toString()); // 200
console.log("Is empty:", myQueue.isEmpty()); // false
myQueue.dequeue();
console.log("Is empty:", myQueue.isEmpty()); // true
```

-----

### 3.6 Hash Maps (Objects/Maps in JS)

  * **Definition:** A data structure that stores data in key-value pairs. It uses a hash function to map keys to an index in an array (or bucket), allowing for very fast average-case lookups, insertions, and deletions.
  * **Characteristics:**
      * **Unordered:** Order of elements is generally not guaranteed (though `Map` iterates keys in insertion order).
      * **Unique Keys:** Each key must be unique.
      * **Hashing Function:** Converts keys into array indices.
      * **Collision Resolution:** Methods to handle different keys hashing to the same index (e.g., Separate Chaining, Open Addressing).
  * **Operations & Complexity (Average Case):**
      * `set(key, value)` / `add(key, value)`: $O(1)$
      * `get(key)`: $O(1)$
      * `delete(key)`: $O(1)$
      * `has(key)`: $O(1)$
  * **Operations & Complexity (Worst Case - due to collisions):** $O(n)$
  * **Pros:** Extremely fast average-case performance for lookups, insertions, deletions.
  * **Cons:** Worst-case can be $O(n)$ (rare with good hash functions), potentially higher memory usage, order not guaranteed.
  * **JavaScript Implementations:**
      * **`Object`:** A basic key-value collection. Keys are coerced to strings. Not ideal for performance-critical scenarios or when keys might conflict with `Object.prototype` properties.
      * **`Map`:** Introduced in ES6.
          * Keys can be any data type (including objects, functions).
          * Maintains insertion order of keys.
          * Better performance for frequent additions/deletions.
          * No prototype chain issues.
          * Recommended for hash map use cases in DSA.
      * **`WeakMap`:** Similar to `Map` but keys must be objects and are weakly referenced (garbage collected if no other references exist). Used for memory management, not typical DSA.

**Code Example: Frequency Counter & Two Sum Problem**

```javascript
/**
 * Counts the frequency of each element in an array using a Map.
 * @param {Array<any>} arr The input array.
 * @returns {Map<any, number>} A map where keys are elements and values are their frequencies.
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is the number of unique elements
 */
function frequencyCounter(arr) {
    const freqMap = new Map();
    for (const item of arr) {
        freqMap.set(item, (freqMap.get(item) || 0) + 1);
    }
    return freqMap;
}

/**
 * Given an array of integers `nums` and an integer `target`,
 * return indices of the two numbers such that they add up to `target`.
 * Assume that each input would have exactly one solution, and you may not use the same element twice.
 * @param {Array<number>} nums The array of numbers.
 * @param {number} target The target sum.
 * @returns {Array<number>} An array containing the indices [index1, index2].
 * Time Complexity: O(n)
 * Space Complexity: O(n) (for the map)
 */
function twoSum(nums, target) {
    const numMap = new Map(); // Stores number -> index

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(currentNum, i);
    }
    // As per problem statement, assume exactly one solution, so this line technically unreachable
    return [];
}

console.log("\n--- Hash Maps (Maps/Objects) ---");
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitFreq = frequencyCounter(fruits);
console.log("Fruit frequencies:", fruitFreq); // Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

const nums = [2, 7, 11, 15];
const target = 9;
console.log(`Two Sum for nums: [${nums}], target: ${target} ->`, twoSum(nums, target)); // [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(`Two Sum for nums: [${nums2}], target: ${target2} ->`, twoSum(nums2, target2)); // [1, 2] (because nums[1] + nums[2] = 2 + 4 = 6)
```

-----

### 3.7 Sets

  * **Definition:** A collection of unique values. Sets are useful when you need to store a list of items and ensure no duplicates, or quickly check for presence.
  * **Characteristics:**
      * **Unique Elements:** Automatically ensures all elements are unique. Adding a duplicate has no effect.
      * **No Order Guarantee:** Elements in a Set do not have an index and their insertion order is generally not guaranteed (though `Set` iteration in JS preserves insertion order).
      * **Fast Lookups:** Based on hash table implementation, average $O(1)$ for `add`, `delete`, `has`.
  * **Operations & Complexity (Average Case):**
      * `add(value)`: $O(1)$
      * `delete(value)`: $O(1)$
      * `has(value)`: $O(1)$
      * `size`: $O(1)$
      * `clear()`: $O(1)$
  * **Pros:** Efficient for checking uniqueness and membership.
  * **Cons:** No direct access by index, not designed for storing key-value pairs.
  * **JavaScript Implementation:**
      * **`Set`:** Introduced in ES6. The standard way to work with sets in JS.
      * Can convert to/from arrays using `Array.from(set)` or `new Set(array)`.

**Code Example: Finding Unique Elements in an Array**

```javascript
/**
 * Finds all unique elements in an array using a Set.
 * @param {Array<any>} arr The input array.
 * @returns {Array<any>} An array containing only the unique elements.
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is the number of unique elements
 */
function findUniqueElements(arr) {
    const uniqueSet = new Set(arr); // Set automatically handles uniqueness
    return Array.from(uniqueSet); // Convert Set back to Array
}

console.log("\n--- Sets ---");
const allNumbers = [1, 2, 2, 3, 4, 4, 5, 1];
console.log("Original numbers:", allNumbers);
console.log("Unique numbers:", findUniqueElements(allNumbers)); // [1, 2, 3, 4, 5]

const sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(' ');
const uniqueWords = new Set(words);
console.log("Original words:", words);
console.log("Unique words:", Array.from(uniqueWords)); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] (case-sensitive)
```

-----

### 3.8 Trees

  * **Definition:** A non-linear data structure that simulates a hierarchical tree structure, with a root value and subtrees of children.
  * **Terminology:**
      * **Root:** The topmost node in the tree.
      * **Node:** An element in the tree.
      * **Child:** A node directly connected to another node at a lower level.
      * **Parent:** A node that has children.
      * **Siblings:** Nodes that share the same parent.
      * **Leaf (or External Node):** A node with no children.
      * **Internal Node:** A node with at least one child.
      * **Edge:** The link between two nodes.
      * **Path:** A sequence of nodes and edges connecting one node to another.
      * **Depth of a Node:** The number of edges from the root to the node.
      * **Height of a Node:** The number of edges on the longest path from the node to a leaf.
      * **Height of a Tree:** Height of its root node.

#### Binary Trees

  * **Definition:** A tree data structure in which each node has at most two children, referred to as the left child and the right child.
  * **Types:**
      * **Full Binary Tree:** Every node has either 0 or 2 children.
      * **Complete Binary Tree:** Every level, except possibly the last, is completely filled, and all nodes at the last level are as far left as possible.
      * **Perfect Binary Tree:** All internal nodes have two children and all leaves are at the same depth.
      * **Skewed Binary Tree:** All nodes have only left children or only right children (degrades to a linked list).

#### Binary Search Trees (BST)

  * **Definition:** A special type of binary tree where for each node:
    1.  All values in the **left** subtree are **less than** the node's value.
    2.  All values in the **right** subtree are **greater than** the node's value.
    3.  Both the left and right subtrees are also BSTs.
  * **Pros:** Efficient searching, insertion, and deletion (average $O(\\log n)$).
  * **Cons:** Can become unbalanced (skewed) in worst-case scenarios, degrading operations to $O(n)$. (Self-balancing BSTs like AVL trees or Red-Black trees address this).
  * **Operations (Average Case):** `insert`, `search`, `delete` - $O(\\log n)$
  * **Operations (Worst Case - skewed tree):** `insert`, `search`, `delete` - $O(n)$

#### Tree Traversal

Methods to visit each node in a tree exactly once.

  * **Depth-First Search (DFS):** Explores as far as possible along each branch before backtracking.
      * **Pre-order Traversal (Root, Left, Right):** Useful for creating a copy of the tree or for prefix expressions.
      * **In-order Traversal (Left, Root, Right):** For BSTs, this yields sorted values.
      * **Post-order Traversal (Left, Right, Root):** Useful for deleting the tree or for postfix expressions.
  * **Breadth-First Search (BFS) / Level-Order Traversal:** Explores all nodes at the current depth level before moving to the next depth level. Uses a queue.

**Code Example: Binary Search Tree (BST) Node, Insertion, Search & Traversal**

```javascript
class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null; // Pointer to left child
        this.right = null; // Pointer to right child
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Inserts a new value into the BST.
     * @param {number} value
     * Time Complexity: O(log n) average, O(n) worst case (skewed tree)
     */
    insert(value) {
        const newNode = new BSTNode(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                // Go left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                // Go right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    /**
     * Searches for a value in the BST.
     * @param {number} value
     * @returns {boolean} True if value found, false otherwise.
     * Time Complexity: O(log n) average, O(n) worst case
     */
    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    // --- Tree Traversals ---

    /**
     * Performs an In-order DFS traversal (Left, Root, Right).
     * For BSTs, this returns elements in sorted order.
     * @returns {Array<number>}
     * Time Complexity: O(n)
     * Space Complexity: O(h) where h is the height of the tree (for recursion stack)
     */
    inOrderDFS(node = this.root, list = []) {
        if (node.left) {
            this.inOrderDFS(node.left, list);
        }
        list.push(node.value);
        if (node.right) {
            this.inOrderDFS(node.right, list);
        }
        return list;
    }

    /**
     * Performs a Pre-order DFS traversal (Root, Left, Right).
     * @returns {Array<number>}
     * Time Complexity: O(n)
     * Space Complexity: O(h)
     */
    preOrderDFS(node = this.root, list = []) {
        list.push(node.value);
        if (node.left) {
            this.preOrderDFS(node.left, list);
        }
        if (node.right) {
            this.preOrderDFS(node.right, list);
        }
        return list;
    }

    /**
     * Performs a Post-order DFS traversal (Left, Right, Root).
     * @returns {Array<number>}
     * Time Complexity: O(n)
     * Space Complexity: O(h)
     */
    postOrderDFS(node = this.root, list = []) {
        if (node.left) {
            this.postOrderDFS(node.left, list);
        }
        if (node.right) {
            this.postOrderDFS(node.right, list);
        }
        list.push(node.value);
        return list;
    }

    /**
     * Performs a Breadth-First Search (BFS) / Level-order traversal.
     * @returns {Array<number>}
     * Time Complexity: O(n)
     * Space Complexity: O(w) where w is the maximum width of the tree (for the queue)
     */
    bfs() {
        if (!this.root) return [];
        let list = [];
        let queue = [this.root]; // Start with root in queue

        while (queue.length > 0) {
            let currentNode = queue.shift(); // Dequeue
            list.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left); // Enqueue left child
            }
            if (currentNode.right) {
                queue.push(currentNode.right); // Enqueue right child
            }
        }
        return list;
    }

    // Deletion is more complex, usually covered conceptually or in advanced topics.
    // It involves finding the successor/predecessor and re-arranging the tree.
}

console.log("\n--- Trees (Binary Search Tree) ---");
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
/*
         9
       /   \
      4     20
     / \   /  \
    1   6 15  170
*/

console.log("Lookup 9:", tree.lookup(9));     // true
console.log("Lookup 10:", tree.lookup(10));   // false
console.log("In-order DFS (sorted):", tree.inOrderDFS());   // [1, 4, 6, 9, 15, 20, 170]
console.log("Pre-order DFS:", tree.preOrderDFS());         // [9, 4, 1, 6, 20, 15, 170]
console.log("Post-order DFS:", tree.postOrderDFS());       // [1, 6, 4, 15, 170, 20, 9]
console.log("BFS (Level-Order):", tree.bfs());             // [9, 4, 20, 1, 6, 15, 170]
```

-----

### 3.9 Heaps (Priority Queues)

  * **Definition:** A specialized tree-based data structure that satisfies the heap property:
      * **Min-Heap:** For any given node `P` with child `C`, the value of `P` is less than or equal to the value of `C`. The smallest element is always at the root.
      * **Max-Heap:** For any given node `P` with child `C`, the value of `P` is greater than or equal to the value of `C`. The largest element is always at the root.
  * **Implementation:** Typically implemented as an array. The tree structure is implicit; relationships are derived from array indices. (e.g., for node at index `i`, left child is `2i+1`, right child is `2i+2`, parent is `(i-1)/2`).
  * **Use Cases:**
      * Implementing **Priority Queues** (where elements are retrieved based on priority, not FIFO).
      * Heapsort algorithm.
      * Finding $k$-th smallest/largest element.
      * Graph algorithms (Dijkstra's, Prim's) for efficient selection of next node.
  * **Operations (Average & Worst Case):**
      * `insert` (add element): $O(\\log n)$ (involves "heapifying up")
      * `deleteMin/Max` (extract root): $O(\\log n)$ (involves "heapifying down")
      * `peekMin/Max` (get root): $O(1)$

**Code Example: (Conceptual) Priority Queue using an Array-based Min-Heap**

  * Implementing a full heap from scratch is complex due to `bubbleUp` and `bubbleDown` (heapify) operations. Here's a simplified conceptual view for interview purposes, focusing on the interface of a priority queue. A complete implementation would involve more robust array manipulations.

<!-- end list -->

```javascript
// A simplified Priority Queue class using an array-based min-heap.
// This implementation focuses on the core idea of a heap-based PQ,
// but a production-ready one requires more careful handling of heap property.
class MinPriorityQueue {
    constructor() {
        this.heap = []; // Array representing the heap
    }

    /**
     * Inserts a value into the priority queue.
     * @param {number} value The value to insert.
     * Time Complexity: O(log n)
     */
    enqueue(value) {
        this.heap.push(value);
        this.bubbleUp(); // Maintain heap property
    }

    /**
     * Removes and returns the smallest value (root) from the priority queue.
     * @returns {number | undefined} The smallest value, or undefined if empty.
     * Time Complexity: O(log n)
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // Move last element to root
        this.bubbleDown(); // Maintain heap property
        return min;
    }

    /**
     * Returns the smallest value without removing it.
     * @returns {number | undefined} The smallest value, or undefined if empty.
     * Time Complexity: O(1)
     */
    peek() {
        return this.heap.length > 0 ? this.heap[0] : undefined;
    }

    /**
     * Checks if the priority queue is empty.
     * Time Complexity: O(1)
     */
    isEmpty() {
        return this.heap.length === 0;
    }

    // --- Helper methods for heap property maintenance (simplified logic) ---
    // In a real implementation, these would be more robust.

    _getParentIndex(i) { return Math.floor((i - 1) / 2); }
    _getLeftChildIndex(i) { return 2 * i + 1; }
    _getRightChildIndex(i) { return 2 * i + 2; }
    _hasParent(i) { return this._getParentIndex(i) >= 0; }
    _hasLeftChild(i) { return this._getLeftChildIndex(i) < this.heap.length; }
    _hasRightChild(i) { return this._getRightChildIndex(i) < this.heap.length; }
    _swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }


    bubbleUp() {
        let currentIndex = this.heap.length - 1;
        while (this._hasParent(currentIndex) && this.heap[currentIndex] < this.heap[this._getParentIndex(currentIndex)]) {
            this._swap(currentIndex, this._getParentIndex(currentIndex));
            currentIndex = this._getParentIndex(currentIndex);
        }
    }

    bubbleDown() {
        let currentIndex = 0;
        while (this._hasLeftChild(currentIndex)) {
            let smallestChildIndex = this._getLeftChildIndex(currentIndex);
            if (this._hasRightChild(currentIndex) && this.heap[this._getRightChildIndex(currentIndex)] < this.heap[smallestChildIndex]) {
                smallestChildIndex = this._getRightChildIndex(currentIndex);
            }

            if (this.heap[currentIndex] < this.heap[smallestChildIndex]) {
                break; // Heap property satisfied
            } else {
                this._swap(currentIndex, smallestChildIndex);
            }
            currentIndex = smallestChildIndex;
        }
    }
}

console.log("\n--- Heaps (Min Priority Queue) ---");
const pq = new MinPriorityQueue();
pq.enqueue(50);
pq.enqueue(10);
pq.enqueue(70);
pq.enqueue(5);
pq.enqueue(60);

console.log("Peek (smallest):", pq.peek()); // 5
console.log("Dequeue (smallest):", pq.dequeue()); // 5
console.log("Peek (new smallest):", pq.peek()); // 10
pq.enqueue(3);
console.log("After enqueue 3, peek:", pq.peek()); // 3
while (!pq.isEmpty()) {
    console.log("Dequeued:", pq.dequeue());
}
// Expected Dequeued sequence: 3, 10, 50, 60, 70
```

-----

### 3.10 Graphs

  * **Definition:** A non-linear data structure consisting of a set of nodes (or vertices) and a set of edges connecting these nodes.
  * **Terminology:**
      * **Vertex (Node):** A point or entity in the graph.
      * **Edge (Arc/Link):** A connection between two vertices.
      * **Adjacency:** Two vertices are adjacent if they are connected by an edge.
      * **Path:** A sequence of vertices connected by edges.
      * **Cycle:** A path that starts and ends at the same vertex.
  * **Types:**
      * **Directed Graph (Digraph):** Edges have a direction (e.g., one-way street).
      * **Undirected Graph:** Edges have no direction (e.g., two-way street).
      * **Weighted Graph:** Edges have associated values (weights/costs).
      * **Unweighted Graph:** Edges have no associated values.
      * **Cyclic Graph:** Contains at least one cycle.
      * **Acyclic Graph:** Contains no cycles. (DAG - Directed Acyclic Graph).
  * **Representations:**
      * **Adjacency Matrix:** A 2D array where `matrix[i][j]` is 1 (or weight) if an edge exists between vertex `i` and vertex `j`, and 0 otherwise.
          * **Pros:** Fast edge existence check ($O(1)$), easy to implement for dense graphs.
          * **Cons:** High space complexity ($O(V^2)$), slow for sparse graphs.
      * **Adjacency List:** An array of lists/arrays, where `list[i]` contains all vertices adjacent to vertex `i`.
          * **Pros:** Space-efficient for sparse graphs ($O(V+E)$), efficient for finding all neighbors of a vertex.
          * **Cons:** Slower edge existence check ($O(degree(V))$).
          * **Recommended for most interview problems.**

#### Graph Traversal

  * **Breadth-First Search (BFS):**
      * Explores a graph level by level. It visits all neighbors of the current node before moving to the next level neighbors.
      * Uses a **Queue**.
      * **Use Cases:** Shortest path in unweighted graphs, finding connected components.
      * **Time Complexity:** $O(V + E)$ (V = vertices, E = edges).
      * **Space Complexity:** $O(V)$ (for the queue and visited set).
  * **Depth-First Search (DFS):**
      * Explores as far as possible along each branch before backtracking.
      * Uses a **Stack** (explicitly or implicitly via recursion call stack).
      * **Use Cases:** Cycle detection, topological sorting, finding connected components, path finding.
      * **Time Complexity:** $O(V + E)$.
      * **Space Complexity:** $O(V)$ (for the recursion stack or explicit stack and visited set).

**Code Example: Adjacency List Representation & BFS/DFS Traversal**

```javascript
// Graph representation using Adjacency List
class Graph {
    constructor() {
        this.adjacencyList = new Map(); // Using Map for key-value pairs (vertex -> array of neighbors)
    }

    /**
     * Adds a vertex to the graph.
     * @param {any} vertex
     */
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    /**
     * Adds an edge between two vertices.
     * @param {any} vertex1
     * @param {any} vertex2
     * @param {boolean} isDirected True if directed, false if undirected (default)
     */
    addEdge(vertex1, vertex2, isDirected = false) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }

        this.adjacencyList.get(vertex1).push(vertex2); // Add edge from v1 to v2
        if (!isDirected) {
            this.adjacencyList.get(vertex2).push(vertex1); // Add edge from v2 to v1 for undirected
        }
    }

    /**
     * Breadth-First Search (BFS) traversal.
     * @param {any} startVertex
     * @returns {Array<any>} List of visited vertices in BFS order.
     * Time Complexity: O(V + E)
     * Space Complexity: O(V)
     */
    bfs(startVertex) {
        const result = [];
        const visited = new Set();
        const queue = [startVertex]; // Using array as a queue

        visited.add(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift(); // Dequeue
            result.push(currentVertex);

            const neighbors = this.adjacencyList.get(currentVertex);
            if (neighbors) {
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor); // Enqueue
                    }
                }
            }
        }
        return result;
    }

    /**
     * Depth-First Search (DFS) traversal (recursive).
     * @param {any} startVertex
     * @returns {Array<any>} List of visited vertices in DFS order.
     * Time Complexity: O(V + E)
     * Space Complexity: O(V) (for recursion stack)
     */
    dfsRecursive(startVertex) {
        const result = [];
        const visited = new Set();
        const adjacencyList = this.adjacencyList; // Capture 'this' for recursive helper

        function explore(vertex) {
            visited.add(vertex);
            result.push(vertex);

            const neighbors = adjacencyList.get(vertex);
            if (neighbors) {
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        explore(neighbor);
                    }
                }
            }
        }

        if (this.adjacencyList.has(startVertex)) {
            explore(startVertex);
        }
        return result;
    }

    /**
     * Depth-First Search (DFS) traversal (iterative using a stack).
     * @param {any} startVertex
     * @returns {Array<any>} List of visited vertices in DFS order.
     * Time Complexity: O(V + E)
     * Space Complexity: O(V) (for stack)
     */
    dfsIterative(startVertex) {
        const result = [];
        const visited = new Set();
        const stack = [startVertex]; // Using array as a stack

        visited.add(startVertex);

        while (stack.length > 0) {
            const currentVertex = stack.pop(); // Pop from stack
            result.push(currentVertex);

            const neighbors = this.adjacencyList.get(currentVertex);
            if (neighbors) {
                // Important: Push neighbors in reverse order if you want to match recursive DFS order
                // Or simply iterate and push, it will still be a valid DFS.
                // For consistent output with recursive DFS, often iterate neighbors in reverse or sort them.
                for (let i = neighbors.length - 1; i >= 0; i--) { // Reverse order for consistent left-first
                    const neighbor = neighbors[i];
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        stack.push(neighbor);
                    }
                }
            }
        }
        return result;
    }

    printGraph() {
        console.log("Graph Adjacency List:");
        for (const [vertex, neighbors] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${neighbors.join(', ')}`);
        }
    }
}

console.log("\n--- Graphs ---");
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F'); // Undirected edges by default

graph.printGraph();
/* Expected Output:
Graph Adjacency List:
A -> B, C
B -> A, D
C -> A, E
D -> B, E, F
E -> C, D, F
F -> D, E
*/

console.log("BFS starting from A:", graph.bfs('A')); // A, B, C, D, E, F (order can vary depending on adjacency list order)
console.log("DFS (Recursive) starting from A:", graph.dfsRecursive('A')); // A, B, D, E, C, F (example order)
console.log("DFS (Iterative) starting from A:", graph.dfsIterative('A')); // A, C, E, F, D, B (example order, depends on push/pop order)
```