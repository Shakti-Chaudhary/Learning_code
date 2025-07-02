
-----

# C\# Interview Preparation Guide: Core Concepts & In-Depth Examples

This guide covers fundamental C\# programming concepts and essential Object-Oriented Programming (OOP) principles, along with key language features. It's designed to provide a solid foundation for your C\# interviews.

-----

## 1\. Fundamentals: Syntax and Basic Building Blocks

### 1.1 Program Structure

Every C\# application starts with a `Main` method.

```csharp
using System; // Imports the System namespace for Console, etc.

namespace MyFirstApp // Organizes code to prevent naming conflicts
{
    class Program // A class is a blueprint for objects
    {
        static void Main(string[] args) // Entry point of the application
        {
            Console.WriteLine("Hello, C#!"); // Prints text to the console
        }
    }
}
```

### 1.2 Variables and Data Types

Variables store data. C\# is a strongly-typed language, meaning you must declare the type of data a variable will hold.

  * **Value Types:** Store their data directly (e.g., `int`, `double`, `bool`, `char`, `struct`).
  * **Reference Types:** Store a reference to their data (e.g., `string`, `object`, `class`, `interface`, `delegate`, `array`).

<!-- end list -->

```csharp
// Value Types
int age = 30;               // Integer (whole numbers)
double temperature = 25.5;  // Double-precision floating-point number
char initial = 'J';         // Single character
bool isActive = true;       // Boolean (true/false)
decimal salary = 75000.50m; // Decimal for financial calculations (m suffix)

// Reference Types
string firstName = "Alice"; // Sequence of characters
object anyType = 123;       // Can hold any type, but requires casting
object anotherAnyType = "Hello";

// Implicitly Typed Local Variables (type inferred by compiler)
var quantity = 100;         // Inferred as int
var message = "Welcome";    // Inferred as string
// Note: 'var' can only be used for local variables and must be initialized.
```

### 1.3 Constants

Use the `const` keyword for values that cannot change after compilation.

```csharp
const double PI = 3.14159;
const string APP_NAME = "My Application";
// PI = 3.14; // Error: Cannot assign to 'PI' because it is a constant
```

### 1.4 Type Conversion (Casting)

  * **Implicit Conversion:** Automatic, safe conversion (e.g., `int` to `double`).
  * **Explicit Conversion (Casting):** Requires a cast operator `()` for potentially unsafe conversions (e.g., `double` to `int` - data loss).

<!-- end list -->

```csharp
// Implicit Conversion
int intVal = 10;
double doubleVal = intVal; // intVal (10) is implicitly converted to doubleVal (10.0)

// Explicit Conversion (Casting)
double largeDouble = 10.99;
int castInt = (int)largeDouble; // castInt will be 10 (data loss)

// String to Number (using Parse or TryParse)
string strNum = "123";
int parsedInt = int.Parse(strNum); // Throws exception if invalid format

string strNumSafe = "abc";
int safeParsedInt;
bool success = int.TryParse(strNumSafe, out safeParsedInt); // Returns true/false, no exception
if (success)
{
    Console.WriteLine($"Successfully parsed: {safeParsedInt}");
}
else
{
    Console.WriteLine("Failed to parse string to int.");
}
```

### 1.5 Operators

  * **Arithmetic:** `+`, `-`, `*`, `/`, `%` (modulus)
  * **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`
  * **Comparison:** `==` (equal to), `!=` (not equal to), `<`, `>`, `<=`, `>=`
  * **Logical:** `&&` (AND), `||` (OR), `!` (NOT)
  * **Increment/Decrement:** `++`, `--` (pre- and post-increment/decrement)

<!-- end list -->

```csharp
int a = 10, b = 3;
Console.WriteLine($"a + b = {a + b}"); // 13
Console.WriteLine($"a / b = {a / b}"); // 3 (integer division)
Console.WriteLine($"a % b = {a % b}"); // 1

bool isAdult = (age >= 18); // Comparison
bool canVote = isAdult && (age < 70); // Logical AND

a++; // a becomes 11
b--; // b becomes 2
```

### 1.6 Console Input/Output

```csharp
Console.Write("Enter your name: "); // No newline at the end
string userName = Console.ReadLine(); // Reads a line of input
Console.WriteLine($"Hello, {userName}!"); // Prints with a newline
```

-----

## 2\. Control Flow Statements

### 2.1 Conditional Statements

**`if-else if-else`**: Executes code blocks based on conditions.

```csharp
int temperatureReading = 28;
if (temperatureReading < 0)
{
    Console.WriteLine("Freezing!");
}
else if (temperatureReading >= 0 && temperatureReading < 10)
{
    Console.WriteLine("Very Cold.");
}
else if (temperatureReading >= 10 && temperatureReading < 20)
{
    Console.WriteLine("Cool.");
}
else // Default block if no other condition is met
{
    Console.WriteLine("Warm or Hot!");
}
```

**`switch` Statement**: For multiple choices based on a single expression.

```csharp
string dayOfWeek = "Wednesday";
switch (dayOfWeek)
{
    case "Monday":
    case "Tuesday": // Fall-through for multiple cases
        Console.WriteLine("Workday start.");
        break; // Exits the switch
    case "Wednesday":
        Console.WriteLine("Midweek hump.");
        goto case "Thursday"; // Jump to another case (use sparingly)
    case "Thursday":
        Console.WriteLine("Almost Friday!");
        break;
    case "Friday":
        Console.WriteLine("Weekend is near!");
        break;
    default: // Executed if no case matches
        Console.WriteLine("Weekend!");
        break;
}

