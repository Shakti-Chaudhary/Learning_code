Got it. You're looking for an extensive, topic-wise TypeScript interview guide, following the same comprehensive format as the CSS and JavaScript guides, ensuring all crucial topics are covered.

Here's the detailed TypeScript Interview Guide in Markdown format:

-----

# TypeScript Interview Guide (Extensive Topic-Wise)

This document provides an exhaustive, topic-wise guide to TypeScript concepts frequently encountered in technical interviews. It aims to cover the breadth and depth required for various roles, from front-end and back-end developers to full-stack engineers working with TypeScript.

## Table of Contents

1.  [Fundamentals](https://www.google.com/search?q=%231-fundamentals)
2.  [Basic Types](https://www.google.com/search?q=%232-basic-types)
3.  [Interfaces](https://www.google.com/search?q=%233-interfaces)
4.  [Type Aliases](https://www.google.com/search?q=%234-type-aliases)
5.  [Enums](https://www.google.com/search?q=%235-enums)
6.  [Functions in TypeScript](https://www.google.com/search?q=%236-functions-in-typescript)
7.  [Classes in TypeScript](https://www.google.com/search?q=%237-classes-in-typescript)
8.  [Generics](https://www.google.com/search?q=%238-generics)
9.  [Union and Intersection Types](https://www.google.com/search?q=%239-union-and-intersection-types)
10. [Literal Types](https://www.google.com/search?q=%2310-literal-types)
11. [Type Assertions & Type Guards](https://www.google.com/search?q=%2311-type-assertions--type-guards)
12. [Nullable and Optional Types](https://www.google.com/search?q=%2312-nullable-and-optional-types)
13. [Advanced Types](https://www.google.com/search?q=%2313-advanced-types)
14. [Modules in TypeScript](https://www.google.com/search?q=%2314-modules-in-typescript)
15. [Decorators](https://www.google.com/search?q=%2315-decorators)
16. [Declaration Files (`.d.ts`)](https://www.google.com/search?q=%2316-declaration-files-dts)
17. [Type Inference](https://www.google.com/search?q=%2317-type-inference)
18. [Type Compatibility](https://www.google.com/search?q=%2318-type-compatibility)
19. [`tsconfig.json` Configuration](https://www.google.com/search?q=%2319-tsconfigjson-configuration)
20. [Integration with JavaScript Ecosystem](https://www.google.com/search?q=%2320-integration-with-javascript-ecosystem)
21. [Common Interview Questions & Scenarios](https://www.google.com/search?q=%2321-common-interview-questions--scenarios)

-----

## 1\. Fundamentals

  * **What is TypeScript?**
      * An open-source language developed by Microsoft.
      * A superset of JavaScript, meaning all valid JavaScript code is also valid TypeScript code.
      * Compiles down to plain JavaScript.
      * Adds **static typing** to JavaScript, allowing type checking at compile time (transpilation time) rather than runtime.
  * **Why use TypeScript? (Benefits)**
      * **Early Error Detection:** Catches type-related errors during development, before runtime.
      * **Improved Code Quality & Maintainability:** Better readability, easier refactoring, self-documenting code.
      * **Enhanced Developer Experience (DX):**
          * Better IDE support (autocompletion, intelligent code suggestions, type-checking warnings).
          * Easier navigation through large codebases.
      * **Scalability:** Especially beneficial for large-scale applications and teams.
      * **Better Collaboration:** Clearer contracts between different parts of the codebase.
      * **Easier Refactoring:** Type system helps identify potential issues during refactoring.
      * **Safer JavaScript:** Reduces common runtime errors related to types.
  * **How does TypeScript work? (Transpilation)**
      * You write `.ts` or `.tsx` files.
      * The TypeScript compiler (`tsc`) transpiles these files into `.js` files (which can be configured to target specific ECMAScript versions like ES5, ES6, etc.).
      * The compiled JavaScript is then executed by the browser or Node.js runtime.
  * **Static vs. Dynamic Typing:**
      * **Static:** Types are checked at compile time (e.g., TypeScript, Java, C++). Errors are caught early.
      * **Dynamic:** Types are checked at runtime (e.g., JavaScript, Python, Ruby). Errors appear during execution.
  * **Compilation Process (briefly):**
      * Parsing (`.ts` to AST).
      * Type Checking (using AST and type definitions).
      * Emission (AST to `.js`).

-----

## 2\. Basic Types

  * **`number`:** For all numeric values (integers and floating-point).
    ```typescript
    let age: number = 30;
    let price: number = 9.99;
    ```
  * **`string`:** For text.
    ```typescript
    let name: string = "Alice";
    let message: string = `Hello, ${name}!`;
    ```
  * **`boolean`:** For `true`/`false` values.
    ```typescript
    let isActive: boolean = true;
    ```
  * **`array`:**
      * `type[]`: `string[]`, `number[]`.
        ```typescript
        let names: string[] = ["Alice", "Bob"];
        let numbers: number[] = [1, 2, 3];
        ```
      * `Array<type>` (Generic Array Type): `Array<string>`, `Array<number>`.
        ```typescript
        let namesAlt: Array<string> = ["Charlie", "Dave"];
        ```
  * **`tuple`:**
      * Fixed number of elements, where each element has a known type. Order matters.
    <!-- end list -->
    ```typescript
    let person: [string, number] = ["Alice", 30];
    // person = [30, "Alice"]; // Error: Type 'number' is not assignable to type 'string'.
    ```
  * **`enum` (covered in its own section).**
  * **`any`:**
      * A powerful type that can represent any JavaScript value.
      * Opt-out of type checking. Use sparingly, as it defeats the purpose of TypeScript's type safety.
    <!-- end list -->
    ```typescript
    let anything: any = 5;
    anything = "hello";
    anything = false;
    ```
  * **`void`:**
      * Used as a return type for functions that do not return any value.
      * `undefined` and `null` can be assigned to `void` (if `strictNullChecks` is off for `null`).
    <!-- end list -->
    ```typescript
    function logMessage(): void {
        console.log("This function returns nothing.");
    }
    ```
  * **`null` and `undefined`:**
      * Represent their JavaScript primitive counterparts.
      * By default, `null` and `undefined` are subtypes of all other types (`number | null` is common).
      * With `strictNullChecks: true` (recommended), they can only be assigned to `any`, `unknown`, or their own types.
  * **`never`:**
      * Represents the type of values that never occur.
      * Used for functions that throw an error (and never return) or functions that contain an infinite loop.
      * Also used as a compile-time type for exhaustive checking (e.g., in `switch` statements).
    <!-- end list -->
    ```typescript
    function error(message: string): never {
        throw new Error(message);
    }
    ```
  * **`unknown` (ES2017+):**
      * A type-safe counterpart to `any`.
      * Variables of type `unknown` can hold any value, but you *must narrow its type* before performing operations on it (e.g., using `typeof` or `instanceof` type guards).
    <!-- end list -->
    ```typescript
    let value: unknown = "hello";
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // OK, 'value' is now narrowed to string
    }
    // console.log(value.toUpperCase()); // Error: Object is of type 'unknown'.
    ```

-----

## 3\. Interfaces

  * **What is an Interface?**
      * Defines the **structure** (shape) of an object.
      * A contract that specifies properties and method signatures that an object must have.
      * Purely a compile-time construct; they are removed during transpilation to JavaScript.
  * **Declaring an Interface:**
    ```typescript
    interface Person {
        firstName: string;
        lastName: string;
        age?: number; // Optional property
        readonly id: string; // Readonly property
        greet(message: string): void; // Method signature
    }
    ```
  * **Implementing Interfaces:**
      * Objects can implement interfaces.
    <!-- end list -->
    ```typescript
    const user: Person = {
        firstName: "John",
        lastName: "Doe",
        id: "123",
        greet(message: string) {
            console.log(`${message}, ${this.firstName} ${this.lastName}`);
        }
    };
    // user.id = "456"; // Error: Cannot assign to 'id' because it is a read-only property.
    ```
      * Classes can implement interfaces (ensures the class adheres to the interface's structure).
    <!-- end list -->
    ```typescript
    class Employee implements Person {
        firstName: string;
        lastName: string;
        readonly id: string;
        constructor(first: string, last: string, empId: string) {
            this.firstName = first;
            this.lastName = last;
            this.id = empId;
        }
        greet(message: string): void {
            console.log(`${message}, employee ${this.firstName}`);
        }
    }
    ```
  * **Extending Interfaces:** Interfaces can extend other interfaces to inherit their members.
    ```typescript
    interface Named {
        name: string;
    }
    interface Greetable extends Named {
        greet(phrase: string): void;
    }
    const myPerson: Greetable = {
        name: "Alice",
        greet(phrase: string) {
            console.log(`${phrase} ${this.name}`);
        }
    };
    ```
  * **`interface` vs. `type` (Type Aliases - detailed in next section):**
      * **Extensibility:** `interface` can be extended by other interfaces (`extends`) and implemented by classes (`implements`). `type` can also be extended using intersection types. `interface` can also be "reopened" (declaration merging), `type` cannot.
      * **Declaration Merging:** Interfaces with the same name in the same scope are merged into a single interface. Type aliases do not support this.
      * **Use Cases:**
          * `interface` is generally preferred for defining the shape of objects, especially when you expect them to be extended or implemented by classes.
          * `type` aliases are more versatile for unions, intersections, literal types, tuples, etc.

-----

## 4\. Type Aliases

  * **What is a Type Alias?**
      * Creates a new name for a type.
      * Allows you to define a custom type that can be reused throughout your code.
      * Does not create a new type; it just creates a new name for an existing type.
  * **Declaring a Type Alias:**
    ```typescript
    type ID = string | number; // Union type
    type Point = { x: number; y: number; }; // Object type
    type MyCallback = (value: string) => void; // Function type

    let userId: ID = "abc-123";
    let coords: Point = { x: 10, y: 20 };
    ```
  * **Combining Types (Unions, Intersections) with Type Aliases:**
    ```typescript
    type Employee = { id: string; name: string; department: string; };
    type Manager = { reportsTo: string[]; };

    type ProjectLead = Employee & Manager; // Intersection type

    const lead: ProjectLead = {
        id: "PL-001",
        name: "Bob",
        department: "Engineering",
        reportsTo: ["Alice", "Charlie"]
    };
    ```
  * **`type` vs. `interface` (Revisited):**
      * **`interface`:**
          * Can only describe object shapes.
          * Supports declaration merging (can be extended by declaring the same interface multiple times, which merge).
          * Can be `implemented` by classes.
          * Generally preferred for public APIs or when defining reusable object shapes.
      * **`type` alias:**
          * More versatile: can alias primitive types, union types, intersection types, tuples, and function signatures.
          * Does *not* support declaration merging.
          * Cannot be `implemented` by classes directly (though an object fulfilling the type can be assigned to it).
          * Better for complex type compositions, especially unions and intersections.
      * **Best Practice:** Use `interface` for object shapes, `type` for everything else.

-----

## 5\. Enums

  * **What are Enums?**
      * A way to define a set of named constants.
      * Enums in TypeScript are more powerful than typical enums in other languages, serving as both a type and a value.
  * **Numeric Enums (Default):**
      * Values are auto-incremented, starting from 0.
    <!-- end list -->
    ```typescript
    enum Direction {
        Up,    // 0
        Down,  // 1
        Left,  // 2
        Right  // 3
    }
    let go: Direction = Direction.Up;
    console.log(go); // 0
    console.log(Direction[0]); // "Up" (Reverse mapping)
    ```
      * Can assign custom numeric values, and subsequent values will auto-increment.
    <!-- end list -->
    ```typescript
    enum StatusCode {
        OK = 200,
        NotFound = 404,
        InternalServerError = 500
    }
    let status: StatusCode = StatusCode.OK;
    console.log(status); // 200
    ```
  * **String Enums (ES6+):**
      * Values must be initialized with string literals.
      * No reverse mapping.
      * Often preferred for readability and avoiding magic numbers.
    <!-- end list -->
    ```typescript
    enum UserRole {
        Admin = "ADMIN",
        Editor = "EDITOR",
        Viewer = "VIEWER"
    }
    let role: UserRole = UserRole.Admin;
    console.log(role); // "ADMIN"
    // console.log(UserRole["ADMIN"]); // Error: Element implicitly has an 'any' type because expression of type '"ADMIN"' can't be used to index type 'typeof UserRole'. (No reverse mapping for string enums)
    ```
  * **Heterogeneous Enums:** Mix of numeric and string members (discouraged due to complexity).
  * **Const Enums:**
      * Defined with `const` keyword.
      * Completely removed at compile time, replaced with literal values where used.
      * No runtime overhead, no reverse mapping.
      * Good for performance in scenarios where you only need the value at compile time.
    <!-- end list -->
    ```typescript
    const enum Color {
        Red,
        Green,
        Blue
    }
    let c: Color = Color.Red; // In compiled JS: let c = 0;
    ```
  * **When to use Enums:**
      * When you have a small, fixed set of related constants.
      * When you need more descriptive names for numeric or string values.
  * **Alternatives to Enums:**
      * **Union of Literal Types:** Often preferred as it provides strong type checking without the runtime overhead or complexities of enums.
        ```typescript
        type TrafficLight = "Red" | "Yellow" | "Green";
        let light: TrafficLight = "Red";
        ```
      * **Plain Objects with `as const`:** Also provides strong type checking and runtime values, often simpler for string enums.
        ```typescript
        const Status = {
          ACTIVE: "active",
          INACTIVE: "inactive",
        } as const;
        type Status = typeof Status[keyof typeof Status]; // "active" | "inactive"
        let currentStatus: Status = Status.ACTIVE;
        ```

-----

## 6\. Functions in TypeScript

  * **Function Type Signatures:**
      * Defining types for parameters and return values.
    <!-- end list -->
    ```typescript
    function add(a: number, b: number): number {
        return a + b;
    }
    const subtract = (a: number, b: number): number => a - b;
    ```
  * **Optional Parameters:**
      * Marked with `?`. Must come after required parameters.
    <!-- end list -->
    ```typescript
    function greet(name: string, greeting?: string): string {
        return `${greeting || "Hello"}, ${name}!`;
    }
    greet("Alice");        // "Hello, Alice!"
    greet("Bob", "Hi");    // "Hi, Bob!"
    ```
  * **Default Parameters:**
      * Provide a default value if an argument is `undefined` or not provided.
    <!-- end list -->
    ```typescript
    function multiply(a: number, b: number = 2): number {
        return a * b;
    }
    multiply(5);     // 10
    multiply(5, 3);  // 15
    ```
  * **Rest Parameters:**
      * Allows a function to accept an indefinite number of arguments as an array.
    <!-- end list -->
    ```typescript
    function sumAll(...numbers: number[]): number {
        return numbers.reduce((acc, current) => acc + current, 0);
    }
    sumAll(1, 2, 3, 4); // 10
    ```
  * **Function Overloads:**
      * Allows defining multiple function signatures for a single function implementation.
      * The compiler chooses the correct overload based on the arguments provided.
      * The implementation signature must be compatible with all overload signatures.
    <!-- end list -->
    ```typescript
    // Overload signatures
    function combine(a: number, b: number): number;
    function combine(a: string, b: string): string;
    function combine(a: (number | string), b: (number | string)): (number | string) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        } else if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
        throw new Error("Invalid arguments");
    }
    const numResult = combine(5, 10);      // 15 (number)
    const strResult = combine("Hello", "World"); // "HelloWorld" (string)
    // const mixedResult = combine(5, "World"); // Error
    ```
  * **`this` in TypeScript Functions:**
      * TypeScript can help you type `this`.
      * For arrow functions, `this` is lexically scoped.
      * For regular functions, `this` depends on how the function is called.
      * You can explicitly type `this` as the first parameter (it's a fake parameter, only for type checking).
    <!-- end list -->
    ```typescript
    interface User {
        name: string;
        sayHello(this: User): void;
    }

    const user: User = {
        name: "Max",
        sayHello: function(this: User) { // 'this' is explicitly typed as User
            console.log(`Hello, I'm ${this.name}`);
        }
    };

    user.sayHello(); // Works
    const unboundSayHello = user.sayHello;
    // unboundSayHello(); // Error in strict mode because 'this' would be undefined
    ```

-----

## 7\. Classes in TypeScript

  * **Classes as Blueprints:**
      * Syntactic sugar over JavaScript's prototype-based inheritance.
      * Provide a clearer way to define object blueprints with properties and methods.
  * **Basic Class Structure:**
    ```typescript
    class Animal {
        // Properties
        name: string;
        species: string;

        // Constructor
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        // Methods
        makeSound(sound: string): void {
            console.log(`${this.name} (${this.species}) says ${sound}`);
        }
    }

    const myDog = new Animal("Buddy", "Dog");
    myDog.makeSound("Woof!");
    ```
  * **Access Modifiers:**
      * **`public` (default):** Accessible from anywhere.
      * **`private`:** Accessible only within the class where it's defined.
      * **`protected`:** Accessible within the class and by its subclasses.
    <!-- end list -->
    ```typescript
    class Person {
        public name: string;
        private age: number;
        protected city: string = "Unknown";

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        getAge(): number {
            return this.age; // Accessible
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, public studentId: string) {
            super(name, age);
            console.log(this.city); // Accessible (protected)
            // console.log(this.age); // Error: Property 'age' is private
        }
    }
    ```
  * **Readonly Properties:**
      * Initialized either at declaration or in the constructor, and cannot be changed afterwards.
    <!-- end list -->
    ```typescript
    class Product {
        readonly id: string;
        name: string;

        constructor(id: string, name: string) {
            this.id = id;
            this.name = name;
        }
        // setId(newId: string) { this.id = newId; } // Error: Cannot assign to 'id' because it is a read-only property.
    }
    ```
  * **Parameter Properties:**
      * Shorthand for declaring properties directly in the constructor.
    <!-- end list -->
    ```typescript
    class Car {
        constructor(public brand: string, private _year: number) {} // Automatically declares and assigns
        get year(): number {
            return this._year;
        }
    }
    const myCar = new Car("Toyota", 2020);
    console.log(myCar.brand); // Toyota
    // console.log(myCar._year); // Error: Property '_year' is private
    ```
  * **Getters and Setters:**
      * Methods that allow you to control access to class properties.
    <!-- end list -->
    ```typescript
    class Circle {
        private _radius: number;

        constructor(radius: number) {
            this._radius = radius;
        }

        get radius(): number {
            return this._radius;
        }

        set radius(newRadius: number) {
            if (newRadius <= 0) {
                throw new Error("Radius must be positive.");
            }
            this._radius = newRadius;
        }
    }
    const circle = new Circle(10);
    console.log(circle.radius); // Calls getter
    circle.radius = 15;        // Calls setter
    // circle.radius = -5;      // Throws error
    ```
  * **Inheritance (`extends`, `super`):**
      * Classes can inherit from other classes.
    <!-- end list -->
    ```typescript
    class Vehicle {
        constructor(public make: string) {}
        drive(): void { console.log("Driving a vehicle."); }
    }
    class Truck extends Vehicle {
        constructor(make: string, public cargoCapacity: number) {
            super(make); // Call parent constructor
        }
        drive(): void { // Method overriding
            console.log("Driving a truck.");
        }
        loadCargo(amount: number): void {
            console.log(`Loading ${amount} units of cargo.`);
        }
    }
    const myTruck = new Truck("Ford", 5000);
    myTruck.drive(); // Driving a truck.
    myTruck.loadCargo(1000);
    ```
  * **Abstract Classes:**
      * Cannot be instantiated directly.
      * Designed to be extended by other classes.
      * Can contain abstract methods (which must be implemented by subclasses) and concrete methods.
    <!-- end list -->
    ```typescript
    abstract class Shape {
        abstract getArea(): number; // Abstract method
        abstract getPerimeter(): number;
        describe(): void {
            console.log("This is a shape.");
        }
    }

    class Rectangle extends Shape {
        constructor(public width: number, public height: number) { super(); }
        getArea(): number { return this.width * this.height; }
        getPerimeter(): number { return 2 * (this.width + this.height); }
    }
    // const shape = new Shape(); // Error: Cannot create an instance of an abstract class.
    const rect = new Rectangle(5, 10);
    console.log(rect.getArea()); // 50
    ```
  * **`static` Members:**
      * Belong to the class itself, not to instances of the class.
      * Accessed directly on the class name (e.g., `ClassName.staticMethod()`).
      * Cannot access instance properties (e.g., `this.name`).
    <!-- end list -->
    ```typescript
    class MathUtil {
        static PI: number = 3.14159;
        static circumference(radius: number): number {
            return 2 * MathUtil.PI * radius;
        }
    }
    console.log(MathUtil.PI); // 3.14159
    console.log(MathUtil.circumference(5)); // 31.4159
    ```
  * **`implements` keyword (covered in Interfaces section):** Classes can ensure they adhere to an interface's structure.

-----

## 8\. Generics

  * **What are Generics?**
      * Allow you to write reusable components that work with a variety of types, rather than a single one.
      * Provides a way to create components that can work with different data types without losing type safety or sacrificing flexibility.
      * Similar to type parameters in Java or C\#.
  * **Why use Generics?**
      * **Reusability:** Write functions/classes that work for multiple types.
      * **Type Safety:** Ensure type consistency even with flexible types.
      * **Reduced Duplication:** Avoid writing the same logic for different types.
  * **Generic Functions:**
    ```typescript
    function identity<T>(arg: T): T {
        return arg;
    }
    let output1 = identity<string>("myString"); // Type argument explicitly provided
    let output2 = identity("myNumber");       // Type argument inferred (number)
    ```
  * **Generic Interfaces:**
    ```typescript
    interface KeyValuePair<K, V> {
        key: K;
        value: V;
    }
    let pair1: KeyValuePair<string, number> = { key: "age", value: 30 };
    let pair2: KeyValuePair<number, string> = { key: 1, value: "first" };
    ```
  * **Generic Classes:**
    ```typescript
    class Storage<T> {
        private data: T[] = [];
        add(item: T): void {
            this.data.push(item);
        }
        get(index: number): T {
            return this.data[index];
        }
    }
    const numberStorage = new Storage<number>();
    numberStorage.add(10);
    // numberStorage.add("text"); // Error
    const stringStorage = new Storage<string>();
    stringStorage.add("hello");
    ```
  * **Generic Constraints:**
      * Limit the types that a generic type parameter can accept using `extends`.
      * Useful when you need to access properties or methods on the generic type.
    <!-- end list -->
    ```typescript
    interface Lengthwise {
        length: number;
    }
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length); // Now we know it has a .length property
        return arg;
    }
    loggingIdentity({ length: 10, value: 3 }); // OK
    // loggingIdentity(5); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
    ```
  * **Using Type Parameters in Generic Constraints:**
    ```typescript
    function getProperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    getProperty(x, "a"); // OK
    // getProperty(x, "m"); // Error: Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
    ```

-----

## 9\. Union and Intersection Types

  * **Union Types (`|`):**
      * Allows a variable to be one of several types.
      * The value can be *either* type A *or* type B.
      * You can only access members that are common to all types in the union, or use type guards to narrow the type.
    <!-- end list -->
    ```typescript
    type StringOrNumber = string | number;
    let value: StringOrNumber;
    value = "hello"; // OK
    value = 123;     // OK
    // value = true;    // Error

    function printId(id: number | string) {
        console.log("Your ID is: " + id);
        // console.log(id.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number | string'.
        // To use string methods, you need to narrow the type:
        if (typeof id === 'string') {
            console.log(id.toUpperCase());
        }
    }
    ```
  * **Intersection Types (`&`):**
      * Combines multiple types into a single type.
      * The value must have *all* members of all types in the intersection.
      * Combines the properties of all types involved.
    <!-- end list -->
    ```typescript
    interface HasName {
        name: string;
    }
    interface HasAge {
        age: number;
    }
    type PersonInfo = HasName & HasAge; // Must have both 'name' and 'age'

    const user: PersonInfo = {
        name: "Alice",
        age: 30
    };
    // const invalidUser: PersonInfo = { name: "Bob" }; // Error: Property 'age' is missing
    ```
  * **Differences and Use Cases:**
      * **Union:** "OR" logic. Useful when a variable can hold one of several possible distinct types.
      * **Intersection:** "AND" logic. Useful for combining existing types to create a new type with all properties. Often used in conjunction with interfaces to mixin functionalities.

-----

## 10\. Literal Types

  * **What are Literal Types?**
      * Allow you to define a type that represents a specific, exact value (a literal).
      * These are more specific types of `string`, `number`, or `boolean` types.
  * **String Literal Types:**
    ```typescript
    type TrafficLightColor = "red" | "yellow" | "green";
    let light: TrafficLightColor = "red";
    // light = "blue"; // Error: Type '"blue"' is not assignable to type 'TrafficLightColor'.
    ```
  * **Numeric Literal Types:**
    ```typescript
    type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
    let roll: DiceRoll = 4;
    // roll = 7; // Error
    ```
  * **Boolean Literal Types:**
    ```typescript
    type TrueOnly = true;
    let active: TrueOnly = true;
    // active = false; // Error
    ```
  * **Combining with Union Types:** Literal types are most powerful when combined with union types.
  * **Use Cases:**
      * Defining a set of allowed string or numeric values (similar to enums, but often preferred for smaller sets or when runtime overhead of enums is undesirable).
      * When working with APIs that expect specific literal values.
      * Used in conjunction with discriminated unions for type narrowing.

-----

## 11\. Type Assertions & Type Guards

  * **Type Assertions:**
      * Tells the TypeScript compiler to "trust me, I know better than you what type this is."
      * A way to override the type inference or type-checking of TypeScript.
      * Does *not* perform any runtime type checking or conversion.
      * **Syntax:**
          * **Angle-bracket syntax (preferred in `.ts` files, not compatible with JSX):** `<Type>value`
          * **`as` keyword syntax (preferred in `.tsx` for JSX compatibility):** `value as Type`
    <!-- end list -->
    ```typescript
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length; // Angle-bracket
    let strLength2: number = (someValue as string).length; // as-keyword (preferred)

    const inputElement = document.getElementById("my-input") as HTMLInputElement;
    console.log(inputElement.value); // Access 'value' property
    ```
      * **When to use:** When you have more information about the type of a variable than TypeScript does (e.g., after a DOM query, or parsing JSON).
      * **Caution:** Use with care, as incorrect assertions can lead to runtime errors.
  * **Type Guards:**
      * Runtime checks that allow TypeScript to narrow the type of a variable within a certain scope.
      * TypeScript's way of understanding that a variable's type can change based on conditional logic.
      * **Common Type Guards:**
          * **`typeof` Type Guard:** For primitive types (`string`, `number`, `boolean`, `symbol`, `undefined`, `object`, `function`, `bigint`).
            ```typescript
            function printId(id: number | string) {
                if (typeof id === 'string') {
                    console.log(id.toUpperCase()); // 'id' is narrowed to 'string' here
                } else {
                    console.log(id + 10);        // 'id' is narrowed to 'number' here
                }
            }
            ```
          * **`instanceof` Type Guard:** For checking if an object is an instance of a specific class.
            ```typescript
            class Dog { bark() { console.log('Woof!'); } }
            class Cat { meow() { console.log('Meow!'); } }

            function makeSound(animal: Dog | Cat) {
                if (animal instanceof Dog) {
                    animal.bark(); // 'animal' is narrowed to 'Dog'
                } else {
                    animal.meow(); // 'animal' is narrowed to 'Cat'
                }
            }
            ```
          * **`in` Operator Type Guard:** For checking if a property exists on an object.
            ```typescript
            interface Car { drive: () => void; }
            interface Bike { pedal: () => void; }

            function startVehicle(vehicle: Car | Bike) {
                if ('drive' in vehicle) {
                    vehicle.drive(); // 'vehicle' is narrowed to 'Car'
                } else {
                    vehicle.pedal(); // 'vehicle' is narrowed to 'Bike'
                }
            }
            ```
          * **Custom/User-Defined Type Guards:** Functions that return a boolean indicating a type assertion, often using a type predicate `parameter is Type`.
            ```typescript
            interface Fish { swim(): void; }
            interface Bird { fly(): void; }

            function isFish(pet: Fish | Bird): pet is Fish { // Type predicate
                return (pet as Fish).swim !== undefined;
            }

            function move(pet: Fish | Bird) {
                if (isFish(pet)) {
                    pet.swim(); // 'pet' is narrowed to 'Fish'
                } else {
                    pet.fly();  // 'pet' is narrowed to 'Bird'
                }
            }
            ```
          * **Discriminated Unions:** Using a literal property to distinguish between members of a union. (Covered in Advanced Types).

-----

## 12\. Nullable and Optional Types

  * **`strictNullChecks` (Compiler Option):**
      * When `true` (recommended), `null` and `undefined` are *not* assignable to types like `string`, `number`, `boolean`, etc., unless explicitly included in a union type (e.g., `string | null`).
      * This forces developers to handle potential `null` or `undefined` values, preventing common runtime errors.
  * **Optional Properties in Interfaces/Types:**
      * Marked with `?`. A property that may or may not exist.
    <!-- end list -->
    ```typescript
    interface User {
        name: string;
        email?: string; // email is optional
    }
    const user1: User = { name: "Alice" };
    const user2: User = { name: "Bob", email: "bob@example.com" };
    ```
  * **Optional Parameters in Functions (covered in Functions).**
  * **Non-null Assertion Operator (`!`):**
      * Tells TypeScript that a value is definitely not `null` or `undefined` at that point, even if TypeScript's analysis can't prove it.
      * Used to suppress `strictNullChecks` errors.
      * **Caution:** Use sparingly and only when you are absolutely certain the value will not be `null`/`undefined` at runtime, otherwise it can lead to runtime errors.
    <!-- end list -->
    ```typescript
    function greetUser(name: string | null) {
        // console.log(name.toUpperCase()); // Error if strictNullChecks is true
        console.log(name!.toUpperCase()); // OK, asserting 'name' is not null
    }
    ```
  * **Nullish Coalescing Operator (`??`) (ES2020):**
      * Provides a default value only if the left-hand operand is `null` or `undefined`.
      * Useful with nullable types.
    <!-- end list -->
    ```typescript
    let userName: string | null = null;
    let displayName = userName ?? "Guest"; // displayName will be "Guest"

    let count: number | undefined = 0;
    let defaultCount = count ?? 1; // defaultCount will be 0 (because 0 is not null/undefined)
    ```
  * **Optional Chaining (`?.`) (ES2020):**
      * Safely access properties or call methods on an object that might be `null` or `undefined`.
      * If any part of the chain is `null` or `undefined`, the expression short-circuits and returns `undefined`.
    <!-- end list -->
    ```typescript
    interface Company {
        name: string;
        address?: {
            street: string;
            city: string;
        };
    }
    const companyA: Company = { name: "Tech Solutions" };
    const companyB: Company = { name: "Innovate Inc.", address: { street: "123 Main", city: "Anytown" } };

    console.log(companyA.address?.city); // undefined
    console.log(companyB.address?.city); // Anytown
    // console.log(companyA.address.city); // Error if strictNullChecks is true (without optional chaining)
    ```

-----

## 13\. Advanced Types

  * **Discriminated Unions:**
      * Powerful pattern for working with union types where a literal property ("discriminant") is used to distinguish between members of the union.
      * Enables exhaustive type checking in `switch` statements or `if/else if` chains.
    <!-- end list -->
    ```typescript
    interface Circle {
        kind: "circle"; // Discriminant property
        radius: number;
    }
    interface Square {
        kind: "square"; // Discriminant property
        sideLength: number;
    }
    interface Triangle {
        kind: "triangle";
        base: number;
        height: number;
    }
    type Shape = Circle | Square | Triangle;

    function getArea(shape: Shape): number {
        switch (shape.kind) {
            case "circle":
                return Math.PI * shape.radius ** 2;
            case "square":
                return shape.sideLength ** 2;
            case "triangle":
                return 0.5 * shape.base * shape.height;
            default:
                // Exhaustive checking: If a new shape is added to 'Shape' union
                // but not handled here, TypeScript will give a compile error.
                const _exhaustiveCheck: never = shape;
                return _exhaustiveCheck;
        }
    }
    ```
  * **Type Keywords (`keyof`, `typeof`, `indexed access types`):**
      * **`keyof`:** Creates a union type of the public property names (keys) of an object type.
        ```typescript
        type Point = { x: number; y: number; };
        type PointKeys = keyof Point; // "x" | "y"
        ```
      * **`typeof`:** Used in a type context to get the type of a variable or property.
        ```typescript
        const PI = 3.14;
        type MyPI = typeof PI; // type MyPI = 3.14 (a literal type)

        const user = { name: "Alice", age: 30 };
        type UserType = typeof user; // type UserType = { name: string; age: number; }
        ```
      * **Indexed Access Types (Lookup Types):** Used to look up a property on another type.
        ```typescript
        type User = { id: number; name: string; email: string; };
        type UserName = User["name"]; // type UserName = string
        type UserIDAndName = User["id" | "name"]; // type UserIDAndName = string | number
        ```
  * **Conditional Types (`extends` in a type context):**
      * Allows types to be chosen based on a condition (a type relationship test).
      * Syntax: `SomeType extends OtherType ? TrueType : FalseType;`
    <!-- end list -->
    ```typescript
    type IsString<T> = T extends string ? true : false;
    type A = IsString<"hello">; // type A = true
    type B = IsString<number>;  // type B = false

    type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
    type FuncResult = GetReturnType<() => string>; // type FuncResult = string
    ```
  * **Mapped Types:**
      * Allows you to transform existing types into new types by iterating over their properties.
      * Syntax: `[P in K]: Type` where `K` is a union of property names.
    <!-- end list -->
    ```typescript
    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    };
    type Partial<T> = {
        [P in keyof T]?: T[P];
    };
    type Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };
    type Record<K extends string | number | symbol, T> = {
        [P in K]: T;
    };

    interface User { name: string; age: number; }
    type ReadonlyUser = Readonly<User>; // { readonly name: string; readonly age: number; }
    type PartialUser = Partial<User>;   // { name?: string; age?: number; }
    type UserNames = Pick<User, "name" | "age">; // { name: string; age: number; }
    type UserRoles = Record<"admin" | "editor", User>; // { admin: User; editor: User; }
    ```
  * **Infer Keyword:**
      * Used in conditional types to "infer" a type that is part of a type.
      * Commonly used with `GetReturnType` (as above) or `ReturnType`.
  * **`Exclude<T, U>`:** Excludes from `T` all union members that are assignable to `U`.
  * **`Extract<T, U>`:** Extracts from `T` all union members that are assignable to `U`.
  * **`NonNullable<T>`:** Excludes `null` and `undefined` from `T`.
  * **`Parameters<T>`:** Gets the parameter types of a function type `T` as a tuple.
  * **`ReturnType<T>`:** Gets the return type of a function type `T`.
  * **`Awaited<T>`:** Infers the awaited type of a Promise.
  * **Declaration Merging (revisited):** How interfaces and namespaces with the same name merge their declarations.

-----

## 14\. Modules in TypeScript

  * **Internal Modules (Namespaces - older concept):**
      * Before ES6 modules, TypeScript used `namespace` keyword to group code to avoid global scope pollution.
      * Still useful for small, isolated pieces of code or legacy codebases.
    <!-- end list -->
    ```typescript
    namespace MyMath {
        export const PI = 3.14;
        export function add(a: number, b: number): number {
            return a + b;
        }
    }
    console.log(MyMath.PI);
    ```
  * **External Modules (ES Modules - modern standard):**
      * The preferred way to organize code in modern TypeScript.
      * Uses `import` and `export` keywords, just like ES6 JavaScript.
      * Each file is considered a module if it contains `import` or `export` statements.
      * **Named Exports:**
        ```typescript
        // math.ts
        export const PI: number = 3.14159;
        export function sum(a: number, b: number): number {
            return a + b;
        }

        // app.ts
        import { PI, sum } from './math';
        console.log(sum(PI, 10));
        ```
      * **Default Exports:**
        ```typescript
        // calculator.ts
        class Calculator { /* ... */ }
        export default Calculator;

        // app.ts
        import MyCalc from './calculator';
        const calc = new MyCalc();
        ```
      * **Re-exporting:**
        ```typescript
        // utils/index.ts
        export * from './math'; // Re-exports everything from math.ts
        export { default as logger } from './logger'; // Re-exports default as named
        ```
      * **Dynamic Imports (`import()`):** Returns a Promise that resolves to the module object, allowing for lazy loading.
        ```typescript
        async function loadModule() {
            const module = await import('./heavyModule');
            module.doSomething();
        }
        ```
  * **Module Resolution:**
      * How TypeScript finds modules.
      * `node`, `node-next`, `classic` strategies.
      * Configured in `tsconfig.json` (`moduleResolution`).

-----

## 15\. Decorators

  * **What are Decorators?**
      * A special kind of declaration that can be attached to classes, methods, accessors, properties, or parameters.
      * Provide a way to add annotations and a meta-programming syntax for classes members.
      * Experimental feature in TypeScript (`"experimentalDecorators": true` in `tsconfig.json`).
  * **Use Cases:**
      * Adding metadata.
      * AOP (Aspect-Oriented Programming): Logging, caching, authorization.
      * Frameworks like Angular, NestJS, TypeORM heavily use decorators.
  * **Types of Decorators:**
      * **Class Decorators:** Applied to the class constructor.
        ```typescript
        function sealed(constructor: Function) {
            Object.seal(constructor);
            Object.seal(constructor.prototype);
        }
        @sealed
        class Greeter {
            greeting: string;
            constructor(message: string) { this.greeting = message; }
            greet() { return "Hello, " + this.greeting; }
        }
        ```
      * **Method Decorators:** Applied to a method declaration.
        ```typescript
        function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function(...args: any[]) {
                console.log(`Calling ${propertyKey} with args: ${JSON.stringify(args)}`);
                const result = originalMethod.apply(this, args);
                console.log(`Method ${propertyKey} returned: ${result}`);
                return result;
            };
            return descriptor;
        }
        class MyClass {
            @logMethod
            myMethod(a: number, b: number) {
                return a + b;
            }
        }
        const instance = new MyClass();
        instance.myMethod(10, 20);
        ```
      * **Accessor Decorators:** Applied to a Getter/Setter.
      * **Property Decorators:** Applied to a property declaration.
      * **Parameter Decorators:** Applied to a parameter in a method or constructor.
  * **Decorator Factories:** Functions that return decorator expressions.
  * **Metadata Reflection API (`reflect-metadata`):** Often used with decorators to emit design-time type information.

-----

## 16\. Declaration Files (`.d.ts`)

  * **What are they?**
      * Files that contain only type declarations, without any implementation code.
      * They describe the shape of JavaScript modules or global variables so that TypeScript can understand their types.
  * **Why use them?**
      * **Type existing JavaScript libraries:** Provide type information for plain JavaScript libraries that don't have built-in TypeScript support.
      * **Define global types:** For variables/functions available globally (e.g., `window`, `document`).
      * **Hide implementation details:** For private parts of a library.
  * **How are they used?**
      * **Bundled with libraries:** Many popular JS libraries now include `.d.ts` files in their npm packages (e.g., React, Lodash).
      * **`@types` organization:** A common convention for community-maintained type definitions (e.g., `@types/react`, `@types/lodash`). When you `npm install @types/some-package`, TypeScript automatically picks them up.
      * **Manual creation:** You can create your own `.d.ts` files for your project's JS parts or for external libraries not yet typed.
  * **Key Declaration Syntax:**
      * `declare var`, `declare let`, `declare const`: For global variables.
      * `declare function`: For global functions.
      * `declare class`: For global classes.
      * `declare enum`: For global enums.
      * `declare namespace`: For global namespaces (old way of bundling globals).
      * `declare module 'module-name'`: For declaring external modules.
      * `declare global`: To add types to the global scope.
      * `export declare`: When defining types for an ES module.
  * **Example (`lodash.d.ts` simplified):**
    ```typescript
    // declare module 'lodash' {
    //     interface LoDashStatic {
    //         // Function Overload for _.uniq
    //         uniq<T>(array: Array<T>): Array<T>;
    //         // Other methods
    //         debounce<T extends Function>(func: T, wait?: number, options?: { leading?: boolean; trailing?: boolean; }): T;
    //         // ...
    //     }
    //     const _: LoDashStatic;
    //     export default _;
    // }
    ```
  * **`/// <reference types="..." />` directives:** Used to explicitly include type declaration files in your project, though often managed automatically by `tsconfig.json` and `@types`.

-----

## 17\. Type Inference

  * **What is Type Inference?**
      * TypeScript's ability to automatically deduce the type of a variable, function return, or expression without explicit type annotations.
      * It analyzes the initial value or usage context to determine the most appropriate type.
  * **When does TypeScript infer types?**
      * **Variable Initialization:**
        ```typescript
        let num = 10; // inferred as number
        let str = "hello"; // inferred as string
        const isActive = true; // inferred as true (literal type, due to const)
        ```
      * **Function Return Types:**
        ```typescript
        function calculateArea(width: number, height: number) {
            return width * height; // inferred as number
        }
        ```
      * **Array Initialization:**
        ```typescript
        let numbers = [1, 2, 3]; // inferred as number[]
        let mixed = [1, "hello"]; // inferred as (number | string)[]
        ```
      * **Object Literal Initialization:**
        ```typescript
        let person = { name: "Alice", age: 30 };
        // inferred as { name: string; age: number; }
        ```
  * **Contextual Typing:**
      * When the type of an expression is determined by its location (context).
      * Common in event handlers, function arguments.
    <!-- end list -->
    ```typescript
    document.addEventListener('click', (event) => {
        // 'event' is contextually typed as MouseEvent due to 'click' event
        console.log(event.clientX);
    });
    ```
  * **Benefits of Type Inference:**
      * Reduces boilerplate code.
      * Keeps code cleaner and more readable.
      * Still provides type safety.
  * **When to use explicit types vs. inference:**
      * **Prefer inference** when the type is obvious from the initialization.
      * **Use explicit types** for:
          * Function parameters (always recommended).
          * Function return types (especially for public APIs or complex logic).
          * Variables that might be initialized later or whose type isn't immediately clear.
          * When you want to be explicit about a type, even if inference works.

-----

## 18\. Type Compatibility

  * **What is Type Compatibility?**
      * Determines if one type can be assigned to another.
      * TypeScript uses a **structural type system** (also known as "duck typing" or "structural subtyping").
      * If Type A has all the required members of Type B, then Type A is compatible with Type B. "If it walks like a duck and quacks like a duck, then it is a duck."
  * **Structural Typing in Action:**
    ```typescript
    interface Named {
        name: string;
    }
    class Person {
        name: string;
        constructor(name: string) { this.name = name; }
    }
    let p: Named = new Person("John"); // OK: Person has a 'name' property.

    let x: { name: string; };
    let y = { name: "Alice", age: 30 }; // y has more properties
    x = y; // OK: y has all properties of x
    // y = x; // Error: x might not have 'age' (if strict object literal checks are on)

    // Function parameter compatibility (contravariant)
    let funcA = (x: number) => 0;
    let funcB = (x: number, y: number) => 0;
    funcA = funcB; // OK: funcB is assignable to funcA (can ignore extra parameters)
    // funcB = funcA; // Error: funcA does not have 'y'
    ```
  * **Comparisons:**
      * **Interface to Interface:** Compatible if the target has at least the properties of the source.
      * **Class to Interface:** Compatible if the class has the required properties and methods of the interface.
      * **Function to Function:** Parameters are contravariant (can be "wider" in the source), return types are covariant (can be "narrower" in the source).
  * **Enums:** Only compatible with themselves and their numeric values.
  * **`any` and `unknown`:**
      * `any` is compatible with all types.
      * `unknown` is only compatible with itself and `any` (without narrowing).
  * **`strictFunctionTypes` (Compiler Option):**
      * When `true`, function argument types are checked more strictly. Makes parameter types *bivariant* by default.
      * `funcA = funcB` example above is due to `strictFunctionTypes: false`. If `true`, this would be an error, which is generally safer.
  * **Freshness Literals (Excess Property Checks):**
      * When an object literal is assigned to a variable, TypeScript performs "excess property checks." If the object literal has properties not declared in the target type, it's an error.
      * This is a compile-time check for literal assignments to catch typos.
    <!-- end list -->
    ```typescript
    interface Point2D { x: number; y: number; }
    let pt: Point2D = { x: 10, y: 20, z: 30 }; // Error: Object literal may only specify known properties
    let pt2 = { x: 10, y: 20, z: 30 };
    let pt3: Point2D = pt2; // OK: No excess property check on existing variable
    ```

-----

## 19\. `tsconfig.json` Configuration

  * **What is `tsconfig.json`?**
      * The configuration file for a TypeScript project.
      * Specifies root files and compiler options required to compile the project.
  * **Key Compiler Options (`compilerOptions`):**
      * **`target`:** Specifies the ECMAScript target version for the compiled JavaScript (e.g., `es5`, `es2015`, `esnext`). Affects transpiled features.
      * **`module`:** Specifies the module code generation (`commonjs`, `es2015`, `esnext`, `umd`, `amd`, `node16`, `nodenext`).
      * **`lib`:** Specifies a list of bundled library declaration files to be included in the compilation (e.g., `dom`, `es2015`, `es2017.object`).
      * **`outDir`:** Specifies the output directory for compiled JavaScript files.
      * **`rootDir`:** Specifies the root directory of source files.
      * **`strict`:** Enables a broad range of strict type-checking options (recommended for new projects).
          * `noImplicitAny`: Raises an error on expressions and declarations with an implied `any` type.
          * `strictNullChecks`: When `true`, `null` and `undefined` are not assignable to non-nullable types.
          * `strictFunctionTypes`: Checks function parameter types more strictly.
          * `strictBindCallApply`: Enables stricter checking for `bind`, `call`, and `apply` methods on functions.
          * `strictPropertyInitialization`: Ensures class properties declared without an initializer are assigned in the constructor.
          * `noImplicitThis`: Raises an error on `this` expressions with an implied `any` type.
          * `alwaysStrict`: Ensures the compiled JavaScript is emitted in 'strict mode'.
      * **`esModuleInterop`:** Enables compatibility between CommonJS and ES Modules imports.
      * **`forceConsistentCasingInFileNames`:** Disallows inconsistently-cased references to the same file.
      * **`jsx`:** Specifies JSX emit mode (`react`, `react-jsx`, `preserve`).
      * **`sourceMap`:** Generates corresponding `.map` files for debugging.
      * **`declaration`:** Generates `.d.ts` declaration files for your own TypeScript code.
      * **`allowJs`:** Allows JavaScript files to be included in the compilation.
      * **`checkJs`:** Reports errors in .js files (requires `allowJs`).
      * **`skipLibCheck`:** Skips type checking of all declaration files (`*.d.ts`). Useful for faster compilation in large projects.
      * **`paths` and `baseUrl`:** For setting up module aliases for easier imports.
  * **`include` and `exclude`:**
      * `include`: An array of file paths or glob patterns to include in the program.
      * `exclude`: An array of file paths or glob patterns to exclude from the program.
  * **`extends`:**
      * Allows `tsconfig.json` files to inherit configurations from other `tsconfig.json` files. Useful for monorepos or sharing base configurations.
      * Example: `  "extends": "./configs/base.json" `

-----

## 20\. Integration with JavaScript Ecosystem

  * **Bundlers (Webpack, Rollup, Parcel, Vite):**
      * TypeScript integrates seamlessly with popular JavaScript bundlers.
      * They use `ts-loader`, `babel-loader` (with `@babel/preset-typescript`), or native plugins to transpile TypeScript during the bundling process.
      * Vite has native TS support via `esbuild`.
  * **Build Tools (Gulp, Grunt, npm scripts):**
      * Can configure `tsc` command directly in npm scripts or integrate with Gulp/Grunt tasks.
  * **Linters (ESLint, TSLint - deprecated):**
      * ESLint is the current standard. Use `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` to lint TypeScript code.
      * TSLint is deprecated and ESLint is the recommended linter for TypeScript.
  * **Formatters (Prettier):**
      * Prettier works out of the box with TypeScript.
  * **Testing Frameworks:**
      * Jest: Supports TypeScript via `ts-jest` or Babel (`@babel/preset-typescript`).
      * Mocha: Can be configured with `ts-node` or `mocha-webpack`.
  * **Node.js Integration:**
      * Use `ts-node` for direct execution of TypeScript files in Node.js for development/scripts.
      * Compile to JavaScript for production deployment.
  * **Frameworks (React, Angular, Vue):**
      * All major JavaScript frameworks have first-class TypeScript support.
      * Angular is written in TypeScript.
      * React and Vue provide official TypeScript templates and documentation.
      * `create-react-app` with `--template typescript`.
      * Next.js/Nuxt.js also provide excellent TypeScript integration.
  * **npm/yarn:** Manage TypeScript dependencies, including `@types` packages.

-----

## 21\. Common Interview Questions & Scenarios

  * **"What is TypeScript and why would you use it?"**
  * **"What are the main benefits of using TypeScript over JavaScript?"**
  * **"Explain the difference between `interface` and `type` aliases."**
  * **"What is type inference in TypeScript?"**
  * **"What are generics? Provide an example of a generic function."**
  * **"Explain `any` vs. `unknown`."**
  * **"What are Union and Intersection types? When would you use each?"**
  * **"What are enums? Discuss their different kinds and alternatives like literal unions."**
  * **"What is `null` vs `undefined` in TypeScript, especially with `strictNullChecks`?"**
  * **"Explain the non-null assertion operator (`!`) and optional chaining (`?.`). When should they be used?"**
  * **"What are type assertions? When are they necessary?"**
  * **"How do type guards work? Give examples of different type guards."**
  * **"Describe the concept of `this` in TypeScript classes."**
  * **"What are access modifiers (`public`, `private`, `protected`) in TypeScript classes?"**
  * **"How do you define optional and default parameters in functions?"**
  * **"Explain function overloading in TypeScript."**
  * **"What is a `tsconfig.json` file? Name some important compiler options."**
  * **"How do you get type definitions for a third-party JavaScript library?"**
  * **"What are `.d.ts` files and why are they important?"**
  * **"Can you explain the difference between structural typing and nominal typing?"**
  * **"What are Decorators in TypeScript? Give a high-level overview and a use case."**
  * **"How do you ensure type safety when working with external data (e.g., from an API)?"** (Discuss parsing, validation, and type assertion strategies).
  * **"Describe a situation where TypeScript helped you prevent a bug in a previous project."**
  * **"How do you set up a new project with TypeScript and a build tool like Webpack/Vite?"**
  * **"What are mapped types? Give an example of a built-in mapped type you've used."**
  * **"Explain conditional types and the `infer` keyword."**
  * **Coding Scenarios (expect to write code):**
      * Define an interface for a complex object.
      * Write a generic function that works with a constraint.
      * Implement a discriminated union and a type guard function for it.
      * Demonstrate the use of optional chaining and nullish coalescing.
      * Convert a JavaScript class to TypeScript, adding types and access modifiers.
      * Write a custom type guard.
      * Show how to use a basic decorator (if allowed to use experimental features).

-----