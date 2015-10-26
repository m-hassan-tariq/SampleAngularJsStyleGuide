'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Definitions: Declare modules without a variable using the setter syntax.
    angular
        .module('onBoardingApp.home', ['onBoardingApp.home.controllers', 'onBoardingApp.home.services'])
        // Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
        .config(config);

    function config($stateProvider) {
        $stateProvider.state('adminHome', {
            url: '/',
            // Assigning Controllers: When a controller must be paired with a view and either component may be re-used by other controllers or views, define controllers
            // along with their routes. Note: If a View is loaded via another means besides a route, then use the ng-controller="Avengers as vm" syntax
            controller: 'HomeController',
            controllerAs: 'vm',
            templateUrl: '/Scripts/app/modules/home/views/onBoardingApp.home.html',
            // Route Resolve Promises: When a controller depends on a promise to be resolved before the controller is activated,
            // resolve those dependencies in the $routeProvider before the controller logic is executed.
            // If you need to conditionally cancel a route before the controller is activated, use a route resolver.
            resolve: {
                // Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
                getSecondaryCandidateService: getSecondaryCandidateService
            }
        });
    }

    function getSecondaryCandidateService(homeService) {
        return homeService.getAllSecondaryCandidates();
    }

})();