// C# 8.0+ Switch Expressions (more concise for returning values)
var season = temperatureReading switch
{
    < 0 => "Winter",
    >= 0 and < 15 => "Spring",
    >= 15 and < 25 => "Autumn",
    _ => "Summer" // '_' is the discard pattern for default
};
Console.WriteLine($"Based on temperature: {season}");
```

### 2.2 Loops

**`for` Loop**: Repeats a block of code a specified number of times.

```csharp
for (int i = 0; i < 5; i++) // Initialization; Condition; Iterator
{
    Console.WriteLine($"For loop iteration: {i}");
}
```

**`while` Loop**: Repeats a block of code as long as a condition is true.

```csharp
int countdown = 3;
while (countdown > 0)
{
    Console.WriteLine($"Countdown: {countdown}");
    countdown--;
}
```

**`do-while` Loop**: Executes the block at least once, then repeats as long as the condition is true.

```csharp
int inputNum;
do
{
    Console.Write("Enter a number greater than 5: ");
    int.TryParse(Console.ReadLine(), out inputNum);
} while (inputNum <= 5);
Console.WriteLine($"You entered: {inputNum}");
```

**`foreach` Loop**: Iterates over elements in a collection (arrays, lists, etc.).

```csharp
string[] colors = { "Red", "Green", "Blue" };
foreach (string color in colors)
{
    Console.WriteLine($"Color: {color}");
}
```

### 2.3 Loop Control Statements

  * **`break`**: Exits the innermost loop.
  * **`continue`**: Skips the rest of the current iteration and moves to the next.

<!-- end list -->

```csharp
for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        break; // Loop stops when i is 5
    }
    Console.WriteLine($"Break example: {i}");
}
Console.WriteLine("Loop broken.");

for (int i = 1; i <= 5; i++)
{
    if (i == 3)
    {
        continue; // Skips iteration when i is 3
    }
    Console.WriteLine($"Continue example: {i}");
}
```

-----

## 3\. Methods (Functions)

Methods are blocks of code that perform a specific task. They promote code reusability.

### 3.1 Defining and Calling Methods

```csharp
public class Calculator
{
    // Method with no parameters and no return value (void)
    public void DisplayWelcomeMessage()
    {
        Console.WriteLine("Welcome to the Calculator!");
    }

    // Method with parameters and a return value
    public int Add(int num1, int num2)
    {
        int sum = num1 + num2;
        return sum; // Returns the result
    }

    // Method with optional parameters (C# 4.0+)
    public void GreetUser(string name, string greeting = "Hello")
    {
        Console.WriteLine($"{greeting}, {name}!");
    }
}

// Calling methods
Calculator calc = new Calculator();
calc.DisplayWelcomeMessage(); // Call void method

int result = calc.Add(10, 20); // Call method with return value
Console.WriteLine($"Sum: {result}"); // Output: Sum: 30

calc.GreetUser("Alice");           // Uses default greeting "Hello"
calc.GreetUser("Bob", "Good Morning"); // Overrides default greeting
```

### 3.2 Method Overloading

Having multiple methods in the same class with the same name but different parameter lists (different number, type, or order of parameters).

```csharp
public class AreaCalculator
{
    // Overload 1: Area of a rectangle
    public double CalculateArea(double length, double width)
    {
        return length * width;
    }

    // Overload 2: Area of a circle
    public double CalculateArea(double radius)
    {
        return Math.PI * radius * radius;
    }
}

AreaCalculator areaCalc = new AreaCalculator();
double rectArea = areaCalc.CalculateArea(5.0, 4.0); // Calls rectangle overload
double circleArea = areaCalc.CalculateArea(3.0);   // Calls circle overload
```

### 3.3 `ref`, `out`, and `in` Parameters

  * **`ref`**: Passes argument by reference. Variable **must be initialized** before passing. Changes made inside the method affect the original variable.
  * **`out`**: Passes argument by reference. Variable **does not need to be initialized** before passing. Must be assigned a value inside the method.
  * **`in` (C\# 7.2+)**: Passes argument by reference, but the method **cannot modify** the value of the parameter. Useful for passing large structs efficiently without copying.

<!-- end list -->

```csharp
public class ParameterExamples
{
    public void IncrementRef(ref int value)
    {
        value++; // Modifies the original variable
    }

