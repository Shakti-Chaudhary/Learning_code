Okay, I will generate an extensive, topic-wise JavaScript interview guide in Markdown format, ensuring no major topic is overlooked. This will be a comprehensive resource, similar to the CSS guide.

Here's the detailed JavaScript Interview Guide:

-----

# JavaScript Interview Guide (Extensive Topic-Wise)

This document provides an exhaustive, topic-wise guide to JavaScript concepts frequently encountered in technical interviews. It aims to cover the breadth and depth required for various roles, from junior to senior JavaScript developers.

## Table of Contents

1.  [Fundamentals](https://www.google.com/search?q=%231-fundamentals)
2.  [Variables & Data Types](https://www.google.com/search?q=%232-variables--data-types)
3.  [Operators](https://www.google.com/search?q=%233-operators)
4.  [Control Flow](https://www.google.com/search?q=%234-control-flow)
5.  [Functions](https://www.google.com/search?q=%235-functions)
6.  [Objects](https://www.google.com/search?q=%236-objects)
7.  [Arrays](https://www.google.com/search?q=%237-arrays)
8.  [Scope & Closures](https://www.google.com/search?q=%238-scope--closures)
9.  [Hoisting](https://www.google.com/search?q=%239-hoisting)
10. [`this` Keyword](https://www.google.com/search?q=%2310-this-keyword)
11. [Prototypes & Inheritance](https://www.google.com/search?q=%2311-prototypes--inheritance)
12. [Asynchronous JavaScript](https://www.google.com/search?q=%2312-asynchronous-javascript)
13. [Error Handling](https://www.google.com/search?q=%2313-error-handling)
14. [ES6+ Features (Modern JavaScript)](https://www.google.com/search?q=%2314-es6-features-modern-javascript)
15. [DOM Manipulation](https://www.google.com/search?q=%2315-dom-manipulation)
16. [Events](https://www.google.com/search?q=%2316-events)
17. [Web APIs (Fetch, LocalStorage, etc.)](https://www.google.com/search?q=%2317-web-apis-fetch-localstorage-etc)
18. [Modules](https://www.google.com/search?q=%2318-modules)
19. [Strict Mode](https://www.google.com/search?q=%2319-strict-mode)
20. [Memory Management & Garbage Collection](https://www.google.com/search?q=%2320-memory-management--garbage-collection)
21. [Security in JavaScript](https://www.google.com/search?q=%2321-security-in-javascript)
22. [Performance Optimization](https://www.google.com/search?q=%2322-performance-optimization)
23. [Testing in JavaScript](https://www.google.com/search?q=%2323-testing-in-javascript)
24. [Common Interview Questions & Scenarios](https://www.google.com/search?q=%2324-common-interview-questions--scenarios)

-----

## 1\. Fundamentals

  * **What is JavaScript?**
      * High-level, interpreted, dynamically typed, just-in-time compiled, multi-paradigm programming language.
      * Primarily known as the scripting language for web pages, but also used in server-side (Node.js), mobile (React Native), desktop (Electron), etc.
      * Core technologies of the World Wide Web, alongside HTML and CSS.
  * **How JavaScript works in a browser (JavaScript Engine)?**
      * Explanation of the JavaScript engine (e.g., V8 in Chrome).
      * Parsing, Abstract Syntax Tree (AST), Interpretation, Just-In-Time (JIT) Compilation (Ignition interpreter and TurboFan compiler in V8).
      * Call Stack, Heap, Event Loop, Callback Queue, Web APIs.
  * **Browser vs. Node.js environments:**
      * Browser: DOM, Web APIs (fetch, localStorage, setTimeout), `window` object.
      * Node.js: File System (fs), HTTP module, `global` object, no DOM.
  * **Interpreted vs. Compiled Language (in the context of JS JIT):**
      * Briefly explain the traditional difference, then how JIT blurs lines for JS (interpreted first, then hot code is compiled for optimization).
  * **Static vs. Dynamic Typing:**
      * JavaScript is dynamically typed (type checking at runtime).
      * Contrast with statically typed languages (type checking at compile time).
  * **Weakly vs. Strongly Typed:**
      * JavaScript is weakly typed (allows implicit type coercion).
      * Contrast with strongly typed languages.
  * **Single-threaded nature of JavaScript:**
      * Only one task can be executed at a time on the main thread.
      * Explain how asynchronous operations are handled (Event Loop).
  * **How to include JavaScript in HTML?**
      * **Inline:** `<button onclick="alert('Hello!')">Click me</button>` (Discouraged).
      * **Internal:** `<script>` tag within `<head>` or `<body>`.
        ```html
        <script>
            console.log("Hello from internal script!");
        </script>
        ```
      * **External:** `<script src="script.js"></script>`. (Most common and recommended).
          * `defer` attribute: Executes script after HTML parsing, but before `DOMContentLoaded`. Maintains execution order.
          * `async` attribute: Executes script asynchronously. Downloads in parallel with HTML parsing, executes as soon as downloaded. Does *not* maintain execution order.

-----

## 2\. Variables & Data Types

  * **Variables:**
      * **`var`:**
          * Function-scoped.
          * Can be re-declared and re-assigned.
          * Hoisted to the top of its function or global scope (with `undefined` initial value).
      * **`let` (ES6+):**
          * Block-scoped.
          * Cannot be re-declared in the same scope, can be re-assigned.
          * Hoisted but in a "Temporal Dead Zone" (TDZ) until declaration.
      * **`const` (ES6+):**
          * Block-scoped.
          * Cannot be re-declared or re-assigned.
          * Must be initialized at declaration.
          * For objects/arrays, the *reference* cannot be changed, but properties/elements can be mutated.
          * Hoisted but in a TDZ.
      * **Difference between `var`, `let`, and `const` (scope, hoisting, re-declaration/re-assignment).**
  * **Data Types:**
      * **Primitive Data Types:**
          * `string`: Sequence of characters (e.g., `'hello'`, `"world"`).
          * `number`: Floating-point numbers (e.g., `10`, `3.14`). Includes `Infinity`, `-Infinity`, `NaN`.
          * `boolean`: `true` or `false`.
          * `undefined`: A variable that has been declared but not assigned a value.
          * `null`: Intentional absence of any object value. (typeof null is 'object' - a historical bug).
          * `symbol` (ES6+): Unique and immutable primitive value, often used for object property keys.
          * `bigint` (ES2020): Represents whole numbers larger than `2^53 - 1`.
      * **Non-Primitive (Reference) Data Types:**
          * `object`: Collection of key-value pairs.
              * Plain objects (`{}`).
              * Arrays (`[]`).
              * Functions (`function() {}`).
              * Dates, RegExps, Maps, Sets, etc.
      * **Pass by Value vs. Pass by Reference:**
          * Primitives are passed by value (copy of the value).
          * Objects are passed by reference (copy of the reference to the object in memory).
      * **`typeof` operator:** Returns a string indicating the type of the operand.
          * `typeof undefined` -\> `'undefined'`
          * `typeof null` -\> `'object'` (historical bug)
          * `typeof 42` -\> `'number'`
          * `typeof 'hello'` -\> `'string'`
          * `typeof true` -\> `'boolean'`
          * `typeof Symbol()` -\> `'symbol'`
          * `typeof 10n` -\> `'bigint'`
          * `typeof {}` -\> `'object'`
          * `typeof []` -\> `'object'`
          * `typeof function(){}` -\> `'function'`
      * **Type Coercion:**
          * Implicit type conversion (e.g., `5 + '5'` -\> `'55'`, `1 == true` -\> `true`).
          * Explicit type conversion (`Number()`, `String()`, `Boolean()`, `parseInt()`, `parseFloat()`).

-----

## 3\. Operators

  * **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%` (modulus), `**` (exponentiation), `++` (increment), `--` (decrement).
  * **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.
  * **Comparison Operators:**
      * **Loose equality (`==`):** Performs type coercion.
      * **Strict equality (`===`):** Does *not* perform type coercion (compares value and type). (Always prefer `===` for predictable behavior).
      * `!=` (loose inequality), `!==` (strict inequality).
      * `>`, `<`, `>=`, `<=`.
  * **Logical Operators:**
      * `&&` (logical AND): Returns the first falsy value or the last truthy value.
      * `||` (logical OR): Returns the first truthy value or the last falsy value.
      * `!` (logical NOT): Converts to boolean and negates.
  * **Bitwise Operators:** `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`. (Less common in web development, but good to know).
  * **Ternary (Conditional) Operator:** `condition ? exprIfTrue : exprIfFalse`.
  * **Spread Syntax (`...`) (ES6+):**
      * Expanding iterables (arrays, strings) into individual elements.
      * Copying arrays/objects.
      * Concatenating arrays.
      * Passing arguments to functions.
  * **Rest Parameters (`...`) (ES6+):**
      * Collects an indefinite number of arguments as an array.
  * **Nullish Coalescing Operator (`??`) (ES2020):**
      * Returns the right-hand operand when the left-hand operand is `null` or `undefined`.
      * Differs from `||` which also treats `0`, `''`, `false` as falsy.
  * **Optional Chaining (`?.`) (ES2020):**
      * Allows reading the value of a property located deep within a chain of connected objects without having to explicitly validate that each reference in the chain is valid.
  * **Destructuring Assignment (ES6+):**
      * Extracting values from arrays or properties from objects into distinct variables.

-----

## 4\. Control Flow

  * **Conditional Statements:**
      * `if`, `else if`, `else`.
      * `switch` statement.
  * **Looping Statements:**
      * `for` loop: `for (initialization; condition; increment)`
      * `while` loop: `while (condition)`
      * `do...while` loop: `do { ... } while (condition)`
      * `for...in` loop: Iterates over enumerable *property names* of an object (not recommended for arrays).
      * `for...of` loop (ES6+): Iterates over *iterable values* (arrays, strings, Maps, Sets, NodeLists, etc.).
      * **Loop control statements:** `break`, `continue`.
  * **Falsy vs. Truthy values:**
      * **Falsy:** `false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`, `undefined`, `NaN`.
      * **Truthy:** Anything that is not falsy.

-----

## 5\. Functions

  * **Function Declaration:**
    ```javascript
    function greet(name) {
        return `Hello, ${name}!`;
    }
    ```
      * Hoisted.
  * **Function Expression:**
    ```javascript
    const greet = function(name) {
        return `Hello, ${name}!`;
    };
    ```
      * Not hoisted (variable assignment is, but not the function itself).
  * **Arrow Functions (ES6+):**
    ```javascript
    const greet = (name) => `Hello, ${name}!`;
    ```
      * Concise syntax.
      * No `arguments` object (use rest parameters instead).
      * Lexical `this` binding (does not have its own `this`).
      * Cannot be used as constructors (`new`).
      * Not hoisted.
  * **Anonymous Functions:** Functions without a name (often used as callbacks).
  * **Immediately Invoked Function Expressions (IIFEs):**
    ```javascript
    (function() {
        // code here
    })();
    ```
      * Creates a private scope, preventing variable leakage into global scope.
  * **Parameters vs. Arguments:**
      * Parameters: The named variables listed in the function definition.
      * Arguments: The actual values passed to the function when it is called.
  * **Default Parameters (ES6+):**
      * Allow parameters to be initialized with default values if no value or `undefined` is passed.
    <!-- end list -->
    ```javascript
    function greet(name = 'Guest') {
        console.log(`Hello, ${name}!`);
    }
    ```
  * **Pure Functions:**
      * Given the same inputs, always return the same output.
      * Produce no side effects (don't modify external state).
      * Important for predictable code and testing.
  * **Higher-Order Functions:**
      * Functions that take other functions as arguments or return functions as results.
      * Examples: `map`, `filter`, `reduce`, `setTimeout`, event listeners.
  * **Callbacks:**
      * Functions passed as arguments to other functions, to be executed later.
      * Foundation of asynchronous programming before Promises/Async/Await.
  * **Recursion:**
      * A function that calls itself until a base case is met.
      * Explain stack overflow potential and tail call optimization (if applicable to interview context).

-----

## 6\. Objects

  * **Object Literal:** `{ key: value, ... }`
  * **Properties and Methods:**
      * Accessing properties: Dot notation (`obj.prop`), Bracket notation (`obj['prop']`).
      * Adding/modifying properties.
      * Deleting properties (`delete obj.prop`).
  * **`Object.keys()`, `Object.values()`, `Object.entries()` (ES2017):**
      * Return arrays of keys, values, or key-value pairs respectively.
  * **`Object.assign()` (ES6+):**
      * Copies enumerable own properties from one or more source objects to a target object.
      * Used for shallow copying or merging objects.
  * **`Object.freeze()` vs. `Object.seal()` vs. `Object.preventExtensions()`:**
      * `freeze`: Prevents adding, deleting, or modifying properties.
      * `seal`: Prevents adding or deleting properties, but allows modification of existing ones.
      * `preventExtensions`: Prevents adding new properties.
  * **Deep Copy vs. Shallow Copy:**
      * **Shallow Copy:** Copies only the top-level properties. Nested objects are still referenced. (`Object.assign()`, spread syntax `...`).
      * **Deep Copy:** Creates a completely independent copy, including nested objects. (Usually requires `JSON.parse(JSON.stringify(obj))` for simple cases, or a dedicated deep copy library/function for complex objects with functions, dates, etc.).
  * **`this` keyword (detailed in its own section).**
  * **Constructors (`new` keyword):**
      * Functions used to create objects.
      * How `new` works:
        1.  Creates a new empty object.
        2.  Sets the new object's `[[Prototype]]` to the constructor's `prototype` property.
        3.  Binds `this` to the new object.
        4.  Executes the constructor function.
        5.  If the constructor returns a non-primitive value, that value is returned; otherwise, the new object is returned.
  * **Classes (ES6+):** Syntactic sugar over JavaScript's prototype-based inheritance.
      * `class MyClass { constructor() { ... } method() { ... } }`
      * `extends`, `super()`.
      * Static methods.
      * Public/Private class fields (ES2022).
  * **Getters and Setters:**
      * Special methods that allow you to define custom behavior for getting and setting properties.

-----

## 7\. Arrays

  * **Array Literals:** `[value1, value2, ...]`
  * **Common Array Methods (and their side effects):**
      * **Mutator Methods (modify original array):**
          * `push()`, `pop()`: Add/remove elements from the end.
          * `unshift()`, `shift()`: Add/remove elements from the beginning.
          * `splice(start, deleteCount, ...items)`: Adds/removes elements at a specific index.
          * `sort()`: Sorts elements (lexicographically by default).
          * `reverse()`: Reverses the order of elements.
      * **Accessor Methods (do not modify original array, return new array/value):**
          * `concat()`: Merges arrays.
          * `slice(start, end)`: Extracts a portion of an array.
          * `indexOf()`, `lastIndexOf()`: Find index of an element.
          * `includes()` (ES6+): Checks if an element exists.
          * `join()`: Joins all elements into a string.
          * `toString()`: Converts array to string.
      * **Iteration Methods (ES5/ES6+ - often take callbacks):**
          * `forEach(callback)`: Executes a provided function once for each array element. (No return value).
          * `map(callback)`: Creates a new array with the results of calling a provided function on every element.
          * `filter(callback)`: Creates a new array with all elements that pass the test implemented by the provided function.
          * `reduce(callback, initialValue)`: Executes a reducer function on each element of the array, resulting in a single output value.
          * `some(callback)`: Checks if at least one element in the array passes the test.
          * `every(callback)`: Checks if all elements in the array pass the test.
          * `find(callback)` (ES6+): Returns the first element that satisfies the provided testing function.
          * `findIndex(callback)` (ES6+): Returns the index of the first element that satisfies the provided testing function.
          * `flat()`, `flatMap()` (ES2019): For flattening nested arrays.
  * **Array vs. Array-like Objects (NodeList, arguments object):**
      * How to convert array-like objects to true arrays (`Array.from()`, `[...]` spread, `Array.prototype.slice.call()`).

-----

## 8\. Scope & Closures

  * **Scope:** The current context of execution in which values and expressions are "visible" or can be referenced.
      * **Global Scope:** Variables declared outside any function or block. Accessible from anywhere.
      * **Function/Local Scope:** Variables declared inside a function. Accessible only within that function.
      * **Block Scope (ES6+):** Variables declared with `let` or `const` inside a block (`{}`). Accessible only within that block.
  * **Lexical Scoping:**
      * Functions are executed using the scope chain that was in effect when they were *defined* (not when they are called).
      * Inner functions have access to variables of their outer (parent) functions.
  * **Closures:**
      * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
      * Allows a function to access variables from its outer scope even after the outer function has finished executing.
      * **Common Use Cases:**
          * Data privacy/encapsulation (e.g., creating private variables).
          * Currying (partial application of functions).
          * Maintaining state in asynchronous operations.
          * Module patterns.
      * **Example:**
        ```javascript
        function makeCounter() {
            let count = 0; // 'count' is in the outer lexical environment
            return function() { // This inner function forms a closure
                count++;
                return count;
            };
        }
        const counter1 = makeCounter();
        console.log(counter1()); // 1
        console.log(counter1()); // 2
        ```

-----

## 9\. Hoisting

  * **Conceptual "lifting" of declarations to the top of their scope.**
  * **`var` declarations:** Are hoisted to the top of their function or global scope and initialized with `undefined`.
    ```javascript
    console.log(myVar); // undefined
    var myVar = 10;
    console.log(myVar); // 10
    ```
  * **`function` declarations:** Are hoisted to the top of their function or global scope, and the entire function definition is hoisted.
    ```javascript
    myFunction(); // "Hello!"
    function myFunction() {
        console.log("Hello!");
    }
    ```
  * **`let` and `const` declarations:** Are hoisted to the top of their block scope but are *not initialized*. They are in a **Temporal Dead Zone (TDZ)** from the start of the block until their declaration. Accessing them before declaration results in a `ReferenceError`.
    ```javascript
    console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = 20;
    ```
  * **Function expressions:** Are not hoisted like function declarations; only the variable assignment is hoisted (like `var`, `let`, or `const`).
    ```javascript
    console.log(myFunc); // undefined (if myFunc is var) or ReferenceError (if myFunc is let/const)
    var myFunc = function() { console.log("Hi"); };
    myFunc(); // Hi
    ```

-----

## 10\. `this` Keyword

  * **`this` refers to the object that is currently executing the code.**
  * Its value depends on *how* a function is called (execution context).
  * **Rules for `this` binding:**
      * **Global Context:**
          * In a browser: `this` refers to the `window` object.
          * In Node.js: `this` refers to the `global` object (or `exports` in a module).
      * **Function Context (Simple Function Call):**
          * In non-strict mode: `this` refers to the `window` (browser) or `global` (Node.js) object.
          * In strict mode: `this` is `undefined`.
      * **Method Context (Object Method):**
          * `this` refers to the object that the method belongs to.
        <!-- end list -->
        ```javascript
        const obj = {
            name: 'Alice',
            greet: function() {
                console.log(`Hello, ${this.name}`); // this is obj
            }
        };
        obj.greet(); // Hello, Alice
        ```
      * **Constructor Context (`new` keyword):**
          * `this` refers to the *newly created instance* of the object.
        <!-- end list -->
        ```javascript
        function Person(name) {
            this.name = name; // this is the new object instance
        }
        const p1 = new Person('Bob');
        ```
      * **Explicit Binding (`call`, `apply`, `bind`):**
          * **`call(thisArg, arg1, arg2, ...)`:** Invokes the function immediately, setting `this` to `thisArg` and passing arguments individually.
          * **`apply(thisArg, [argsArray])`:** Invokes the function immediately, setting `this` to `thisArg` and passing arguments as an array.
          * **`bind(thisArg, arg1, ...)`:** Returns a *new function* with `this` permanently bound to `thisArg` and optionally pre-set arguments. Does not invoke immediately.
        <!-- end list -->
        ```javascript
        const person = { name: 'Charlie' };
        function sayName() { console.log(this.name); }

        sayName.call(person);  // Charlie
        sayName.apply(person); // Charlie
        const boundSayName = sayName.bind(person);
        boundSayName();        // Charlie
        ```
      * **Arrow Functions (Lexical `this`):**
          * Arrow functions do *not* have their own `this` binding. They inherit `this` from their *enclosing lexical context* (the `this` value of the nearest non-arrow parent function or global scope).
          * This makes them ideal for callbacks where you want `this` to refer to the surrounding object, not the callback's execution context.
        <!-- end list -->
        ```javascript
        const obj = {
            name: 'Dave',
            greet: function() {
                setTimeout(() => {
                    console.log(`Hello, ${this.name}`); // 'this' is 'obj' because it's an arrow function
                }, 100);
            }
        };
        obj.greet(); // Hello, Dave
        ```
  * **Order of Precedence for `this`:** New binding \> Explicit binding (`call`, `apply`, `bind`) \> Implicit binding (method call) \> Default binding (global/window). Arrow functions override all of these by using lexical `this`.

-----

## 11\. Prototypes & Inheritance

  * **Prototype Chain:**
      * Every object in JavaScript has an internal property called `[[Prototype]]` (exposed via `__proto__` or `Object.getPrototypeOf()`).
      * When you try to access a property or method on an object, if it's not found on the object itself, JavaScript looks up the prototype chain until it finds the property or reaches `null`.
      * This is how inheritance is implemented in JavaScript.
  * **`Object.prototype`:** The top of the standard prototype chain.
  * **`prototype` property (on functions):**
      * Functions in JavaScript have a `prototype` property, which is an object.
      * This `prototype` object is used as the `[[Prototype]]` for objects created by that function when used as a constructor with `new`.
  * **Classical Inheritance vs. Prototypal Inheritance:**
      * JavaScript uses prototypal inheritance, not classical inheritance (like Java/C++).
  * **Creating Objects with Prototypes:**
      * **Constructor Functions:** (Traditional way before ES6 Classes)
        ```javascript
        function Person(name) {
            this.name = name;
        }
        Person.prototype.greet = function() {
            console.log(`Hello, my name is ${this.name}`);
        };
        const person1 = new Person('Alice');
        person1.greet(); // Hello, my name is Alice
        ```
      * **`Object.create()`:** Creates a new object, using an existing object as the prototype of the newly created object.
        ```javascript
        const animal = {
            makeSound: function() { console.log("Generic sound"); }
        };
        const dog = Object.create(animal);
        dog.makeSound(); // Generic sound
        ```
  * **ES6 Classes (Syntactic Sugar):**
      * Provide a cleaner syntax for creating constructor functions and managing prototypes.
      * Behind the scenes, they still use JavaScript's prototype-based inheritance.
    <!-- end list -->
    ```javascript
    class Animal {
        constructor(name) {
            this.name = name;
        }
        makeSound() {
            console.log("Generic animal sound");
        }
    }
    class Dog extends Animal {
        constructor(name, breed) {
            super(name); // Calls parent constructor
            this.breed = breed;
        }
        makeSound() {
            console.log("Woof!");
        }
    }
    const myDog = new Dog('Buddy', 'Golden Retriever');
    myDog.makeSound(); // Woof!
    console.log(myDog.name); // Buddy
    ```
  * **`instanceof` operator:** Checks if an object is an instance of a particular constructor function (or constructor's prototype in its chain).
  * **`hasOwnProperty()`:** Checks if an object has a direct (own) property, not inherited.

-----

## 12\. Asynchronous JavaScript

  * **Understanding Asynchronicity:**
      * JavaScript's single-threaded nature means long-running operations would block the main thread.
      * Asynchronous operations allow these tasks to run in the background without blocking, executing callbacks when complete.
  * **The Event Loop:**
      * **Call Stack:** Where function calls are placed.
      * **Web APIs (or Node.js APIs):** Browser/Node.js provided functionalities (e.g., `setTimeout`, `fetch`, DOM events) that handle asynchronous tasks.
      * **Callback Queue (or Message Queue):** Where callbacks from Web APIs are placed once their async task is complete.
      * **Event Loop:** Continuously checks if the Call Stack is empty. If it is, it takes the first callback from the Callback Queue and pushes it to the Call Stack.
      * **Microtask Queue (Job Queue):** Higher priority queue for Promises, `queueMicrotask`, `MutationObserver` callbacks. Cleared before the Callback Queue in each turn of the event loop.
  * **Callback Functions:**
      * The traditional way to handle asynchronous operations.
      * **"Callback Hell" / "Pyramid of Doom":** Nested callbacks making code hard to read and maintain.
  * **Promises (ES6+):**
      * An object representing the eventual completion or failure of an asynchronous operation.
      * States: `pending`, `fulfilled` (resolved), `rejected`.
      * **Methods:**
          * `new Promise((resolve, reject) => { ... })`: Constructor.
          * `.then(onFulfilled, onRejected)`: Handles success and error.
          * `.catch(onRejected)`: Handles errors (shorthand for `.then(null, onRejected)`).
          * `.finally(onFinally)` (ES2018): Executes a callback regardless of success or failure.
          * `Promise.all([p1, p2])`: Resolves when all promises in an iterable have resolved, or rejects if any one of them rejects.
          * `Promise.allSettled([p1, p2])` (ES2020): Resolves when all promises have settled (either fulfilled or rejected). Returns an array of objects describing each promise's outcome.
          * `Promise.race([p1, p2])`: Resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
          * `Promise.any([p1, p2])` (ES2021): Resolves as soon as one of the promises in the iterable resolves. Rejects if all of them reject.
          * `Promise.resolve()`, `Promise.reject()`.
  * **`async`/`await` (ES2017):**
      * Syntactic sugar on top of Promises, making asynchronous code look and behave more like synchronous code.
      * `async` keyword: Makes a function return a Promise.
      * `await` keyword: Can only be used inside an `async` function. Pauses execution of the `async` function until the Promise settles, then resumes and returns the resolved value.
      * **Error Handling with `async/await`:** Use `try...catch` blocks.
      * **Example:**
        ```javascript
        async function fetchData() {
            try {
                const response = await fetch('https://api.example.com/data');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
        ```
  * **Differences between Callbacks, Promises, and Async/Await:** Discuss readability, error handling, chaining, and control flow.

-----

## 13\. Error Handling

  * **`try...catch...finally` block:**
      * `try`: Code that might throw an error.
      * `catch (error)`: Executes if an error occurs in the `try` block. `error` object contains details.
      * `finally`: Executes regardless of whether an error occurred or not.
  * **`throw` statement:** Used to create custom errors or re-throw caught errors.
  * **`Error` object properties:**
      * `name`: Type of error (e.g., `ReferenceError`, `TypeError`, `RangeError`).
      * `message`: Description of the error.
      * `stack`: Call stack (useful for debugging).
  * **Common Error Types:**
      * `ReferenceError`: Trying to access an undeclared variable.
      * `TypeError`: Operation cannot be performed on a value of a certain type.
      * `RangeError`: A number is outside an acceptable range.
      * `SyntaxError`: Invalid JavaScript syntax.
      * `URIError`: Invalid URI passed to encodeURI/decodeURI.
      * `EvalError`: Error in `eval()`.
  * **Global Error Handling:**
      * `window.onerror`: For catching uncaught errors in the browser.
      * `process.on('uncaughtException')`: For Node.js.
      * `Promise.prototype.catch()` for unhandled promise rejections.
      * `window.addEventListener('unhandledrejection', ...)` for unhandled promise rejections in browsers.

-----

## 14\. ES6+ Features (Modern JavaScript)

  * **`let` and `const` (covered in Variables).**
  * **Arrow Functions (covered in Functions).**
  * **Template Literals/Strings:**
      * Backticks (`` ` ``) for string interpolation and multi-line strings.
      * `${variable}` for embedding expressions.
    <!-- end list -->
    ```javascript
    const name = "World";
    const greeting = `Hello, ${name}!
    This is a multi-line string.`;
    ```
  * **Destructuring Assignment (covered in Operators/Objects/Arrays).**
  * **Spread and Rest Operators (covered in Operators).**
  * **Promises (`async`/`await`) (covered in Asynchronous JavaScript).**
  * **Classes (covered in Objects/Prototypes).**
  * **Modules (`import`/`export`) (covered in Modules).**
  * **Default Parameters (covered in Functions).**
  * **Enhanced Object Literals:**
      * Shorthand property names: `{ name }` instead of `{ name: name }`.
      * Computed property names: `{ [`prop${i}`]: value }`.
      * Method property shorthand: `{ myMethod() { ... } }` instead of `{ myMethod: function() { ... } }`.
  * **Iterators and Generators:**
      * **Iterators:** Objects that implement the `Symbol.iterator` method and return an object with a `next()` method (returning `{ value: ..., done: ... }`).
      * **Generators (`function*`):** Functions that can be paused and resumed, producing a sequence of values using `yield`.
  * **`Map` and `Set` Data Structures:**
      * **`Map`:** A collection of key-value pairs where keys can be any data type (unlike plain objects where keys must be strings/symbols). Maintains insertion order.
      * **`Set`:** A collection of unique values. Maintains insertion order.
  * **`WeakMap` and `WeakSet`:**
      * Similar to `Map`/`Set` but hold "weak" references to objects, allowing them to be garbage collected if no other references exist.
      * Keys in `WeakMap` must be objects. Values in `WeakSet` must be objects.
  * **Symbols (covered in Data Types).**
  * **`for...of` loop (covered in Control Flow).**
  * **`Proxy` and `Reflect`:**
      * **`Proxy`:** Creates a proxy for another object (target) which can intercept and redefine fundamental operations for that object (e.g., property lookup, assignment, enumeration, function invocation).
      * **`Reflect`:** Provides methods for interceptable JavaScript operations, often used in conjunction with `Proxy`.
  * **`new.target`:** Allows detecting if a function was called with `new`.
  * **`import.meta`:** Object containing context-specific metadata about the current module.

-----

## 15\. DOM Manipulation

  * **What is the DOM?**
      * Document Object Model: A programming interface for HTML and XML documents.
      * Represents the page structure as a tree of objects.
      * Allows JavaScript to access and manipulate elements, content, and styles of a web page.
  * **Selecting Elements:**
      * `document.getElementById('id')`
      * `document.getElementsByClassName('class-name')`
      * `document.getElementsByTagName('tag-name')`
      * `document.querySelector('selector')`: Returns the first element matching the CSS selector.
      * `document.querySelectorAll('selector')`: Returns a `NodeList` of all matching elements.
  * **Modifying Elements:**
      * `element.innerHTML`: Get/set HTML content (can be dangerous due to XSS).
      * `element.textContent`: Get/set text content (safer for text).
      * `element.setAttribute(name, value)`
      * `element.getAttribute(name)`
      * `element.removeAttribute(name)`
      * `element.classList.add()`, `remove()`, `toggle()`, `contains()`
      * `element.style.propertyName`: Directly manipulate inline styles.
  * **Creating and Appending Elements:**
      * `document.createElement('tagName')`
      * `document.createTextNode('text')`
      * `parentNode.appendChild(child)`
      * `parentNode.insertBefore(newElement, referenceElement)`
      * `element.append()`, `prepend()`, `before()`, `after()` (Modern alternatives to `appendChild`).
  * **Removing Elements:**
      * `parentNode.removeChild(child)`
      * `child.remove()` (Modern).
  * **Traversing the DOM:**
      * `parentNode`, `children`, `firstChild`, `lastChild`, `nextSibling`, `previousSibling`.
      * `firstElementChild`, `lastElementChild`, `nextElementSibling`, `previousElementSibling` (Prefer these for element-only nodes).
  * **Differences between `NodeList` and `HTMLCollection`:**
      * Both are array-like, but not true arrays.
      * `HTMLCollection` is live (updates dynamically with DOM changes), `NodeList` can be live or static (e.g., from `querySelectorAll` is static).
      * Methods available on each.

-----

## 16\. Events

  * **Event Handling:** How JavaScript responds to user interactions or browser actions.
  * **Event Listeners:**
      * `element.addEventListener(event, handler, options)`
          * `event`: (e.g., `'click'`, `'mouseover'`, `'keydown'`, `'submit'`, `'load'`, `'DOMContentLoaded'`).
          * `handler`: The function to execute when the event occurs.
          * `options`: Optional object (`{ once: true }`, `{ capture: true }`, `{ passive: true }`).
      * `element.removeEventListener(event, handler)`
      * Old methods: `onclick`, `onmouseover` (discouraged due to limited flexibility).
  * **Event Object (`e` or `event`):**
      * Passed as an argument to the event handler function.
      * Contains information about the event: `target`, `currentTarget`, `type`, `clientX`, `clientY`, `keyCode`, etc.
  * **Event Flow:**
      * **Capturing Phase:** Event propagates from `window` down to the target element.
      * **Target Phase:** Event reaches the target element.
      * **Bubbling Phase:** Event propagates from the target element up to `window`.
  * **`event.stopPropagation()`:** Stops the event from propagating further up or down the DOM tree.
  * **`event.preventDefault()`:** Prevents the default action associated with the event (e.g., a link navigating, a form submitting).
  * **Event Delegation:**
      * Attaching a single event listener to a common parent element instead of multiple listeners to individual child elements.
      * Relies on event bubbling.
      * Improves performance and simplifies code, especially for dynamically added elements.
      * Example:
        ```javascript
        document.getElementById('myList').addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                console.log('Clicked on list item:', event.target.textContent);
            }
        });
        ```

-----

## 17\. Web APIs (Fetch, LocalStorage, etc.)

  * **What are Web APIs?**
      * Browser-provided APIs (not part of core JavaScript language) that allow interaction with the browser environment and external resources.
  * **`Fetch API`:**
      * Modern alternative to `XMLHttpRequest` for making network requests.
      * Returns a `Promise`.
      * Handles `GET`, `POST`, `PUT`, `DELETE`, etc.
      * **Request options:** `method`, `headers`, `body`.
      * **Response object:** `ok`, `status`, `json()`, `text()`, `blob()`, `formData()`.
      * **Example (covered in Async JS section).**
  * **`localStorage` and `sessionStorage`:**
      * **Purpose:** Storing key-value pairs in the client's browser.
      * **`localStorage`:** Data persists even after the browser is closed.
      * **`sessionStorage`:** Data cleared when the browser tab is closed.
      * **Methods:** `setItem(key, value)`, `getItem(key)`, `removeItem(key)`, `clear()`, `key(index)`.
      * **Limitations:** Stores only strings, limited storage space (around 5-10MB), synchronous.
  * **`IndexedDB`:**
      * A low-level API for client-side storage of large amounts of structured data, including files/blobs.
      * Asynchronous.
  * **`Cookies`:**
      * Small text files stored on the client's computer by the browser.
      * Sent with every HTTP request to the same domain.
      * Primarily used for session management, personalization, tracking.
      * **Limitations:** Small size (4KB per cookie), sent with every request (can impact performance), security concerns (CSRF, XSS if not handled carefully).
  * **`Web Workers`:**
      * Allows JavaScript to run in the background thread, separate from the main thread.
      * Prevents blocking the UI for computationally intensive tasks.
      * Communicates with the main thread via `postMessage()` and `onmessage` event listeners.
      * Cannot access DOM.
  * **`Geolocation API`:** Accessing user's geographical location.
  * **`Canvas API`:** For drawing graphics on a web page.
  * **`WebSockets API`:** For full-duplex communication channels over a single TCP connection.
  * **`History API`:** Manipulating browser history (`pushState`, `replaceState`).
  * **`Clipboard API`:** Copying/pasting content.
  * **`Intersection Observer API`:** Efficiently detect when an element enters or exits the viewport, or crosses a certain threshold. (Useful for lazy loading, infinite scrolling, animations).
  * **`Mutation Observer API`:** Monitors changes in the DOM tree.

-----

## 18\. Modules

  * **Why Modules?**
      * Organize code into reusable, independent units.
      * Prevent global scope pollution.
      * Manage dependencies.
      * Improve maintainability and scalability.
  * **CommonJS (Node.js):**
      * `require()` for importing.
      * `module.exports` or `exports` for exporting.
      * Synchronous loading.
  * **ES Modules (ESM) (ES6+):**
      * `import` for importing.
      * `export` for exporting (named or default).
      * Asynchronous loading.
      * Static analysis (can be analyzed at compile time).
      * Browser support is good; Node.js support via `.mjs` extension or `"type": "module"` in `package.json`.
      * **Named Exports:**
        ```javascript
        // module.js
        export const name = 'John';
        export function greet() { console.log('Hello'); }

        // app.js
        import { name, greet } from './module.js';
        ```
      * **Default Exports:**
        ```javascript
        // module.js
        const myFunc = () => { /* ... */ };
        export default myFunc;

        // app.js
        import myFunc from './module.js'; // No curly braces for default export
        ```
      * **Mixing Named and Default Exports.**
      * **Dynamic `import()`:** (Returns a Promise, for lazy loading modules).
      * **`import * as name from './module.js'`:** Importing all exports as a single object.
  * **Module Bundlers (Webpack, Rollup, Parcel, Vite):**
      * Process modules (including non-JS assets) and bundle them into optimized files for the browser.
      * Handle transpilation (Babel), minification, tree-shaking, etc.

-----

## 19\. Strict Mode

  * **`'use strict'` directive:**
      * Enables strict mode for an entire script or individual functions.
      * Introduces a stricter parsing and error handling for JavaScript code.
  * **Benefits:**
      * Eliminates some JavaScript silent errors by changing them to throw errors.
      * Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
      * Prohibits some syntax likely to be defined in future versions of ECMAScript.
  * **Key Changes in Strict Mode:**
      * **No implicit global variables:** Variables must be declared (`var`, `let`, `const`).
      * **`this` is `undefined` in simple function calls.**
      * **`eval` behavior:** Variables declared in `eval` do not leak into the surrounding scope.
      * **Disallows deleting properties of unconfigurable objects.**
      * **Requires unique parameter names in function declarations.**
      * **Disallows `with` statement.**
      * **Disallows setting properties on primitive values.**
      * **Disallows `arguments.callee` and `arguments.caller`.**
  * **How to apply:**
      * Global: Place `'use strict';` at the very top of a script file.
      * Function-level: Place `'use strict';` at the beginning of a function body.

-----

## 20\. Memory Management & Garbage Collection

  * **How JavaScript manages memory:**
      * JavaScript is a garbage-collected language. Developers don't explicitly allocate or deallocate memory.
      * **Memory Lifecycle:**
        1.  **Allocation:** Memory is allocated for variables and objects.
        2.  **Usage:** Memory is used (read/write operations).
        3.  **Release:** Memory is released when no longer needed.
  * **Garbage Collection:**
      * Automatic process that identifies and reclaims memory that is no longer reachable or used by the program.
      * **Mark-and-sweep algorithm:**
          * Most common garbage collection algorithm.
          * Starts from "roots" (global variables, currently executing functions on the stack).
          * Recursively "marks" all objects reachable from the roots.
          * "Sweeps" (deletes) all unmarked objects.
  * **Memory Leaks:**
      * Occur when memory that is no longer needed is still referenced and therefore not garbage collected.
      * **Common causes of memory leaks:**
          * **Global variables:** Accidental creation of globals.
          * **Forgotten Timers/Intervals:** `setTimeout` or `setInterval` that are not cleared.
          * **Unremoved Event Listeners:** Event listeners added to DOM elements that are later removed from the DOM but the listener is not explicitly removed.
          * **Closures:** If a closure keeps a reference to a large object that's no longer needed otherwise.
          * **Detached DOM elements:** Elements removed from the DOM but still referenced in JavaScript code.
          * **Circular References:** (Less common with modern GC, but still possible in certain scenarios).
  * **Tools for detecting memory leaks:** Browser DevTools (Memory tab, Heap Snapshots, Performance monitor).

-----

## 21\. Security in JavaScript

  * **Cross-Site Scripting (XSS):**
      * Injecting malicious client-side scripts into web pages viewed by other users.
      * **Prevention:**
          * **Sanitize User Input:** Always validate and escape/sanitize any user-provided data before rendering it in HTML.
          * Use `textContent` instead of `innerHTML` when inserting untrusted text.
          * Use Content Security Policy (CSP).
          * Use DOMPurify or similar libraries.
  * **Cross-Site Request Forgery (CSRF):**
      * An attacker tricks a victim's browser into sending a forged HTTP request to a website where the user is authenticated.
      * **Prevention:**
          * CSRF tokens (unique, unpredictable token per user session).
          * SameSite cookies.
          * Referer header checking.
  * **Injection Attacks (SQL Injection, Command Injection):**
      * While primarily server-side, insecure client-side code (e.g., building queries from user input for server-side execution without validation) can contribute.
      * **Prevention:** Proper backend validation and parameterized queries.
  * **Information Disclosure:**
      * Exposing sensitive information (API keys, user data) in client-side code.
      * **Prevention:** Store sensitive data securely on the server.
  * **Dependency Vulnerabilities:**
      * Using outdated or vulnerable third-party libraries.
      * **Prevention:** Regularly audit dependencies (e.g., `npm audit`, Snyk).
  * **Same-Origin Policy (SOP):**
      * A critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.
      * **Circumventing SOP (controlled):**
          * CORS (Cross-Origin Resource Sharing): Server explicitly grants permission.
          * JSONP (older, less secure).
          * WebSockets (do not follow SOP).
          * Proxy servers.
  * **Input Validation:**
      * Client-side validation provides immediate feedback, but **server-side validation is crucial for security**.

-----

## 22\. Performance Optimization

  * **Minimize DOM Manipulation:**
      * Batch updates, use `documentFragment`, avoid layout thrashing.
      * Avoid direct style manipulation in loops (prefer class toggling).
  * **Optimize Loops:**
      * Prefer `for` loops over `forEach` for large arrays if raw speed is critical (though usually negligible).
      * Minimize work inside loops.
  * **Debouncing and Throttling:**
      * **Debouncing:** Delays execution of a function until after a certain period of inactivity (e.g., for search input, resize events).
      * **Throttling:** Limits the rate at which a function can be called (e.g., for scroll events, mouse move events).
  * **Memoization:**
      * Caching function results based on their inputs to avoid redundant computations. (e.g., `useMemo` in React).
  * **Code Splitting and Lazy Loading:**
      * Breaking down code into smaller bundles and loading them on demand. (Common in SPA frameworks).
      * Dynamic `import()` for modules.
  * **Tree Shaking:**
      * Removing unused code during the build process (requires ES Modules).
  * **Minification and Compression:**
      * UglifyJS, Terser for minification. Gzip for compression.
  * **Long Task Optimization:**
      * Breaking down long-running JavaScript tasks into smaller chunks using `setTimeout(fn, 0)` or `requestIdleCallback`.
  * **Web Workers (covered in Web APIs):** Offload heavy computation from the main thread.
  * **Avoid Unnecessary Rerenders (in frameworks):**
      * Understand how frameworks like React, Vue, Angular optimize updates and avoid unnecessary component renders.
  * **Efficient Data Structures:**
      * Choose appropriate data structures (`Map` vs. plain `Object` for certain key types, `Set` for unique values).
  * **Profiling Tools:**
      * Browser DevTools (Performance tab, Memory tab, Network tab).

-----

## 23\. Testing in JavaScript

  * **Why Test?**
      * Ensures code correctness, prevents regressions, improves confidence in changes, facilitates collaboration, documents functionality.
  * **Types of Tests:**
      * **Unit Tests:** Test individual functions, components, or modules in isolation. (Smallest unit).
      * **Integration Tests:** Test how different units or modules work together.
      * **End-to-End (E2E) Tests:** Simulate real user scenarios, interacting with the entire application from UI to backend. (Black box testing).
      * **Snapshot Tests:** Compare the rendered output of a component or data structure against a previously saved "snapshot".
      * **Accessibility Tests:** Ensure the application is usable by people with disabilities.
      * **Performance Tests:** Measure application speed and responsiveness.
  * **Testing Frameworks/Libraries:**
      * **Jest:** Popular, all-in-one testing framework (runner, assertion library, mocking). Often used with React.
      * **Mocha:** Flexible testing framework (requires separate assertion and mocking libraries like Chai and Sinon).
      * **Chai:** Assertion library (`expect`, `should`, `assert`).
      * **Sinon.js:** Standalone test spies, stubs, and mocks.
      * **React Testing Library/Vue Test Utils:** Libraries focused on testing components the way users would interact with them.
      * **Cypress/Playwright/Selenium:** E2E testing tools for browser automation.
  * **Key Concepts:**
      * **Assertions:** Statements that check if a condition is true (`expect(sum(1, 2)).toBe(3)`).
      * **Test Runner:** Executes tests and reports results.
      * **Test Suite:** A group of related tests.
      * **Test Case:** A single test.
      * **Mocks/Stubs/Spies:**
          * **Spy:** Observes function calls without altering behavior.
          * **Stub:** Replaces a function with a controlled behavior, often to prevent side effects.
          * **Mock:** A simulated object that records expectations about how it should be used.
      * **Test-Driven Development (TDD):** Write tests before writing code.
      * **Behavior-Driven Development (BDD):** Focuses on describing behavior in a more human-readable way.

-----

## 24\. Common Interview Questions & Scenarios

  * **"Explain the Event Loop in detail. How does JavaScript handle asynchronous operations?"**
  * **"What is a closure? Provide a practical example."**
  * **"Differentiate between `var`, `let`, and `const`."**
  * **"Explain `this` keyword in JavaScript. Provide examples of different binding rules."**
  * **"What is prototypal inheritance in JavaScript? How do ES6 classes relate to it?"**
  * **"What are Promises? How do `async/await` improve working with Promises?"**
  * **"Describe the differences between `==` and `===`."**
  * **"What is hoisting in JavaScript? Explain for `var`, `let`, `const`, and function declarations."**
  * **"What is the Temporal Dead Zone (TDZ)?"**
  * **"Explain debouncing and throttling. When would you use them?"**
  * **"How do you prevent memory leaks in JavaScript?"**
  * **"What is event delegation? Why is it useful?"**
  * **"What are `Map` and `Set`? When would you use them over plain objects/arrays?"**
  * **"Discuss the difference between `null` and `undefined`."**
  * **"How do you handle errors in asynchronous code using `try...catch` with `async/await`?"**
  * **"What are factory functions in JavaScript?"**
  * **"Describe a common security vulnerability in JavaScript and how to mitigate it."**
  * **"How do you make an immutable copy of an object or array in JavaScript?"**
  * **Coding Challenges (be prepared for these):**
      * Implement `debounce` or `throttle`.
      * Implement `Promise.all` or `Promise.race`.
      * Flatten a nested array.
      * Implement a polyfill for `bind`, `map`, `filter`, or `reduce`.
      * Reverse a string/array without built-in methods.
      * Implement a simple counter using closures.
      * Find duplicate elements in an array.
      * FizzBuzz.
      * Implement a deep clone function.
  * **"Explain the difference between `call`, `apply`, and `bind`."**
  * **"What is a pure function? Why are they important?"**
  * **"How do you optimize JavaScript code for better performance?"**
  * **"What are Web Workers, and when would you use them?"**
  * **"Describe the lifecycle of a component (if frameworks are relevant to the role)."**
  * **"How do you test JavaScript code? Name some popular testing libraries."**
  * **"What is the purpose of `'use strict'`?"**
  * **"Explain prototypal inheritance vs. classical inheritance."**
  * **"What is `localStorage`? What are its limitations?"**
  * **"Discuss the differences between ES Modules and CommonJS modules."**

-----