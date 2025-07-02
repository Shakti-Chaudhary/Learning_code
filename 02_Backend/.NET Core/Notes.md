
Here's an extensive guide for .NET Core 9 Web API:

-----

# .NET Core 9 Web API Interview Preparation Guide

This guide covers the fundamental concepts, setup, essential components, and best practices for building Web APIs with .NET 9. Understanding these topics is crucial for interviews focusing on modern web development with Microsoft technologies.

-----

## 1\. Introduction to Web APIs and .NET Core

### 1.1 What is a Web API?

  * A **Web API** (Application Programming Interface) is a set of rules and definitions that allows different software applications to communicate with each other over the web.
  * They typically use standard HTTP methods (GET, POST, PUT, DELETE) and commonly exchange data in formats like JSON or XML.
  * They enable the creation of decoupled, scalable, and reusable backend services for various clients (web apps, mobile apps, other services).

### 1.2 What is .NET Core (now just .NET)?

  * **`.NET`** (formerly .NET Core) is a free, open-source, cross-platform framework for building a wide range of applications, including web, mobile, desktop, gaming, and IoT.
  * **.NET 9** is the latest long-term support (LTS) or current release of the .NET platform. It brings performance improvements, new C\# features, and enhanced tooling.
  * **Key advantages:** Cross-platform (Windows, Linux, macOS), high performance, modularity, open-source, cloud-ready.

### 1.3 What is ASP.NET Core Web API?

  * **ASP.NET Core Web API** is a framework for building RESTful services on top of .NET. It's part of ASP.NET Core and leverages its features like middleware, dependency injection, and configuration.

-----

## 2\. Setting Up a .NET 9 Web API Project