    public void GetCoordinates(out int x, out int y)
    {
        x = 10; // Must assign values
        y = 20;
    }

    public void PrintValue(in int value) // Cannot modify 'value' here
    {
        Console.WriteLine($"In parameter value: {value}");
        // value++; // Error: Cannot assign to 'value' because it is a 'in' parameter
    }
}

ParameterExamples pe = new ParameterExamples();

int num = 5;
pe.IncrementRef(ref num); // num is now 6

int coordX, coordY;
pe.GetCoordinates(out coordX, out coordY); // coordX = 10, coordY = 20

int readonlyVal = 100;
pe.PrintValue(readonlyVal);
```

### 3.4 `params` Keyword

Allows a method to accept a variable number of arguments of the same type.

```csharp
public double CalculateAverage(params double[] numbers)
{
    if (numbers == null || numbers.Length == 0)
    {
        return 0;
    }
    double sum = 0;
    foreach (double num in numbers)
    {
        sum += num;
    }
    return sum / numbers.Length;
}

double avg1 = CalculateAverage(10, 20, 30);       // Passes 3 arguments
double avg2 = CalculateAverage(5.5, 6.0, 7.5, 8.0); // Passes 4 arguments
double avg3 = CalculateAverage();                  // Passes no arguments
```

-----

## 4\. Object-Oriented Programming (OOP) in C\#

C\# is a powerful OOP language. Understanding these concepts is fundamental.

### 4.1 Classes and Objects

  * **Class:** A blueprint or template for creating objects. It defines the properties (data) and methods (behaviors) that objects of that class will have.
  * **Object:** An instance of a class. When you create an object, you are allocating memory for it based on the class's blueprint.

<!-- end list -->

```csharp
// Class Definition
public class Employee
{
    // Properties (Data members) - often auto-implemented
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Salary { get; private set; } // Settable only within the class

    // Constructor: Special method called when an object is created.
    // Initializes the object's state. Can be overloaded.
    public Employee(int id, string name, decimal salary)
    {
        Id = id;
        Name = name;
        Salary = salary;
        Console.WriteLine($"Employee {Name} created.");
    }

    // Method (Behavior)
    public void DisplayEmployeeInfo()
    {
        Console.WriteLine($"ID: {Id}, Name: {Name}, Salary: {Salary:C}");
    }

    // Overloaded method (different signature)
    public void Promote(decimal raiseAmount)
    {
        Salary += raiseAmount;
        Console.WriteLine($"{Name} promoted. New Salary: {Salary:C}");
    }
}

// Creating Objects (Instantiation)
Employee emp1 = new Employee(101, "John Doe", 50000); // Calls constructor
Employee emp2 = new Employee(102, "Jane Smith", 60000);

// Accessing properties and calling methods
emp1.DisplayEmployeeInfo(); // Output: ID: 101, Name: John Doe, Salary: $50,000.00
emp1.Promote(5000);         // Output: John Doe promoted. New Salary: $55,000.00
```

### 4.2 Encapsulation

The bundling of data (properties) and methods (behaviors) that operate on the data into a single unit (a class). It also involves restricting direct access to some of an object's components, typically by making properties `private` and exposing them through `public` methods or properties (get/set accessors).

**Benefits:**

  * **Data Hiding:** Protects internal state from unauthorized access.
  * **Control:** Allows validation logic when setting properties.
  * **Flexibility:** Internal implementation can change without affecting external code.

<!-- end list -->

```csharp
public class BankAccount
{
    // Private field for internal data
    private decimal _balance;

    // Public property with get/set accessors for controlled access
    public string AccountNumber { get; private set; } // Set only via constructor

    // Constructor
    public BankAccount(string accountNumber, decimal initialBalance)
    {
        AccountNumber = accountNumber;
        _balance = initialBalance;
    }

    // Public method for controlled deposit
    public void Deposit(decimal amount)
    {
        if (amount > 0)
        {
            _balance += amount;
            Console.WriteLine($"Deposited {amount:C}. New balance: {_balance:C}");
        }
        else
        {
            Console.WriteLine("Deposit amount must be positive.");
        }
    }

    // Public method for controlled withdrawal
    public void Withdraw(decimal amount)
    {
        if (amount > 0 && _balance >= amount)
        {
            _balance -= amount;
            Console.WriteLine($"Withdrew {amount:C}. New balance: {_balance:C}");
        }
        else
        {
            Console.WriteLine("Invalid withdrawal amount or insufficient funds.");
        }
    }

    // Public method to expose balance (read-only)
    public decimal GetBalance()
    {
        return _balance;
    }
}

BankAccount myAccount = new BankAccount("12345", 1000);
myAccount.Deposit(500);
myAccount.Withdraw(200);
// myAccount._balance = 0; // Error: _balance is private
// myAccount.AccountNumber = "67890"; // Error: AccountNumber set is private
```

### 4.3 Inheritance

The mechanism by which one class acquires the properties and methods of another class.

  * **Base Class (Parent Class):** The class being inherited from.
  * **Derived Class (Child Class):** The class that inherits from the base class.
  * Uses the `:` operator. C\# supports **single inheritance** for classes.

<!-- end list -->

```csharp
// Base Class
public class Vehicle
{
    public string Brand { get; set; }
    public int Year { get; set; }

