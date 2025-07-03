🚀 JavaScript Mastery: Comprehensive Guide for Interviews & BeyondWelcome to this in-depth guide designed to solidify your JavaScript knowledge, prepare you for technical interviews, and equip you with the skills to tackle complex problems. This document covers fundamental concepts, advanced topics, Data Structures & Algorithms, and best practices, with a focus on real-world scenarios and common interview questions.📚 Table of ContentsCore JavaScript Concepts1.1 Variables: var, let, const1.2 Data Types1.3 Operators1.4 Control Flow1.5 Loops & Iteration1.6 Functions1.7 Scope: Global, Function, Block1.8 Hoisting1.9 The this Keyword1.10 Closures⚡ Asynchronous JavaScript2.1 Callbacks2.2 Promises (Deep Dive)2.3 Async/Await2.4 Event Loop (Deep Dive)2.5 Web APIs (Deep Dive)✨ ES6+ Features3.1 Destructuring Assignment3.2 Spread & Rest Operators3.3 Template Literals3.4 Classes3.5 Modules: import & export3.6 Default Parameters3.7 Arrow Functions (Revisited)📊 Data Structures & Algorithms (DSA) in JavaScript4.1 Big O Notation (Time & Space Complexity)4.2 Arrays4.3 Objects / Hash Maps4.4 Linked Lists4.5 Stacks & Queues4.6 Trees & Graphs4.7 Common Algorithms💡 Interview Preparation & Best Practices5.1 Common Interview Questions & Scenarios5.2 Debugging Techniques5.3 Error Handling Strategies5.4 Code Style & Linting5.5 Performance Optimization Tips📝 Code Documentation Guidelines6.1 Why Document Code?6.2 JSDoc Best Practices6.3 Example: Documenting a Function1. 📖 Core JavaScript ConceptsThese are the building blocks of JavaScript. A strong understanding here is crucial for any developer.1.1 Variables: var, let, constJavaScript provides three keywords to declare variables, each with distinct behaviors regarding scope and mutability.var (Legacy):Scope: Function-scoped. If declared outside a function, it's global.Hoisting: Declared variables are hoisted to the top of their scope and initialized with undefined.Redeclaration: Can be redeclared and updated within the same scope.Edge Case: Due to its function scope and hoisting behavior, var can lead to unexpected bugs, especially in loops or blocks.// Example: var
console.log(myVar); // undefined (hoisted)
var myVar = 10;
console.log(myVar); // 10

if (true) {
    var myVar = 20; // Redeclares the same myVar
    console.log(myVar); // 20
}
console.log(myVar); // 20 (myVar is function-scoped, not block-scoped)

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Logs 3 three times, as i is function-scoped
}
// Expected Output: 3, 3, 3
let (ES6+):Scope: Block-scoped. Variables are confined to the block ({}) in which they are defined.Hoisting: Hoisted to the top of their block, but not initialized. Accessing before declaration results in a ReferenceError (Temporal Dead Zone).Redeclaration: Cannot be redeclared in the same scope, but can be updated.Best Practice: Prefer let when the variable needs to be reassigned.// Example: let
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization (Temporal Dead Zone)
let myLet = 10;
console.log(myLet); // 10

if (true) {
    let myLet = 20; // Declares a new, distinct myLet within this block
    console.log(myLet); // 20
}
console.log(myLet); // 10 (the outer myLet is unaffected)

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Logs 0, 1, 2 (i is block-scoped for each iteration)
}
// Expected Output: 0, 1, 2
const (ES6+):Scope: Block-scoped.Hoisting: Hoisted to the top of their block, but not initialized (Temporal Dead Zone).Redeclaration: Cannot be redeclared or reassigned after initial assignment. Must be initialized at declaration.Immutability: For primitive values, const makes the value truly immutable. For objects/arrays, it means the reference to the object/array cannot be changed, but the contents of the object/array can still be modified.Best Practice: Prefer const by default. Only use let if you know the variable needs to be reassigned.// Example: const
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable.

const person = { name: "Alice" };
person.name = "Bob"; // Allowed: modifying object content
console.log(person); // { name: "Bob" }

// person = { name: "Charlie" }; // TypeError: Assignment to constant variable. (reassigning reference)
1.2 Data TypesJavaScript has dynamic typing, meaning variables can hold values of any data type, and their type can change during execution.Primitive Data Types (Immutable):string: Textual data.let name = "Shakti";
let greeting = 'Hello, ' + name + '!';
let template = `Hello, ${name}!`; // Template literal (ES6+)
number: Both integers and floating-point numbers.let age = 30;
let price = 99.99;
let bigNum = 10000000000000000n; // BigInt (ES11)
boolean: true or false.let isActive = true;
let hasPermission = false;
undefined: A variable that has been declared but not yet assigned a value.let city;
console.log(city); // undefined
null: Represents the intentional absence of any object value. It's a primitive value.let user = null;
console.log(typeof null); // "object" (a long-standing bug in JS)
symbol (ES6+): A unique and immutable primitive value, often used for object property keys to avoid name clashes.const id = Symbol('id');
const anotherId = Symbol('id');
console.log(id === anotherId); // false
BigInt (ES11): Represents whole numbers larger than 2^53 - 1 (the maximum safe integer for number).const largeNumber = 9007199254740991n + 1n;
console.log(largeNumber); // 9007199254740992n
Non-Primitive Data Type (Mutable / Reference Type):object: Collections of key-value pairs. Includes plain objects, arrays, functions, dates, etc.let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
let colors = ["red", "green", "blue"];
let greet = function() { console.log("Hello!"); };

