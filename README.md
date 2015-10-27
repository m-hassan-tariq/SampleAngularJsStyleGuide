# SampleAngularJsStyleGuide

Angular Style Guide for enterprise and large-scale projects

**Single Responsibility**
- Define 1 component per file.

![pastedimage](https://cloud.githubusercontent.com/assets/10474169/10745636/98f8b3f0-7c11-11e5-88e4-1006af091206.png)

**IIFE**
- Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

![pastedimage 1](https://cloud.githubusercontent.com/assets/10474169/10745625/98de3cf0-7c11-11e5-82b1-e356ee6b13c3.png)

**Definitions (aka Setters)**
- Declare modules without a variable using the setter syntax.
- When using a module, avoid using a variable and instead use chaining with the getter syntax.
- Only set once and get for all other instances.

![pastedimage 2](https://cloud.githubusercontent.com/assets/10474169/10745627/98de58a2-7c11-11e5-9d97-643d9bc10ca9.png)

**Named vs Anonymous Functions**
- Use named functions instead of passing an anonymous function in as a callback.

![pastedimage 3](https://cloud.githubusercontent.com/assets/10474169/10745624/98dd7a90-7c11-11e5-94e2-5ace27084ad7.png)

**controllerAs View Syntax**
- Use the controllerAs syntax over the classic controller with $scope syntax.
- Use a capture variable for this when using the controllerAs syntax. Choose a consistent variable name such as vm, which stands for ViewModel.
- When a controller must be paired with a view and either component may be re-used by other controllers or views, define controllers along with their routes.

![pastedimage 4](https://cloud.githubusercontent.com/assets/10474169/10745626/98de4ea2-7c11-11e5-9d71-dbc372cbf7a6.png)
![pastedimage 5](https://cloud.githubusercontent.com/assets/10474169/10745628/98df6ec2-7c11-11e5-89af-e6a75ec1a073.png)

**Route Resolve Promises**
- When a controller depends on a promise to be resolved before the controller is activated, resolve those dependencies in the $stateProvider before the controller logic is executed. If you need to conditionally cancel a route before the controller is activated, use a route resolver.

![pastedimage 6](https://cloud.githubusercontent.com/assets/10474169/10745629/98eb02e6-7c11-11e5-9b9b-b6422ad025b7.png)

**Bindable Members Up Top**
- Place bindable members at the top of the controller, alphabetized, and not spread through the controller code.
- Resolve start-up logic for a controller in an activate function.

![pastedimage 7](https://cloud.githubusercontent.com/assets/10474169/10745633/98ec0826-7c11-11e5-96de-cb8468bb6dd8.png)

**Function Declarations to Hide Implementation Details**
- Use function declarations to hide implementation details. Keep your bindable members up top. When you need to bind a function in a controller, point it to a function declaration that appears later in the file. This is tied directly to the section Bindable Members Up Top

- Resolve start-up logic for a controller in an activate function.

![pastedimage 8](https://cloud.githubusercontent.com/assets/10474169/10745630/98ebd0f4-7c11-11e5-8e01-db1cdba9ea62.png)

**Separate Data Calls**
- Refactor logic for making data operations and interacting with data to a factory. Make data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.

![pastedimage 9](https://cloud.githubusercontent.com/assets/10474169/10745632/98ebfdae-7c11-11e5-8712-d0310414bd2e.png)

**Directives**
 
- Create one directive per file. Name the file for the directive.
- When manipulating the DOM directly, use a directive. 
- When creating a directive that makes sense as a stand-alone element, allow restrict E (custom element) and optionally restrict A (custom attribute).
- Use controller as syntax with a directive to be consistent with using controller as with view and controller pairings.
- Use bindToController = true when using controller as syntax with a directive when you want to bind the outer scope to the directive's controller's scope.

![pastedimage 10](https://cloud.githubusercontent.com/assets/10474169/10745631/98ebbe70-7c11-11e5-8040-de225a3c4d11.png)


**Manual Annotating for Dependency Injection**
- Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.
Use $inject to manually identify your dependencies for Angular components.

![pastedimage 11](https://cloud.githubusercontent.com/assets/10474169/10745634/98ee4bae-7c11-11e5-9d19-2fda5b23de05.png)

**Startup Logic**
- Inject code into module configuration that must be configured before running the angular app. Ideal candidates include providers and constants.
- Any code that needs to run when an application starts should be declared in a factory, exposed via a function, and injected into the run block.
 
![pastedimage 12](https://cloud.githubusercontent.com/assets/10474169/10745637/98f9a1f2-7c11-11e5-8901-80a8eecfffe9.png)
 
**Module Dependencies**
- The application root module depends on the app specific feature modules and any shared or reusable modules.

![pastedimage 13](https://cloud.githubusercontent.com/assets/10474169/10745638/98f993ce-7c11-11e5-8944-6b08c71af30c.png)

**Application Structure LIFT Principle**
- LIFT is:
- Locating our code is easy
- Identify code at a glance
- Flat structure as long as we can
- Try to stay DRY (Don’t Repeat Yourself) or T-DRY

Folders-by-Feature Structure:
- Create folders named for the feature they represent. When a folder grows to contain more than 7 files, start to consider creating a folder for them. Your threshold may be different, so adjust as needed.

![pastedimage 14](https://cloud.githubusercontent.com/assets/10474169/10745635/98f7e5c4-7c11-11e5-9b4f-52297ff0928e.png)