    public Vehicle(string brand, int year)
    {
        Brand = brand;
        Year = year;
        Console.WriteLine($"{Brand} vehicle created.");
    }

    public void Start()
    {
        Console.WriteLine($"{Brand} vehicle started.");
    }

    public void Stop()
    {
        Console.WriteLine($"{Brand} vehicle stopped.");
    }
}

// Derived Class (Car inherits from Vehicle)
public class Car : Vehicle
{
    public int NumberOfDoors { get; set; }

    // Constructor: Use 'base()' to call the base class constructor
    public Car(string brand, int year, int numberOfDoors) : base(brand, year)
    {
        NumberOfDoors = numberOfDoors;
        Console.WriteLine($"Car with {NumberOfDoors} doors created.");
    }

    // New method specific to Car
    public void Honk()
    {
        Console.WriteLine("Honk! Honk!");
    }
}

// Derived Class (Motorcycle inherits from Vehicle)
public class Motorcycle : Vehicle
{
    public bool HasSideCar { get; set; }

    public Motorcycle(string brand, int year, bool hasSideCar) : base(brand, year)
    {
        HasSideCar = hasSideCar;
    }

    // New method specific to Motorcycle
    public void Wheelie()
    {
        Console.WriteLine("Motorcycle doing a wheelie!");
    }
}

Car myCar = new Car("Honda", 2020, 4);
myCar.Start();     // Inherited method
myCar.Honk();      // Specific method
Console.WriteLine($"My car is a {myCar.Brand} from {myCar.Year}.");

Motorcycle myBike = new Motorcycle("Harley-Davidson", 2023, false);
myBike.Stop();     // Inherited method
myBike.Wheelie();  // Specific method
```

### 4.4 Polymorphism

The ability of objects of different classes to respond to the same method call in different ways. Achieved through:

  * **Method Overriding:** A derived class provides a specific implementation for a method that is already defined in its base class.
      * Base class method must be `virtual`.
      * Derived class method must use `override`.
  * **Method Overloading:** (Covered in Section 3.2)
  * **Interfaces:** (Covered in Section 4.6)

<!-- end list -->

```csharp
public class Animal
{
    public string Name { get; set; }

    public Animal(string name) { Name = name; }

    // Virtual method: can be overridden by derived classes
    public virtual void MakeSound()
    {
        Console.WriteLine($"{Name} makes a generic sound.");
    }
}

public class Dog : Animal
{
    public Dog(string name) : base(name) { }

    // Override the MakeSound method
    public override void MakeSound()
    {
        Console.WriteLine($"{Name} barks!");
    }
}

public class Cat : Animal
{
    public Cat(string name) : base(name) { }

    // Override the MakeSound method
    public override void MakeSound()
    {
        Console.WriteLine($"{Name} meows!");
    }
}

Animal animal1 = new Animal("Generic Animal");
Animal animal2 = new Dog("Buddy"); // Polymorphism: Dog object referenced as Animal
Animal animal3 = new Cat("Whiskers"); // Polymorphism: Cat object referenced as Animal

animal1.MakeSound(); // Output: Generic Animal makes a generic sound.
animal2.MakeSound(); // Output: Buddy barks! (Runtime polymorphism)
animal3.MakeSound(); // Output: Whiskers meows! (Runtime polymorphism)
```

### 4.5 Abstraction

Hiding the complex implementation details and showing only the essential features of an object. Achieved using:

  * **Abstract Classes:**
      * Cannot be instantiated directly.
      * Can contain both abstract (no body, must be overridden by derived classes) and non-abstract (concrete) methods.
      * Can have constructors (called by derived classes).
      * Can contain fields, properties, and events.
      * A class can inherit from only *one* abstract class.

<!-- end list -->

```csharp
// Abstract Class
public abstract class PaymentProcessor
{
    public string TransactionId { get; private set; }

    public PaymentProcessor()
    {
        TransactionId = Guid.NewGuid().ToString(); // Generate unique ID
    }

    // Abstract method: must be implemented by derived classes
    public abstract bool ProcessPayment(decimal amount);

    // Non-abstract method: provides common implementation
    public void LogTransaction(decimal amount, bool success)
    {
        Console.WriteLine($"Transaction {TransactionId} for {amount:C} - {(success ? "SUCCESS" : "FAILED")}");
    }
}

// Concrete implementation of an abstract class
public class CreditCardProcessor : PaymentProcessor
{
    public override bool ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing credit card payment of {amount:C}");
        // Simulate payment gateway logic
        if (amount > 0 && amount < 1000)
        {
            LogTransaction(amount, true);
            return true;
        }
        LogTransaction(amount, false);
        return false;
    }
}

