'use strict';
// Single Responsibility: Define 1 component per file.
// JavaScript Closures: Wrap Angular components in an Immediately Invoked Function Expression (IIFE).

(function () {

    // Definitions: Declare modules without a variable using the setter syntax.
    angular
        .module('onBoardingApp.candidate', [
            'onBoardingApp.candidate.services',
            'onBoardingApp.candidate.controllers'
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider.state('allCandidates', {
            url: '/candidates',
            // Assigning Controllers: When a controller must be paired with a view and either component may be re-used by other controllers or views, define controllers
            // along with their routes. Note: If a View is loaded via another means besides a route, then use the ng-controller="Avengers as vm" syntax
            controller: 'CandidateController',
            controllerAs: 'vm',
            templateUrl: '/Scripts/app/modules/candidate/views/onBoardingApp.candidate.html',
            // Route Resolve Promises: When a controller depends on a promise to be resolved before the controller is activated,
            // resolve those dependencies in the $routeProvider before the controller logic is executed.
            // If you need to conditionally cancel a route before the controller is activated, use a route resolver.
            resolve: {
                // Named vs Anonymous Functions: Use named functions instead of passing an anonymous function in as a callback.
                getCandidateService: getCandidateService
            }
        });
    }

    function getCandidateService(candidateService) {
        return candidateService.getAllCandidates();
    }

})();
