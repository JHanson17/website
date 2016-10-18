window.angular.module('main').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    'use strict';
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});

    $urlRouterProvider.otherwise('/home');
    //
    // Now set up the states
    $stateProvider
    	.state('home', {
            url: '/home',
            templateUrl: 'app/components/home/homeView.html'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'app/components/projects/projectsView.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/components/contact/contactView.html'
        })
}]);