public class PayPalProcessor : PaymentProcessor
{
    public override bool ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing PayPal payment of {amount:C}");
        // Simulate payment gateway logic
        if (amount > 0 && amount < 500)
        {
            LogTransaction(amount, true);
            return true;
        }
        LogTransaction(amount, false);
        return false;
    }
}

// Cannot instantiate abstract class directly: PaymentProcessor processor = new PaymentProcessor(); // Error

PaymentProcessor ccProcessor = new CreditCardProcessor();
ccProcessor.ProcessPayment(250);
ccProcessor.ProcessPayment(1500);

PaymentProcessor ppProcessor = new PayPalProcessor();
ppProcessor.ProcessPayment(100);
```

### 4.6 Interfaces

  * A contract that defines a set of methods, properties, events, or indexers that a class or struct must implement.
  * Contains only method signatures, not implementations (until C\# 8.0, which allows default implementations).
  * A class can implement multiple interfaces (achieves multiple inheritance of *behavior*).
  * Names typically start with `I` (e.g., `IEnumerable`, `IDisposable`).

<!-- end list -->

```csharp
// Interface Definition
public interface ISaveable
{
    void Save();
    void Load(int id);
    bool IsDirty { get; set; } // Interface can have properties
}

public interface IPrintable
{
    void Print();
}

// Class implementing multiple interfaces
public class Document : ISaveable, IPrintable
{
    public int DocumentId { get; set; }
    public string Content { get; set; }
    public bool IsDirty { get; set; }

    public Document(int id, string content)
    {
        DocumentId = id;
        Content = content;
        IsDirty = false;
    }

    public void Save()
    {
        Console.WriteLine($"Document {DocumentId} saved to database.");
        IsDirty = false;
    }

    public void Load(int id)
    {
        DocumentId = id;
        Content = $"Loaded content for document {id}";
        Console.WriteLine($"Document {DocumentId} loaded.");
        IsDirty = true;
    }

    public void Print()
    {
        Console.WriteLine($"Printing Document {DocumentId}:\n{Content}");
    }
}

Document myDoc = new Document(1, "This is some sample content.");
myDoc.Save();
myDoc.Load(2);
myDoc.Print();

ISaveable saveableItem = myDoc; // Can be referenced by its interface type
saveableItem.Save();
// saveableItem.Print(); // Error: IPrintable methods not accessible via ISaveable reference
```

**Key Differences: Abstract Class vs. Interface**

| Feature              | Abstract Class                                                                                | Interface                                                                                                    |
| :------------------- | :-------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **Instantiation**    | Cannot be instantiated directly.                                                              | Cannot be instantiated directly.                                                                             |
| **Inheritance**      | Class can inherit only one abstract class.                                                    | Class can implement multiple interfaces.                                                                     |
| **Members**          | Can have abstract & non-abstract methods, fields, constructors, properties, events.           | Can have only abstract members (until C\# 8, then default implementations). No fields or constructors.       |
| **Access Modifiers** | Can have various access modifiers.                                                            | All members are implicitly public.                                                                           |
| **Purpose**          | Defines "is-a" relationship (e.g., `Dog` IS-A `Animal`). Represents a partial implementation. | Defines "can-do" relationship (e.g., `Document` CAN-DO `Save`, `Print`). Represents a contract for behavior. |

-----

## 5\. Collections

Collections are classes that allow you to manage groups of objects.

### 5.1 `Array`

Fixed-size, strongly-typed collections.

```csharp
// Declaration and Initialization
int[] numbers = new int[5]; // Array of 5 integers, initialized to 0s
string[] names = { "Alice", "Bob", "Charlie" }; // Array of strings

// Accessing elements (0-indexed)
numbers[0] = 10;
Console.WriteLine($"First name: {names[0]}");

// Iterating
for (int i = 0; i < names.Length; i++)
{
    Console.WriteLine($"Name at index {i}: {names[i]}");
}
foreach (string name in names)
{
    Console.WriteLine($"Name: {name}");
}
```

### 5.2 `List<T>` (Generic List)

Dynamically sized, strongly-typed collection. Part of `System.Collections.Generic`. Highly flexible and commonly used.

```csharp
List<string> fruits = new List<string>(); // Empty list
fruits.Add("Apple");
fruits.Add("Banana");
fruits.Add("Cherry");
fruits.Insert(1, "Orange"); // Insert at specific index

Console.WriteLine($"Number of fruits: {fruits.Count}"); // Count of elements

foreach (string fruit in fruits)
{
    Console.WriteLine($"Fruit: {fruit}");
}

fruits.Remove("Banana");       // Removes first occurrence
fruits.RemoveAt(0);            // Removes by index (Orange)

Console.WriteLine($"Does list contain Apple? {fruits.Contains("Apple")}"); // false
```

### 5.3 `Dictionary<TKey, TValue>` (Generic Dictionary)

Stores key-value pairs, where each key is unique. Part of `System.Collections.Generic`.

```csharp
Dictionary<string, int> studentScores = new Dictionary<string, int>();
studentScores.Add("Alice", 95);
studentScores["Bob"] = 88; // Add or update
studentScores["Charlie"] = 72;

