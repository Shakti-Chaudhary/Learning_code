Design patterns are reusable solutions to common problems in software design. In JavaScript, they provide structured ways to write more maintainable, scalable, and understandable code, even with its dynamic and prototype-based nature.

This guide covers fundamental design patterns, their JavaScript implementations, and how they apply in modern development.

-----

## Design Patterns in JavaScript Interview Guide

### Table of Contents

1.  [Introduction to Design Patterns](https://www.google.com/search?q=%231-introduction-to-design-patterns)
      * 1.1 What are Design Patterns?
      * 1.2 Why Use Design Patterns in JavaScript?
      * 1.3 Categories of Design Patterns
2.  [Creational Patterns](https://www.google.com/search?q=%232-creational-patterns)
      * 2.1 Singleton Pattern
      * 2.2 Factory Method Pattern
      * 2.3 Builder Pattern
      * 2.4 Prototype Pattern
3.  [Structural Patterns](https://www.google.com/search?q=%233-structural-patterns)
      * 3.1 Adapter Pattern
      * 3.2 Decorator Pattern
      * 3.3 Facade Pattern
      * 3.4 Proxy Pattern
4.  [Behavioral Patterns](https://www.google.com/search?q=%234-behavioral-patterns)
      * 4.1 Observer Pattern (Publish-Subscribe)
      * 4.2 Strategy Pattern
      * 4.3 Command Pattern
      * 4.4 Iterator Pattern
      * 4.5 State Pattern
5.  [Common JavaScript-Specific Patterns / Considerations](https://www.google.com/search?q=%235-common-javascript-specific-patterns--considerations)
      * 5.1 Module Pattern (and ES Modules)
      * 5.2 Revealing Module Pattern
      * 5.3 Mixin Pattern
      * 5.4 Dependency Injection (DI)
6.  [Design Patterns in Modern JavaScript Frameworks/Libraries](https://www.google.com/search?q=%236-design-patterns-in-modern-javascript-frameworkslibraries)
7.  [Anti-Patterns in JavaScript](https://www.google.com/search?q=%237-anti-patterns-in-javascript)
8.  [Common Interview Questions & Scenarios](https://www.google.com/search?q=%238-common-interview-questions--scenarios)

-----

## 1\. Introduction to Design Patterns

### 1.1 What are Design Patterns?

Design patterns are formalized best practices that a programmer can use to solve common problems when designing an application or system. They are not direct code, but rather templates or blueprints that can be adapted to specific situations. They provide a common vocabulary for developers to discuss solutions.

They are categorized into three main types by the "Gang of Four" (GoF) book "Design Patterns: Elements of Reusable Object-Oriented Software":

  * **Creational Patterns:** Deal with object creation mechanisms, trying to create objects in a manner suitable for the situation.
  * **Structural Patterns:** Deal with the composition of classes and objects.
  * **Behavioral Patterns:** Deal with the communication between objects and the assignment of responsibilities.

### 1.2 Why Use Design Patterns in JavaScript?

  * **Modularity & Reusability:** Break down complex systems into smaller, independent, and reusable modules.
  * **Maintainability & Scalability:** Easier to understand, modify, and extend existing codebases.
  * **Common Vocabulary:** Facilitates communication among developers, as patterns provide a shared language for design solutions.
  * **Best Practices:** Leverage proven solutions for recurring problems, avoiding reinventing the wheel and common pitfalls.
  * **Flexibility:** Promotes loose coupling and high cohesion.

### 1.3 Categories of Design Patterns

As mentioned, GoF categorizes patterns into Creational, Structural, and Behavioral. We'll explore key patterns from each category relevant to JavaScript.

-----

## 2\. Creational Patterns

These patterns abstract the instantiation process, making the system independent of how its objects are created, composed, and represented.

### 2.1 Singleton Pattern

  * **Purpose:** Ensures a class has only one instance, and provides a global point of access to it.
  * **JavaScript Implementation:** Often achieved using closures (IIFE) or a static method in an ES6 class.

**ES6 Class Example:**

```javascript
class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }
        this.logs = [];
        Logger.instance = this;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push(`${timestamp}: ${message}`);
        console.log(`LOG: ${message}`);
    }

    getLogs() {
        return this.logs;
    }
}

// Usage
const logger1 = new Logger();
const logger2 = new Logger();

console.log(logger1 === logger2); // true, both are the same instance

logger1.log("User logged in.");
logger2.log("Item added to cart.");

console.log(logger1.getLogs());
// Expected Output:
// [
//   "2023-10-27T...Z: User logged in.",
//   "2023-10-27T...Z: Item added to cart."
// ]
```

  * **Pros:** Controlled access to a single instance, reduces global namespace pollution (if implemented carefully).
  * **Cons:** Can be an anti-pattern (introduces global state, difficult to test due to tightly coupled dependencies, can hide dependencies). Overuse can lead to less modular and harder-to-maintain code.
  * **Use Cases:** Logger, configuration manager, database connection pool (though modern practices often prefer Dependency Injection).

### 2.2 Factory Method Pattern

  * **Purpose:** Defines an interface for creating an object, but lets subclasses (or functions in JS) decide which class to instantiate.
  * **JavaScript Implementation:** A function (the "factory") that returns different object types based on input parameters.

**Example:**

```javascript
// Product Classes
class Car {
    constructor(model) {
        this.model = model;
        this.type = 'Car';
    }
    drive() { console.log(`${this.model} is driving.`); }
}

class Truck {
    constructor(model) {
        this.model = model;
        this.type = 'Truck';
    }
    haul() { console.log(`${this.model} is hauling cargo.`); }
}

// Factory Function
function VehicleFactory() {
    this.createVehicle = function(type, model) {
        switch (type.toLowerCase()) {
            case 'car':
                return new Car(model);
            case 'truck':
                return new Truck(model);
            default:
                throw new Error('Unknown vehicle type');
        }
    };
}

// Usage
const factory = new VehicleFactory();

const myCar = factory.createVehicle('car', 'Tesla Model 3');
myCar.drive(); // Tesla Model 3 is driving.

const myTruck = factory.createVehicle('truck', 'Ford F-150');
myTruck.haul(); // Ford F-150 is hauling cargo.

console.log(myCar.type); // Car
```

  * **Pros:** Decouples object creation from its usage, flexible for adding new object types without modifying client code, centralizes object creation logic.
  * **Cons:** Can lead to many small factory functions or classes, potentially increasing overall complexity.
  * **Use Cases:** Creating different types of UI components, handling multiple data sources (e.g., creating different database connections), parsing complex data formats.

### 2.3 Builder Pattern

  * **Purpose:** Separates the construction of a complex object from its representation, allowing the same construction process to create different representations. It's useful when an object has many optional parameters or requires complex step-by-step initialization.
  * **JavaScript Implementation:** Chaining methods that configure the object and finally a `build` method to return the constructed object.

**Example:**

```javascript
class Pizza {
    constructor(builder) {
        this.size = builder.size;
        this.crust = builder.crust || 'regular';
        this.cheese = builder.cheese || 'mozzarella';
        this.toppings = builder.toppings || [];
        this.sauce = builder.sauce || 'tomato';
    }

    getDescription() {
        return `A ${this.size} pizza with ${this.crust} crust, ${this.sauce} sauce, ${this.cheese} cheese, and toppings: ${this.toppings.join(', ')}.`;
    }
}

class PizzaBuilder {
    constructor(size) {
        this.size = size;
    }

    withCrust(crust) {
        this.crust = crust;
        return this; // Return 'this' for chaining
    }

    withCheese(cheese) {
        this.cheese = cheese;
        return this;
    }

    addTopping(topping) {
        if (!this.toppings) {
            this.toppings = [];
        }
        this.toppings.push(topping);
        return this;
    }

    withSauce(sauce) {
        this.sauce = sauce;
        return this;
    }

    build() {
        return new Pizza(this);
    }
}

// Usage
const myPizza = new PizzaBuilder('large')
    .withCrust('thin')
    .withCheese('provolone')
    .addTopping('pepperoni')
    .addTopping('mushrooms')
    .withSauce('marinara')
    .build();

console.log(myPizza.getDescription());
// Expected Output: A large pizza with thin crust, marinara sauce, provolone cheese, and toppings: pepperoni, mushrooms.

const simplePizza = new PizzaBuilder('medium')
    .build(); // Using default values

console.log(simplePizza.getDescription());
// Expected Output: A medium pizza with regular crust, tomato sauce, mozzarella cheese, and toppings: .
```

  * **Pros:** Step-by-step object construction, useful for objects with many optional parameters, allows for different variations of a complex object, hides internal construction details.
  * **Cons:** Can add boilerplate code if the object being built is simple.
  * **Use Cases:** Building complex configurations, constructing DOM elements dynamically, query builders for databases, creating complex HTTP requests.

### 2.4 Prototype Pattern

  * **Purpose:** Create new objects by cloning an existing object (the prototype).
  * **JavaScript Implementation:** Directly supported by `Object.create()`, which creates a new object with the specified prototype object and properties. ES6 classes with `extends` also leverage prototypal inheritance.

**Example:**

```javascript
const carPrototype = {
    wheels: 4,
    drive() {
        console.log(`Driving my ${this.model} with ${this.wheels} wheels.`);
    },
    // Optional: a method to clone the object
    clone() {
        return Object.create(this);
    }
};

// Create a specific car object using the prototype
const civic = Object.create(carPrototype);
civic.model = 'Civic';
civic.year = 2022;

// Create another car object
const accord = Object.create(carPrototype);
accord.model = 'Accord';
accord.year = 2023;

civic.drive(); // Driving my Civic with 4 wheels.
accord.drive(); // Driving my Accord with 4 wheels.

console.log(Object.getPrototypeOf(civic) === carPrototype); // true

// Using a custom clone method
const clonedCivic = civic.clone();
clonedCivic.model = 'Cloned Civic';
clonedCivic.drive(); // Driving my Cloned Civic with 4 wheels.
console.log(Object.getPrototypeOf(clonedCivic) === carPrototype); // true
```

  * **Pros:** Efficient for creating many similar objects, more flexible than class-based inheritance in some scenarios, allows adding new properties/methods to prototypes at runtime.
  * **Cons:** Can be confusing with deep vs. shallow cloning, shared mutable state can be an issue if not handled carefully (changes to prototype properties affect all derived objects).
  * **Use Cases:** When performance is critical for object creation, creating objects dynamically at runtime, implementing JavaScript's built-in object inheritance.

-----

## 3\. Structural Patterns

These patterns deal with the composition of classes and objects, forming larger structures while keeping the structures flexible and efficient.

### 3.1 Adapter Pattern

  * **Purpose:** Allows incompatible interfaces to work together. It acts as a wrapper between two objects.
  * **JavaScript Implementation:** A function or object that translates the interface of one object into an interface expected by the client.

**Example:**

```javascript
// Old API: Calculates sum of numbers from an array
class OldCalculator {
    constructor() {
        this.operations = function(a, b, op) {
            switch (op) {
                case 'add': return a + b;
                case 'sub': return a - b;
                default: return NaN;
            }
        };
    }
}

// New API: Expects an array of numbers and a method for addition/subtraction
class NewCalculator {
    add(numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
    subtract(numbers) {
        return numbers.reduce((diff, num) => diff - num);
    }
}

// Adapter to make NewCalculator work with OldCalculator's interface
class CalculatorAdapter {
    constructor() {
        this.newCalculator = new NewCalculator();
    }

    operations(a, b, op) {
        const numbers = [a, b];
        switch (op) {
            case 'add':
                return this.newCalculator.add(numbers);
            case 'sub':
                return this.newCalculator.subtract(numbers);
            default:
                return NaN;
        }
    }
}

// Usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add')); // 15

const adapter = new CalculatorAdapter();
console.log(adapter.operations(10, 5, 'add')); // 15 (using new calculator via adapter)

// You can now use the new calculator directly as well
const newCalc = new NewCalculator();
console.log(newCalc.add([1, 2, 3])); // 6
```

  * **Pros:** Reuses existing code, promotes interoperability between systems with different interfaces, client code remains unchanged.
  * **Cons:** Adds an extra layer of abstraction, which can sometimes increase complexity.
  * **Use Cases:** Integrating legacy APIs with modern ones, normalizing data formats from different sources, creating a common interface for multiple third-party libraries.

### 3.2 Decorator Pattern

  * **Purpose:** Attaches new behaviors or responsibilities to an object dynamically without altering its structure. It's a flexible alternative to subclassing for extending functionality.
  * **JavaScript Implementation:** Wrapping functions or objects with new behavior. ES Decorators (experimental, often used with transpilers like Babel/TypeScript) provide syntactic sugar.

**Example (Functional Decorator):**

```javascript
// Base component
class Coffee {
    cost() {
        return 5;
    }
    description() {
        return "Simple Coffee";
    }
}

// Decorator 1
function Milk(coffee) {
    this.cost = () => coffee.cost() + 1.5;
    this.description = () => coffee.description() + ", Milk";
}

// Decorator 2
function Sugar(coffee) {
    this.cost = () => coffee.cost() + 0.5;
    this.description = () => coffee.description() + ", Sugar";
}

// Decorator 3 (using ES6 class for cleaner composition, mimics component pattern)
class CaramelDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost() + 2;
    }
    description() {
        return this.coffee.description() + ", Caramel";
    }
}

// Usage
let myCoffee = new Coffee();
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`); // Simple Coffee costs $5

myCoffee = new Milk(myCoffee); // Decorate with Milk
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`); // Simple Coffee, Milk costs $6.5

myCoffee = new Sugar(myCoffee); // Decorate with Sugar
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`); // Simple Coffee, Milk, Sugar costs $7

myCoffee = new CaramelDecorator(myCoffee); // Decorate with Caramel (ES6 class style)
console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`); // Simple Coffee, Milk, Sugar, Caramel costs $9
```

  * **Pros:** Flexible alternative to subclassing (avoids "inheritance explosion" for many feature combinations), allows adding/removing responsibilities at runtime, promotes single responsibility principle.
  * **Cons:** Can lead to many small wrapper objects, the order of decorators can sometimes matter, debugging can be slightly more complex due to layers of wrapping.
  * **Use Cases:** Logging, caching, validation, enhancing UI components (e.g., adding scroll behavior or drag-and-drop functionality to a base component), applying filters or transformations to data.

### 3.3 Facade Pattern

  * **Purpose:** Provides a simplified interface to a complex subsystem. It hides the complexities of a system by providing a single, unified interface to a set of interfaces in a subsystem.
  * **JavaScript Implementation:** A single function or object that exposes simplified methods that internally interact with multiple parts of a complex system.

**Example:**

```javascript
// Complex Subsystem Components
class BankService {
    verifyAccount(accountNum) {
        console.log(`BankService: Verifying account ${accountNum}...`);
        return true; // Simulate check
    }
    checkBalance(accountNum) {
        console.log(`BankService: Checking balance for ${accountNum}...`);
        return 1000; // Simulate balance
    }
}

class CreditService {
    checkCreditHistory(accountNum) {
        console.log(`CreditService: Checking credit history for ${accountNum}...`);
        return true; // Simulate good history
    }
}

class LoanService {
    processLoan(accountNum, amount) {
        console.log(`LoanService: Processing loan of $${amount} for ${accountNum}...`);
        return true; // Simulate loan approval
    }
}

// Facade
class LoanApprovalFacade {
    constructor() {
        this.bank = new BankService();
        this.credit = new CreditService();
        this.loan = new LoanService();
    }

    approveLoan(accountNum, amount) {
        console.log(`\nLoanApprovalFacade: Attempting to approve loan for ${accountNum} with amount $${amount}`);
        if (!this.bank.verifyAccount(accountNum)) {
            console.log("LoanApprovalFacade: Account verification failed.");
            return false;
        }
        if (this.bank.checkBalance(accountNum) < amount * 0.1) { // Example rule
            console.log("LoanApprovalFacade: Insufficient balance for loan collateral.");
            return false;
        }
        if (!this.credit.checkCreditHistory(accountNum)) {
            console.log("LoanApprovalFacade: Poor credit history.");
            return false;
        }

        const approved = this.loan.processLoan(accountNum, amount);
        if (approved) {
            console.log("LoanApprovalFacade: Loan Approved!");
        } else {
            console.log("LoanApprovalFacade: Loan Denied.");
        }
        return approved;
    }
}

// Usage
const loanFacade = new LoanApprovalFacade();

loanFacade.approveLoan("12345", 5000);
// Expected output will show all the internal service calls and then "LoanApprovalFacade: Loan Approved!"

loanFacade.approveLoan("67890", 20000); // Simulate large amount causing denial
// Expected output will show internal calls and then "LoanApprovalFacade: Insufficient balance for loan collateral."
```

  * **Pros:** Reduces complexity for clients by hiding subsystem details, decouples client from the subsystem, makes the subsystem easier to use, and promotes better layered architecture.
  * **Cons:** Can hide useful functionality from direct access, might become a "god object" if too much responsibility is given to the facade.
  * **Use Cases:** Simplifying interaction with a complex library (e.g., a graphics library), managing multiple AJAX calls for a single user action, providing a simpler API for a complex backend system.

### 3.4 Proxy Pattern

  * **Purpose:** Provides a surrogate or placeholder for another object to control access to it. This can be used for lazy initialization, access control, logging, or validation.
  * **JavaScript Implementation:** ES6 `Proxy` object is the native and most powerful way to implement this.

**Example (Logging Proxy):**

```javascript
// Real Object
const realUser = {
    name: "Alice",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};

// Proxy handler
const userProxyHandler = {
    get(target, prop, receiver) {
        console.log(`PROXY: Accessing property '${String(prop)}'`);
        return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
        console.log(`PROXY: Setting property '${String(prop)}' to '${value}'`);
        return Reflect.set(target, prop, value, receiver);
    },
    apply(target, thisArg, argumentsList) {
        console.log(`PROXY: Calling function '${target.name}' with arguments: ${argumentsList}`);
        return Reflect.apply(target, thisArg, argumentsList);
    }
};

// Create the proxy
const proxiedUser = new Proxy(realUser, userProxyHandler);

// Usage
console.log(proxiedUser.name); // Logs: PROXY: Accessing property 'name', then "Alice"

proxiedUser.age = 31; // Logs: PROXY: Setting property 'age' to '31'

console.log(proxiedUser.greet()); // Logs: PROXY: Accessing property 'greet', PROXY: Calling function 'greet' with arguments:
                                // then "Hello, my name is Alice."
```

  * **Pros:** Fine-grained control over object access, lazy initialization (virtual proxy), adds functionalities (logging, validation, caching) without modifying the original object, enforces access control.
  * **Cons:** Can add overhead depending on the complexity of the traps, potentially complex to implement custom traps for all desired behaviors.
  * **Use Cases:**
      * **Virtual Proxy:** Lazy loading images or heavy objects.
      * **Logging Proxy:** Intercepting all property access/modification for debugging/auditing.
      * **Validation Proxy:** Validating data before setting properties.
      * **Access Control Proxy:** Limiting access to certain methods or properties based on user roles.
      * **Memoization Proxy:** Caching results of expensive function calls.

-----

## 4\. Behavioral Patterns

These patterns deal with how objects interact and distribute responsibility.

### 4.1 Observer Pattern (Publish-Subscribe)

  * **Purpose:** Defines a one-to-many dependency between objects so that when one object (the "subject" or "publisher") changes state, all its dependents (the "observers" or "subscribers") are notified and updated automatically.
  * **JavaScript Implementation:** Custom event systems, using built-in browser events (`EventTarget`), or specialized libraries.

**Example (Custom Event System):**

```javascript
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
        console.log('Observer subscribed.');
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
        console.log('Observer unsubscribed.');
    }

    fire(data) {
        console.log('Subject: State changed, notifying observers...');
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name}: Received update - ${data}`);
    }
}

// Usage
const newsFeed = new Subject();

const john = new Observer('John');
const jane = new Observer('Jane');
const mark = new Observer('Mark');

newsFeed.subscribe(john);
newsFeed.subscribe(jane);

newsFeed.fire("Breaking News: JavaScript is awesome!");

newsFeed.unsubscribe(jane); // Jane is no longer interested

newsFeed.subscribe(mark); // Mark joins

newsFeed.fire("New Tutorial: Design Patterns in JS!");
```

  * **Pros:** Loose coupling between subject and observer (they don't need to know about each other specifically), highly scalable (easy to add new observers without modifying the subject), supports asynchronous updates.
  * **Cons:** Unpredictable update order (if multiple observers exist), potential for memory leaks if observers are not unsubscribed, debugging can be harder due to indirect communication.
  * **Use Cases:** UI event handling (e.g., button clicks), state changes in applications (e.g., Redux, Vuex), real-time data updates (websockets), any system where objects need to react to changes in other objects.

### 4.2 Strategy Pattern

  * **Purpose:** Defines a family of algorithms, encapsulates each one, and makes them interchangeable. This pattern lets the algorithm vary independently from clients that use it.
  * **JavaScript Implementation:** Functions or objects that implement a common interface (or simply have a consistent method signature). The "context" object takes a "strategy" object and delegates to it.

**Example (Payment Processing):**

```javascript
// Strategy Interfaces (implemented as functions or simple objects)
const PayPalStrategy = {
    pay(amount) {
        console.log(`Paid $${amount} using PayPal.`);
    }
};

const CreditCardStrategy = {
    pay(amount) {
        console.log(`Paid $${amount} using Credit Card.`);
    }
};

const BitcoinStrategy = {
    pay(amount) {
        console.log(`Paid $${amount} using Bitcoin.`);
    }
};

// Context
class ShoppingCart {
    constructor(amount) {
        this.amount = amount;
        this.paymentStrategy = null; // No default strategy
    }

    setPaymentStrategy(strategy) {
        this.paymentStrategy = strategy;
    }

    checkout() {
        if (!this.paymentStrategy) {
            console.log("No payment strategy set. Cannot checkout.");
            return;
        }
        console.log(`Checking out with total amount: $${this.amount}`);
        this.paymentStrategy.pay(this.amount);
    }
}

// Usage
const cart = new ShoppingCart(100);

// Pay with PayPal
cart.setPaymentStrategy(PayPalStrategy);
cart.checkout(); // Paid $100 using PayPal.

// Change strategy to Credit Card
cart.setPaymentStrategy(CreditCardStrategy);
cart.checkout(); // Paid $100 using Credit Card.

// Change strategy to Bitcoin
cart.setPaymentStrategy(BitcoinStrategy);
cart.checkout(); // Paid $100 using Bitcoin.
```

  * **Pros:** Promotes code reuse and modularity, separates algorithms from the context that uses them, easy to add new strategies without modifying the client, allows choosing behavior at runtime.
  * **Cons:** Can add boilerplate for simple cases where only a few strategies are needed.
  * **Use Cases:** Form validation (different validation rules), sorting algorithms (different comparison functions), different pricing models, various data export formats.

### 4.3 Command Pattern

  * **Purpose:** Encapsulates a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.
  * **JavaScript Implementation:** Objects with an `execute` method (and optionally `undo`, `redo` methods).

**Example (Simple Calculator Commands):**

```javascript
class Calculator {
    constructor() {
        this.currentValue = 0;
    }

    add(value) { this.currentValue += value; }
    subtract(value) { this.currentValue -= value; }
    multiply(value) { this.currentValue *= value; }
    divide(value) { this.currentValue /= value; }
}

// Command Interface (conceptual)
// { execute: fn(), undo: fn() }

class AddCommand {
    constructor(calculator, valueToAdd) {
        this.calculator = calculator;
        this.valueToAdd = valueToAdd;
    }
    execute() {
        this.calculator.add(this.valueToAdd);
    }
    undo() {
        this.calculator.subtract(this.valueToAdd);
    }
}

class SubtractCommand {
    constructor(calculator, valueToSubtract) {
        this.calculator = calculator;
        this.valueToSubtract = valueToSubtract;
    }
    execute() {
        this.calculator.subtract(this.valueToSubtract);
    }
    undo() {
        this.calculator.add(this.valueToSubtract);
    }
}

// Invoker (responsible for executing commands)
class CommandManager {
    constructor() {
        this.commands = [];
        this.current = 0;
    }

    executeCommand(command) {
        command.execute();
        // Clear redo history if a new command is executed
        this.commands = this.commands.slice(0, this.current);
        this.commands.push(command);
        this.current++;
        console.log(`Executed: ${command.constructor.name}, Current Value: ${command.calculator.currentValue}`);
    }

    undo() {
        if (this.current > 0) {
            this.current--;
            const command = this.commands[this.current];
            command.undo();
            console.log(`Undo: ${command.constructor.name}, Current Value: ${command.calculator.currentValue}`);
        } else {
            console.log("Nothing to undo.");
        }
    }

    redo() {
        if (this.current < this.commands.length) {
            const command = this.commands[this.current];
            command.execute();
            this.current++;
            console.log(`Redo: ${command.constructor.name}, Current Value: ${command.calculator.currentValue}`);
        } else {
            console.log("Nothing to redo.");
        }
    }
}

// Usage
const calculator = new Calculator();
const manager = new CommandManager();

manager.executeCommand(new AddCommand(calculator, 10)); // Current Value: 10
manager.executeCommand(new MultiplyCommand(calculator, 2)); // Current Value: 20 (assuming MultiplyCommand exists)
manager.executeCommand(new SubtractCommand(calculator, 5)); // Current Value: 15

manager.undo(); // Current Value: 20
manager.undo(); // Current Value: 10
manager.redo(); // Current Value: 20
manager.executeCommand(new AddCommand(calculator, 3)); // Current Value: 23 (Clears Multiply/Subtract redo history)
manager.redo(); // Nothing to redo.
```

  * **Pros:** Decouples the invoker (e.g., button) from the receiver (e.g., calculator), supports undo/redo functionality, allows for command queuing and logging, easy to extend with new commands.
  * **Cons:** Can add complexity for very simple operations that don't require undo/redo or queuing.
  * **Use Cases:** Undo/redo functionality in editors, macro recording, task scheduling, GUI buttons or menu items where the action needs to be parameterized or queued.

### 4.4 Iterator Pattern

  * **Purpose:** Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
  * **JavaScript Implementation:** ES6 introduced the `Symbol.iterator` protocol and generator functions, which are the native ways to implement iterators. `for...of` loops use this protocol.

**Example (Custom Iterable Class):**

```javascript
class MyCollection {
    constructor(...elements) {
        this.elements = elements;
    }

    // Make the class iterable
    [Symbol.iterator]() {
        let index = 0;
        const elements = this.elements; // Capture `this.elements`

        return {
            next() {
                if (index < elements.length) {
                    return { value: elements[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

// Example with a generator function (more concise)
class MyCollectionWithGenerator {
    constructor(...elements) {
        this.elements = elements;
    }

    *[Symbol.iterator]() { // Generator function
        for (let i = 0; i < this.elements.length; i++) {
            yield this.elements[i];
        }
    }
}

// Usage
const collection = new MyCollection(1, 'hello', true);
for (const item of collection) {
    console.log(item); // 1, 'hello', true
}

const genCollection = new MyCollectionWithGenerator('alpha', 'beta', 'gamma');
for (const item of genCollection) {
    console.log(item); // alpha, beta, gamma
}

// Manually using the iterator
const iterator = collection[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 'hello', done: false }
console.log(iterator.next()); // { value: true, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

  * **Pros:** Decouples iteration logic from the collection, supports multiple traversal algorithms, provides a uniform way to traverse different types of collections, hides the internal structure of the collection.
  * **Cons:** Can be overkill for simple arrays (which are natively iterable).
  * **Use Cases:** Custom data structures (e.g., linked lists, trees), creating custom iteration behaviors (e.g., skipping elements), asynchronous iterators (for streaming data).

### 4.5 State Pattern

  * **Purpose:** Allows an object to alter its behavior when its internal state changes. The object appears to change its class.
  * **JavaScript Implementation:** A context object delegates state-dependent behavior to separate state objects. Each state object implements a common interface for handling requests.

**Example (Traffic Light):**

```javascript
// State Interface (conceptual: object with `handleRequest` method)

class GreenLightState {
    handleRequest(trafficLight) {
        console.log("Traffic Light is GREEN. Go!");
        trafficLight.setState(new YellowLightState()); // Change state
    }
}

class YellowLightState {
    handleRequest(trafficLight) {
        console.log("Traffic Light is YELLOW. Prepare to stop.");
        trafficLight.setState(new RedLightState()); // Change state
    }
}

class RedLightState {
    handleRequest(trafficLight) {
        console.log("Traffic Light is RED. Stop!");
        trafficLight.setState(new GreenLightState()); // Change state
    }
}

// Context
class TrafficLight {
    constructor() {
        this.state = new RedLightState(); // Initial state
    }

    setState(state) {
        this.state = state;
    }

    change() {
        this.state.handleRequest(this); // Delegate to current state object
    }
}

// Usage
const light = new TrafficLight();

light.change(); // Traffic Light is RED. Stop! (then state changes to Green)
light.change(); // Traffic Light is GREEN. Go! (then state changes to Yellow)
light.change(); // Traffic Light is YELLOW. Prepare to stop. (then state changes to Red)
light.change(); // Traffic Light is RED. Stop! (then state changes to Green)
```

  * **Pros:** Organizes state-dependent behavior, avoids large conditional statements (`if/else` or `switch`) in the context object, makes it easy to add new states.
  * **Cons:** Can increase the number of objects (one object for each state), which might be overkill for very simple state machines.
  * **Use Cases:** Finite state machines (e.g., user authentication flows, order processing, document workflows, game character states).

-----

## 5\. Common JavaScript-Specific Patterns / Considerations

These are patterns that are particularly relevant or idiomatic in JavaScript.

### 5.1 Module Pattern (and ES Modules)

  * **Purpose:** Encapsulates "private" data and methods and exposes a public interface. It helps in avoiding global namespace pollution.
  * **JavaScript Implementation:** Historically, an Immediately Invoked Function Expression (IIFE) creating a closure. Modern JS primarily uses ES6 Modules (`import`/`export`).

**IIFE Example (Legacy Module Pattern):**

```javascript
const MyModule = (function() {
    let privateVariable = 'I am private'; // Private scope
    function privateMethod() {
        console.log('This is a private method.');
    }

    return { // Public interface
        publicVariable: 'I am public',
        publicMethod: function() {
            console.log('This is a public method.');
            privateMethod();
            console.log(privateVariable);
        }
    };
})();

// Usage
console.log(MyModule.publicVariable); // I am public
MyModule.publicMethod(); // This is a public method. \n This is a private method. \n I am private

// console.log(MyModule.privateVariable); // undefined (cannot access)
// MyModule.privateMethod(); // TypeError: MyModule.privateMethod is not a function
```

**ES Modules Example (Modern Module Pattern):**

`myModule.js`:

```javascript
// Private
let privateCounter = 0;

function incrementPrivate() {
    privateCounter++;
    console.log(`Private counter: ${privateCounter}`);
}

// Public interface
export function publicIncrement() {
    incrementPrivate();
}

export function getPublicCounter() {
    return privateCounter; // Still private, but exposed via getter
}
```

`main.js`:

```javascript
import { publicIncrement, getPublicCounter } from './myModule.js';

publicIncrement(); // Private counter: 1
publicIncrement(); // Private counter: 2
console.log(getPublicCounter()); // 2

// console.log(privateCounter); // ReferenceError: privateCounter is not defined (truly private)
```

  * **Pros:** Encapsulation, avoids global namespace pollution, manages dependencies cleanly (ES Modules).
  * **Cons (IIFE):** Can't dynamically load modules (pre-ES6), no direct private access after creation for testing.
  * **Use Cases:** Organizing code into logical units, creating reusable libraries, managing dependencies in large applications.

### 5.2 Revealing Module Pattern

  * **Purpose:** A variation of the Module Pattern where all methods and variables are defined privately, and only explicitly selected ones are returned in an anonymous object. This makes it clear which parts of the module are public.

**Example:**

```javascript
const ShoppingCartModule = (function() {
    let items = []; // private

    function addItem(item) { // private
        items.push(item);
        console.log(`${item} added to cart.`);
    }

    function removeItem(item) { // private
        items = items.filter(i => i !== item);
        console.log(`${item} removed from cart.`);
    }

    function getItems() { // private
        return [...items]; // Return a copy to prevent external modification
    }

    function getTotalItems() { // private
        return items.length;
    }

    // Revealing part: expose only public methods
    return {
        add: addItem,
        remove: removeItem,
        getCart: getItems,
        count: getTotalItems
    };
})();

// Usage
ShoppingCartModule.add('Laptop'); // Laptop added to cart.
ShoppingCartModule.add('Mouse'); // Mouse added to cart.
console.log(ShoppingCartModule.getCart()); // [ 'Laptop', 'Mouse' ]
console.log(ShoppingCartModule.count()); // 2
ShoppingCartModule.remove('Laptop'); // Laptop removed from cart.
console.log(ShoppingCartModule.getCart()); // [ 'Mouse' ]
```

  * **Pros:** Cleaner syntax for exposing public methods, easier to identify public vs. private members.
  * **Cons:** Similar to basic Module Pattern; if a private method needs to call a public method, it must do so via the public interface (`return` object), which can break encapsulation.

### 5.3 Mixin Pattern

  * **Purpose:** Inject methods into a class or object from a common source, enabling code reuse without resorting to complex inheritance hierarchies. Often used to "add capabilities" to objects.
  * **JavaScript Implementation:** `Object.assign()`, functions that modify an object, or through prototypal inheritance.

**Example (`Object.assign`):**

```javascript
const rechargeable = {
    charge() {
        console.log("Charging...");
        this.battery = 100;
    },
    getBatteryLevel() {
        return this.battery;
    }
};

const connectable = {
    connect(device) {
        console.log(`Connecting to ${device}...`);
        this.connectedDevice = device;
    },
    disconnect() {
        console.log(`Disconnected from ${this.connectedDevice}.`);
        this.connectedDevice = null;
    }
};

class Gadget {
    constructor(name) {
        this.name = name;
        this.battery = 0;
        this.connectedDevice = null;
    }
}

// Mix in behaviors
Object.assign(Gadget.prototype, rechargeable, connectable);

// Usage
const myPhone = new Gadget("Smartphone");
myPhone.charge(); // Charging...
console.log(`Battery: ${myPhone.getBatteryLevel()}%`); // Battery: 100%

myPhone.connect("Bluetooth Speaker"); // Connecting to Bluetooth Speaker...
myPhone.disconnect(); // Disconnected from Bluetooth Speaker.

// Mixin into an existing object instance
const myDrone = { model: "Quadcopter" };
Object.assign(myDrone, rechargeable); // Only 'rechargeable' behavior for this instance
myDrone.charge();
```

  * **Pros:** Promotes code reuse horizontally, avoids deep inheritance hierarchies ("inheritance explosion"), adds behavior dynamically to objects.
  * **Cons:** Can lead to naming collisions if mixins have methods with the same name, the source of a method can be less clear compared to traditional inheritance.

### 5.4 Dependency Injection (DI)

  * **Purpose:** Provide dependencies to an object rather than having the object create them itself. This makes components more modular, testable, and reusable by decoupling them from their dependencies.
  * **JavaScript Implementation:** Often implemented via constructor injection or setter injection, especially in frameworks.

**Example (Constructor Injection):**

```javascript
// Dependency
class LoggerService {
    log(message) {
        console.log(`[Logger]: ${message}`);
    }
}

// Class that depends on LoggerService
class UserService {
    constructor(logger) { // Dependency Injected via constructor
        this.logger = logger;
    }

    createUser(name) {
        // ... business logic ...
        this.logger.log(`User '${name}' created.`);
        return { id: Math.random().toString(36).substring(7), name };
    }

    deleteUser(id) {
        // ... business logic ...
        this.logger.log(`User with ID '${id}' deleted.`);
    }
}

// Usage
const logger = new LoggerService(); // Create dependency
const userService = new UserService(logger); // Inject dependency

const newUser = userService.createUser("Alice");
userService.deleteUser(newUser.id);

// For testing, you can inject a mock logger
class MockLoggerService {
    log(message) {
        console.log(`[MOCK LOG]: ${message}`);
        // In a real test, you'd assert that 'log' was called with expected message
    }
}

const mockLogger = new MockLoggerService();
const testUserService = new UserService(mockLogger);
testUserService.createUser("TestUser"); // Logs: [MOCK LOG]: User 'TestUser' created.
```

  * **Pros:** Improves testability (easy to swap dependencies with mocks/stubs), promotes loose coupling, enhances maintainability and modularity, facilitates configuration management.
  * **Cons:** Can add some configuration overhead (especially in smaller projects), requires a bit more boilerplate.
  * **Use Cases:** Highly testable applications, managing complex configurations, large-scale enterprise applications (often facilitated by frameworks like Angular, NestJS).

-----

## 6\. Design Patterns in Modern JavaScript Frameworks/Libraries

Many popular JS frameworks and libraries inherently use or facilitate various design patterns:

  * **React:**

      * **Component Pattern:** React components are a prime example of the Composite pattern, forming tree structures.
      * **Observer Pattern:** React's state management (e.g., `useState`, `useReducer`, or external libraries like Redux) often uses the Observer pattern to re-render components when state changes.
      * **Singleton/DI:** Context API can be seen as a form of dependency injection or providing a singleton-like global store.
      * **Higher-Order Components (HOCs) / Render Props:** Can be seen as variations of the Decorator pattern or Strategy pattern, for reusable logic.
      * **Hooks:** While not a direct pattern, hooks often encapsulate behavioral logic in a reusable way, similar to aspects of the Strategy or Decorator patterns, but with a different implementation mechanism.

  * **Vue.js:**

      * **Component Pattern:** Similar to React, Vue components leverage the Composite pattern.
      * **Observer Pattern:** Vue's reactivity system is built on the Observer pattern, automatically tracking dependencies and updating components.
      * **Vuex (State Management):** Acts as a centralized store, often implemented as a Singleton and utilizing the Observer pattern for updates.

  * **Angular:**

      * **Module Pattern:** Angular's NgModule system organizes code into logical modules.
      * **Dependency Injection:** A core concept in Angular, making extensive use of DI to provide services and other dependencies to components.
      * **Decorator Pattern:** Widely used via TypeScript decorators (e.g., `@Component`, `@Injectable`, `@Directive`) to add metadata and behavior.
      * **Singleton:** Services are often singletons by default within a particular injector scope.

  * **Node.js:**

      * **Observer Pattern:** The `EventEmitter` class is a fundamental part of Node.js for handling asynchronous events.
      * **Module Pattern:** Native ES Modules and CommonJS modules are used for encapsulation and organization.

-----

## 7\. Anti-Patterns in JavaScript

While design patterns are good practices, it's also important to be aware of anti-patterns, which are common but ineffective or counterproductive solutions to problems.

  * **Global Variables/Functions:** Polluting the global namespace, leading to naming collisions and hard-to-track dependencies. The Module Pattern is a solution.
  * **Callback Hell (Pyramid of Doom):** Deeply nested callbacks in asynchronous code, making it unreadable and unmaintainable. Modern solutions include Promises, Async/Await.
  * **God Object/Monolith:** A single object or class that knows or does too much, violating the Single Responsibility Principle. Leads to tight coupling and difficulty in maintenance. Facade, Strategy, and Command patterns can help distribute responsibilities.
  * **Large Constructors:** Constructors with too many parameters, making objects hard to instantiate and understand. The Builder Pattern can help here.
  * **Magic Strings/Numbers:** Using hardcoded string or number literals instead of constants, making code less readable and prone to errors.

-----

## 8\. Common Interview Questions & Scenarios

1.  **When would you use a Singleton pattern? What are its drawbacks, and how might you mitigate them?**

      * *Use:* Global state (Logger, Config), resource management (DB connection pool).
      * *Drawbacks:* Global state (hard to test, hidden dependencies), tight coupling.
      * *Mitigation:* Use Dependency Injection instead, limit its use, ensure immutability where possible, make its existence transparent.

2.  **Explain the difference between Factory Method and Builder patterns.**

      * *Factory:* Focuses on *what* object to create, based on a type or condition. Returns a fully initialized object in one step.
      * *Builder:* Focuses on *how* to construct a complex object step-by-step, allowing for different configurations of the *same* type of object.

3.  **How does the Decorator pattern differ from inheritance for extending functionality?**

      * *Decorator:* Adds responsibilities *dynamically* to an object by wrapping it. Favors composition over inheritance. Flexible, avoids "inheritance explosion."
      * *Inheritance:* Extends functionality *statically* at compile time. Creates a rigid hierarchy. Can lead to "inheritance explosion" if many features need to be combined.

4.  **Implement a simple Observer pattern in JavaScript.** (Refer to Section 4.1 example).

5.  **When is the Facade pattern useful, and what problem does it solve?**

      * *Useful when:* Dealing with complex subsystems or third-party libraries.
      * *Problem solved:* Reduces complexity for the client, provides a simplified interface, decouples the client from the underlying complex system.

6.  **How do modern JS frameworks (e.g., React, Angular, Vue) leverage design patterns? Provide specific examples.**

      * (Refer to Section 6 for detailed examples for each framework).

7.  **Discuss a real-world scenario where you used a specific design pattern to solve a problem. Explain the problem, the pattern chosen, and its benefits.**

      * *Example Scenario:* Building a payment gateway integration.
      * *Pattern:* Strategy Pattern.
      * *Problem:* Need to support various payment methods (Credit Card, PayPal, Crypto), each with different logic, but the checkout process should remain consistent.
      * *Solution:* Define a `PaymentStrategy` interface. Create concrete strategy objects (e.g., `CreditCardStrategy`, `PayPalStrategy`) with a `processPayment` method. The `CheckoutService` (Context) takes a `PaymentStrategy` instance and delegates payment processing to it.
      * *Benefits:* Easy to add new payment methods without modifying `CheckoutService`, clean separation of payment logic, runtime flexibility to switch payment methods.

8.  **What's the Module pattern (IIFE and ES Modules), and why is it important in JavaScript development?**

      * (Refer to Section 5.1). Important for encapsulation, avoiding global scope pollution, and dependency management.

9.  **What are some JavaScript anti-patterns you try to avoid, and why?**

      * (Refer to Section 7). Focus on maintainability, testability, and avoiding common pitfalls.

10. **Explain the purpose of the `Proxy` object in ES6 concerning design patterns.**

      * (Refer to Section 3.4). It directly implements the Proxy pattern, allowing intercepting and customizing fundamental operations (e.g., property lookup, assignment, function invocation).

-----