// Edge Case: Mutability of Objects
let obj1 = { value: 10 };
let obj2 = obj1; // obj2 now references the same object as obj1
obj2.value = 20;
console.log(obj1.value); // 20
1.3 OperatorsOperators perform operations on operands (values or variables).Arithmetic: +, -, *, /, % (modulo), ** (exponentiation, ES7), ++, --Assignment: =, +=, -=, *=, /=, %=, **=Comparison: == (loose equality), === (strict equality), !=, !==, >, <, >=, <=Edge Case: Loose vs. Strict Equality== performs type coercion before comparison.=== compares both value and type without coercion.console.log(5 == '5');   // true (type coercion)
console.log(5 === '5');  // false (different types)
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 == false); // true
console.log(0 === false); // false
Logical: && (AND), || (OR), ! (NOT), ?? (Nullish Coalescing, ES11), ?. (Optional Chaining, ES11)Nullish Coalescing (??): Returns the right-hand operand when the left-hand operand is null or undefined. Unlike ||, it does not treat 0 or '' as falsy.let value = 0;
let result = value ?? 'default'; // result is 0
let result2 = value || 'default'; // result2 is 'default'
Optional Chaining (?.): Allows reading the value of a property located deep within a chain of connected objects without having to explicitly validate that each reference in the chain is valid.const user = {
    name: "Alice",
    address: {
        street: "123 Main St"
    }
};
console.log(user.address?.street); // "123 Main St"
console.log(user.contact?.email); // undefined (no error)
// console.log(user.contact.email); // TypeError if contact is undefined
Bitwise: &, |, ^, ~, <<, >>, >>>Ternary (Conditional): condition ? expr1 : expr2let age = 18;
let status = (age >= 18) ? "Adult" : "Minor"; // "Adult"
1.4 Control FlowDetermines the order in which statements are executed.if...else if...else: Executes different blocks of code based on conditions.function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
// Edge Case: Falsy values in conditions
if (0) { /* won't run */ }
if ("") { /* won't run */ }
if (null) { /* won't run */ }
if (undefined) { /* won't run */ }
if (NaN) { /* won't run */ }
switch: Executes a block of code based on different cases of a single expression.function getDayName(day) {
    switch (day) {
        case 0: return "Sunday";
        case 1: return "Monday";
        // ...
        default: return "Invalid Day";
    }
}
// Edge Case: Fall-through
// Without `break`, execution "falls through" to the next case.
function logDayType(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Weekday");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Unknown");
    }
}
1.5 Loops & IterationUsed to repeatedly execute a block of code.for loop: Repeats a block of code a specified number of times.for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
while loop: Repeats a block of code as long as a specified condition is true.let count = 0;
while (count < 3) {
    console.log(count); // 0, 1, 2
    count++;
}
do...while loop: Similar to while, but guarantees the block executes at least once.let i = 0;
do {
    console.log(i); // 0
    i++;
} while (i < 0);
for...in loop: Iterates over enumerable string properties of an object.Edge Case: Iterates over inherited properties as well, and order is not guaranteed. Not recommended for arrays.const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
// Output: a: 1, b: 2, c: 3 (order may vary)
for...of loop (ES6+): Iterates over iterable objects (Arrays, Strings, Maps, Sets, NodeLists, etc.).Best Practice: Preferred for iterating over array elements.const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value); // 10, 20, 30
}
const str = "hello";
for (const char of str) {
    console.log(char); // h, e, l, l, o
}
Array Iteration Methods: forEach, map, filter, reduce, some, every, etc. (Highly recommended for arrays).const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
1.6 FunctionsFunctions are reusable blocks of code that perform a specific task.Function Declaration:Hoisted to the top of their scope.greet("Alice"); // "Hello, Alice!" (works due to hoisting)
function greet(name) {
    console.log(`Hello, ${name}!`);
}
Function Expression:Not hoisted in the same way; must be defined before use.// sayHello("Bob"); // TypeError: sayHello is not a function
const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};
sayHello("Bob"); // "Hello, Bob!"
Arrow Functions (ES6+):Concise syntax.Do not have their own this context (lexical this).Cannot be used as constructors.Not hoisted.const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

const multiply = (a, b) => {
    // Multi-line arrow function needs explicit return
    return a * b;
};
Parameters & Arguments:Default Parameters (ES6+): Define default values for function parameters.function welcome(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}
welcome(); // "Welcome, Guest!"
welcome("Charlie"); // "Welcome, Charlie!"
Rest Parameters (ES6+): Collect an indefinite number of arguments into an array.function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10
1.7 Scope: Global, Function, BlockScope determines the accessibility of variables and functions in different parts of your code.Global Scope: Variables declared outside any function or block are globally accessible.const globalVar = "I'm global";
function accessGlobal() {
    console.log(globalVar); // Accessible
}
accessGlobal();
Function Scope: Variables declared with var inside a function are accessible anywhere within that function, but not outside it.function myFunction() {
    var functionVar = "I'm function-scoped";
    console.log(functionVar);
}
myFunction();
// console.log(functionVar); // ReferenceError
Block Scope (ES6+): Variables declared with let or const inside a block ({}) are only accessible within that block.if (true) {
    let blockVar = "I'm block-scoped";
    console.log(blockVar);
}
// console.log(blockVar); // ReferenceError
Lexical Scope (Static Scope): JavaScript uses lexical scoping, meaning the scope of a variable is determined by its position in the source code when it is defined, not when it is called. This is fundamental to closures.1.8 HoistingHoisting is JavaScript's default behavior of moving declarations to the top of the current scope (global or function scope) before code execution.Variable Hoisting (var):Only the declaration is hoisted, not the initialization.var variables are initialized with undefined when hoisted.console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted";
console.log(hoistedVar); // "I'm hoisted"
let and const Hoisting:Are also hoisted, but they are not initialized.They enter a "Temporal Dead Zone" (TDZ) from the start of their block until their declaration. Accessing them in the TDZ results in a ReferenceError.// console.log(tdzVar); // ReferenceError: Cannot access 'tdzVar' before initialization
let tdzVar = "I'm in TDZ";
Function Hoisting:Function declarations are fully hoisted (both declaration and definition).myFunctionHoisted(); // "Function is hoisted!"
function myFunctionHoisted() {
    console.log("Function is hoisted!");
}
Function expressions are treated like variable declarations and only the variable name is hoisted.// myFuncExpression(); // TypeError: myFuncExpression is not a function
var myFuncExpression = function() {
    console.log("Function expression is not fully hoisted.");
};
1.9 The this KeywordThe this keyword refers to the context in which the current code is executing. Its value depends on how a function is called.Global Context: In the global scope (outside any function), this refers to the global object (window in browsers, global in Node.js).console.log(this === window); // true (in browser)
Function Context (Simple Call): In a regular function call (not a method or constructor), this refers to the global object (or undefined in strict mode).function showThis() {
    console.log(this);
}
showThis(); // window (non-strict mode), undefined (strict mode)
Method Context: When a function is called as a method of an object, this refers to the object itself.const obj = {
    name: "Object",
    greet: function() {
        console.log(`Hello from ${this.name}`);
    }
};
obj.greet(); // "Hello from Object"
Constructor Context: When a function is used as a constructor with new, this refers to the newly created instance of the object.function Person(name) {
    this.name = name;
}
const p1 = new Person("Alice");
console.log(p1.name); // "Alice"
Explicit Binding (call, apply, bind):call(thisArg, arg1, arg2, ...): Calls the function immediately with a specified this value and individual arguments.apply(thisArg, [argsArray]): Calls the function immediately with a specified this value and arguments as an array.bind(thisArg): Returns a new function with this permanently bound to the specified thisArg.const person1 = { name: "John" };
const person2 = { name: "Jane" };