Console.WriteLine($"Bob's score: {studentScores["Bob"]}");

// Check if key exists
if (studentScores.ContainsKey("David"))
{
    Console.WriteLine("David's score exists.");
}
else
{
    Console.WriteLine("David's score not found.");
}

// Iterating through key-value pairs
foreach (KeyValuePair<string, int> entry in studentScores)
{
    Console.WriteLine($"Student: {entry.Key}, Score: {entry.Value}");
}

// Or iterate through keys/values separately
foreach (string studentName in studentScores.Keys) { /* ... */ }
foreach (int score in studentScores.Values) { /* ... */ }
```

### 5.4 Other Common Collections

  * **`HashSet<T>`**: Stores unique elements, highly optimized for `Add`, `Remove`, `Contains` operations.
  * **`Queue<T>`**: FIFO (First-In, First-Out) collection. (`Enqueue`, `Dequeue`, `Peek`).
  * **`Stack<T>`**: LIFO (Last-In, First-Out) collection. (`Push`, `Pop`, `Peek`).

-----

## 6\. Exception Handling

Mechanism to deal with runtime errors gracefully, preventing application crashes.

```csharp
public class ExceptionDemo
{
    public void Divide(int numerator, int denominator)
    {
        try // Code that might throw an exception
        {
            if (denominator == 0)
            {
                throw new DivideByZeroException("Denominator cannot be zero!"); // Manually throw
            }
            int result = numerator / denominator;
            Console.WriteLine($"Division result: {result}");
        }
        catch (DivideByZeroException ex) // Catches a specific type of exception
        {
            Console.WriteLine($"Math Error: {ex.Message}");
            // Log the exception details for debugging
            // Console.WriteLine(ex.StackTrace);
        }
        catch (FormatException ex) // Catches another specific type
        {
            Console.WriteLine($"Input Format Error: {ex.Message}");
        }
        catch (Exception ex) // Catches any other exception (should be general catch-all at the end)
        {
            Console.WriteLine($"An unexpected error occurred: {ex.Message}");
        }
        finally // This block always executes, regardless of whether an exception occurred
        {
            Console.WriteLine("Division attempt finished.");
        }
    }

    public void HandleArrayIndex()
    {
        int[] numbers = { 10, 20, 30 };
        try
        {
            Console.WriteLine(numbers[5]); // This will cause an IndexOutOfRangeException
        }
        catch (IndexOutOfRangeException ex)
        {
            Console.WriteLine($"Array Error: {ex.Message}");
        }
    }
}

ExceptionDemo demo = new ExceptionDemo();
demo.Divide(10, 2);
demo.Divide(10, 0);
demo.Divide(10, int.Parse("abc")); // Simulates FormatException
demo.HandleArrayIndex();
```

-----

## 7\. LINQ (Language Integrated Query)

A powerful set of technologies that provide query capabilities to C\# (and other .NET languages). Allows querying various data sources (collections, databases, XML, etc.) using a consistent syntax.

### 7.1 LINQ to Objects (Using with Collections)

```csharp
List<string> fruits = new List<string> { "Apple", "Banana", "Cherry", "Date", "Elderberry" };

// Query Syntax (similar to SQL)
var shortFruits = from fruit in fruits
                  where fruit.Length < 6
                  orderby fruit
                  select fruit;

Console.WriteLine("Short fruits (Query Syntax):");
foreach (var fruit in shortFruits)
{
    Console.WriteLine(fruit); // Apple, Date
}

// Method Syntax (using extension methods and lambda expressions)
var longFruits = fruits.Where(f => f.Length > 6)
                       .OrderByDescending(f => f)
                       .Select(f => f.ToUpper());

Console.WriteLine("\nLong fruits (Method Syntax):");
foreach (var fruit in longFruits)
{
    Console.WriteLine(fruit); // ELDERBERRY, CHERRY, BANANA
}

// Aggregation: Count, Sum, Average, Max, Min
int[] scores = { 85, 92, 78, 95, 88 };
Console.WriteLine($"\nMax score: {scores.Max()}");       // 95
Console.WriteLine($"Average score: {scores.Average()}"); // 87.6
```

-----

## 8\. Asynchronous Programming (`async`/`await`)

Crucial for building responsive applications and efficient I/O-bound operations. Prevents blocking the main thread.

  * `async`: Modifier for a method, indicating it contains asynchronous operations.
  * `await`: Operator that pauses the execution of the `async` method until the awaited `Task` completes. Control returns to the caller during the wait.

<!-- end list -->

```csharp
public class AsyncDemo
{
    // Simulate a long-running operation (e.g., network request, file I/O)
    public async Task<string> DownloadContentAsync(string url)
    {
        Console.WriteLine($"Starting download from {url} on thread {Thread.CurrentThread.ManagedThreadId}");
        // Simulate network delay
        await Task.Delay(2000); // This is where the thread is released
        Console.WriteLine($"Finished download from {url} on thread {Thread.CurrentThread.ManagedThreadId}");
        return $"Content from {url}";
    }