### 2.1 Prerequisites

  * .NET 9 SDK (Software Development Kit)
  * An IDE like Visual Studio 2022 (with .NET workload), Visual Studio Code (with C\# extension), or JetBrains Rider.

### 2.2 Creating a New Project

Using the .NET CLI (Command Line Interface):

```bash
# Create a new Web API project named MyApiProject
dotnet new webapi -n MyApiProject

# Navigate into the project directory
cd MyApiProject

# Run the application (listens on localhost:5000/5001 by default)
dotnet run
```

This creates a basic project structure including:

  * `Program.cs`: The application's entry point, configuring services and middleware.
  * `appsettings.json`: Configuration file.
  * `Controllers/`: Folder for API controllers.
  * `Properties/launchSettings.json`: Project-specific launch settings (ports, environment variables).

-----

## 3\. Core Concepts of .NET Web API

### 3.1 Controllers

  * Controllers handle incoming HTTP requests and return responses.
  * They are classes that derive from `ControllerBase` (for API controllers, no view support) or `Controller` (for MVC controllers with view support).
  * Decorated with `[ApiController]` attribute for API-specific behaviors (e.g., automatic HTTP 400 responses for validation errors).
  * Typically reside in the `Controllers` folder.

<!-- end list -->

```csharp
using Microsoft.AspNetCore.Mvc;

namespace MyApiProject.Controllers
{
    [ApiController] // Enables API-specific features
    [Route("api/[controller]")] // Defines the base route for this controller (e.g., /api/products)
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;

        // Dependency Injection of ILogger
        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        // Action method: handles HTTP GET requests
        [HttpGet] // Maps to GET /api/products
        public ActionResult<IEnumerable<string>> GetProducts()
        {
            _logger.LogInformation("Fetching all products.");
            return Ok(new string[] { "Laptop", "Mouse", "Keyboard" }); // 200 OK
        }

        // Action method with route parameter
        [HttpGet("{id}")] // Maps to GET /api/products/{id}
        public ActionResult<string> GetProductById(int id)
        {
            if (id == 0)
            {
                return BadRequest("Product ID cannot be zero."); // 400 Bad Request
            }
            if (id == 1)
            {
                return Ok("Laptop"); // 200 OK
            }
            return NotFound(); // 404 Not Found
        }
    }
}
```

### 3.2 Action Methods

  * Public methods within a controller that respond to specific HTTP requests.
  * Decorated with HTTP verb attributes (`[HttpGet]`, `[HttpPost]`, `[HttpPut]`, `[HttpDelete]`, `[HttpPatch]`).
  * Can have parameters that are bound from the request (route, query string, body, headers).
  * Typically return `ActionResult<T>` or `IActionResult` for flexibility in returning different HTTP responses, or directly `T` for 200 OK.

### 3.3 Routing

  * Maps incoming HTTP requests to specific action methods in controllers.
  * **Attribute Routing (recommended):** Defined directly on controllers and action methods using attributes like `[Route]`, `[HttpGet]`, etc.

<!-- end list -->

```csharp
[Route("api/[controller]")] // Controller-level route: /api/values
public class ValuesController : ControllerBase
{
    [HttpGet] // GET /api/values
    public string Get() => "Value 1";

    [HttpGet("specific")] // GET /api/values/specific
    public string GetSpecific() => "Specific Value";

    [HttpGet("{id:int}")] // GET /api/values/5 (id must be int)
    public string GetById(int id) => $"Value {id}";
}
```

  * **Route Constraints:** Specify data types or patterns for route parameters (e.g., `{id:int}`, `{name:alpha}`, `{slug:minlength(5)}`).

### 3.4 Model Binding

  * The process of mapping incoming request data (from route, query string, form fields, or request body) to action method parameters.
  * **Default Sources:**
      * **`[FromRoute]`**: From URL route segments (e.g., `/products/{id}`).
      * **`[FromQuery]`**: From query string (e.g., `/products?category=electronics`).
      * **`[FromBody]`**: From the request body (e.g., JSON payload in POST/PUT). Requires `[ApiController]` or manual configuration.
      * **`[FromHeader]`**: From HTTP request headers.
      * **`[FromForm]`**: From form-data in the request body.
      * **`[FromServices]`**: From the DI container.

<!-- end list -->

```csharp
// POST /api/products
// Body: { "Name": "New Product", "Price": 99.99 }
[HttpPost]
public ActionResult<Product> CreateProduct([FromBody] Product product) // Binds from JSON body
{
    if (!ModelState.IsValid) // Check validation attributes on Product model
    {
        return BadRequest(ModelState); // Returns 400 with validation errors
    }
    // ... save product
    return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product); // 201 Created
}

// GET /api/search?term=laptop&minPrice=500
[HttpGet("search")]
public ActionResult<IEnumerable<Product>> SearchProducts([FromQuery] string term, [FromQuery] decimal? minPrice)
{
    // ... search logic
    return Ok(/* list of products */);
}
```

### 3.5 Model Validation

  * Ensuring incoming data meets defined rules.
  * Achieved using **Data Annotation attributes** (e.g., `[Required]`, `[StringLength]`, `[Range]`) on model properties.
  * `[ApiController]` attribute automatically triggers model validation and returns `400 Bad Request` if `ModelState.IsValid` is false.

<!-- end list -->

```csharp
using System.ComponentModel.DataAnnotations;

public class Product
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Product name is required.")]
    [StringLength(100, MinimumLength = 3, ErrorMessage = "Name must be between 3 and 100 characters.")]
    public string Name { get; set; }

    [Range(0.01, 10000.00, ErrorMessage = "Price must be between 0.01 and 10000.00.")]
    public decimal Price { get; set; }
}
```

### 3.6 Action Results (`IActionResult` and `ActionResult<T>`)

  * Methods that return an HTTP status code and optionally a response body.
  * `IActionResult`: Interface that represents the result of an action method. Allows returning various HTTP responses (e.g., `Ok()`, `NotFound()`, `BadRequest()`, `NoContent()`, `Created()`).
  * `ActionResult<T>` (C\# 7.1+): Allows returning either `IActionResult` or a specific type `T`. This is often preferred as it provides strong typing for the successful return type while still allowing flexibility for error results.

<!-- end list -->

```csharp
// Returns a 200 OK with the string "Hello"
public IActionResult GetHello() => Ok("Hello");

// Returns a 404 Not Found
public IActionResult GetNotFound() => NotFound();

// Returns a 204 No Content
public IActionResult DeleteSuccess() => NoContent();

// Returns a 201 Created with the location header
public IActionResult CreateResource(MyModel model)
{
    // ... save logic
    return CreatedAtAction(nameof(GetResource), new { id = model.Id }, model);
}

// Using ActionResult<T>
[HttpGet("{id}")]
public ActionResult<Product> GetProduct(int id)
{
    var product = GetProductFromDb(id);
    if (product == null)
    {
        return NotFound(); // Returns 404
    }
    return product; // Returns 200 OK with the product object
}
```

-----

## 4\. Essential .NET Features in Web API

### 4.1 Dependency Injection (DI)

  * **Core Principle:** A design pattern used to achieve Inversion of Control (IoC). It allows for loosely coupled and testable code. Instead of classes creating their dependencies, dependencies are "injected" (provided) to them.
  * **Built-in in .NET Core:** The framework has a first-class, built-in DI container.
  * **Service Lifetimes:**
      * **`AddSingleton<TService, TImplementation>()`**: A single instance is created for the entire application lifetime.
      * **`AddScoped<TService, TImplementation>()`**: An instance is created once per client request (within the scope of an HTTP request).
      * **`AddTransient<TService, TImplementation>()`**: A new instance is created every time it's requested.

<!-- end list -->

```csharp
// 1. Define an interface (contract)
public interface IProductService
{
    IEnumerable<string> GetAvailableProducts();
}

// 2. Implement the interface
public class ProductService : IProductService
{
    private readonly ILogger<ProductService> _logger;
    public ProductService(ILogger<ProductService> logger)
    {
        _logger = logger;
    }
    public IEnumerable<string> GetAvailableProducts()
    {
        _logger.LogInformation("Getting products from ProductService.");
        return new List<string> { "TV", "Refrigerator", "Washing Machine" };
    }
}

// 3. Register the service in Program.cs
// In .NET 6+, Program.cs is simplified with top-level statements.
// Before .NET 6, this was in Startup.cs -> ConfigureServices method.

// Program.cs
var builder = WebApplication.CreateBuilder(args);

// Registering services
builder.Services.AddControllers(); // Adds MVC controllers and related services
builder.Services.AddEndpointsApiExplorer(); // For Swagger/OpenAPI
builder.Services.AddSwaggerGen();

// Register IProductService with a Scoped lifetime
builder.Services.AddScoped<IProductService, ProductService>(); // Or AddSingleton, AddTransient

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers(); // Maps controller routes
app.Run();


// 4. Consume the service in a controller
public class ProductsV2Controller : ControllerBase
{
    private readonly IProductService _productService; // Dependency

    // Constructor Injection
    public ProductsV2Controller(IProductService productService)
    {
        _productService = productService;
    }

    [HttpGet("v2")]
    public ActionResult<IEnumerable<string>> GetProductsV2()
    {
        var products = _productService.GetAvailableProducts();
        return Ok(products);
    }
}
```

### 4.2 Middleware

  * Components that form a pipeline to handle requests and responses.
  * Each middleware component performs a specific task (e.g., logging, authentication, routing, error handling).
  * Configured in `Program.cs` (or `Startup.cs` in older versions) using `app.Use...()` methods.

**Common Middleware:**

  * `app.UseRouting()`: Selects an endpoint based on the request URL.
  * `app.UseAuthentication()`: Verifies the identity of the user.
  * `app.UseAuthorization()`: Determines what the authenticated user is allowed to do.
  * `app.UseHttpsRedirection()`: Redirects HTTP requests to HTTPS.
  * `app.UseStaticFiles()`: Serves static files (HTML, CSS, JS).
  * `app.UseCors()`: Configures Cross-Origin Resource Sharing.
  * `app.UseDeveloperExceptionPage()` (development only): Provides detailed error pages.
  * `app.UseExceptionHandler()` (production): Catches exceptions and returns a generic error.
  * `app.MapControllers()`: Adds controllers to the endpoint routing pipeline.

<!-- end list -->

```csharp
// Program.cs
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddControllers();
// ... other service registrations

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage(); // Detailed exceptions in dev
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseExceptionHandler("/Error"); // Generic error page in prod
    app.UseHsts(); // HTTP Strict Transport Security
}

app.UseHttpsRedirection(); // Enforce HTTPS
app.UseRouting(); // Important: must be before UseAuthentication/UseAuthorization

app.UseAuthentication(); // Order matters: authenticate before authorize
app.UseAuthorization();

app.MapControllers(); // Maps requests to controller actions

app.Run();
```

### 4.3 Configuration

  * .NET uses a flexible configuration system that reads from various sources (e.g., `appsettings.json`, environment variables, command-line arguments, Azure Key Vault).
  * Settings are exposed via `IConfiguration`.
  * Can be strongly-typed using Options pattern (`IOptions<T>`).

<!-- end list -->

```csharp
// appsettings.json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=MyApiDb;Trusted_Connection=True;"
  },
  "AppSettings": {
    "ApiSecretKey": "MySuperSecureKey123",
    "MaxItemsPerPage": 50
  }
}

// Program.cs
var builder = WebApplication.CreateBuilder(args);

// Access configuration directly
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
var apiSecretKey = builder.Configuration["AppSettings:ApiSecretKey"];

Console.WriteLine($"Connection String: {connectionString}");
Console.WriteLine($"API Secret Key: {apiSecretKey}");

// Using Options Pattern for strongly-typed configuration
public class AppSettings
{
    public string ApiSecretKey { get; set; }
    public int MaxItemsPerPage { get; set; }
}

builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

// Consuming in a service or controller via DI
public class MyService
{
    private readonly AppSettings _appSettings;
    public MyService(IOptions<AppSettings> appSettingsOptions)
    {
        _appSettings = appSettingsOptions.Value;
        Console.WriteLine($"Max Items Per Page: {_appSettings.MaxItemsPerPage}");
    }
}
// Register MyService as well: builder.Services.AddSingleton<MyService>();
```

### 4.4 Logging

  * Built-in logging abstraction (`ILogger<T>`).
  * Supports various logging providers (Console, Debug, EventSource, Azure Application Insights, third-party like Serilog, NLog).
  * Configured in `appsettings.json`.

<!-- end list -->

```csharp
// In a Controller or Service (via DI)
private readonly ILogger<MyController> _logger;

public MyController(ILogger<MyController> logger)
{
    _logger = logger;
}

[HttpGet]
public IActionResult Get()
{
    _logger.LogInformation("GET request received for MyController.");
    _logger.LogWarning("This is a warning message.");
    _logger.LogError("An error occurred: {ErrorMessage}", "Something went wrong.");
    return Ok();
}
```

-----

## 5\. Data Access with Entity Framework Core

### 5.1 What is EF Core?

  * **Entity Framework Core (EF Core)** is a lightweight, extensible, and cross-platform Object-Relational Mapper (ORM) that enables .NET developers to work with a database using .NET objects.
  * It simplifies data access by abstracting away much of the underlying database interaction.

### 5.2 Key Concepts

  * **DbContext:** Represents a session with the database. It's the primary class for interacting with your database through EF Core.
  * **DbSet\<TEntity\>:** Represents a collection of all entities of a given type in the context, which can be queried from the database.
  * **Migrations:** A way to evolve your database schema as your model changes.
  * **LINQ to Entities:** Use LINQ queries to interact with your `DbSet`s, which EF Core translates into SQL.

### 5.3 Example Setup (SQL Server)

```csharp
// 1. Define your Entity Model (e.g., Product.cs)
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

// 2. Create your DbContext (e.g., ApplicationDbContext.cs)
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
}

// 3. Register DbContext in Program.cs
// Add the Microsoft.EntityFrameworkCore.SqlServer NuGet package
// Add the Microsoft.EntityFrameworkCore.Tools NuGet package

// Program.cs
var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// ... rest of the Program.cs

// 4. Create Migrations (run from project directory in terminal)
dotnet ef migrations add InitialCreate
dotnet ef database update

// 5. Use DbContext in a Controller/Service
public class ProductsDbController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ProductsDbController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("db")]
    public async Task<ActionResult<IEnumerable<Product>>> GetProductsFromDb()
    {
        // Query products using LINQ
        var products = await _context.Products.ToListAsync();
        return Ok(products);
    }

    [HttpPost("db")]
    public async Task<ActionResult<Product>> AddProduct([FromBody] Product newProduct)
    {
        _context.Products.Add(newProduct);
        await _context.SaveChangesAsync(); // Save changes to the database
        return CreatedAtAction(nameof(GetProductsFromDb), new { id = newProduct.Id }, newProduct);
    }
}
```

-----

## 6\. Security in Web API

### 6.1 Authentication

  * **Authentication:** Verifying the identity of a user or client.
  * **Schemes:**
      * **Bearer Token (JWT - JSON Web Tokens):** Common for APIs. Client sends a token in the `Authorization` header.
      * **API Key:** Simple, often for service-to-service communication.
      * **OAuth 2.0/OpenID Connect:** Industry-standard protocols for authorization/authentication.
      * **Cookies:** Less common for pure APIs, more for traditional web apps.

<!-- end list -->

```csharp
// Example: JWT Bearer Token Authentication setup in Program.cs
// Add Microsoft.AspNetCore.Authentication.JwtBearer NuGet package

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });

// ... inside app.UseRouting() and app.MapControllers()
app.UseAuthentication();
app.UseAuthorization();
```

### 6.2 Authorization

  * **Authorization:** Determining what an authenticated user or client is *allowed* to do.
  * **`[Authorize]` Attribute:** Restricts access to controllers or action methods.
  * **Roles:** Based on user roles (e.g., `[Authorize(Roles = "Admin")]`).
  * **Policies:** More granular and flexible rules, defined in `Program.cs` and applied via `[Authorize(Policy = "RequireAdminRole")]`.

<!-- end list -->

```csharp
// Program.cs
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("RequireAdminRole", policy => policy.RequireRole("Admin"));
    options.AddPolicy("CanManageProducts", policy => policy.RequireClaim("permission", "product_manage"));
});

// In a Controller
[ApiController]
[Route("api/[controller]")]
// [Authorize] // Requires authentication for all actions in this controller
public class AdminProductsController : ControllerBase
{
    // Requires authenticated user with 'Admin' role
    [HttpGet("admin-only")]
    [Authorize(Roles = "Admin")]
    public IActionResult GetAdminProducts()
    {
        return Ok("Admin level product list.");
    }

    // Requires authenticated user with the 'CanManageProducts' policy
    [HttpPost("secure-add")]
    [Authorize(Policy = "CanManageProducts")]
    public IActionResult AddSecureProduct([FromBody] Product product)
    {
        return Ok($"Securely added {product.Name}");
    }

    // Allows unauthenticated access
    [HttpGet("public")]
    [AllowAnonymous]
    public IActionResult GetPublicData()
    {
        return Ok("This is public data.");
    }
}
```

### 6.3 CORS (Cross-Origin Resource Sharing)

  * A security feature that prevents web pages from making requests to a different domain than the one that served the web page.
  * For Web APIs consumed by frontend applications on different domains, CORS needs to be explicitly configured.

<!-- end list -->

```csharp
// Program.cs
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins"; // Define a policy name

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://example.com",
                                              "http://www.contoso.com")
                                 .AllowAnyHeader()
                                 .AllowAnyMethod();
                          // Or .AllowAnyOrigin() (less secure)
                          // Or .AllowCredentials() if you're sending cookies/auth headers
                      });
});

// ... inside app.UseRouting() and app.MapControllers()
app.UseCors(MyAllowSpecificOrigins); // Apply the CORS policy
```

-----

## 7\. API Documentation (Swagger/OpenAPI)

### 7.1 What is Swagger/OpenAPI?

  * **OpenAPI Specification:** A language-agnostic standard for describing RESTful APIs.
  * **Swagger UI:** A tool that generates interactive API documentation from an OpenAPI specification. It allows developers and consumers to visualize and interact with the API's resources without any implementation logic.
  * **Swashbuckle.AspNetCore:** A popular NuGet package that generates OpenAPI specifications from ASP.NET Core Web API code and provides Swagger UI.

### 7.2 Setup

```csharp
// 1. Install NuGet packages:
// dotnet add package Swashbuckle.AspNetCore

// 2. Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer(); // Enables API exploration for Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });

    // Optional: Include XML comments for better documentation in Swagger UI
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);

    // Optional: Add security definition for JWT if using authentication
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); // Enables the Swagger middleware
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = string.Empty; // Set Swagger UI at the app's root (e.g., http://localhost:5000/)
    });
}
```

  * **To generate XML comments:** Add `<GenerateDocumentationFile>true</GenerateDocumentationFile>` to your `.csproj` file.

<!-- end list -->

```xml
<PropertyGroup>
    <TargetFramework>net9.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <GenerateDocumentationFile>true</GenerateDocumentationFile> </PropertyGroup>
```

  * **Add comments:** Use XML documentation comments (`///`) in your controllers and models.

<!-- end list -->

```csharp
/// <summary>
/// Retrieves a list of all available products.
/// </summary>
/// <returns>A list of product names.</returns>
[HttpGet]
[ProducesResponseType(StatusCodes.Status200OK)]
public ActionResult<IEnumerable<string>> GetProducts() { /* ... */ }
```

-----

## 8\. Best Practices and Advanced Topics

### 8.1 RESTful Principles

  * **Statelessness:** Each request from client to server must contain all information needed to understand the request.
  * **Resource-based:** APIs should expose resources (e.g., `/products`, `/users`) that can be manipulated using standard HTTP methods.
  * **Consistent Naming:** Use plural nouns for collection resources (e.g., `products`, not `product`).
  * **Idempotency:** A request is idempotent if it produces the same result regardless of how many times it's sent (e.g., PUT, DELETE). GET requests are inherently idempotent. POST is generally not.

### 8.2 HTTP Status Codes

  * Use appropriate HTTP status codes to indicate the outcome of an API request.
      * **200 OK:** General success.
      * **201 Created:** Resource successfully created (POST). Include `Location` header.
      * **204 No Content:** Request processed successfully, but no content to return (PUT, DELETE).
      * **400 Bad Request:** Client-side error (e.g., invalid input, validation errors).
      * **401 Unauthorized:** Client is not authenticated.
      * **403 Forbidden:** Client is authenticated but does not have permission.
      * **404 Not Found:** Resource not found.
      * **500 Internal Server Error:** Server-side error.

### 8.3 Asynchronous Programming (`async`/`await`)

  * **Crucial for Web APIs:** Prevents thread starvation and improves scalability by freeing up server threads while waiting for I/O operations (e.g., database calls, external API calls).
  * **Always use `async` and `await`** for I/O-bound operations in action methods and services.

<!-- end list -->

```csharp
// Example in a controller action
[HttpGet("{id}")]
public async Task<ActionResult<Product>> GetProductAsync(int id)
{
    var product = await _context.Products.FindAsync(id); // Await the async database call
    if (product == null)
    {
        return NotFound();
    }
    return Ok(product);
}
```

### 8.4 Global Error Handling

  * Use **Middleware** or **Exception Filters** to catch unhandled exceptions globally and return consistent error responses (e.g., JSON error objects).
  * Avoid exposing sensitive error details in production.

<!-- end list -->

```csharp
// Option 1: Use app.UseExceptionHandler() in Program.cs (already shown in 4.2)
// Option 2: Custom Middleware
// Option 3: Exception Filter (on controller/action or globally)
// Example of a simple global exception filter (requires more setup than middleware)
public class CustomExceptionFilter : IExceptionFilter
{
    private readonly IHostEnvironment _env;
    private readonly ILogger<CustomExceptionFilter> _logger;

    public CustomExceptionFilter(IHostEnvironment env, ILogger<CustomExceptionFilter> logger)
    {
        _env = env;
        _logger = logger;
    }

    public void OnException(ExceptionContext context)
    {
        _logger.LogError(new EventId(context.Exception.HResult),
                         context.Exception,
                         context.Exception.Message);

        var json = new {
            message = _env.IsDevelopment() ? context.Exception.Message : "An error occurred.",
            detail = _env.IsDevelopment() ? context.Exception.StackTrace : null
        };

        context.Result = new ObjectResult(json) { StatusCode = StatusCodes.Status500InternalServerError };
        context.ExceptionHandled = true; // Mark exception as handled
    }
}
// Register globally: builder.Services.AddControllers(options => options.Filters.Add(new CustomExceptionFilter(...)));
```

### 8.5 Versioning Your API

  * Allows evolving your API without breaking existing clients.
  * **URL Versioning:** `/api/v1/products`, `/api/v2/products`
  * **Query String Versioning:** `/api/products?api-version=1.0`
  * **Header Versioning:** Custom HTTP header (e.g., `X-API-Version: 1.0`).
  * **Media Type Versioning (Content Negotiation):** `Accept: application/vnd.myapi.v1+json`.

<!-- end list -->

```csharp
// Example: URL Versioning using Microsoft.AspNetCore.Mvc.Versioning NuGet package
// Program.cs
builder.Services.AddApiVersioning(options =>
{
    options.ReportApiVersions = true; // Report API versions in headers
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.DefaultApiVersion = new ApiVersion(1, 0); // Default version
});

// In Controllers
[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class ProductsV1Controller : ControllerBase
{
    [HttpGet]
    public IActionResult GetV1Products() => Ok("Products from V1");
}

[ApiController]
[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/[controller]")]
public class ProductsV2Controller : ControllerBase
{
    [HttpGet]
    public IActionResult GetV2Products() => Ok("Products from V2 with new features");
}
```

### 8.6 Caching

  * **In-Memory Caching:** Simple caching within the application's memory (`IMemoryCache`).
  * **Distributed Caching:** For multiple instances or scalable applications (e.g., Redis, SQL Server).
  * **HTTP Caching (Client/Proxy Caching):** Using HTTP headers like `Cache-Control`, `ETag`, `Last-Modified`.
  * **Response Caching Middleware (`[ResponseCache]`):**

<!-- end list -->

```csharp
// Program.cs
builder.Services.AddMemoryCache(); // Add in-memory cache services
// builder.Services.AddStackExchangeRedisCache(...) // For distributed Redis cache

// In a Controller
[HttpGet("cached-data")]
[ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any, NoStore = false)]
public IActionResult GetCachedData()
{
    // This action's response will be cached for 60 seconds
    return Ok($"Data generated at {DateTime.Now}");
}
```

### 8.7 Performance Considerations

  * Use `async`/`await` for all I/O-bound operations.
  * Optimize database queries (indexing, efficient LINQ).
  * Implement caching where appropriate.
  * Avoid N+1 query problem in EF Core.
  * Use efficient data structures.
  * Consider GZIP compression for responses.

-----

## Conclusion