function introduce(age, city) {
    console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}.`);
}

introduce.call(person1, 30, "New York"); // Hi, I'm John, 30 years old from New York.
introduce.apply(person2, [25, "London"]); // Hi, I'm Jane, 25 years old from London.

const introduceJohn = introduce.bind(person1, 30);
introduceJohn("Paris"); // Hi, I'm John, 30 years old from Paris.
Arrow Functions: Arrow functions do not have their own this binding. They inherit this from their enclosing lexical context (the scope in which they were defined). This makes them very useful in callbacks to avoid this context issues.const user = {
    name: "User",
    logName: function() {
        setTimeout(function() {
            console.log(this.name); // undefined (this refers to window/global)
        }, 100);
    },
    logNameArrow: function() {
        setTimeout(() => {
            console.log(this.name); // "User" (this is lexically bound to user object)
        }, 100);
    }
};
user.logName();
user.logNameArrow();
1.10 ClosuresA closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In simpler terms, a closure gives you access to an outer function's scope from an inner function, even after the outer function has finished executing.How it Works:An outer function is defined.An inner function is defined inside the outer function.The inner function references variables from the outer function's scope.The outer function returns the inner function.When the outer function finishes executing, its execution context is normally destroyed. However, because the inner function (the closure) still holds a reference to the outer function's variables, those variables are kept alive in memory.Example:function createCounter() {
    let count = 0; // 'count' is in the lexical environment of createCounter

    return function() { // This inner function is the closure
        count++;
        console.log(count);
    };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter(); // Creates a new, independent lexical environment
counter2(); // 1
counter1(); // 3 (counter1's 'count' is separate)
Use Cases:Data Privacy/Encapsulation: Creating private variables that can only be accessed or modified by specific functions.Currying: Transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.Module Pattern: Creating self-contained modules with private state.Event Handlers: Maintaining state for specific DOM elements.Memoization: Caching function results.Edge Case: Loop Variables with var (Pre-ES6):This classic closure problem highlights why let and const (block scope) are superior.// Problem with var in loops and closures
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Logs 3 three times
    }, 100);
}
// Explanation: By the time setTimeout callbacks execute, the loop has finished,
// and `i` (being function-scoped) has its final value of 3.

// Solution with IIFE (Immediately Invoked Function Expression)
for (var j = 0; j < 3; j++) {
    (function(currentJ) {
        setTimeout(function() {
            console.log(currentJ); // Logs 0, 1, 2
        }, 100);
    })(j); // Pass j into the IIFE, creating a new scope for each iteration
}

// Solution with let (ES6+) - Preferred
for (let k = 0; k < 3; k++) {
    setTimeout(function() {
        console.log(k); // Logs 0, 1, 2
    }, 100);
}
// Explanation: `let` creates a new `k` for each iteration of the loop,
// making it block-scoped and correctly captured by the closure.
2. ⚡ Asynchronous JavaScriptJavaScript is single-threaded, meaning it executes one operation at a time. Asynchronous operations allow non-blocking execution, crucial for tasks like network requests or file I/O.2.1 CallbacksA callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.Example:function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched!";
        callback(data); // Call the callback with the fetched data
    }, 2000);
}

function processData(data) {
    console.log(`Processing: ${data}`);
}

fetchData(processData); // Pass processData as a callback
console.log("Fetching data..."); // This runs immediately
Edge Case: Callback Hell (Pyramid of Doom):When dealing with multiple nested asynchronous operations, callbacks can lead to deeply indented, hard-to-read, and difficult-to-maintain code.getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            console.log(c);
        });
    });
});
This problem is largely solved by Promises and Async/Await.2.2 Promises (Deep Dive)Promises are a fundamental concept for handling asynchronous operations in a more structured and manageable way than traditional callbacks. A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.States of a Promise:pending: Initial state, neither fulfilled nor rejected. The asynchronous operation is still ongoing.fulfilled (or resolved): The operation completed successfully, and the promise has a resulting value.rejected: The operation failed, and the promise has a reason for the failure (an error).A promise is settled when it is either fulfilled or rejected. Once settled, a promise's state cannot change.Creating a Promise:A Promise constructor takes a single argument: an executor function. The executor function itself takes two arguments: resolve and reject.const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate async operation success/failure

    setTimeout(() => {
        if (success) {
            resolve("Operation successful!"); // Resolve with a value
        } else {
            reject(new Error("Operation failed!")); // Reject with an error
        }
    }, 1000);
});
Consuming a Promise (.then(), .catch(), .finally()):.then(onFulfilled, onRejected):onFulfilled: A function called when the promise is fulfilled. It receives the resolved value.onRejected: (Optional) A function called when the promise is rejected. It receives the rejection reason (error)..then() always returns a new promise, allowing for chaining..catch(onRejected):A shorthand for .then(null, onRejected). It's used to handle errors from any preceding promise in a chain..finally() (ES2018):A callback function that is executed when the promise is settled (either fulfilled or rejected). It receives no arguments and is useful for cleanup operations.myPromise
    .then((data) => {
        console.log("Success:", data); // "Success: Operation successful!"
        return data + " - Processed"; // Return a value for the next .then
    })
    .then((processedData) => {
        console.log("Further processing:", processedData); // "Further processing: Operation successful! - Processed"
    })
    .catch((error) => {
        console.error("Error:", error.message); // Will catch any rejection in the chain
    })
    .finally(() => {
        console.log("Promise settled (finished)."); // Always runs
    });
Promise Chaining:The ability of .then() to return a new promise is key to avoiding callback hell. You can chain multiple asynchronous operations sequentially.function step1() {
    return new Promise(resolve => setTimeout(() => { console.log("Step 1 complete"); resolve(10); }, 500));
}

function step2(value) {
    return new Promise(resolve => setTimeout(() => { console.log(`Step 2 complete with ${value}`); resolve(value * 2); }, 500));
}

function step3(value) {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (value > 15) {
            resolve(`Step 3 complete with final value: ${value}`);
        } else {
            reject(new Error("Value too low for step 3!"));
        }
    }, 500));
}

step1()
    .then(step2) // Pass the function directly, its return value (a promise) will be awaited
    .then(step3)
    .then(finalResult => console.log(finalResult))
    .catch(error => console.error("Chain error:", error.message));

// Edge Case: Returning non-promises in .then()
// If you return a non-promise value from a .then() handler, it's wrapped in a resolved promise.
// If you throw an error, it's wrapped in a rejected promise.
new Promise(resolve => resolve(5))
    .then(value => value * 2) // Returns 10 (wrapped in resolved promise)
    .then(doubledValue => console.log(doubledValue)); // Logs 10

new Promise(resolve => resolve(5))
    .then(value => { throw new Error("Oops"); }) // Throws error (wrapped in rejected promise)
    .catch(error => console.error(error.message)); // Logs "Oops"
Promise Static Methods:Promise.all(iterable): Takes an iterable of promises and returns a single promise that resolves when all of the promises in the iterable have resolved, or rejects if any of the promises reject. The resolved value is an array of the resolved values in the same order as the input promises.const p1 = Promise.resolve(3);
const p2 = 42; // Non-promise values are treated as resolved promises
const p3 = new Promise(resolve => setTimeout(() => resolve('foo'), 100));

Promise.all([p1, p2, p3])
    .then(values => console.log(values)) // [3, 42, "foo"]
    .catch(error => console.error(error));

// Edge Case: One rejection causes all to fail
const p4 = new Promise((_, reject) => setTimeout(() => reject(new Error('Rejected!')), 50));
Promise.all([p1, p4, p3])
    .then(values => console.log(values))
    .catch(error => console.error(error.message)); // Logs "Rejected!"
Promise.allSettled(iterable) (ES2020): Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects describing the outcome of each promise.const pA = Promise.resolve(1);
const pB = new Promise((_, reject) => setTimeout(() => reject('Error!'), 10));
const pC = Promise.resolve(3);

Promise.allSettled([pA, pB, pC])
    .then(results => {
        results.forEach(result => {
            console.log(result.status, result.value || result.reason);
        });
    });
/* Output:
fulfilled 1
rejected Error!
fulfilled 3
*/
Promise.race(iterable): Returns a promise that resolves or rejects as soon as any of the promises in the iterable resolves or rejects, with the value or reason from that promise.const pFast = new Promise(resolve => setTimeout(() => resolve('Fast Done'), 50));
const pSlow = new Promise(resolve => setTimeout(() => resolve('Slow Done'), 1000));

Promise.race([pFast, pSlow])
    .then(value => console.log(value)); // "Fast Done"
Promise.any(iterable) (ES2021): Returns a promise that resolves as soon as any of the promises in the iterable resolves, with the value from that promise. If all promises reject, it rejects with an AggregateError containing an array of all rejection reasons.const pFail1 = new Promise((_, reject) => setTimeout(() => reject('Error 1'), 100));
const pSuccess = new Promise(resolve => setTimeout(() => resolve('Success!'), 50));
const pFail2 = new Promise((_, reject) => setTimeout(() => reject('Error 2'), 150));

Promise.any([pFail1, pSuccess, pFail2])
    .then(value => console.log(value)) // "Success!"
    .catch(error => console.error(error.errors)); // Will only run if all reject
Promise.resolve(value): Returns a Promise object that is resolved with the given value. If the value is a promise, that promise is returned.Promise.reject(reason): Returns a Promise object that is rejected with the given reason.2.3 Async/Awaitasync and await are syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code, which improves readability and maintainability.async Function:An async function always returns a Promise.If the function returns a non-promise value, it's implicitly wrapped in a resolved promise.If the function throws an error, it's implicitly wrapped in a rejected promise.async function greeting() {
    return "Hello Async!"; // Returns Promise.resolve("Hello Async!")
}
greeting().then(console.log); // "Hello Async!"

async function throwsError() {
    throw new Error("Something went wrong!"); // Returns Promise.reject(Error)
}
throwsError().catch(error => console.error(error.message)); // "Something went wrong!"
await Operator:Can only be used inside an async function.Pauses the execution of the async function until the Promise it's waiting for settles (resolves or rejects).If the Promise resolves, await returns its resolved value.If the Promise rejects, await throws the rejected value (which can then be caught by a try...catch block).Example with try...catch:function simulateFetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "/data") {
                resolve({ id: 1, name: "Sample Data" });
            } else {
                reject(new Error(`Failed to fetch from ${url}`));
            }
        }, 1000);
    });
}

async function getData() {
    try {
        console.log("Starting data fetch...");
        const data = await simulateFetch("/data"); // Pauses here until promise resolves
        console.log("Data received:", data);

        const moreData = await simulateFetch("/another-data"); // This will cause rejection
        console.log("More data received:", moreData);
    } catch (error) {
        console.error("An error occurred:", error.message);
    } finally {
        console.log("Data fetch process finished.");
    }
}

getData();
// Expected Output:
// Starting data fetch...
// Data received: { id: 1, name: "Sample Data" }
// An error occurred: Failed to fetch from /another-data
// Data fetch process finished.
Parallel Execution with Promise.all and async/await:You can combine async/await with Promise.all to run multiple asynchronous operations in parallel and wait for all of them to complete.async function fetchMultipleData() {
    try {
        const [users, products] = await Promise.all([
            simulateFetch("/users"),
            simulateFetch("/products")
        ]);
        console.log("Users:", users);
        console.log("Products:", products);
    } catch (error) {
        console.error("Error fetching multiple data:", error.message);
    }
}
// Note: simulateFetch would need to be updated to handle /users and /products
// For example:
// function simulateFetch(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (url === "/users") resolve([{ id: 1, name: "Alice" }]);
//             else if (url === "/products") resolve([{ id: 101, item: "Laptop" }]);
//             else reject(new Error(`Failed to fetch from ${url}`));
//         }, 500);
//     });
// }
// fetchMultipleData();
2.4 Event Loop (Deep Dive)The Event Loop is a crucial part of JavaScript's concurrency model. It allows JavaScript to perform non-blocking I/O operations despite being single-threaded, by offloading operations to the system kernel whenever possible.Key Components:Call Stack: A LIFO (Last In, First Out) stack that stores function calls. When a function is called, it's pushed onto the stack. When it returns, it's popped off. JavaScript executes code on the call stack.Web APIs (or Node.js APIs): Provided by the browser (or Node.js runtime), these are not part of the JavaScript engine itself. Examples include setTimeout(), fetch(), DOM events (click, load), XMLHttpRequest, console.log(). When an asynchronous operation is encountered, it's handed off to the relevant Web API.Callback Queue (Task Queue / Macrotask Queue): After a Web API completes its asynchronous task (e.g., setTimeout timer expires, fetch response arrives), its associated callback function is placed into this queue.Microtask Queue (Job Queue): A higher-priority queue for microtasks. Promises (.then(), .catch(), .finally()) and MutationObserver callbacks are placed here.Event Loop: The continuous process that monitors the Call Stack and the Callback/Microtask Queues.If the Call Stack is empty, the Event Loop takes the first function from the Microtask Queue and pushes it onto the Call Stack. This process continues until the Microtask Queue is empty.Only then does the Event Loop take the first function from the Callback Queue (Macrotask Queue) and pushes it onto the Call Stack.Execution Order (Simplified):Execute all code on the Call Stack (synchronous code).When the Call Stack is empty, process all pending microtasks from the Microtask Queue.When the Microtask Queue is empty, take one macrotask from the Callback Queue and push it to the Call Stack.Repeat from step 1.Example Flow:console.log('1. Start'); // Sync

setTimeout(() => {
    console.log('4. setTimeout callback (Macrotask)'); // Macrotask
}, 0); // 0ms delay, but still async

Promise.resolve().then(() => {
    console.log('3. Promise resolved (Microtask)'); // Microtask
});

console.log('2. End'); // Sync

/* Expected Output:
1. Start
2. End
3. Promise resolved (Microtask)
4. setTimeout callback (Macrotask)
*/
Explanation:'1. Start' is logged (synchronous).setTimeout is encountered. Its callback is handed off to the Web API. The timer (0ms) starts.Promise.resolve().then() is encountered. The .then() callback is placed in the Microtask Queue.'2. End' is logged (synchronous).The Call Stack is now empty. The Event Loop checks the Microtask Queue.The Promise.then callback is moved to the Call Stack and '3. Promise resolved (Microtask)' is logged.The Call Stack is empty again. The Microtask Queue is empty.The Event Loop checks the Macrotask Queue. The setTimeout callback is moved to the Call Stack and '4. setTimeout callback (Macrotask)' is logged.Call Stack is empty. All tasks processed.Edge Case: Infinite Microtasks:If you continuously add microtasks within a microtask, you can starve the macrotask queue, preventing setTimeout or other macrotasks from ever running.setTimeout(() => console.log('Macrotask'), 0);

// This loop will run indefinitely, preventing the macrotask from ever executing
// if not handled carefully (e.g., in a browser environment, it might eventually yield)
// In a strict Node.js environment, this could block the event loop.
Promise.resolve().then(function loop() {
    console.log('Microtask loop');
    Promise.resolve().then(loop); // Continuously adds more microtasks
});
2.5 Web APIs (Deep Dive)Web APIs are Application Programming Interfaces provided by the browser environment (or Node.js runtime for server-side JS) that allow JavaScript to interact with the outside world and perform tasks that are not part of the core JavaScript language. They are crucial for asynchronous operations.Examples of Browser Web APIs:DOM (Document Object Model): Allows JavaScript to manipulate HTML and CSS.document.getElementById(), element.addEventListener(), element.style.color = 'red'setTimeout() / setInterval(): For scheduling code execution after a delay or repeatedly.These are not part of JavaScript itself; they are provided by the browser.fetch(): For making network requests (HTTP requests) to servers.Returns a Promise.XMLHttpRequest (XHR): An older API for making HTTP requests.localStorage / sessionStorage: For client-side data storage.Geolocation API: For accessing the user's geographical location.Canvas API: For drawing graphics on an HTML <canvas> element.WebSockets API: For full-duplex communication channels over a single TCP connection.History API: For manipulating the browser's session history.Web Workers API: For running scripts in background threads, offloading heavy computations from the main thread.How they Interact with the Event Loop:When you call a Web API function (e.g., setTimeout(callback, delay) or fetch(url)), the JavaScript engine hands off the task to the browser's Web API environment.The JavaScript engine is then free to continue executing the rest of the synchronous code on the Call Stack.The Web API performs its task in the background (e.g., waits for the timer to expire, waits for the network response).Once the Web API task is complete, it places the associated callback function (or the .then() callback for Promises) into the appropriate queue (Callback Queue for setTimeout, Microtask Queue for fetch's Promise resolution).The Event Loop then picks up these callbacks when the Call Stack is empty, as described in the Event Loop section.Example: fetch and DOM Manipulation:// This is a browser-specific example
document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Web API call
        const data = await response.json(); // Web API call (parsing stream)
        document.getElementById('output').textContent = `Todo: ${data.title}`; // DOM API
    } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
});

// HTML structure (conceptual, not part of JS file)
/*
<button id="fetchButton">Fetch Todo</button>
<div id="output"></div>
*/
Edge Case: Blocking the Main Thread:While Web APIs enable asynchronous operations, it's crucial not to perform long-running, synchronous computations directly on the main JavaScript thread (the one where the Call Stack runs). If you do, it will block the Event Loop, making your UI unresponsive.// BAD EXAMPLE: Blocking the main thread
function longRunningSyncTask() {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }
    return result;
}

document.getElementById('blockButton').addEventListener('click', () => {
    console.log("Starting blocking task...");
    const res = longRunningSyncTask(); // This will freeze the UI
    console.log("Blocking task finished:", res);
});

// GOOD EXAMPLE: Offloading to Web Worker (if computation is heavy and doesn't need DOM access)
// const worker = new Worker('worker.js'); // worker.js would contain longRunningSyncTask
// document.getElementById('nonBlockButton').addEventListener('click', () => {
//     console.log("Starting non-blocking task...");
//     worker.postMessage('start');
// });
// worker.onmessage = (e) => {
//     console.log("Non-blocking task finished:", e.data);
// };
For heavy computations that don't involve direct DOM manipulation, consider using Web Workers to run them in a separate thread.3. ✨ ES6+ FeaturesECMAScript 2015 (ES6) introduced significant enhancements to JavaScript, making it more powerful, readable, and modern. Subsequent versions (ES2016, ES2017, etc.) have continued to add valuable features.3.1 Destructuring AssignmentA concise way to extract values from arrays or properties from objects into distinct variables.Array Destructuring:const numbers = [10, 20, 30, 40];
const [first, second, ...rest] = numbers; // Rest element
console.log(first); // 10
console.log(second); // 20
console.log(rest);   // [30, 40]

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// Edge Case: Default values
const [x, y, z = 3] = [1, 2];
console.log(x, y, z); // 1, 2, 3
Object Destructuring:const person = { name: "Alice", age: 30, city: "New York" };
const { name, age } = person;
console.log(name); // "Alice"
console.log(age);  // 30

// Renaming properties
const { name: fullName, age: personAge } = person;
console.log(fullName); // "Alice"

// Nested destructuring
const user = {
    id: 1,
    info: {
        email: "test@example.com",
        address: {
            street: "Main St"
        }
    }
};
const { info: { email, address: { street } } } = user;
console.log(email, street); // "test@example.com", "Main St"

// Edge Case: Default values for missing properties
const { country = "USA" } = person;
console.log(country); // "USA"
3.2 Spread & Rest OperatorsBoth use the ... syntax but serve different purposes based on context.Spread Operator (...): Expands an iterable (like an array or string) into individual elements.Array Concatenation/Copying:const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]
const copy = [...arr1]; // Creates a shallow copy
Object Merging/Copying (ES2018):const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
const copyObj = { ...obj1 }; // Shallow copy
const updatedObj = { ...obj1, b: 20 }; // { a: 1, b: 20 }
Passing arguments to functions:function sum(a, b, c) { return a + b + c; }
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6
Edge Case: Shallow Copying: The spread operator creates shallow copies. Nested objects/arrays will still share references.const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c); // 3 (original object was modified)
Rest Parameters (...): Collects an indefinite number of arguments into an array. (Already covered in 1.6 Functions).function collectArgs(first, ...rest) {
    console.log(first); // "a"
    console.log(rest);  // ["b", "c", "d"]
}
collectArgs("a", "b", "c", "d");
3.3 Template LiteralsAllow for embedded expressions, multi-line strings, and string interpolation using backticks (`).String Interpolation:const name = "World";
const greeting = `Hello, ${name}!`; // "Hello, World!"
Multi-line Strings:const multiLine = `This is a
multi-line
string.`;
console.log(multiLine);
Tagged Templates: A more advanced form where a function can parse a template literal.function highlight(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
        str += string + (values[i] ? `<b>${values[i]}</b>` : '');
    });
    return str;
}
const user = "Alice";
const age = 30;
const message = highlight`Hello, ${user}! You are ${age} years old.`;
console.log(message); // "Hello, <b>Alice</b>! You are <b>30</b> years old."
3.4 ClassesSyntactic sugar over JavaScript's existing prototype-based inheritance. They provide a cleaner, more object-oriented way to create objects and handle inheritance.Class Declaration:class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Static method (belongs to the class, not instances)
    static describe() {
        console.log("This is a Person class.");
    }
}