    // Simulate a CPU-bound operation (should typically be run on a separate thread using Task.Run)
    public Task<int> CalculateComplexResultAsync()
    {
        return Task.Run(() =>
        {
            Console.WriteLine($"Starting complex calculation on thread {Thread.CurrentThread.ManagedThreadId}");
            long sum = 0;
            for (int i = 0; i < 1_000_000_000; i++)
            {
                sum += i;
            }
            Console.WriteLine($"Finished complex calculation on thread {Thread.CurrentThread.ManagedThreadId}");
            return (int)(sum % 100); // Return a simple result
        });
    }

    public async Task RunAllAsyncOperations()
    {
        Console.WriteLine($"Main method started on thread {Thread.CurrentThread.ManagedThreadId}");

        // Start multiple async operations concurrently
        Task<string> downloadTask1 = DownloadContentAsync("url1.com");
        Task<string> downloadTask2 = DownloadContentAsync("url2.com");
        Task<int> calculationTask = CalculateComplexResultAsync(); // CPU-bound in Task.Run

        // Await them all, potentially in parallel if operations are truly independent
        string content1 = await downloadTask1;
        Console.WriteLine($"Received: {content1}");

        string content2 = await downloadTask2;
        Console.WriteLine($"Received: {content2}");

        int calcResult = await calculationTask;
        Console.WriteLine($"Calculation result: {calcResult}");

        Console.WriteLine($"All operations completed on thread {Thread.CurrentThread.ManagedThreadId}");
    }
}

// To run this in a console app, you might need to make Main async or use .Wait()/.Result()
// static async Task Main(string[] args) {
//     AsyncDemo demo = new AsyncDemo();
//     await demo.RunAllAsyncOperations();
//     Console.ReadKey(); // Keep console open
// }
```

-----

## 9\. Generics

Allow you to design classes, interfaces, and methods that operate on types that are specified by a type parameter. This provides type safety without sacrificing flexibility.

```csharp
// Generic Class
public class GenericBox<T> // T is a type parameter
{
    public T Value { get; set; }

    public GenericBox(T value)
    {
        Value = value;
    }

    public void DisplayValueType()
    {
        Console.WriteLine($"Value: {Value}, Type: {typeof(T).Name}");
    }
}

// Generic Method
public class Utils
{
    public static T GetDefaultValue<T>()
    {
        return default(T); // default(T) returns null for reference types, 0 for int, false for bool etc.
    }

    public static void Swap<T>(ref T a, ref T b)
    {
        T temp = a;
        a = b;
        b = temp;
        Console.WriteLine($"Swapped: a={a}, b={b}");
    }
}

GenericBox<int> intBox = new GenericBox<int>(123);
intBox.DisplayValueType(); // Value: 123, Type: Int32

GenericBox<string> stringBox = new GenericBox<string>("Generic String");
stringBox.DisplayValueType(); // Value: Generic String, Type: String

int defaultInt = Utils.GetDefaultValue<int>();     // 0
string defaultString = Utils.GetDefaultValue<string>(); // null

int numA = 10, numB = 20;
Utils.Swap(ref numA, ref numB); // Swapped: a=20, b=10

string strA = "First", strB = "Second";
Utils.Swap(ref strA, ref strB); // Swapped: a=Second, b=First
```

-----

## 10\. Delegates and Events

### 10.1 Delegates

Type-safe function pointers. They define the signature of a method (return type and parameters) that can be referenced.

```csharp
// 1. Declare a delegate type
public delegate int MathOperation(int a, int b);

public class DelegateDemo
{
    public int Add(int x, int y) { return x + y; }
    public int Subtract(int x, int y) { return x - y; }

    public void RunDelegates()
    {
        // 2. Create delegate instances and assign methods
        MathOperation addDelegate = new MathOperation(Add);
        MathOperation subtractDelegate = Subtract; // Shorthand syntax

        // 3. Invoke the delegate
        int sum = addDelegate(10, 5);       // Calls Add method
        int diff = subtractDelegate(10, 5); // Calls Subtract method

        Console.WriteLine($"Sum: {sum}, Difference: {diff}");

        // Multicast Delegate: Can point to multiple methods
        MathOperation multiDelegate = Add;
        multiDelegate += Subtract; // Add another method

        // When a multicast delegate is invoked, methods are called in order.
        // If return type is not void, only the return value of the last method is returned.
        Console.WriteLine("Invoking multicast delegate:");
        int finalResult = multiDelegate(100, 50); // Calls Add, then Subtract
        Console.WriteLine($"Final result from multicast: {finalResult}"); // Output: 50 (from Subtract)
    }
}

// DelegateDemo demo = new DelegateDemo();
// demo.RunDelegates();

