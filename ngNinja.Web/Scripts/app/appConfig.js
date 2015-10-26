'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Getters: When using a module, avoid using a variable and instead use chaining with the getter syntax.
    angular
        .module('onBoardingApp')
        // Startup Logic Run: Any code that needs to run when an application starts should be declared in a factory or exposed via a function, and
        // injected into the run block.
        // Startup Logic Configuration: Inject code into module configuration that must be configured before running
        // the angular app. Ideal candidates include providers and constants

        // Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .config(configure)
        .run(runBlock);

    // UnSafe from Minification: Avoid using the shortcut syntax of declaring dependencies without using a minification-safe approach.
    // Use $inject to manually identify your dependencies for Angular components.
    runBlock.$inject = ['$state'];

    function runBlock($state) {
        $state.go('adminHome');
    };

    function configure() {

    };

})();