const alice = new Person("Alice", 25);
alice.greet(); // "Hello, my name is Alice and I am 25 years old."
Person.describe(); // "This is a Person class."
Inheritance (extends, super):class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age); // Call parent class constructor
        this.studentId = studentId;
    }

    study() {
        console.log(`${this.name} (ID: ${this.studentId}) is studying.`);
    }

    // Method overriding
    greet() {
        console.log(`Hi, I'm student ${this.name}.`);
    }
}

const bob = new Student("Bob", 20, "S123");
bob.greet(); // "Hi, I'm student Bob."
bob.study(); // "Bob (ID: S123) is studying."
Private Class Fields (Stage 3 Proposal / ES2022):Using # prefix for truly private class fields.class BankAccount {
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount(100);
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
console.log(account.getBalance()); // 100
3.5 Modules: import & exportModules allow you to organize JavaScript code into separate files, making it more modular, reusable, and maintainable.export: Used to export functions, classes, or variables from a module.Named Exports:// utils.js
export const PI = 3.14;
export function add(a, b) { return a + b; }
export class Calculator { /* ... */ }
Default Exports (one per module):// math.js
const subtract = (a, b) => a - b;
export default subtract;
import: Used to import exported members from other modules.Named Imports:// main.js
import { PI, add } from './utils.js';
console.log(PI);
console.log(add(5, 3));
Default Import:// main.js
import subtract from './math.js'; // No curly braces for default import
console.log(subtract(10, 4));
Importing all as an object:import * as Utils from './utils.js';
console.log(Utils.PI);
Usage in HTML:You need to specify type="module" in your script tag for browser support.<!-- index.html -->
<script type="module" src="main.js"></script>
Edge Case: Circular Dependencies:When Module A imports Module B, and Module B imports Module A, it can lead to issues if not handled carefully (e.g., accessing uninitialized exports). Modern JS engines handle this gracefully by providing partially initialized exports, but it's best to avoid if possible.3.6 Default ParametersAllows function parameters to be initialized with default values if no value or undefined is passed during the call. (Already covered in 1.6 Functions).function greet(name = "Guest", message = "Hello") {
    console.log(`${message}, ${name}!`);
}
greet();             // "Hello, Guest!"
greet("Alice");      // "Hello, Alice!"
greet("Bob", "Hi");  // "Hi, Bob!"
greet(undefined, "Greetings"); // "Greetings, Guest!"
3.7 Arrow Functions (Revisited)While introduced in 1.6 Functions, their this binding behavior is a critical ES6 feature worth revisiting.No this binding: They do not create their own this context. They inherit this from the enclosing lexical (parent) scope. This solves common this problems in callbacks and event handlers.No arguments object: They don't have their own arguments object. You'd use rest parameters (...args) instead.Cannot be used as constructors: You cannot use new with an arrow function.No prototype property: They don't have a prototype property.// Classic `this` problem with regular functions
const user = {
    name: "John",
    greetDelayed: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}`); // 'this' is window/global here
        }, 100);
    }
};
user.greetDelayed(); // "Hello, " (or "Hello, undefined" in strict mode)

// Solution with arrow function
const userArrow = {
    name: "Jane",
    greetDelayed: function() {
        setTimeout(() => { // Arrow function inherits 'this' from 'greetDelayed' method
            console.log(`Hello, ${this.name}`); // 'this' is userArrow
        }, 100);
    }
};
userArrow.greetDelayed(); // "Hello, Jane"
4. 📊 Data Structures & Algorithms (DSA) in JavaScriptUnderstanding DSA is crucial for writing efficient and scalable code, especially for technical interviews.4.1 Big O Notation (Time & Space Complexity)Big O notation describes the performance or complexity of an algorithm. It characterizes how the running time or space requirements grow as the input size grows.Common Complexities:O(1) - Constant Time: Execution time is independent of input size.function getFirstElement(arr) {
    return arr[0]; // Accessing an array element by index is O(1)
}
O(log n) - Logarithmic Time: Execution time grows logarithmically with input size (e.g., binary search).O(n) - Linear Time: Execution time grows linearly with input size (e.g., iterating through an array).function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { // Iterates N times
        sum += arr[i];
    }
    return sum;
}
O(n log n) - Linearithmic Time: Common in efficient sorting algorithms (e.g., Merge Sort, Quick Sort).O(n^2) - Quadratic Time: Execution time grows quadratically with input size (e.g., nested loops).function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) { // Nested loop, N * N operations
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}
O(2^n) - Exponential Time: Very slow, often indicates a recursive solution without memoization (e.g., naive Fibonacci).O(n!) - Factorial Time: Extremely slow, typically for permutations.Space Complexity: Measures the amount of memory an algorithm uses. Similar Big O notations apply.function createNewArray(arr) {
    return [...arr, 10]; // Creates a new array of size N+1, so O(N) space
}
4.2 ArraysOrdered, zero-indexed collections of values. JavaScript arrays are dynamic and can hold mixed data types.Common Operations:Creation: [], new Array()Access: arr[index] (O(1))Add/Remove:push(): Add to end (O(1) amortized)pop(): Remove from end (O(1))unshift(): Add to beginning (O(N))shift(): Remove from beginning (O(N))splice(start, deleteCount, ...items): Add/remove at arbitrary index (O(N))Iteration: for, forEach, map, filter, reduce, for...ofSearch: indexOf(), includes(), find(), findIndex()Sorting: sort() (modifies in place, default is string sort, provide comparator for numbers)Immutability (creating new arrays): slice(), concat(), spread operator (...)Edge Case: sort() with Numbers:const nums = [1, 10, 2, 20];
nums.sort(); // [1, 10, 2, 20] (sorted as strings)
nums.sort((a, b) => a - b); // [1, 2, 10, 20] (ascending numerical sort)
4.3 Objects / Hash MapsUnordered collections of key-value pairs. Keys are strings (or Symbols), values can be any data type. Often used to simulate hash maps or dictionaries.Common Operations:Creation: {}Access: obj.key or obj['key'] (O(1) average)Add/Update: obj.newKey = valueDelete: delete obj.keyIteration: for...in, Object.keys(), Object.values(), Object.entries()Map (ES6+): A more robust alternative for key-value pairs, where keys can be any data type (not just strings/symbols), and insertion order is preserved.const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(1, 'one');
myMap.get('name'); // 'Alice'
myMap.has(1);     // true
myMap.delete('name');
myMap.size;       // 1
Edge Case: Object Key Coercion: Object keys are always converted to strings.const obj = {};
obj[1] = 'number one';
obj['1'] = 'string one';
console.log(obj[1]); // 'string one' (key 1 was coerced to '1')
4.4 Linked ListsA linear data structure where elements are not stored at contiguous memory locations. Each element (node) points to the next element in the sequence.Types: Singly, Doubly, Circular.Operations: Insertion, Deletion, Traversal.Advantages: Efficient insertions/deletions at ends/middle (O(1) if you have a reference to the node).Disadvantages: Slow random access (O(N) to find an element by index).Implementation (Conceptual):class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) { // Add to end
        const newNode = new Node(value);
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

    // ... other methods like pop, shift, unshift, get, insert, remove
}
4.5 Stacks & QueuesAbstract data types (ADTs) that define how elements are added and removed.Stack (LIFO - Last In, First Out):Operations: push (add to top), pop (remove from top), peek (view top).Use Cases: Function call stack, undo/redo features, browser history.Implementation (using Array):class Stack {
    constructor() { this.items = []; }
    push(element) { this.items.push(element); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
    size() { return this.items.length; }
}
Queue (FIFO - First In, First Out):Operations: enqueue (add to rear), dequeue (remove from front), front (view front).Use Cases: Task scheduling, breadth-first search (BFS), printer queues.Implementation (using Array):class Queue {
    constructor() { this.items = []; }
    enqueue(element) { this.items.push(element); }
    dequeue() { return this.items.shift(); } // O(N) for large arrays
    front() { return this.items[0]; }
    isEmpty() { return this.items.length === 0; }
    size() { return this.items.length; }
}
// For better performance (O(1) dequeue), consider using a LinkedList or two stacks for queue implementation.
4.6 Trees & GraphsNon-linear data structures.Trees: Hierarchical data structures with a root node and child nodes.Binary Tree: Each node has at most two children.Binary Search Tree (BST): Left child < parent < right child. Efficient searching, insertion, deletion (average O(log N)).Traversal: In-order, Pre-order, Post-order.Use Cases: File systems, parsing syntax trees, decision trees.Graphs: Collections of nodes (vertices) and edges (connections between nodes).Representations: Adjacency Matrix, Adjacency List.Traversal: Breadth-First Search (BFS), Depth-First Search (DFS).Use Cases: Social networks, mapping, network routing.4.7 Common AlgorithmsSorting Algorithms:Bubble Sort, Selection Sort, Insertion Sort: O(N^2) - simple, but inefficient for large datasets.Merge Sort, Quick Sort: O(N log N) - efficient, commonly used.Heap Sort: O(N log N).Searching Algorithms:Linear Search: O(N) - checks each element.Binary Search: O(log N) - for sorted arrays, repeatedly divides search interval in half.Recursion: A function calling itself. Essential for tree/graph traversals and many divide-and-conquer algorithms.Base Case: A condition to stop the recursion.Recursive Step: The function calls itself with a modified input.Edge Case: Stack Overflow: Without a proper base case, recursion can lead to infinite calls and a "Maximum call stack size exceeded" error.Dynamic Programming: Breaking down a complex problem into simpler overlapping subproblems and storing the results to avoid redundant computations (memoization or tabulation).Greedy Algorithms: Making locally optimal choices at each step with the hope of finding a global optimum.5. 💡 Interview Preparation & Best PracticesBeyond knowing the syntax, demonstrating your problem-solving skills, code quality, and understanding of best practices is key.5.1 Common Interview Questions & ScenariosCore Concepts: Explain this, closures, hoisting, event loop, prototypal inheritance.Asynchronous JavaScript: How to handle async operations, differences between callbacks, Promises, and async/await.DSA: Implement common data structures (linked list, stack, queue) or algorithms (sorting, searching, two pointers, sliding window).Array/Object Manipulation: Write functions to filter, map, reduce arrays, or manipulate objects efficiently.String Manipulation: Reverse a string, check for palindromes, anagrams.Problem Solving:FizzBuzzFactorial (recursive/iterative)Fibonacci (recursive/iterative/memoized)Find missing number in arrayTwo Sum / Three SumValidate parenthesesDeep clone an objectImplement debounce or throttleImplement Promise.all or Promise.raceSystem Design (for senior roles): Design a simple chat application, a URL shortener, etc., focusing on architectural choices, scalability, and technologies.5.2 Debugging Techniquesconsole.log(): The simplest and most common. Use strategically to inspect variable values at different points.console.log({ variableName }); (ES6 shorthand for logging variable name and value)console.table() for arrays of objects.console.time() / console.timeEnd() for performance measurement.Browser Developer Tools:Sources Tab: Set breakpoints, step through code, inspect call stack, scope, and variables.Console Tab: Execute JS, view logs, errors.Network Tab: Inspect network requests.Performance Tab: Analyze runtime performance.debugger keyword: Inserts a breakpoint directly in your code.function calculate(a, b) {
    debugger; // Code execution will pause here in dev tools
    let sum = a + b;
    return sum;
}
VS Code Debugger: Powerful integrated debugger for Node.js and browser-based projects.5.3 Error Handling StrategiesRobust applications handle errors gracefully.try...catch block: For handling synchronous errors.try {
    // Code that might throw an error
    let result = JSON.parse("invalid json");
    console.log(result);
} catch (error) {
    console.error("Caught an error:", error.message);
} finally {
    console.log("Execution finished (regardless of error).");
}
Promises .catch(): For handling asynchronous errors in promise chains.async/await with try...catch: The recommended way to handle errors in async functions.Error Objects: Understand Error, TypeError, ReferenceError, etc.Custom Errors: Create custom error classes for specific application errors.class CustomError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = "CustomError";
        this.statusCode = statusCode;
    }
}

function processUser(user) {
    if (!user || !user.id) {
        throw new CustomError("Invalid user data", 400);
    }
    // ...
}

try {
    processUser(null);
} catch (e) {
    if (e instanceof CustomError) {
        console.error(`Custom Error (${e.statusCode}): ${e.message}`);
    } else {
        console.error(`Unexpected Error: ${e.message}`);
    }
}
Global Error Handling:Browser: window.onerror, window.addEventListener('unhandledrejection', ...)Node.js: process.on('uncaughtException', ...), process.on('unhandledRejection', ...)Use these for logging and graceful shutdown, not for primary error flow.5.4 Code Style & LintingConsistent code style improves readability and maintainability. Linters automatically check for style and potential errors.Popular Style Guides:Airbnb JavaScript Style Guide: Very popular and comprehensive.Google JavaScript Style Guide: Another widely used guide.Linters:ESLint: The most popular JavaScript linter. Highly configurable.Prettier: An opinionated code formatter that works well with ESLint to automate style consistency.Benefits:Reduced bugs.Improved readability and collaboration.Enforced best practices.5.5 Performance Optimization TipsMinimize DOM Manipulations: Batch changes, use document fragments, or virtual DOM libraries (React, Vue).Debounce/Throttle Event Handlers: Limit how often a function is called in response to frequent events (e.g., resize, scroll, keyup).Optimize Loops: Avoid expensive operations inside loops. Prefer for...of over for...in for arrays.Memoization/Caching: Store results of expensive function calls to avoid re-computation.Web Workers: Offload heavy computations to background threads.Lazy Loading: Load resources (images, components, modules) only when needed.Minimize Reflows/Repaints: Avoid triggering layout recalculations unnecessarily.Efficient Data Structures: Choose the right data structure for the problem (e.g., Map for fast lookups, Set for unique values).Avoid Global Variables: Can lead to naming conflicts and make code harder to reason about.Use const and let: Better scope management and prevent accidental reassignments.6. 📝 Code Documentation GuidelinesEffective code documentation is crucial for collaboration, maintainability, and for you to revisit your own code months later.6.1 Why Document Code?Clarity: Explains why code was written a certain way, not just what it does.Maintainability: Easier for others (and future you) to understand and modify.Onboarding: Speeds up the process for new team members.Debugging: Helps pinpoint issues by clarifying expected behavior.API Reference: Essential for libraries and frameworks.6.2 JSDoc Best PracticesJSDoc is a markup language used to annotate JavaScript source code files. It allows you to add rich documentation comments that can be extracted to generate API documentation.Basic Structure:/**
 * @description A brief description of what the function/class/variable does.
 * @param {type} parameterName - Description of the parameter.
 * @param {type} [optionalParameterName] - Description of an optional parameter.
 * @param {type} [optionalParameterName=defaultValue] - Description with default.
 * @returns {type} Description of the return value.
 * @throws {Error} Description of errors that might be thrown.
 * @example
 * // Example usage of the function
 * const result = myFunction(10, 'hello');
 * console.log(result); // Expected output
 * @see {@link anotherFunction} for related functionality.
 * @link https://example.com Link to external resource.
 */
function myFunction(param1, param2) {
    // ... code ...
}
Common JSDoc Tags:@param {type} name - description: Describes a function parameter.@returns {type} description: Describes the return value of a function.@typedef {type} name: Defines a custom type.@callback name: Defines a callback function type.@property {type} name - description: Describes a property of an object or class.@fires eventName: Indicates an event is fired.@listens eventName: Indicates an event is listened to.@deprecated [reason]: Marks a function/method as deprecated.@author name: Author of the code.@version version: Version information.@since version: When the feature was added.@private: Marks an identifier as private.@public: Marks an identifier as public.@ignore: Excludes from documentation generation.6.3 Example: Documenting a FunctionHere's an example of how you might document a simple DSA problem solution in your repository. Apply this structure to your own files./**
 * @file This file contains solutions for array manipulation problems.
 * @author Shakti Chaudhary
 * @version 1.0.0
 */

/**
 * @description Given an array of numbers, return a new array with only the even numbers.
 * This function iterates through the input array and checks each number for divisibility by 2.
 * It uses the filter method for a concise and functional approach.
 *
 * @param {number[]} numbers - The input array of numbers.
 * @returns {number[]} A new array containing only the even numbers from the input.
 *
 * @example
 * // Example 1: Basic usage
 * const input1 = [1, 2, 3, 4, 5, 6];
 * const result1 = getEvenNumbers(input1);
 * console.log(result1); // Expected output: [2, 4, 6]
 *
 * @example
 * // Example 2: Array with no even numbers
 * const input2 = [1, 3, 5, 7];
 * const result2 = getEvenNumbers(input2);
 * console.log(result2); // Expected output: []
 *
 * @example
 * // Example 3: Empty array
 * const input3 = [];
 * const result3 = getEvenNumbers(input3);
 * console.log(result3); // Expected output: []
 *
 * @throws {TypeError} If the input `numbers` is not an array.
 * @complexity
 * Time: O(N) - where N is the number of elements in the input array, as we iterate through it once.
 * Space: O(N) - in the worst case (all numbers are even), a new array of size N is created.
 */
function getEvenNumbers(numbers) {
    // Edge case: Ensure input is an array
    if (!Array.isArray(numbers)) {
        throw new TypeError("Input must be an array of numbers.");
    }

    // Using the filter method for conciseness
    return numbers.filter(num => num % 2 === 0);

    /*
    // Alternative implementation using a for loop (more explicit)
    const evenNums = [];
    for (let i = 0; i < numbers.length; i++) {
        // Edge case: Handle non-numeric elements if necessary (though type checking handles array type)
        if (typeof numbers[i] !== 'number') {
            console.warn(`Skipping non-numeric element at index ${i}: ${numbers[i]}`);
            continue;
        }
        if (numbers[i] % 2 === 0) {
            evenNums.push(numbers[i]);
        }
    }
    return evenNums;
    */
}

/**
 * @description Reverses a given string.
 * This function converts the string to an array, reverses it, and then joins it back into a string.
 * It handles empty strings and non-string inputs gracefully.
 *
 * @param {string} str - The input string to be reversed.
 * @returns {string} The reversed string.
 *
 * @example
 * // Example 1: Basic string reversal
 * const inputStr1 = "hello";
 * const reversedStr1 = reverseString(inputStr1);
 * console.log(reversedStr1); // Expected output: "olleh"
 *
 * @example
 * // Example 2: Empty string
 * const inputStr2 = "";
 * const reversedStr2 = reverseString(inputStr2);
 * console.log(reversedStr2); // Expected output: ""
 *
 * @example
 * // Example 3: String with spaces
 * const inputStr3 = "hello world";
 * const reversedStr3 = reverseString(inputStr3);
 * console.log(reversedStr3); // Expected output: "dlrow olleh"
 *
 * @throws {TypeError} If the input `str` is not a string.
 * @complexity
 * Time: O(N) - where N is the length of the string, due to array conversion, reverse, and join.
 * Space: O(N) - a new array is created from the string.
 */
function reverseString(str) {
    // Edge case: Ensure input is a string
    if (typeof str !== 'string') {
        throw new TypeError("Input must be a string.");
    }

    // Convert string to array, reverse, and join back
    return str.split('').reverse().join('');
}
This comprehensive guide should serve as an excellent resource for your JavaScript mastery journey and interview preparation. Remember to apply the code documentation principles (JSDoc) to your actual code files in the repository. Happy coding!