// Action and Func built-in delegates (more common now)
// Action: for methods that return void
Action<string> printMessage = (msg) => Console.WriteLine(msg);
printMessage("Hello from Action!");

// Func: for methods that return a value (last type parameter is the return type)
Func<int, int, int> multiply = (x, y) => x * y;
Console.WriteLine($"Product: {multiply(8, 7)}");
```

### 10.2 Events

A mechanism for communication between objects. An object (publisher) can notify other objects (subscribers) when something interesting happens. Events are built on delegates.

```csharp
public class Stock
{
    public string Symbol { get; set; }
    private decimal _price;

    // 1. Declare a delegate for the event
    public delegate void PriceChangeHandler(Stock stock, decimal oldPrice, decimal newPrice);

    // 2. Declare the event using the delegate
    public event PriceChangeHandler OnPriceChange;

    public Stock(string symbol, decimal price)
    {
        Symbol = symbol;
        _price = price;
    }

    public decimal Price
    {
        get { return _price; }
        set
        {
            if (_price == value) return; // Only notify if price actually changes
            decimal oldPrice = _price;
            _price = value;
            // 3. Raise the event (null check is important for no subscribers)
            OnPriceChange?.Invoke(this, oldPrice, _price);
        }
    }
}

public class Investor
{
    public string Name { get; set; }

    public Investor(string name) { Name = name; }

    // Event handler method (matches delegate signature)
    public void Stock_PriceChange(Stock stock, decimal oldPrice, decimal newPrice)
    {
        Console.WriteLine($"{Name} received notification: {stock.Symbol} changed from {oldPrice:C} to {newPrice:C}");
    }
}

// Usage Example
Stock tesla = new Stock("TSLA", 1000m);
Investor investor1 = new Investor("Alice");
Investor investor2 = new Investor("Bob");

// Subscribe to the event
tesla.OnPriceChange += investor1.Stock_PriceChange;
tesla.OnPriceChange += investor2.Stock_PriceChange;

tesla.Price = 1010m; // This will trigger the event
tesla.Price = 990m;

// Unsubscribe from the event
tesla.OnPriceChange -= investor2.Stock_PriceChange;
tesla.Price = 1005m; // Only investor1 will be notified now
```

-----

## 11\. Advanced C\# Topics (Brief Mentions)

These topics are commonly encountered in advanced C\# development and interviews.

  * **Delegates and Events:** (Covered in 10)
  * **Attributes:** Metadata added to code elements. E.g., `[Obsolete]`, `[Serializable]`.
  * **Reflection:** Ability to inspect and manipulate types and objects at runtime.
  * **Garbage Collection (GC):** Automatic memory management. Understanding when objects are eligible for GC and the role of `IDisposable` and `using` statements (for unmanaged resources).
  * **Dependency Injection (DI):** A design pattern used to achieve Inversion of Control (IoC) between classes and their dependencies.
  * **Unit Testing:** `xUnit`, `NUnit`, `MSTest`.
  * **Design Patterns:** Singleton, Factory, Strategy, Observer, etc.
  * **Task Parallel Library (TPL):** For parallel and concurrent programming. `Parallel.For`, `Parallel.ForEach`.
  * **Nullable Reference Types (C\# 8.0+):** Helps prevent `NullReferenceException` by explicitly marking reference types as nullable or non-nullable.
  * **Records (C\# 9.0+):** Reference types with value semantics, good for immutable data.
  * **Pattern Matching (C\# 7.0+):** `is` expression with patterns, `switch` expressions, property patterns, tuple patterns.

-----

## 12\. Interview Best Practices and Tips

  * **Understand the "Why":** Don't just memorize syntax. Be able to explain *why* you would choose a class over a struct, an interface over an abstract class, or `async`/`await` for a given scenario.
  * **Explain OOP Pillars:** Be prepared to define and give examples for Encapsulation, Inheritance, Polymorphism, and Abstraction. These are fundamental.
  * **Code on a Whiteboard/Editor:** Practice writing code cleanly, even without an IDE. Pay attention to syntax, naming conventions, and readability.
  * **Ask Clarifying Questions:** If an interview question is vague, ask for clarification (e.g., "What are the constraints?", "What is the expected input/output?").
  * **Talk Through Your Thought Process:** When solving a problem, verbalize how you're approaching it, the alternatives you considered, and why you chose a particular solution.
  * **Time Complexity/Space Complexity (Big O Notation):** For algorithms, be prepared to discuss the efficiency of your solution.
  * **Error Handling:** Show how you would robustly handle potential errors in your code.
  * **Clean Code Principles:** Mention SOLID principles, DRY (Don't Repeat Yourself), KISS (Keep It Simple, Stupid).
  * **Questions for the Interviewer:** Always have a few thoughtful questions prepared for the interviewer at the end. This shows your engagement and interest.

This guide provides a substantial amount of C\# knowledge. Focus on understanding these core concepts thoroughly. Good luck with your interviews\!